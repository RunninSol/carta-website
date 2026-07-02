"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Pick, TripData } from "../lib/types";
import {
  TYPE_COLORS,
  buildTripICS,
  downloadFile,
  formatTime,
  nextUpToday,
  sortItems,
  todayISO,
} from "../lib/trip";
import {
  CUSTOM_ID_PREFIX,
  OWN_ID_PREFIX,
  PLAN_ID_PREFIX,
  customKey,
  entriesKey,
  entryToItem,
  isDiningCategory,
  loadCustomPicks,
  loadEntries,
  loadPlans,
  plannedToItem,
  plansKey,
  saveCustomPicks,
  saveEntries,
  savePlans,
  type OwnEntry,
  type PlannedPick,
} from "../lib/plans";
import { useDevice } from "../hooks/useDevice";
import MapView, { type MapPoint } from "./MapView";
import ItineraryList from "./ItineraryList";
import PicksList from "./PicksList";
import DetailSheet from "./DetailSheet";
import AddToPlanSheet from "./AddToPlanSheet";
import AddPlaceSheet from "./AddPlaceSheet";
import AddEntrySheet from "./AddEntrySheet";
import Essentials from "./Essentials";
import { CompassMark, CrossIcon, EmailIcon, WhatsAppIcon } from "./icons";

type View = "itinerary" | "picks";
type Filter = "all" | "favorites" | string;

type Selection =
  | { kind: "item"; id: string }
  | { kind: "pick"; id: string };

