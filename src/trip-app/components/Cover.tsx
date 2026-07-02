"use client";

import type { TripConfig } from "../lib/types";
import { countdownLabel } from "../lib/trip";
import { CompassMark } from "./icons";

export default function Cover({
  config,
  onEnter,
}: {
  config: TripConfig;
  onEnter: () => void;
}) {
  const hero = config.coverImageUrl;
  const countdown = countdownLabel(config);
  return (
    <div className="cover">
      <div
        className="cover-hero"
        style={
          hero
            ? { backgroundImage: `url("${hero}")` }
            : undefined
        }
      >
        <div className="cover-scrim" />
        <div className="cover-inner">
          <div className="wordmark cover-wordmark">
            <CompassMark />
            <span className="wordmark-text">CARTA</span>
          </div>

          <div className="cover-body">
            <p className="cover-kicker">{config.destination}</p>
            <h1 className="cover-title">{config.title}</h1>
            {config.dates && <p className="cover-dates">{config.dates}</p>}
            {countdown && <p className="cover-countdown">{countdown}</p>}
            <p className="cover-note">{config.coverNote}</p>
            <button type="button" className="cover-enter" onClick={onEnter}>
              Open your guide
            </button>
            <p className="cover-sign">For {config.clientName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
