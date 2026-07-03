import type { Metadata } from "next";
import { readFile } from "fs/promises";
import path from "path";
import TripPageClient from "./TripPageClient";

const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,80}$/;

type TripConfig = {
  clientName?: string;
  title?: string;
  destination?: string;
  dates?: string;
  coverImageUrl?: string;
};

async function getTripConfig(slug: string): Promise<TripConfig | null> {
  if (!slug || !SLUG_RE.test(slug)) return null;
  try {
    const filePath = path.join(process.cwd(), "public", "trips", `${slug}.json`);
    const raw = await readFile(filePath, "utf-8");
    const data = JSON.parse(raw);
    return data.config ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = await getTripConfig(slug);

  if (!config) {
    return {
      title: "Trip not found",
      robots: { index: false, follow: false },
    };
  }

  const ogTitle = config.clientName
    ? `${config.clientName} · ${config.title ?? "Your Trip"}`
    : config.title ?? "Your Carta Trip";

  const ogDescription = config.dates
    ? `${config.destination ?? config.title ?? "Your trip"} · ${config.dates}. Your private trip hub, built for you by Carta.`
    : `${config.destination ?? config.title ?? "Your trip"}. Your private trip hub, built for you by Carta.`;

  const url = `https://travelbycarta.com/${slug}`;

  return {
    title: ogTitle,
    description: ogDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      siteName: "Carta",
      type: "website",
      url,
      locale: "en_US",
      ...(config.coverImageUrl
        ? { images: [{ url: config.coverImageUrl, width: 1400, height: 700, alt: config.destination ?? config.title ?? "Carta trip" }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      ...(config.coverImageUrl ? { images: [config.coverImageUrl] } : {}),
    },
    robots: { index: false, follow: true },
  };
}

export default function TripPage() {
  return <TripPageClient />;
}
