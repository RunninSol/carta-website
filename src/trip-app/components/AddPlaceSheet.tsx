"use client";

import { useEffect, useRef, useState } from "react";
import type { ContactInfo, Pick } from "../lib/types";
import { CUSTOM_CATEGORY, CUSTOM_ID_PREFIX } from "../lib/plans";
import { CloseIcon, WhatsAppIcon } from "./icons";

// Search any place and add it to the guide. Powered by Photon
// (photon.komoot.io), a free OpenStreetMap geocoder: no key, no cost.
// Results are biased toward the trip's map center.

interface PlaceResult {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface PhotonFeature {
  geometry: { coordinates: [number, number] };
  properties: {
    osm_id?: number;
    name?: string;
    housenumber?: string;
    street?: string;
    district?: string;
    city?: string;
    country?: string;
  };
}

function toResult(f: PhotonFeature, i: number): PlaceResult | null {
  const p = f.properties;
  if (!p.name) return null;
  const addr = [
    [p.housenumber, p.street].filter(Boolean).join(" "),
    p.district,
    p.city,
    p.country,
  ]
    .filter(Boolean)
    .join(", ");
  return {
    id: `${p.osm_id ?? i}`,
    name: p.name,
    address: addr,
    lat: f.geometry.coordinates[1],
    lng: f.geometry.coordinates[0],
  };
}

export default function AddPlaceSheet({
  center,
  tripTitle,
  contact,
  onSelect,
  onClose,
}: {
  center: [number, number];
  tripTitle: string;
  contact: ContactInfo;
  onSelect: (pick: Pick) => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PlaceResult[]>([]);
  const [searching, setSearching] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Debounced search against Photon, biased to the trip's city.
  useEffect(() => {
    if (query.trim().length < 3) {
      setResults([]);
      setSearching(false);
      return;
    }
    setSearching(true);
    const t = setTimeout(async () => {
      abortRef.current?.abort();
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      try {
        const url =
          `https://photon.komoot.io/api/?q=${encodeURIComponent(query.trim())}` +
          `&limit=6&lat=${center[0]}&lon=${center[1]}`;
        const res = await fetch(url, { signal: ctrl.signal });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { features: PhotonFeature[] };
        const seen = new Set<string>();
        const out: PlaceResult[] = [];
        const features = Array.from(data.features);
        for (let i = 0; i < features.length; i++) {
          const f = features[i];
          const r = toResult(f, i);
          if (r && !seen.has(`${r.name}|${r.address}`)) {
            seen.add(`${r.name}|${r.address}`);
            out.push(r);
          }
        }
        setResults(out);
      } catch {
        // aborted or offline; keep whatever is showing
      } finally {
        setSearching(false);
      }
    }, 350);
    return () => clearTimeout(t);
  }, [query, center]);

  const waText = encodeURIComponent(
    `Hi Gabe, could you add ${query.trim() || "a place"} to my ${tripTitle} guide?`
  );

  return (
    <div className="sheet-overlay" onClick={onClose}>
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet-grip" />
        <button
          type="button"
          className="sheet-close"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        <div className="sheet-scroll">
          <div className="sheet-head">
            <span className="sheet-kicker">Your addition</span>
            <h2 className="sheet-title">Add your own place</h2>
            <p className="sheet-subtitle">
              Somewhere you heard about that is not on my list yet.
            </p>
          </div>

          <div className="plan-field">
            <input
              className="plan-time place-search"
              type="search"
              placeholder="Name of the place"
              value={query}
              autoFocus
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {searching && <p className="plan-hint">Looking it up.</p>}

          {!searching && results.length > 0 && (
            <div className="place-results">
              {results.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  className="place-result"
                  onClick={() =>
                    onSelect({
                      id: `${CUSTOM_ID_PREFIX}${Date.now()}`,
                      name: r.name,
                      category: CUSTOM_CATEGORY,
                      address: r.address || null,
                      lat: r.lat,
                      lng: r.lng,
                    })
                  }
                >
                  <span className="place-name">{r.name}</span>
                  {r.address && (
                    <span className="place-address">{r.address}</span>
                  )}
                </button>
              ))}
            </div>
          )}

          {!searching && query.trim().length >= 3 && results.length === 0 && (
            <p className="plan-hint">Nothing under that name nearby.</p>
          )}

          {contact.whatsapp && (
            <div className="place-fallback">
              <p className="plan-hint">
                Can&apos;t find it? Tell me and I will add it properly, with a note.
              </p>
              <a
                className="action-btn primary"
                href={`https://wa.me/${contact.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Text me the place
              </a>
            </div>
          )}

          <p className="place-credit">Search by OpenStreetMap</p>
        </div>
      </div>
    </div>
  );
}
