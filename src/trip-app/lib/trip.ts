import type {
  ContactInfo,
  ItemType,
  ItineraryItem,
  MapProvider,
  TripConfig,
  TripData,
} from "./types";

// Carta is reachable in every app, even if a trip.json forgets to say so.
// A trip.json can override any of these, but never silently drop them.
export const DEFAULT_CONTACT: ContactInfo = {
  whatsapp: "13238541678",
  email: "gabe@travelbycarta.com",
  phoneLabel: "Gabe",
};

// ── Trip loading ─────────────────────────────────────────────
// One deployment serves every client. Each client's guide lives at
// /public/trips/<slug>.json and is reached at carta.app/<slug>
// (or ?trip=<slug>). No slug falls back to /public/trip.json, so a
// dedicated per-client deployment still works unchanged.
//
// Slugs are lowercase letters, digits, and hyphens. Make them
// unguessable: "aspen-paris-8f3k29q7", not "paris".

const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,80}$/;

export function tripSlugFromLocation(loc: Location = window.location): string | null {
  const q = new URLSearchParams(loc.search).get("trip");
  if (q && SLUG_RE.test(q)) return q;
  const seg = loc.pathname.split("/").filter(Boolean)[0];
  if (seg && SLUG_RE.test(seg)) return seg;
  return null;
}

// Load the client's trip at runtime. Edit the JSON, refresh, done.
export async function loadTrip(slug?: string | null): Promise<TripData> {
  const path = slug ? `/trips/${slug}.json` : `/trip.json`;
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Could not load trip (${res.status})`);
  const trip = (await res.json()) as TripData;
  trip.config.contact = { ...DEFAULT_CONTACT, ...(trip.config.contact ?? {}) };
  trip.essentials ??= [];
  return trip;
}

// Directions hand off to the native maps app. Never route in-app.
export function directionsUrl(
  provider: MapProvider,
  lat: number,
  lng: number,
  label?: string
): string {
  const q = encodeURIComponent(label ?? "");
  switch (provider) {
    case "naver":
      // Google Maps does not work properly in South Korea.
      return `https://map.naver.com/v5/directions/-/~/${lng},${lat}`;
    case "apple":
      return `https://maps.apple.com/?daddr=${lat},${lng}${
        label ? `&q=${q}` : ""
      }`;
    case "google":
    default:
      return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }
}

export function mapsLabel(provider: MapProvider): string {
  if (provider === "naver") return "Naver Map";
  if (provider === "apple") return "Apple Maps";
  return "Google Maps";
}

// ── Itinerary type presentation ──────────────────────────────
export const ITEM_TYPE_LABEL: Record<ItemType, string> = {
  flight: "Flight",
  transfer: "Transfer",
  lodging: "Stay",
  dining: "Dining",
  activity: "Activity",
  note: "Note",
};

// Pin/timeline color per itinerary type.
export const TYPE_COLORS: Record<ItemType, string> = {
  flight: "#5F7A8C",
  transfer: "#8C8579",
  lodging: "#C9A84C",
  dining: "#B5654A",
  activity: "#7A9A6A",
  note: "#9B6B9E",
};

const priceMap: Record<number, string> = {
  1: "$",
  2: "$$",
  3: "$$$",
  4: "$$$$",
};

// Numbers render as $ signs; strings pass through untouched so a
// trip can speak its own currency ("€€", "KRW KRW").
export function priceLevel(level?: number | string | null): string | null {
  if (!level) return null;
  if (typeof level === "string") return level;
  return priceMap[level] ?? null;
}

// ── Time formatting ──────────────────────────────────────────
// Times carry an offset in the ISO string, so render in the trip's
// local time by reading the offset directly rather than the viewer's zone.
export function formatTime(iso?: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  // Pull the offset the string was written with (e.g. +02:00).
  const m = iso.match(/([+-]\d{2}):?(\d{2})$/);
  let date = d;
  if (m) {
    const offsetMin = (m[1].startsWith("-") ? -1 : 1) *
      (parseInt(m[1].slice(1), 10) * 60 + parseInt(m[2], 10));
    // Shift to UTC then apply the trip offset for a stable local wall clock.
    date = new Date(d.getTime() + offsetMin * 60000);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "UTC",
    });
  }
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatTimeRange(
  start?: string | null,
  end?: string | null
): string | null {
  const s = formatTime(start);
  const e = formatTime(end);
  if (s && e) return `${s} to ${e}`;
  return s;
}

// ── Sorting ──────────────────────────────────────────────────
export function sortItems(items: ItineraryItem[]): ItineraryItem[] {
  return [...items].sort((a, b) => {
    const ai = a.sortIndex ?? 0;
    const bi = b.sortIndex ?? 0;
    if (a.startTime && b.startTime) {
      const t = a.startTime.localeCompare(b.startTime);
      if (t !== 0) return t;
    }
    return ai - bi;
  });
}

// Short weekday + day, e.g. "Wed 8". Reads the date only, no zone drift.
export function formatDayLabel(isoDate: string): { weekday: string; day: string } {
  const [y, m, d] = isoDate.split("-").map((n) => parseInt(n, 10));
  const date = new Date(Date.UTC(y, m - 1, d));
  return {
    weekday: date.toLocaleDateString("en-US", {
      weekday: "short",
      timeZone: "UTC",
    }),
    day: String(d),
  };
}

