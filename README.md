# Carta Website

Luxury travel agency site for [travelbycarta.com](https://travelbycarta.com), built from `CARTA_MASTER_BRIEF.md`.

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
