"use client";

import { useEffect, useState } from "react";
import type { ContactInfo, Pick, TripDay } from "../lib/types";
import type { PlannedPick } from "../lib/plans";
import { formatDayLabel, formatFullDate } from "../lib/trip";
import { CloseIcon, PhoneIcon, WhatsAppIcon } from "./icons";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

// Shown right after a client saves a pick: give it a day and a time,
// and for restaurants, sort out the reservation.
export default function AddToPlanSheet({
  pick,
  days,
  dining,
  contact,
  defaultDay,
  onAdd,
  onClose,
}: {
  pick: Pick;
  days: TripDay[];
  dining: boolean;
  contact: ContactInfo;
  defaultDay: string;
  onAdd: (plan: PlannedPick) => void;
  onClose: () => void;
}) {
  const [dayDate, setDayDate] = useState(defaultDay || days[0]?.date || "");
  const [time, setTime] = useState("");
  const [reservation, setReservation] = useState<boolean | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const waText = encodeURIComponent(
    `Hi Gabe, could you book ${pick.name}${
      dayDate ? ` on ${formatFullDate(dayDate)}` : ""
    }${time ? ` around ${time}` : ""}?`
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
            <span className="sheet-kicker">Saved</span>
            <h2 className="sheet-title">Put it on your plans?</h2>
            <p className="sheet-subtitle">
              Give {pick.name} a day and it lands in your itinerary.
            </p>
          </div>

          <div className="plan-field">
            <span className="fact-label">Which day</span>
            <div className="plan-chips">
              {days.map((d) => {
                const { weekday, day } = formatDayLabel(d.date);
                return (
                  <button
                    key={d.date}
                    type="button"
                    className={dayDate === d.date ? "filter active" : "filter"}
                    onClick={() => setDayDate(d.date)}
                  >
                    {weekday} {day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="plan-field">
            <span className="fact-label">Around what time</span>
            <input
              className="plan-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {dining && (
            <div className="plan-field">
              <span className="fact-label">Do you have a reservation?</span>
              <div className="plan-chips">
                <button
                  type="button"
                  className={reservation === true ? "filter active" : "filter"}
                  onClick={() => setReservation(true)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={reservation === false ? "filter active" : "filter"}
                  onClick={() => setReservation(false)}
                >
                  Not yet
                </button>
              </div>
              {reservation === false && (
                <div className="plan-booking">
                  <p className="plan-hint">
                    Call them directly, or ask me and I will handle it.
                  </p>
                  <div className="sheet-actions">
                    {pick.phone && (
                      <a className="action-btn" href={telHref(pick.phone)}>
                        <PhoneIcon />
                        Call {pick.phone}
                      </a>
                    )}
                    {contact.whatsapp && (
                      <a
                        className="action-btn primary"
                        href={`https://wa.me/${contact.whatsapp}?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon />
                        Ask me to book it
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="sheet-actions plan-final">
            <button
              type="button"
              className="action-btn primary"
              disabled={!dayDate}
              onClick={() =>
                onAdd({
                  pickId: pick.id,
                  dayDate,
                  time: time || undefined,
                  reservation: reservation ?? undefined,
                })
              }
            >
              Add to my plans
            </button>
            <button type="button" className="action-btn" onClick={onClose}>
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
