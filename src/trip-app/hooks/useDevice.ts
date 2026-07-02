import { useState, useEffect } from "react";

export interface DeviceInfo {
  model: string;
  isIPhone: boolean;
  isIPhone15Plus: boolean;
  hasDynamicIsland: boolean;
  hasHomeIndicator: boolean;
  screenWidth: number;
  screenHeight: number;
  devicePixelRatio: number;
  screenClass: "compact" | "standard" | "large" | "unknown";
  isStandalone: boolean; // PWA / home screen mode
}

interface ScreenProfile {
  width: number;
  height: number;
  model: string;
  screenClass: "compact" | "standard" | "large";
}

// iPhone 15+ screen profiles (logical pixels, CSS px)
// All have Dynamic Island, DPR 3, no home button
const PROFILES: ScreenProfile[] = [
  // Width 393 — iPhone 15, 15 Pro, 16, 17
  { width: 393, height: 852, model: "iPhone 15 Pro", screenClass: "standard" },
  // Width 402 — iPhone 16 Pro / 17 Pro
  { width: 402, height: 874, model: "iPhone 16 Pro", screenClass: "standard" },
  // Width 430 — iPhone 15 Plus, 15 Pro Max, 16 Plus
  { width: 430, height: 932, model: "iPhone 15 Pro Max", screenClass: "large" },
  // Width 440 — iPhone 16 Pro Max, 17 Pro Max
  { width: 440, height: 956, model: "iPhone 17 Pro Max", screenClass: "large" },
  // Width 440 alt height — iPhone 16 Pro Max
  { width: 440, height: 940, model: "iPhone 16 Pro Max", screenClass: "large" },
  // Future-proof: iPhone 17 standard
  { width: 393, height: 872, model: "iPhone 17", screenClass: "standard" },
  // iPhone 17 Pro
  { width: 402, height: 880, model: "iPhone 17 Pro", screenClass: "standard" },
  // iPhone 17 Pro Max alt
  { width: 440, height: 960, model: "iPhone 17 Pro Max", screenClass: "large" },
];

function detectFromScreen(): ScreenProfile | null {
  if (typeof window === "undefined") return null;
  const w = window.screen.width;
  const h = window.screen.height;
  const dpr = window.devicePixelRatio || 1;

  // Must be iPhone with DPR 3 for 15+ detection
  if (!/iPhone/.test(navigator.userAgent)) return null;
  if (dpr < 3) return null;

  // Try exact match first
  let match = PROFILES.find(
    (p) => p.width === w && p.height === h
  );
  if (match) return match;

  // Try width-only match (height varies with Safari chrome state)
  match = PROFILES.find((p) => p.width === w);
  if (match) return match;

  // Fallback by width range
  if (w >= 435) return { width: w, height: h, model: "iPhone Pro Max", screenClass: "large" };
  if (w >= 420) return { width: w, height: h, model: "iPhone Plus/Pro Max", screenClass: "large" };
  if (w >= 390) return { width: w, height: h, model: "iPhone", screenClass: "standard" };

  // Older iPhones (SE, mini) — still iPhone but not 15+
  return { width: w, height: h, model: "iPhone", screenClass: "compact" };
}

function buildDeviceInfo(): DeviceInfo {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isIPhone = /iPhone/.test(ua);
  const profile = detectFromScreen();
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const w = typeof window !== "undefined" ? window.screen.width : 0;
  const h = typeof window !== "undefined" ? window.screen.height : 0;

  // iPhone 15+ = has Dynamic Island = width >= 393 && DPR 3
  const isIPhone15Plus = isIPhone && dpr >= 3 && w >= 393;

  // Standalone mode (added to home screen, no Safari chrome)
  const isStandalone =
    typeof window !== "undefined" &&
    (window.matchMedia?.("(display-mode: standalone)").matches ||
      ("standalone" in navigator && (navigator as unknown as { standalone: boolean }).standalone === true));

  return {
    model: profile?.model ?? "Unknown",
    isIPhone,
    isIPhone15Plus,
    hasDynamicIsland: isIPhone15Plus,
    hasHomeIndicator: isIPhone,
    screenWidth: w,
    screenHeight: h,
    devicePixelRatio: dpr,
    screenClass: profile?.screenClass ?? "unknown",
    isStandalone,
  };
}

export function useDevice(): DeviceInfo {
  const [device, setDevice] = useState<DeviceInfo>(() => buildDeviceInfo());

  useEffect(() => {
    const update = () => setDevice(buildDeviceInfo());
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  // Set CSS custom properties + classes on :root for global use
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("iphone", device.isIPhone);
    root.classList.toggle("iphone-15-plus", device.isIPhone15Plus);
    root.classList.toggle("has-dynamic-island", device.hasDynamicIsland);
    root.classList.toggle("standalone", device.isStandalone);
    root.classList.toggle(
      "screen-large",
      device.screenClass === "large"
    );
    root.classList.toggle(
      "screen-compact",
      device.screenClass === "compact"
    );
    root.setAttribute("data-device", device.model.toLowerCase().replace(/\s+/g, "-"));
  }, [device]);

  return device;
}
