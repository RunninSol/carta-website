import type { MetadataRoute } from "next";
import { allSeoPages } from "@/content/seoPages";

const BASE = "https://www.travelbycarta.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const guideRoutes = allSeoPages.map((page) => ({
    url: `${BASE}/${page.kind === "destination" ? "destinations" : "itineraries"}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: page.kind === "destination" ? 0.75 : 0.7,
  }));

  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/the-carta`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/destinations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/itineraries`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    ...guideRoutes,
    { url: `${BASE}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
