import type { MetadataRoute } from "next";

const BASE = "https://www.travelbycarta.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/the-carta`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
