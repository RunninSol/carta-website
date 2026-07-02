"use client";

import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { LocateIcon } from "./icons";

export interface MapPoint {
  id: string;
  lat: number;
  lng: number;
  color: string;
  label: string;
}

function makePinIcon(color: string, selected: boolean) {
  const border = selected ? "3px solid #f5f0e8" : "2px solid rgba(15,30,60,0.5)";
  return L.divIcon({
    className: "",
    html: `<div style="
      width:26px;height:26px;border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);background:${color};border:${border};
      box-shadow:0 2px 8px rgba(0,0,0,0.35);
    "></div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -28],
  });
}

function FlyTo({ point }: { point: MapPoint | null }) {
  const map = useMap();
  useEffect(() => {
    if (point) map.flyTo([point.lat, point.lng], 15, { duration: 0.8 });
  }, [point, map]);
  return null;
}

function Recenter({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.0 });
  }, [center, zoom, map]);
  return null;
}

function LocationWatcher({
  onLocated,
  onReady,
}: {
  onLocated: (lat: number, lng: number) => void;
  onReady: (locate: () => void) => void;
}) {
  const map = useMap();
  useEffect(() => {
    const locate = () => map.locate({ setView: true, maxZoom: 14 });
    onReady(locate);
    const handler = (e: L.LocationEvent) => onLocated(e.latlng.lat, e.latlng.lng);
    map.on("locationfound", handler);
    return () => {
      map.off("locationfound", handler);
    };
  }, [map, onLocated, onReady]);
  return null;
}

export default function MapView({
  points,
  selectedId,
  center,
  zoom,
  onSelect,
}: {
  points: MapPoint[];
  selectedId: string | null;
  center: [number, number];
  zoom: number;
  onSelect: (id: string) => void;
}) {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [locateFn, setLocateFn] = useState<(() => void) | null>(null);

  const selectedPoint = points.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="map-wrap">
      <MapContainer
        center={center}
        zoom={zoom}
        className="map"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Recenter center={center} zoom={zoom} />
        <FlyTo point={selectedPoint} />
        <LocationWatcher
          onLocated={(la, ln) => setUserLocation([la, ln])}
          onReady={setLocateFn}
        />
        {userLocation && (
          <Marker
            position={userLocation}
            icon={L.divIcon({
              className: "",
              html: `<div style="width:14px;height:14px;border-radius:50%;background:#4a9eff;border:2px solid #fff;box-shadow:0 0 8px rgba(74,158,255,0.6)"></div>`,
              iconSize: [14, 14],
              iconAnchor: [7, 7],
            })}
          />
        )}
        {points.map((p) => (
          <Marker
            key={p.id}
            position={[p.lat, p.lng]}
            icon={makePinIcon(p.color, selectedId === p.id)}
            eventHandlers={{ click: () => onSelect(p.id) }}
          />
        ))}
      </MapContainer>
      <button
        type="button"
        className="locate-btn"
        onClick={() => locateFn?.()}
        aria-label="Locate me"
      >
        <LocateIcon />
      </button>
    </div>
  );
}