// ── Today view ───────────────────────────────────────────────
// Today's date in the trip's timezone (falls back to the device zone).
export function todayISO(timezone?: string): string {
  try {
    return new Date().toLocaleDateString("en-CA", {
      timeZone: timezone,
    });
  } catch {
    return new Date().toLocaleDateString("en-CA");
  }
}

// The next scheduled item still ahead of the current moment. Item times
// carry a UTC offset, so absolute comparison is timezone-safe.
export function nextUpToday(
  items: ItineraryItem[],
  dayDate: string,
  now: Date = new Date()
): { item: ItineraryItem; leaveBy: string | null } | null {
  const upcoming = sortItems(
    items.filter((i) => i.dayDate === dayDate && i.startTime)
  ).find((i) => {
    const start = new Date(i.startTime as string);
    return !isNaN(start.getTime()) && start.getTime() > now.getTime();
  });
  if (!upcoming) return null;
  let leaveBy: string | null = null;
  if (upcoming.leadTimeMinutes && upcoming.startTime) {
    const m = upcoming.startTime.match(/([+-]\d{2}):?(\d{2})$/);
    const start = new Date(upcoming.startTime);
    const leave = new Date(start.getTime() - upcoming.leadTimeMinutes * 60000);
    // Re-render the leave-by moment in the trip's offset, same trick
    // as formatTime.
    const iso = m
      ? new Date(
          leave.getTime() +
            (m[1].startsWith("-") ? -1 : 1) *
              (parseInt(m[1].slice(1), 10) * 60 + parseInt(m[2], 10)) *
              60000
        ).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "UTC",
        })
      : leave.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    leaveBy = iso;
  }
  return { item: upcoming, leaveBy };
}

export function formatFullDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map((n) => parseInt(n, 10));
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// ── Cover countdown ──────────────────────────────────────────
// "43 days to go" before the trip, "Day 2 of 4" during it, nothing after.
export function countdownLabel(config: TripConfig): string | null {
  if (!config.startDate) return null;
  const today = todayISO(config.timezone);
  const toUTC = (iso: string) => {
    const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
    return Date.UTC(y, m - 1, d);
  };
  const day = 86400000;
  const diff = Math.round((toUTC(config.startDate) - toUTC(today)) / day);
  if (diff > 1) return `${diff} days to go`;
  if (diff === 1) return "Tomorrow";
  if (config.endDate) {
    const total = Math.round((toUTC(config.endDate) - toUTC(config.startDate)) / day) + 1;
    const n = -diff + 1;
    if (n >= 1 && n <= total) return `Day ${n} of ${total}`;
  } else if (diff === 0) {
    return "Today";
  }
  return null;
}

// ── Downloads (calendar, contact card) ───────────────────────
export function downloadFile(name: string, mime: string, content: string): void {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function icsEscape(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function icsUTC(iso: string): string | null {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  return d
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

// Every timed itinerary item as a calendar event. Untimed items are
// skipped; the guide itself is the source of truth for those.
export function buildTripICS(trip: TripData): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Carta//Trip//EN",
    "CALSCALE:GREGORIAN",
    `X-WR-CALNAME:${icsEscape(`${trip.config.title} with Carta`)}`,
  ];
  const stamp = icsUTC(new Date().toISOString());
  for (const item of sortItems(trip.itinerary)) {
    if (!item.startTime) continue;
    const start = icsUTC(item.startTime);
    if (!start) continue;
    const end =
      (item.endTime && icsUTC(item.endTime)) ||
      icsUTC(new Date(new Date(item.startTime).getTime() + 60 * 60000).toISOString());
    const descParts: string[] = [];
    if (item.confirmationCode) descParts.push(`Confirmation: ${item.confirmationCode}`);
    if (item.personalNote) descParts.push(item.personalNote);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${item.id}@travelbycarta.com`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${icsEscape(item.title)}`,
      ...(item.address || item.locationName
        ? [`LOCATION:${icsEscape(item.address ?? item.locationName ?? "")}`]
        : []),
      ...(descParts.length ? [`DESCRIPTION:${icsEscape(descParts.join("\n"))}`] : []),
      "END:VEVENT"
    );
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n") + "\r\n";
}

// Gabe as a contact card the client can save to their phone.
export function contactVCard(contact: ContactInfo): string {
  const name = contact.phoneLabel ?? "Gabe";
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${name} (Carta Travel)`,
    `N:;${name};;;`,
    "ORG:Carta Travel",
    "TITLE:Travel advisor",
  ];
  if (contact.whatsapp) lines.push(`TEL;TYPE=CELL:+${contact.whatsapp}`);
  if (contact.email) lines.push(`EMAIL:${contact.email}`);
  lines.push("URL:https://travelbycarta.com", "END:VCARD");
  return lines.join("\r\n") + "\r\n";
}

// Live flight status without an API: link out by flight code.
export function flightStatusUrl(flightNumber: string): string {
  return `https://www.flightaware.com/live/flight/${encodeURIComponent(
    flightNumber.replace(/\s+/g, "")
  )}`;
}
