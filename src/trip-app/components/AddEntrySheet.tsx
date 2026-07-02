"use client";

import { useEffect, useState } from "react";
import type { TripDay } from "../lib/types";
import { OWN_ID_PREFIX, type OwnEntry } from "../lib/plans";
import { formatDayLabel } from "../lib/trip";
import { CloseIcon } from "./icons";

// Free-form additions to the client's own day. No place needed:
// a run, a nap, a neighborhood to wander.
export default function AddEntrySheet({
  days,
  defaultDay,
  onAdd,
  onClose,
}: {
  days: TripDay[];
  defaultDay: string;
  onAdd: (entry: OwnEntry) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [dayDate, setDayDate] = useState(defaultDay || days[0]?.date || "");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

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
            <span className="sheet-kicker">Yours</span>
            <h2 className="sheet-title">Add something of your own</h2>
            <p className="sheet-subtitle">
              A run, a nap, a street you want to wander. Your day, your call.
            </p>
          </div>

          <div className="plan-field">
            <span className="fact-label">What is it</span>
            <input
              className="plan-time place-search"
              type="text"
              placeholder="Morning run along the river"
              value={title}
              autoFocus
              maxLength={80}
              onChange={(e) => setTitle(e.target.value)}
            />
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
            <span className="fact-label">Around what time (optional)</span>
            <input
              className="plan-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="plan-field">
            <span className="fact-label">A note to yourself (optional)</span>
            <textarea
              className="plan-textarea"
              rows={2}
              maxLength={280}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="sheet-actions plan-final">
            <button
              type="button"
              className="action-btn primary"
              disabled={!title.trim() || !dayDate}
              onClick={() =>
                onAdd({
                  id: `${OWN_ID_PREFIX}${Date.now()}`,
                  dayDate,
                  title: title.trim(),
                  time: time || undefined,
                  note: note.trim() || undefined,
                })
              }
            >
              Add to my day
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
