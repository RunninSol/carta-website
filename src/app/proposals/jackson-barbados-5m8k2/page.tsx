import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jackson's Month in Barbados",
  description:
    "Three all-inclusive resorts, five beachside homes, and the real cost after food for Jackson's May 2027 stay in Barbados.",
  alternates: { canonical: "/proposals/jackson-barbados-5m8k2" },
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: "Jackson's Month in Barbados",
    description:
      "Three all-inclusive resorts, five beachside homes, and the real cost after food.",
    url: "/proposals/jackson-barbados-5m8k2",
    siteName: "Carta",
    type: "website",
    images: [
      {
        url: "/proposals/jackson-barbados/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Jackson's month in Barbados, a private Carta proposal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jackson's Month in Barbados",
    description:
      "Three all-inclusive resorts, five beachside homes, and the real cost after food.",
    images: ["/proposals/jackson-barbados/social-preview.jpg"],
  },
};

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const allInclusives = [
  {
    name: "Island Inn Hotel",
    location: "The Garrison · near Pebbles Beach",
    stay: 7770,
    rate: "$259 per night planning floor",
    beach: "Two-minute walk to calm, clear Pebbles Beach",
    fit: "Best all-inclusive value",
    image: "/proposals/jackson-barbados/island-inn.webp",
    imageAlt: "White courtyard pool with loungers and umbrellas at Island Inn Hotel in Barbados",
    imageSource: "https://www.islandinnbarbados.com/",
    imageCredit: "Official Island Inn photo",
    description:
      "A small, historic hotel where meals and drinks are handled, with one of the easiest swimming beaches in Barbados just outside the property.",
    pros: [
      "Lowest all-inclusive planning total",
      "Pebbles Beach is calm and genuinely good for swimming",
      "Simple month-long routine with no grocery planning",
    ],
    cons: [
      "Not directly on the sand",
      "Smaller property with fewer resort facilities",
      "The lowest displayed rate still needs its full board basis reconfirmed",
    ],
    accent: true,
  },
  {
    name: "Sugar Bay Barbados",
    location: "Hastings · South Coast",
    stay: 12750,
    rate: "$425 per night third-party planning floor",
    beach: "Direct beachfront, pretty but relatively compact",
    fit: "Best full resort experience",
    image: "/proposals/jackson-barbados/sugar-bay.webp",
    imageAlt: "Aerial view of Sugar Bay Barbados and its turquoise beachfront",
    imageSource: "https://www.sugarbaybarbados.com/gallery",
    imageCredit: "Official Sugar Bay photo",
    description:
      "The most polished all-inclusive in this comparison, with six restaurants and bars, two pools, a spa, and the beach directly in front.",
    pros: [
      "The strongest resort atmosphere in the shortlist",
      "Beach, pools, restaurants, and spa all on property",
      "Easy access to the Hastings boardwalk",
    ],
    cons: [
      "About $4,980 more than Island Inn for the month",
      "Direct-site pricing displayed closer to $16,590 for 30 nights",
      "The resort beach is attractive but small",
    ],
  },
  {
    name: "Barbados Beach Club",
    location: "Maxwell · South Coast",
    stay: 13980,
    rate: "$466 per night planning display",
    beach: "Directly on broad Maxwell Beach",
    fit: "Beachfront, but weaker value",
    image: "/proposals/jackson-barbados/barbados-beach-club.webp",
    imageAlt: "Aerial view of Barbados Beach Club directly beside Maxwell Beach",
    imageSource: "https://www.barbadosbeachclub.com/",
    imageCredit: "Official Barbados Beach Club photo",
    description:
      "A traditional, more basic all-inclusive set directly on Maxwell Beach. The sand is lovely, though swimming conditions can vary with the surf.",
    pros: [
      "Walk straight from the resort onto the beach",
      "South Coast location near Oistins and St. Lawrence Gap",
      "Meals and drinks remain predictable for a long stay",
    ],
    cons: [
      "Highest planning total in this comparison",
      "Older and more basic than Sugar Bay",
      "Maxwell can have waves and occasional red-flag conditions",
    ],
  },
];

