"use client";

import { useEffect, useState } from "react";
import type { TripData } from "./lib/types";
import { loadTrip } from "./lib/trip";
import Cover from "./components/Cover";
import Guide from "./components/Guide";
import "leaflet/dist/leaflet.css";
import "./trip-app.css";

type LoadState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; trip: TripData };

export default function TripApp({ slug }: { slug: string }) {
  const [state, setState] = useState<LoadState>({ status: "loading" });
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    let alive = true;
    loadTrip(slug)
      .then((trip) => {
        if (alive) setState({ status: "ready", trip });
      })
      .catch((err) => {
        if (alive)
          setState({ status: "error", message: err?.message ?? "Load failed" });
      });
    return () => {
      alive = false;
    };
  }, [slug]);

  // Service worker for offline read mode
  useEffect(() => {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  if (state.status === "loading") {
    return (
      <div className="boot">
        <div className="boot-mark">CARTA</div>
        <p className="boot-text">Setting your table.</p>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="boot">
        <div className="boot-mark">CARTA</div>
        <p className="boot-text">
          I could not load this trip. {state.message}
        </p>
      </div>
    );
  }

  if (!entered) {
    return <Cover config={state.trip.config} onEnter={() => setEntered(true)} />;
  }

  return <Guide trip={state.trip} />;
}
