// Client-added plans. When a client saves a pick, they can give it a
// day and a time; it then lives in their itinerary alongside what Gabe
// booked. Stored in localStorage on their device; the trip.json never
// changes.
import type { Category, ItineraryItem, Pick } from "./types";

export interface PlannedPick {
  pickId: string;
  dayDate: string; // matches a TripDay.date
  time?: string; // "19:30", wall clock
  reservation?: boolean;
}

export const PLAN_ID_PREFIX = "plan-";

const DINING_HINTS = [
  "restaurant",
  "dining",
  "food",
  "bar",
  "bakery",
  "coffee",
  "cafe",
  "brunch",
];

// Whether a category is food-and-drink, so the flow can ask about
// reservations. Works across trips: matches on the category id and label.
export function isDiningCategory(
  categoryId: string,
  categories: Category[]
): boolean {
  const label = categories.find((c) => c.id === categoryId)?.label ?? "";
  const hay = `${categoryId} ${label}`.toLowerCase();
  return DINING_HINTS.some((h) => hay.includes(h));
}

export function plansKey(clientName: string, title: string): string {
  return `carta-plans-${clientName}-${title}`.replace(/\s+/g, "-");
}

export function loadPlans(key: string): PlannedPick[] {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePlans(key: string, plans: PlannedPick[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(plans));
  } catch {
    // private mode
  }
}

// ── Custom picks ─────────────────────────────────────────────
// Places the client found through search that are not in Gabe's list.
// Stored on their device, shown under the "Yours" category.
export const CUSTOM_ID_PREFIX = "custom-";
export const CUSTOM_CATEGORY = "custom";

export function customKey(clientName: string, title: string): string {
  return `carta-custom-${clientName}-${title}`.replace(/\s+/g, "-");
}

export function loadCustomPicks(key: string): Pick[] {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCustomPicks(key: string, picks: Pick[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(picks));
  } catch {
    // private mode
  }
}

// ── Own entries ──────────────────────────────────────────────
// Free-form things the client puts on their own day: a run, a nap,
// a market to wander. No place required. Stored on their device.
export const OWN_ID_PREFIX = "own-";

export interface OwnEntry {
  id: string; // own-<timestamp>
  dayDate: string;
  title: string;
  time?: string; // "08:00", wall clock
  note?: string;
}

export function entriesKey(clientName: string, title: string): string {
  return `carta-own-${clientName}-${title}`.replace(/\s+/g, "-");
}

export function loadEntries(key: string): OwnEntry[] {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveEntries(key: string, entries: OwnEntry[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(entries));
  } catch {
    // private mode
  }
}

export function entryToItem(entry: OwnEntry): ItineraryItem {
  return {
    id: entry.id,
    dayDate: entry.dayDate,
    type: "note",
    status: "confirmed",
    title: entry.title,
    subtitle: "Added by you",
    startTime: entry.time ? `${entry.dayDate}T${entry.time}:00` : null,
    personalNote: entry.note ?? null,
  };
}

// A plan rendered as an itinerary item. Confirmed if they hold a
// reservation, otherwise an idea.
export function plannedToItem(
  plan: PlannedPick,
  pick: Pick,
  dining: boolean
): ItineraryItem {
  return {
    id: `${PLAN_ID_PREFIX}${plan.pickId}`,
    dayDate: plan.dayDate,
    type: dining ? "dining" : "activity",
    status: plan.reservation ? "confirmed" : "idea",
    title: pick.name,
    subtitle: "Added by you",
    startTime: plan.time ? `${plan.dayDate}T${plan.time}:00` : null,
    address: pick.address ?? null,
    lat: pick.lat ?? null,
    lng: pick.lng ?? null,
    contactPhone: pick.phone ?? null,
    personalNote: pick.note ?? null,
    imageUrl: pick.imageUrl ?? null,
  };
}
