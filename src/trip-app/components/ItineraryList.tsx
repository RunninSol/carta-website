"use client";

import type { ItineraryItem, TripDay } from "../lib/types";
import { formatDayLabel, formatFullDate, formatTime, sortItems } from "../lib/trip";
import { ItemTypeIcon } from "./icons";

export default function ItineraryList({
  days,
  items,
  activeDay,
  onSelectDay,
  onOpenItem,
  onAddEntry,
  selectedId,
  listRef,
}: {
  days: TripDay[];
  items: ItineraryItem[];
  activeDay: string;
  onSelectDay: (date: string) => void;
  onOpenItem: (id: string) => void;
  onAddEntry: () => void;
  selectedId: string | null;
  listRef: React.RefObject<HTMLDivElement>;
}) {
  const day = days.find((d) => d.date === activeDay) ?? days[0];
  const dayItems = sortItems(items.filter((i) => i.dayDate === activeDay));

  return (
    <>
      <nav className="day-strip" aria-label="Days">
        {days.map((d, idx) => {
          const { weekday, day: dayNum } = formatDayLabel(d.date);
          return (
            <button
              key={d.date}
              type="button"
              className={d.date === activeDay ? "day-btn active" : "day-btn"}
              onClick={() => onSelectDay(d.date)}
            >
              <span className="day-btn-index">Day {idx + 1}</span>
              <span className="day-btn-date">
                {weekday} {dayNum}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="list" ref={listRef}>
        <div className="day-header">
          <p className="day-full-date">{formatFullDate(day.date)}</p>
          <h2 className="day-title">{day.title}</h2>
          {day.summary && <p className="day-summary">{day.summary}</p>}
        </div>

        {dayItems.length === 0 ? (
          <p className="empty">
            Nothing scheduled here yet. Confirmations land as I book them.
          </p>
        ) : (
          <div className="timeline">
            {dayItems.map((item) => {
              const time = formatTime(item.startTime);
              return (
                <article
                  key={item.id}
                  data-item-id={item.id}
                  className={
                    selectedId === item.id ? "tl-item selected" : "tl-item"
                  }
                  onClick={() => onOpenItem(item.id)}
                >
                  <div className="tl-rail">
                    <span className="tl-time">{time ?? ""}</span>
                    <span className={`tl-dot type-${item.type}`}>
                      <ItemTypeIcon type={item.type} />
                    </span>
                  </div>
                  <div className="tl-card">
                    <div className="tl-card-head">
                      <h3 className="tl-title">{item.title}</h3>
                      {item.status !== "confirmed" && (
                        <span className={`status-tag ${item.status}`}>
                          {item.status}
                        </span>
                      )}
                    </div>
                    {item.subtitle && (
                      <p className="tl-subtitle">{item.subtitle}</p>
                    )}
                    {item.personalNote && (
                      <p className="tl-note">{item.personalNote}</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <button type="button" className="util-btn" onClick={onAddEntry}>
          Add something of your own to this day
        </button>
      </div>
    </>
  );
}
