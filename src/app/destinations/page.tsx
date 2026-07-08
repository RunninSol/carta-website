import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { destinationPages } from "@/content/seoPages";

export const metadata: Metadata = {
  title: "Destination Guides",
  description:
    "Carta destination planning pages for Paris, Tokyo, the Amalfi Coast, Maldives, and other high-touch trips.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "Destination Guides | Carta",
    description:
      "Carta destination planning pages for Paris, Tokyo, the Amalfi Coast, Maldives, and other high-touch trips.",
    url: "/destinations",
  },
};

export default function DestinationsPage() {
  return (
    <>
      <Navigation />
      <main id="main" className="bg-warm-bg">
        <section className="navy-gradient grain px-6 pb-2xl pt-32 text-ivory lg:px-10 lg:pb-3xl">
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="eyebrow">Destination guides</p>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              Useful first cuts before I build the private trip hub.
            </h1>
            <p className="mx-auto mt-lg max-w-3xl text-lg leading-relaxed text-ivory/75">
              These pages pull from Carta destination research. They are not generic guides. They are planning filters for hotel fit, timing, food, pacing, and what I would avoid.
            </p>
          </div>
        </section>

        <section className="px-6 py-2xl lg:px-10 lg:py-3xl">
          <div className="mx-auto grid max-w-6xl gap-lg md:grid-cols-2">
            {destinationPages.map((page) => (
              <Link
                key={page.slug}
                href={`/destinations/${page.slug}`}
                className="group rounded-sm border border-navy/10 bg-ivory p-lg shadow-card transition hover:-translate-y-1 hover:shadow-float"
              >
                <p className="eyebrow">{page.eyebrow}</p>
                <h2 className="font-display text-3xl leading-tight text-navy">
                  {page.title}
                </h2>
                <p className="mt-md text-base leading-relaxed text-charcoal/70">
                  {page.description}
                </p>
                <span className="mt-lg inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Read the guide
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