const rentals = [
  {
    name: "Fitts Village sunset apartment",
    location: "Fitts Village · West Coast",
    bedrooms: "2 bedrooms",
    rating: "4.86 guest rating",
    stay: 2942,
    mixedTotal: 5342,
    beach: "Near the beach",
    fit: "Lowest total",
    image: "/proposals/jackson-barbados/fitts-village-apartment.webp",
    imageAlt: "White two-story Fitts Village apartment with a wraparound balcony and tropical garden",
    imageSource: "https://www.airbnb.com/rooms/14179425",
    imageCredit: "Listing photo · Airbnb",
    pros: ["Lowest accommodation price", "Two bedrooms", "West Coast sunsets and calmer water"],
    cons: ["Not confirmed directly on the sand", "Groceries and dining are separate", "A car or buses help for broader exploring"],
  },
  {
    name: "Oistins rooftop condo",
    location: "Oistins · South Coast",
    bedrooms: "2 bedrooms",
    rating: "4.98 guest rating",
    stay: 3440,
    mixedTotal: 5840,
    beach: "Ocean views, close to south-coast beaches",
    fit: "Best space for the price",
    image: "/proposals/jackson-barbados/oistins-rooftop-condo.webp",
    imageAlt: "Orange sunset over the sea from the private rooftop terrace of the Oistins condo",
    imageSource: "https://www.airbnb.com/rooms/51805522",
    imageCredit: "Listing photo · Airbnb",
    pros: ["Private rooftop", "Two bedrooms", "Close to Oistins food and south-coast energy"],
    cons: ["Ocean view does not necessarily mean beachfront", "Self-catering responsibility", "South Coast can feel busier"],
  },
  {
    name: "Oistins chattel cottage",
    location: "Oistins · South Coast",
    bedrooms: "1 bedroom",
    rating: "4.98 from 202 reviews",
    stay: 3711,
    mixedTotal: 6111,
    beach: "Directly across from the beach",
    fit: "Carta's overall pick",
    image: "/proposals/jackson-barbados/oistins-chattel-cottage.webp",
    imageAlt: "Front exterior of the pale blue traditional coastal cottage in Oistins",
    imageSource: "https://www.airbnb.com/rooms/449630",
    imageCredit: "Listing photo · Airbnb",
    pros: ["Clear, useful beach position", "Excellent review history", "Walkable access to Oistins and casual dining"],
    cons: ["One bedroom", "No resort pool or daily service", "Food, drinks, and housekeeping are separate"],
    accent: true,
  },
  {
    name: "Beau Beau Reef beach apartment",
    location: "Mount Standfast · West Coast",
    bedrooms: "1 bedroom",
    rating: "4.86 guest rating",
    stay: 3809,
    mixedTotal: 6209,
    beach: "Beach apartment near the reef",
    fit: "Best for snorkeling",
    image: "/proposals/jackson-barbados/beau-beau-reef-apartment.webp",
    imageAlt: "Palm-shaded beach access and stone steps at Beau Beau Reef Beach Apartment",
    imageSource: "https://www.airbnb.com/rooms/40509297",
    imageCredit: "Listing photo · Airbnb",
    pros: ["West Coast setting", "Reef access nearby", "Still well below the resorts after food"],
    cons: ["One bedroom", "Reef shoreline may not be the easiest pure swimming beach", "Less nightlife than the South Coast"],
  },
  {
    name: "Holetown seaside cottage",
    location: "Holetown · West Coast",
    bedrooms: "2 bedrooms",
    rating: "4.95 guest rating",
    stay: 4735,
    mixedTotal: 7135,
    beach: "Seaside with snorkeling out front",
    fit: "Best independent setting",
    image: "/proposals/jackson-barbados/holetown-seaside-cottage.webp",
    imageAlt: "Turquoise Caribbean Sea viewed through tropical foliage from the Holetown seaside cottage",
    imageSource: "https://www.airbnb.com/rooms/32084792",
    imageCredit: "Listing photo · Airbnb",
    pros: ["Two bedrooms", "Immediate seaside character", "Strong restaurant and shopping access around Holetown"],
    cons: ["Highest rental total", "Only $635 below Island Inn after the mixed food allowance", "Restaurants on the West Coast can be expensive"],
  },
];

const comparisons = [
  ...rentals.map((item) => ({
    name: item.name,
    total: item.mixedTotal,
    detail: "Stay plus $2,400 food allowance",
    kind: "Beachside home",
  })),
  ...allInclusives.map((item) => ({
    name: item.name,
    total: item.stay,
    detail: "All-inclusive planning total",
    kind: "All-inclusive",
  })),
].sort((a, b) => a.total - b.total);

