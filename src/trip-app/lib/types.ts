// ─────────────────────────────────────────────────────────────
// Carta trip data shape. One trip.json per client drives the app.
// Two content layers: `itinerary` (the scheduled spine, per day) and
// `picks` (recommendations, unscheduled). The client sees everything.
// ─────────────────────────────────────────────────────────────

export type MapProvider = "google" | "apple" | "naver";

export interface Category {
  id: string;
  label: string;
  color: string;
}

export interface ContactInfo {
  whatsapp?: string; // digits only, e.g. "13238541678"
  email?: string;
  phoneLabel?: string; // who the client is texting, e.g. "Gabe"
}

export interface MapConfig {
  center: [number, number];
  zoom: number;
}

// Optional multi-city support (e.g. Seoul / Busan). When a trip has
// two or more areas, the guide shows an area toggle, the map recenters
// per area, and picks with an `area` id filter to the active one.
export interface Area {
  id: string;
  label: string;
  center: [number, number];
  zoom: number;
}

export interface TripConfig {
  clientName: string;
  title: string; // short trip title, e.g. "Paris"
  destination: string; // e.g. "Paris, France"
  dates: string; // display string, e.g. "October 8 to 11, 2026"
  startDate?: string; // ISO date
  endDate?: string; // ISO date
  timezone?: string;
  coverNote: string; // first person, warm
  coverImageUrl?: string | null;
  contact: ContactInfo;
  mapProvider: MapProvider;
  map: MapConfig;
  areas?: Area[];
  categories: Category[];
  // "Show the driver" phrase in the local language, e.g.
  // "Pouvez-vous m'emmener ici ?" Falls back to English when absent.
  driverPhrase?: string;
}

export interface TripDay {
  date: string; // ISO date, matches ItineraryItem.dayDate
  title: string;
  summary?: string;
}

// Itinerary item types. `note` is a no-location text block.
export type ItemType =
  | "flight"
  | "transfer"
  | "lodging"
  | "dining"
  | "activity"
  | "note";

export type ItemStatus = "confirmed" | "pending" | "idea";

// Free-form per-type details. Rendered as a label/value grid in the sheet.
export type ItemDetails = Record<string, string | number | null | undefined>;

export interface ItineraryItem {
  id: string;
  dayDate: string; // which day this belongs to
  type: ItemType;
  status: ItemStatus;
  title: string;
  subtitle?: string | null;
  startTime?: string | null; // ISO datetime with offset
  endTime?: string | null;
  locationName?: string | null;
  address?: string | null;
  lat?: number | null;
  lng?: number | null;
  confirmationCode?: string | null;
  contactName?: string | null;
  contactPhone?: string | null;
  link?: string | null;
  priceLevel?: number | string | null; // 1-4, or a display string ("€€", "KRW KRW")
  rating?: number | null;
  personalNote?: string | null;
  details?: ItemDetails;
  documentRefs?: string[]; // document ids attached to this item
  sortIndex?: number;
  // Minutes needed to get there. Drives "Leave by" in the Today view.
  leadTimeMinutes?: number | null;
  // IATA flight code, e.g. "AF83". Adds a live-status link (FlightAware).
  flightNumber?: string | null;
  imageUrl?: string | null;
}

// A recommendation. Unscheduled, browsable, favoritable.
export interface Pick {
  id: string;
  name: string;
  category: string; // matches a Category id
  area?: string; // matches an Area id, for multi-city trips
  subtitle?: string | null;
  address?: string | null;
  lat?: number | null;
  lng?: number | null;
  description?: string | null;
  note?: string | null; // "what I would tell you"
  phone?: string | null;
  hours?: string | null;
  priceLevel?: number | string | null; // 1-4, or a display string ("€€", "KRW KRW")
  rating?: number | null;
  season?: string | null; // e.g. "Oct to May weekends"
  imageUrl?: string | null;
}

export interface Contact {
  id?: string;
  name: string;
  role?: string;
  phone?: string;
  note?: string;
}

export interface GuideBlock {
  heading: string;
  body: string;
}

export interface TripDocument {
  id: string;
  label: string;
  fileUrl: string;
  mime?: string;
}

// Emergency and practical info: emergency number, nearest pharmacy,
// hospital, embassy, the hotel's address for a taxi driver.
export interface Essential {
  id?: string;
  label: string; // "Emergency", "Nearest pharmacy"
  value?: string | null; // "112", or the place's name
  phone?: string | null;
  address?: string | null;
  note?: string | null;
  lat?: number | null;
  lng?: number | null;
}

export interface TripData {
  config: TripConfig;
  days: TripDay[];
  itinerary: ItineraryItem[];
  picks: Pick[];
  contacts: Contact[];
  guideBlocks: GuideBlock[];
  documents: TripDocument[];
  essentials?: Essential[];
}
