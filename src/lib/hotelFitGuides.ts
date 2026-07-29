export type HotelFitGuide = { path: string; label: string };

const DEFAULT_GUIDE: HotelFitGuide = {
  path: "/guides/carta-hotel-fit-guide.pdf",
  label: "General",
};

const DESTINATION_GUIDES = [
  { slug: "belize", label: "Belize", terms: ["belize", "ambergris", "placencia", "caye caulker"] },
  { slug: "berlin", label: "Berlin", terms: ["berlin"] },
  { slug: "dubai", label: "Dubai", terms: ["dubai", "united arab emirates", "uae"] },
  { slug: "florence", label: "Florence", terms: ["florence", "firenze", "tuscany", "toscana"] },
  { slug: "geneva", label: "Geneva", terms: ["geneva", "genève", "geneve"] },
] as const;

export function guideForDestination(destination: string): HotelFitGuide {
  const value = destination.toLowerCase();
  const match = DESTINATION_GUIDES.find((guide) =>
    guide.terms.some((term) => value.includes(term))
  );
  return match
    ? { path: `/guides/carta-hotel-fit-guide-${match.slug}.pdf`, label: match.label }
    : DEFAULT_GUIDE;
}