const highestTotal = Math.max(...comparisons.map((item) => item.total));

function Compass() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12 text-gold">
      <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
      <path d="M32 8 37 27 56 32 37 37 32 56 27 37 8 32 27 27Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="m32 15 4 13-4 4-4-4 4-13Z" fill="currentColor" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold-deep">
      <path d="m4 10 4 4 8-9" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-mid-gray">
      <path d="M4 10h12" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function JacksonBarbadosProposal() {
  return (
    <main id="main" className="min-h-screen bg-ivory text-charcoal">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-ivory/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="font-display text-[28px] tracking-[0.24em] text-ivory" aria-label="Carta home">
            CARTA
          </Link>
          <p className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/70 sm:block">Private proposal · Jackson</p>
        </div>
      </header>

      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-navy">
        <Image
          src="/proposals/jackson-barbados/pebbles-beach.webp"
          alt="Morning light across the calm water and pale sand at Pebbles Beach, Barbados"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/15" />
        <div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-4">
              <Compass />
              <div className="h-px w-16 bg-gold" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Prepared for Jackson</p>
            </div>
            <h1 className="max-w-3xl font-display text-[54px] leading-[0.95] text-ivory sm:text-[76px] lg:text-[96px]">
              A month by the water in Barbados
            </h1>
            <p className="mt-7 max-w-2xl text-[18px] leading-8 text-ivory/80 sm:text-[20px]">
              Three all-inclusive resorts, five beachside homes, and the real difference after food is included.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ivory/25 pt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/70">
              <span>May 1 to 31, 2027</span>
              <span>30 nights</span>
              <span>2 adults</span>
              <span>USD</span>
            </div>
          </div>
        </div>
        <a
          href="https://commons.wikimedia.org/wiki/File:Pebbles_Beach_Barbados.jpg"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 right-4 z-10 hidden text-[9px] tracking-wide text-ivory/50 hover:text-ivory sm:block"
        >
          Pebbles Beach · Barry Haynes · CC BY-SA 4.0
        </a>
      </section>

      <section className="border-b border-navy/10 bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24">
          <div>
            <p className="eyebrow">The short answer</p>
            <h2 className="max-w-2xl font-display text-[44px] leading-[1.02] text-navy sm:text-[58px]">
              The beachside home wins the month.
            </h2>
            <div className="prose-carta mt-7 max-w-2xl text-charcoal/80">
              <p>
                Jackson, for a full 30 nights I would choose the Oistins chattel cottage across from the beach. Its accommodation total is {formatMoney(3711)}, and even after setting aside {formatMoney(2400)} for groceries and regular casual meals, the month lands around {formatMoney(6111)}.
              </p>
              <p>
                Island Inn is the all-inclusive I would keep as the alternative. It costs about {formatMoney(7770)} on the current planning display, which buys simplicity and easy access to Pebbles Beach. The difference is {formatMoney(1659)} after the rental&apos;s food allowance, not the {formatMoney(4059)} headline gap you see when food is ignored.
              </p>
            </div>
          </div>
          <aside className="self-start border border-gold/50 bg-navy p-7 text-ivory shadow-float sm:p-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">My recommendation</p>
            <h3 className="mt-4 font-display text-[36px] leading-tight">Oistins chattel cottage</h3>
            <p className="mt-4 text-[16px] leading-7 text-ivory/75">
              Across from the beach, rated 4.98 from 202 reviews, and close enough to Oistins that the month can feel lived-in rather than managed around a resort schedule.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-ivory/20 pt-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-ivory/50">Stay only</p>
                <p className="mt-1 font-display text-[32px] text-gold-soft">{formatMoney(3711)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-ivory/50">With food</p>
                <p className="mt-1 font-display text-[32px] text-gold-soft">{formatMoney(6111)}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-warm-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">The price difference</p>
            <h2 className="font-display text-[44px] leading-[1.04] text-navy sm:text-[60px]">What the month really costs</h2>
            <p className="mt-5 text-[16px] leading-7 text-charcoal/70">
              Every home below includes a {formatMoney(2400)} planning allowance for two adults to buy groceries and eat out regularly. Resort totals use the displayed all-inclusive planning rate.
            </p>
          </div>
          <div className="mt-10 overflow-hidden border border-navy/10 bg-ivory shadow-card">
            {comparisons.map((item, index) => (
              <div key={item.name} className={`grid gap-3 px-5 py-5 sm:grid-cols-[260px_1fr_130px] sm:items-center sm:px-7 ${index ? "border-t border-navy/10" : ""}`}>
                <div>
                  <p className="font-semibold text-navy">{item.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-mid-gray">{item.kind}</p>
                </div>
                <div>
                  <div className="h-2 overflow-hidden bg-navy/8">
                    <div
                      className={`h-full ${item.kind === "All-inclusive" ? "bg-navy" : "bg-gold"}`}
                      style={{ width: `${Math.max(16, (item.total / highestTotal) * 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-mid-gray">{item.detail}</p>
                </div>
                <p className="font-display text-[30px] text-navy sm:text-right">{formatMoney(item.total)}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[12px] leading-5 text-mid-gray">
            The food allowance is a comparison tool, not a supplier quote. Heavy restaurant dining, premium alcohol, car rental, flights, and activities are outside these totals.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">All-inclusive options</p>
              <h2 className="font-display text-[44px] leading-[1.04] text-navy sm:text-[60px]">Pay more, plan less</h2>
            </div>
            <p className="max-w-md text-[15px] leading-6 text-charcoal/65">
              These are calculated 30-night planning totals based on the May 1 to 8 nightly displays. Nothing is held, and the exact board basis and cancellation terms need a final live check.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {allInclusives.map((hotel) => (
              <article key={hotel.name} className={`flex h-full flex-col overflow-hidden border bg-warm-bg ${hotel.accent ? "border-gold shadow-card" : "border-navy/10"}`}>
                <figure className="relative aspect-[4/3] overflow-hidden bg-navy/5">
                  <Image src={hotel.image} alt={hotel.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 hover:scale-[1.02]" />
                  <a href={hotel.imageSource} target="_blank" rel="noreferrer" className="absolute bottom-0 right-0 bg-navy/85 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-ivory/80 hover:text-ivory">
                    {hotel.imageCredit}
                  </a>
                </figure>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-deep">{hotel.fit}</span>
                    {hotel.accent && <span className="bg-gold px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-navy">Best AI value</span>}
                  </div>
                  <h3 className="mt-5 font-display text-[36px] leading-none text-navy">{hotel.name}</h3>
                  <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.13em] text-mid-gray">{hotel.location}</p>
                  <p className="mt-6 font-display text-[42px] text-navy">{formatMoney(hotel.stay)}</p>
                  <p className="text-[12px] text-mid-gray">30-night calculated total · {hotel.rate}</p>
                  <p className="mt-6 text-[16px] leading-7 text-charcoal/75">{hotel.description}</p>
                  <div className="mt-6 border-l-2 border-gold pl-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-deep">Beach note</p>
                    <p className="mt-1 text-[14px] leading-6 text-charcoal/75">{hotel.beach}</p>
                  </div>
                  <div className="mt-7 grid gap-6 border-t border-navy/10 pt-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-navy">Reasons to choose it</p>
                      <ul className="mt-3 space-y-2">
                        {hotel.pros.map((pro) => <li key={pro} className="flex gap-2 text-[14px] leading-5 text-charcoal/75"><CheckIcon />{pro}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-mid-gray">Trade-offs</p>
                      <ul className="mt-3 space-y-2">
                        {hotel.cons.map((con) => <li key={con} className="flex gap-2 text-[14px] leading-5 text-charcoal/65"><MinusIcon />{con}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-gradient grain bg-navy text-ivory">
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Beachside homes</p>
            <h2 className="mt-4 font-display text-[44px] leading-[1.04] sm:text-[60px]">More room in the budget</h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-7 text-ivory/68">
              Airbnb displayed these 30-night accommodation totals with platform fees included. Listing status, taxes collected later, utility limits, deposits, and cancellation terms still need confirmation at checkout.
            </p>
          </div>
          <div className="mt-12 space-y-5">
            {rentals.map((rental, index) => (
              <article key={rental.name} className={`grid gap-7 border p-6 sm:p-8 lg:grid-cols-[220px_50px_1fr_0.65fr_1fr] lg:items-start ${rental.accent ? "border-gold bg-ivory/[0.08]" : "border-ivory/15 bg-ivory/[0.035]"}`}>
                <figure className="relative aspect-[4/3] overflow-hidden bg-ivory/5 lg:aspect-auto lg:min-h-[220px] lg:self-stretch">
                  <Image src={rental.image} alt={rental.imageAlt} fill sizes="(min-width: 1024px) 220px, 100vw" className="object-cover transition duration-500 hover:scale-[1.02]" />
                  <a href={rental.imageSource} target="_blank" rel="noreferrer" className="absolute bottom-0 right-0 bg-navy/85 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-ivory/75 hover:text-ivory">
                    {rental.imageCredit}
                  </a>
                </figure>
                <p className="font-display text-[38px] text-gold-soft">0{index + 1}</p>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{rental.fit}</p>
                    {rental.accent && <span className="border border-gold px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-gold">Recommended</span>}
                  </div>
                  <h3 className="mt-3 font-display text-[34px] leading-tight">{rental.name}</h3>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-ivory/48">{rental.location} · {rental.bedrooms} · {rental.rating}</p>
                  <p className="mt-4 text-[14px] text-ivory/70">{rental.beach}</p>
                </div>
                <div className="border-y border-ivory/15 py-5 lg:border-x lg:border-y-0 lg:px-7 lg:py-1">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-ivory/45">Stay only</p>
                  <p className="mt-1 font-display text-[36px] text-gold-soft">{formatMoney(rental.stay)}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-ivory/45">With mixed food allowance</p>
                  <p className="mt-1 font-display text-[30px]">{formatMoney(rental.mixedTotal)}</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold-soft">Pros</p>
                    <ul className="mt-3 space-y-2">
                      {rental.pros.map((pro) => <li key={pro} className="text-[13px] leading-5 text-ivory/72">{pro}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ivory/45">Cons</p>
                    <ul className="mt-3 space-y-2">
                      {rental.cons.map((con) => <li key={con} className="text-[13px] leading-5 text-ivory/58">{con}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-bg">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24">
          <div>
            <p className="eyebrow">The decision</p>
            <h2 className="font-display text-[44px] leading-[1.04] text-navy sm:text-[60px]">Which month sounds more like you?</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border border-navy/10 bg-ivory p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-gold-deep">Choose the cottage if</p>
              <p className="mt-5 text-[17px] leading-7 text-charcoal/80">
                You want to settle into Barbados, walk to the beach, try different restaurants, and keep enough room in the budget for a car, catamaran day, or several very good dinners.
              </p>
            </div>
            <div className="border border-navy bg-navy p-7 text-ivory">
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-gold">Choose Island Inn if</p>
              <p className="mt-5 text-[17px] leading-7 text-ivory/78">
                You want the month to be almost decision-free. Breakfast, lunch, dinner, and drinks are handled, and Pebbles Beach gives you the calm-water beach you asked for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-24">
          <div className="flex justify-center">
            <Compass />
          </div>
          <p className="eyebrow mt-7">Next step</p>
          <h2 className="font-display text-[44px] leading-[1.04] text-navy sm:text-[60px]">Tell me which way you are leaning.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-7 text-charcoal/72">
            Once I know whether the priority is resort ease or the freedom of a beachside home, I can narrow this to the two strongest choices and recheck the exact live terms before anything is reserved.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="btn-secondary" href="mailto:gabe@travelbycarta.com?subject=Jackson%20Barbados%20proposal">Email Gabe</a>
            <a className="btn-primary" href="https://wa.me/13238541678?text=Hi%20Gabe%2C%20I%20looked%20through%20the%20Barbados%20proposal.">Message Gabe</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ivory/15 bg-navy px-5 py-10 text-center text-ivory sm:px-8">
        <p className="font-display text-[24px] tracking-[0.22em]">CARTA</p>
        <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-ivory/45">Private planning proposal · prepared July 2026</p>
        <p className="mx-auto mt-5 max-w-3xl text-[11px] leading-5 text-ivory/45">
          Prices are live-search planning displays or calculated totals, not held reservations. Availability, exact room or listing, taxes, mandatory fees, meal plan, cancellation terms, and payment schedule must be reconfirmed before purchase. Flights are not included.
        </p>
      </footer>
    </main>
  );
}
