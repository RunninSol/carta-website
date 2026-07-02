"use client";

import { useEffect, useState } from "react";
import type {
  ItineraryItem,
  MapProvider,
  Pick,
  TripDocument,
} from "../lib/types";
import {
  ITEM_TYPE_LABEL,
  directionsUrl,
  flightStatusUrl,
  formatTimeRange,
  mapsLabel,
  priceLevel,
} from "../lib/trip";
import {
  CloseIcon,
  DirectionsIcon,
  DocIcon,
  ItemTypeIcon,
  PhoneIcon,
} from "./icons";

type Selection =
  | { kind: "item"; item: ItineraryItem }
  | { kind: "pick"; pick: Pick };

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export default function DetailSheet({
  selection,
  provider,
  documents,
  categoryLabel,
  driverPhrase,
  onRemove,
  onClose,
}: {
  selection: Selection;
  provider: MapProvider;
  documents: TripDocument[];
  categoryLabel: (id: string) => string;
  driverPhrase?: string;
  onRemove?: () => void;
  onClose: () => void;
}) {
  const [driverMode, setDriverMode] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const isItem = selection.kind === "item";
  const item = isItem ? selection.item : null;
  const pick = !isItem ? selection.pick : null;

  const kicker = item
    ? ITEM_TYPE_LABEL[item.type]
    : categoryLabel(pick!.category);
  const title = item ? item.title : pick!.name;
  const subtitle = item ? item.subtitle : pick!.subtitle;
  const address = item ? item.address : pick!.address;
  const lat = item ? item.lat : pick!.lat;
  const lng = item ? item.lng : pick!.lng;
  const phone = item ? item.contactPhone : pick!.phone;
  const note = item ? item.personalNote : pick!.note;
  const price = priceLevel(item ? item.priceLevel : pick!.priceLevel);
  const rating = item ? item.rating : pick!.rating;
  const description = item ? null : pick!.description;
  const hours = item ? null : pick!.hours;
  const season = item ? null : pick!.season;
  const imageUrl = item ? item.imageUrl : pick!.imageUrl;
  const placeName = item ? item.locationName ?? item.title : pick!.name;
  const timeRange = item ? formatTimeRange(item.startTime, item.endTime) : null;

  // "Show the driver": the address, huge, with a local-language ask.
  if (driverMode && address) {
    return (
      <div className="driver-mode" onClick={() => setDriverMode(false)}>
        <p className="driver-phrase">
          {driverPhrase ?? "Please take me here:"}
        </p>
        <p className="driver-name">{placeName}</p>
        <p className="driver-address">{address}</p>
        <p className="driver-hint">Tap anywhere to go back</p>
      </div>
    );
  }

  const itemDocs = item?.documentRefs
    ? documents.filter((d) => item.documentRefs!.includes(d.id))
    : [];

  const detailEntries = item?.details
    ? Object.entries(item.details).filter(
        ([, v]) => v !== null && v !== undefined && v !== ""
      )
    : [];

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
          {imageUrl && (
            <div
              className="sheet-image"
              style={{ backgroundImage: `url("${imageUrl}")` }}
              role="img"
              aria-label={title}
            />
          )}
          <div className="sheet-head">
            <span className="sheet-kicker">
              {item && (
                <span className="sheet-kicker-icon">
                  <ItemTypeIcon type={item.type} />
                </span>
              )}
              {kicker}
              {item && item.status !== "confirmed" && (
                <span className={`status-tag ${item.status}`}>{item.status}</span>
              )}
            </span>
            <h2 className="sheet-title">{title}</h2>
            {subtitle && <p className="sheet-subtitle">{subtitle}</p>}
          </div>

          {(timeRange || address) && (
            <div className="sheet-facts">
              {timeRange && (
                <div className="sheet-fact">
                  <span className="fact-label">Time</span>
                  <span className="fact-value">{timeRange}</span>
                </div>
              )}
              {address && (
                <div className="sheet-fact">
                  <span className="fact-label">Where</span>
                  <span className="fact-value">{address}</span>
                </div>
              )}
            </div>
          )}

          {(price || rating || hours || season) && (
            <div className="meta-row">
              {hours && <span className="meta-chip">{hours}</span>}
              {price && <span className="meta-chip price">{price}</span>}
              {rating && <span className="meta-chip">{rating.toFixed(1)} rating</span>}
              {season && <span className="meta-chip season">{season}</span>}
            </div>
          )}

          {description && <p className="sheet-desc">{description}</p>}

          {item?.confirmationCode && (
            <div className="confirm-row">
              <span className="confirm-label">Confirmation</span>
              <span className="confirm-code">{item.confirmationCode}</span>
            </div>
          )}

          {detailEntries.length > 0 && (
            <div className="detail-grid">
              {detailEntries.map(([k, v]) => (
                <div className="detail-cell" key={k}>
                  <span className="detail-key">{k}</span>
                  <span className="detail-val">{String(v)}</span>
                </div>
              ))}
            </div>
          )}

          {note && (
            <div className="note sheet-note">
              <span className="note-label">What I would tell you</span>
              <p>{note}</p>
            </div>
          )}

          {item?.contactName && item?.contactPhone && (
            <div className="sheet-contact">
              <span className="fact-label">{item.contactName}</span>
              <a className="contact-inline" href={telHref(item.contactPhone)}>
                {item.contactPhone}
              </a>
            </div>
          )}

          {itemDocs.length > 0 && (
            <div className="sheet-docs">
              <span className="docs-label">Documents</span>
              {itemDocs.map((d) => (
                <a
                  key={d.id}
                  className="doc-link"
                  href={`/${d.fileUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DocIcon />
                  {d.label}
                </a>
              ))}
            </div>
          )}

          <div className="sheet-actions">
            {phone && (
              <a className="action-btn" href={telHref(phone)}>
                <PhoneIcon />
                Call
              </a>
            )}
            {lat != null && lng != null && (
              <a
                className="action-btn primary"
                href={directionsUrl(provider, lat, lng, title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DirectionsIcon />
                {mapsLabel(provider)}
              </a>
            )}
            {item?.flightNumber && (
              <a
                className="action-btn"
                href={flightStatusUrl(item.flightNumber)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live flight status
              </a>
            )}
            {address && (
              <button
                type="button"
                className="action-btn"
                onClick={() => setDriverMode(true)}
              >
                Show the driver
              </button>
            )}
          </div>

          {onRemove && (
            <button type="button" className="util-btn" onClick={onRemove}>
              Remove from your plans
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
