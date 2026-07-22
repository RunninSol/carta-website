# Carta Website

Luxury travel agency site for [travelbycarta.com](https://travelbycarta.com), built from `CARTA_MASTER_BRIEF.md`.

> **Status: active production code.** Current priorities live in `C:/Users/Gabe/Documents/Obsidian Vault/Carta/Operating TODO.md`, not in planning documents inside this repository. Historical duplicate app plans formerly stored in `claude stuff/` were removed on July 21, 2026; the retained reference copy is under `../app/`.

> **Booking-link status, reverified July 21, 2026:** `/contact` and the configured Calendly event at `https://calendly.com/gabe-travelbycarta/new-meeting` both return 200, and production `/contact` references the new event URL. The former `/travelbycarta/discovery-call` 404 is resolved.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS + brand design tokens
- Framer Motion (hero stagger animations)
- Google Fonts: EB Garamond + Inter

## Development

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Status |
|-------|--------|
| `/` | Homepage (complete) |
| `/how-it-works` | Complete (8-step timeline) |
| `/the-carta` | Complete (sections, in-your-pocket features, sample entry) |
| `/services` | Complete (included list, FAQ + FAQ schema) |
| `/about` | Complete (origin story, WorldVia, starting small) |
| `/contact` | Complete (Calendly embed + inquiry form) |

Also ships `sitemap.xml`, `robots.txt`, and TravelAgency JSON-LD.

## Deploy

Optimized for Vercel:

```bash
npm run build
```
