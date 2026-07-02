"use client";

import { useEffect } from "react";
import type { Essential, MapProvider } from "../lib/types";
import { directionsUrl, mapsLabel } from "../lib/trip";
import { CloseIcon, DirectionsIcon, PhoneIcon } from "./icons";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

// The screen for the bad moment: emergency number, pharmacy, hospital,
// embassy, the hotel address for a taxi driver. Big, plain, tappable.
export default function Essentials({
  essentials,
  provider,
  onClose,
}: {
  essentials: Essential[];
  provider: MapProvider;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

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
            <span className="sheet-kicker">Essentials</span>
            <h2 className="sheet-title">If you need something</h2>
            <p className="sheet-subtitle">
              Saved here so you are not searching in the moment. And you can
              always text me.
            </p>
          </div>

          <div className="essentials-list">
            {essentials.map((e, i) => (
              <div className="essential-row" key={e.id ?? i}>
                <div className="essential-main">
                  <span className="essential-label">{e.label}</span>
                  {e.value && <span className="essential-value">{e.value}</span>}
                  {e.address && <p className="essential-address">{e.address}</p>}
                  {e.note && <p className="essential-note">{e.note}</p>}
                </div>
                <div className="essential-actions">
                  {e.phone && (
                    <a className="action-btn" href={telHref(e.phone)}>
                      <PhoneIcon />
                      {e.phone}
                    </a>
                  )}
                  {e.lat != null && e.lng != null && (
                    <a
                      className="action-btn primary"
                      href={directionsUrl(provider, e.lat, e.lng, e.value ?? e.label)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DirectionsIcon />
                      {mapsLabel(provider)}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