export default function Guide({ trip }: { trip: TripData }) {
  const device = useDevice();
  const { config } = trip;

  // A trip can be a scheduled itinerary, a picks-only guide, or both.
  // The toggle only appears when there are two layers to toggle between.
  const areas = config.areas ?? [];
  const hasItinerary = trip.days.length > 0 || trip.itinerary.length > 0;
  const hasPicks =
    trip.picks.length > 0 ||
    trip.guideBlocks.length > 0 ||
    trip.contacts.length > 0;

  const favKey = useMemo(
    () => `carta-favorites-${config.clientName}-${config.title}`.replace(/\s+/g, "-"),
    [config.clientName, config.title]
  );

  // If the client opens the app mid-trip, land them on today.
  const today = todayISO(config.timezone);
  const isTravelDay = trip.days.some((d) => d.date === today);

  const [view, setView] = useState<View>(hasItinerary ? "itinerary" : "picks");
  const [activeDay, setActiveDay] = useState<string>(
    isTravelDay ? today : trip.days[0]?.date ?? ""
  );
  const [activeArea, setActiveArea] = useState<string>(areas[0]?.id ?? "");
  const [essentialsOpen, setEssentialsOpen] = useState(false);

  // Tick each minute so "Up next" and "Leave by" stay current.
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openSel, setOpenSel] = useState<Selection | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(favKey);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? new Set<string>(parsed) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  // Client-added plans: saved picks the client scheduled onto a day.
  const plansStorageKey = useMemo(
    () => plansKey(config.clientName, config.title),
    [config.clientName, config.title]
  );
  const [plans, setPlans] = useState<PlannedPick[]>(() =>
    loadPlans(plansStorageKey)
  );
  const [planningPick, setPlanningPick] = useState<Pick | null>(null);

  useEffect(() => {
    savePlans(plansStorageKey, plans);
  }, [plans, plansStorageKey]);

  // Custom picks: places the client found through search.
  const customStorageKey = useMemo(
    () => customKey(config.clientName, config.title),
    [config.clientName, config.title]
  );
  const [customPicks, setCustomPicks] = useState<Pick[]>(() =>
    loadCustomPicks(customStorageKey)
  );
  const [addPlaceOpen, setAddPlaceOpen] = useState(false);

  useEffect(() => {
    saveCustomPicks(customStorageKey, customPicks);
  }, [customPicks, customStorageKey]);

  // Own entries: free-form things the client puts on their day.
  const entriesStorageKey = useMemo(
    () => entriesKey(config.clientName, config.title),
    [config.clientName, config.title]
  );
  const [ownEntries, setOwnEntries] = useState<OwnEntry[]>(() =>
    loadEntries(entriesStorageKey)
  );
  const [addEntryOpen, setAddEntryOpen] = useState(false);

  useEffect(() => {
    saveEntries(entriesStorageKey, ownEntries);
  }, [ownEntries, entriesStorageKey]);

  // All picks the client sees: Gabe's plus their own. Custom picks get
  // a "Yours" category chip when any exist.
  const allPicks = useMemo(
    () => (customPicks.length ? [...trip.picks, ...customPicks] : trip.picks),
    [trip.picks, customPicks]
  );
  const categories = useMemo(
    () =>
      customPicks.length
        ? [...config.categories, { id: "custom", label: "Yours", color: "#C9A84C" }]
        : config.categories,
    [config.categories, customPicks.length]
  );

  // The itinerary the client sees: Gabe's spine plus their own plans.
  const itinerary = useMemo(() => {
    if (plans.length === 0 && ownEntries.length === 0) return trip.itinerary;
    const byId = new Map(allPicks.map((p) => [p.id, p]));
    const planned = plans.flatMap((pl) => {
      const pick = byId.get(pl.pickId);
      return pick
        ? [
            plannedToItem(
              pl,
              pick,
              isDiningCategory(pick.category, categories)
            ),
          ]
        : [];
    });
    const own = ownEntries.map(entryToItem);
    return [...trip.itinerary, ...planned, ...own];
  }, [trip.itinerary, allPicks, plans, ownEntries, categories]);

  const plannedIds = useMemo(
    () => new Set(plans.map((p) => p.pickId)),
    [plans]
  );

  const todayNext = useMemo(
    () => (isTravelDay ? nextUpToday(itinerary, today, now) : null),
    [isTravelDay, itinerary, today, now]
  );

  const listRef = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    try {
      localStorage.setItem(favKey, JSON.stringify([...favorites]));
    } catch {
      // private mode
    }
  }, [favorites, favKey]);

  const toggleFavorite = useCallback(
    (id: string) => {
      const adding = !favorites.has(id);
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
      if (adding) {
        // Just saved: offer to schedule it, unless it already is.
        if (trip.days.length > 0 && !plans.some((pl) => pl.pickId === id)) {
          const pick = allPicks.find((p) => p.id === id);
          if (pick) setPlanningPick(pick);
        }
      } else {
        // Unsaved: its plan goes with it, and a custom place goes entirely.
        setPlans((prev) => prev.filter((pl) => pl.pickId !== id));
        if (id.startsWith(CUSTOM_ID_PREFIX)) {
          setCustomPicks((prev) => prev.filter((p) => p.id !== id));
        }
      }
    },
    [favorites, trip.days.length, allPicks, plans]
  );

  const categoryLabel = useCallback(
    (id: string) => categories.find((c) => c.id === id)?.label ?? id,
    [categories]
  );

  // ── Picks filtering ────────────────────────────────────────
  // Multi-city trips scope picks to the active area first.
  const areaPicks: Pick[] = useMemo(() => {
    if (areas.length < 2) return allPicks;
    return allPicks.filter((p) => !p.area || p.area === activeArea);
  }, [areas.length, allPicks, activeArea]);

  const filteredPicks: Pick[] = useMemo(() => {
    if (filter === "all") return areaPicks;
    if (filter === "favorites")
      return areaPicks.filter((p) => favorites.has(p.id));
    return areaPicks.filter((p) => p.category === filter);
  }, [filter, areaPicks, favorites]);

  const pickCounts = useMemo(() => {
    const c: Record<string, number> = {
      all: areaPicks.length,
      favorites: 0,
    };
    for (const p of areaPicks) {
      c[p.category] = (c[p.category] ?? 0) + 1;
      if (favorites.has(p.id)) c.favorites += 1;
    }
    return c;
  }, [areaPicks, favorites]);

  // ── Map points depend on the active view ───────────────────
  const mapPoints: MapPoint[] = useMemo(() => {
    if (view === "itinerary") {
      const dayItems = sortItems(
        itinerary.filter(
          (i) => i.dayDate === activeDay && i.lat != null && i.lng != null
        )
      );
      return dayItems.map((i) => ({
        id: i.id,
        lat: i.lat as number,
        lng: i.lng as number,
        color: TYPE_COLORS[i.type],
        label: i.title,
      }));
    }
    return filteredPicks
      .filter((p) => p.lat != null && p.lng != null)
      .map((p) => ({
        id: p.id,
        lat: p.lat as number,
        lng: p.lng as number,
        color:
          categories.find((c) => c.id === p.category)?.color ?? "#C9A84C",
        label: p.name,
      }));
  }, [view, itinerary, activeDay, filteredPicks, categories]);

  // Recenter the map on the day's cluster in itinerary view, else the
  // active area (multi-city) or config center.
  const activeAreaConfig = areas.find((a) => a.id === activeArea);

  const mapCenter = useMemo<[number, number]>(() => {
    if (view === "itinerary" && mapPoints.length > 0) {
      const lat =
        mapPoints.reduce((s, p) => s + p.lat, 0) / mapPoints.length;
      const lng =
        mapPoints.reduce((s, p) => s + p.lng, 0) / mapPoints.length;
      return [lat, lng];
    }
    return activeAreaConfig?.center ?? config.map.center;
  }, [view, mapPoints, activeAreaConfig, config.map.center]);

  const mapZoom =
    view === "itinerary" && mapPoints.length > 0
      ? 13.5
      : activeAreaConfig?.zoom ?? config.map.zoom;

  // Reset selection when switching view, day, or area.
  useEffect(() => {
    setSelectedId(null);
    listRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [view, activeDay, filter, activeArea]);

  // Scroll the selected card into view.
  useEffect(() => {
    if (selectedId && listRef.current) {
      const el = listRef.current.querySelector(
        `[data-item-id="${selectedId}"]`
      );
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedId]);

  const handleMapSelect = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const openItem = useCallback((id: string) => {
    setSelectedId(id);
    setOpenSel({ kind: "item", id });
  }, []);

  const openPick = useCallback((id: string) => {
    setOpenSel({ kind: "pick", id });
  }, []);

  const openItineraryDetail =
    openSel?.kind === "item"
      ? itinerary.find((i) => i.id === openSel.id) ?? null
      : null;
  const openPickDetail =
    openSel?.kind === "pick"
      ? allPicks.find((p) => p.id === openSel.id) ?? null
      : null;

  const wa = config.contact.whatsapp;
  const email = config.contact.email;

  return (
    <div className="app">
      <MapView
        points={mapPoints}
        selectedId={selectedId}
        center={mapCenter}
        zoom={mapZoom}
        onSelect={handleMapSelect}
      />

      <aside className="panel">
        <header className="head">
          {(wa || email) && (
            <div className="contact-bar">
              {wa && (
                <a
                  className="contact-btn whatsapp"
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              )}
              {email && (
                <a
                  className="contact-btn email"
                  href={`mailto:${email}?subject=${encodeURIComponent(
                    config.title + " trip"
                  )}`}
                >
                  <EmailIcon />
                  Email me
                </a>
              )}
              {(trip.essentials?.length ?? 0) > 0 && (
                <button
                  type="button"
                  className="contact-btn essentials-btn"
                  onClick={() => setEssentialsOpen(true)}
                >
                  <CrossIcon />
                  Essentials
                </button>
              )}
            </div>
          )}

          <div className="wordmark">
            <CompassMark />
            <span className="wordmark-text">CARTA</span>
          </div>

          <p className="kicker">
            {activeAreaConfig?.label ?? config.destination}
          </p>
          <h1 className="title">{config.title}</h1>
          {(config.dates || device.isIPhone) && (
            <p className="meta">
              {config.dates}
              {device.isIPhone && (
                <span className="device-badge">{device.model}</span>
              )}
            </p>
          )}

          {hasItinerary && hasPicks && (
            <div className="view-toggle">
              <button
                type="button"
                className={view === "itinerary" ? "view-btn active" : "view-btn"}
                onClick={() => setView("itinerary")}
              >
                Itinerary
              </button>
              <button
                type="button"
                className={view === "picks" ? "view-btn active" : "view-btn"}
                onClick={() => setView("picks")}
              >
                Picks
              </button>
            </div>
          )}

          {areas.length > 1 && view === "picks" && (
            <div className="view-toggle area-toggle">
              {areas.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  className={
                    activeArea === a.id ? "view-btn active" : "view-btn"
                  }
                  onClick={() => setActiveArea(a.id)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          )}

          {view === "itinerary" &&
            itinerary.some((i) => i.startTime) && (
              <button
                type="button"
                className="util-btn"
                onClick={() =>
                  downloadFile(
                    `carta-${config.title.toLowerCase().replace(/\s+/g, "-")}.ics`,
                    "text/calendar",
                    buildTripICS({ ...trip, itinerary })
                  )
                }
              >
                Add the itinerary to your calendar
              </button>
            )}
        </header>

        {view === "itinerary" && activeDay === today && todayNext && (
          <button
            type="button"
            className="today-banner"
            onClick={() => openItem(todayNext.item.id)}
          >
            <span className="today-kicker">Up next</span>
            <span className="today-title">{todayNext.item.title}</span>
            <span className="today-meta">
              {formatTime(todayNext.item.startTime)}
              {todayNext.leaveBy && ` · Leave by ${todayNext.leaveBy}`}
            </span>
          </button>
        )}

        {view === "itinerary" ? (
          <ItineraryList
            days={trip.days}
            items={itinerary}
            activeDay={activeDay}
            onSelectDay={setActiveDay}
            onOpenItem={openItem}
            onAddEntry={() => setAddEntryOpen(true)}
            selectedId={selectedId}
            listRef={listRef}
          />
        ) : (
          <PicksList
            picks={filteredPicks}
            categories={categories}
            onAddPlace={() => setAddPlaceOpen(true)}
            guideBlocks={trip.guideBlocks}
            contacts={trip.contacts}
            cartaContact={config.contact}
            plannedIds={plannedIds}
            provider={config.mapProvider}
            filter={filter}
            onFilter={setFilter}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onOpen={openPick}
            counts={pickCounts}
            listRef={listRef}
          />
        )}
      </aside>

      {openItineraryDetail && (
        <DetailSheet
          selection={{ kind: "item", item: openItineraryDetail }}
          provider={config.mapProvider}
          documents={trip.documents}
          categoryLabel={categoryLabel}
          driverPhrase={config.driverPhrase}
          onRemove={
            openItineraryDetail.id.startsWith(PLAN_ID_PREFIX) ||
            openItineraryDetail.id.startsWith(OWN_ID_PREFIX)
              ? () => {
                  setPlans((prev) =>
                    prev.filter(
                      (pl) =>
                        `${PLAN_ID_PREFIX}${pl.pickId}` !==
                        openItineraryDetail.id
                    )
                  );
                  setOwnEntries((prev) =>
                    prev.filter((e) => e.id !== openItineraryDetail.id)
                  );
                  setOpenSel(null);
                }
              : undefined
          }
          onClose={() => setOpenSel(null)}
        />
      )}
      {openPickDetail && (
        <DetailSheet
          selection={{ kind: "pick", pick: openPickDetail }}
          provider={config.mapProvider}
          documents={trip.documents}
          categoryLabel={categoryLabel}
          driverPhrase={config.driverPhrase}
          onClose={() => setOpenSel(null)}
        />
      )}
      {essentialsOpen && (
        <Essentials
          essentials={trip.essentials ?? []}
          provider={config.mapProvider}
          onClose={() => setEssentialsOpen(false)}
        />
      )}
      {addPlaceOpen && (
        <AddPlaceSheet
          center={activeAreaConfig?.center ?? config.map.center}
          tripTitle={config.title}
          contact={config.contact}
          onSelect={(pick) => {
            setCustomPicks((prev) => [...prev, pick]);
            setFavorites((prev) => new Set(prev).add(pick.id));
            setAddPlaceOpen(false);
            if (trip.days.length > 0) setPlanningPick(pick);
          }}
          onClose={() => setAddPlaceOpen(false)}
        />
      )}
      {addEntryOpen && (
        <AddEntrySheet
          days={trip.days}
          defaultDay={activeDay}
          onAdd={(entry) => {
            setOwnEntries((prev) => [...prev, entry]);
            setAddEntryOpen(false);
          }}
          onClose={() => setAddEntryOpen(false)}
        />
      )}
      {planningPick && (
        <AddToPlanSheet
          pick={planningPick}
          days={trip.days}
          dining={isDiningCategory(planningPick.category, categories)}
          contact={config.contact}
          defaultDay={isTravelDay ? today : trip.days[0]?.date ?? ""}
          onAdd={(plan) => {
            setPlans((prev) => [
              ...prev.filter((pl) => pl.pickId !== plan.pickId),
              plan,
            ]);
            setPlanningPick(null);
          }}
          onClose={() => setPlanningPick(null)}
        />
      )}
    </div>
  );
}
