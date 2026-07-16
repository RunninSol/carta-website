import Link from "next/link";
import { CompassMark } from "@/components/CompassMark";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { allSeoPages, type SeoContentPage } from "@/content/seoPages";

export function SeoGuidePage({ page }: { page: SeoContentPage }) {
  const curatedSlugs = page.related ?? [];
  const curatedSlugSet = new Set(curatedSlugs);
  const relatedPages = [
    ...curatedSlugs
      .map((slug) => allSeoPages.find((candidate) => candidate.slug === slug))
      .filter((candidate): candidate is SeoContentPage => Boolean(candidate)),
    ...allSeoPages.filter(
      (candidate) => candidate.slug !== page.slug && !curatedSlugSet.has(candidate.slug),
    ),
  ];

  return (
    <>
      <Navigation />
      <main id="main" className="bg-warm-bg">
        <section className="navy-gradient grain px-6 pb-2xl pt-32 text-ivory lg:px-10 lg:pb-3xl">
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-lg flex justify-center">
              <CompassMark size={64} variant="gold" />
            </div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              {page.title}
            </h1>
            <p className="mx-auto mt-lg max-w-3xl text-lg leading-relaxed text-ivory/75 md:text-xl">
              {page.intro}
            </p>
            <div className="mt-xl flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Tell me where you want to go
              </Link>
              <Link href="/the-carta" className="text-sm uppercase tracking-[0.18em] text-ivory/70 transition hover:text-ivory">
                See the trip hub
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-2xl lg:px-10 lg:py-3xl">
          <div className="mx-auto grid max-w-6xl gap-xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-sm border border-navy/10 bg-ivory p-lg shadow-card">
              <p className="eyebrow">Best for</p>
              <ul className="space-y-sm text-charcoal/75">
                {page.bestFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-px w-6 shrink-0 bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="prose-carta rounded-sm border border-navy/10 bg-ivory p-lg shadow-card">
              <p className="eyebrow">Carta take</p>
              <p className="font-display text-2xl leading-snug text-navy md:text-3xl">
                {page.cartaTake}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-ivory px-6 py-2xl lg:px-10 lg:py-3xl">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-center">How I think about it</p>
            <div className="mt-xl grid gap-lg md:grid-cols-2">
              <InfoBlock title="When to go" body={page.timing} />
              <InfoBlock title="Hotel logic" body={page.hotelLogic} />
              <InfoBlock title="Food and reservations" body={page.foodLogic} />
              <InfoBlock title="What I would avoid" body={page.avoid} />
            </div>
          </div>
        </section>

        <section className="px-6 py-2xl lg:px-10 lg:py-3xl">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-center">Planning notes</p>
            <div className="mt-xl grid gap-lg md:grid-cols-3">
              {page.highlights.map((highlight) => (
                <article key={highlight.title} className="rounded-sm border border-navy/10 bg-ivory p-lg shadow-card">
                  <h2 className="font-display text-lg leading-tight text-navy">{highlight.title}</h2>
                  <p className="mt-md text-base leading-relaxed text-charcoal/70">
                    {highlight.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-2xl text-ivory lg:px-10 lg:py-3xl">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-xl lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="eyebrow">Trip shapes</p>
                <h2 className="font-display text-4xl leading-tight md:text-5xl">
                  The page is not the plan. It is the first cut.
                </h2>
                <p className="mt-md text-ivory/65">
                  I use these guides as starting points, then turn the right version into a private trip hub with dates, addresses, bookings, notes, and support.
                </p>
              </div>
              <div className="grid gap-md">
                {page.tripShapes.map((shape) => (
                  <article key={shape.title} className="border border-ivory/10 bg-ivory/[0.04] p-lg">
                    <h3 className="font-display text-2xl text-gold">{shape.title}</h3>
                    <p className="mt-sm text-base leading-relaxed text-ivory/70">
                      {shape.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-2xl lg:px-10 lg:py-3xl">
          <div className="mx-auto max-w-6xl rounded-sm border border-navy/10 bg-ivory p-lg shadow-card md:p-xl">
            <p className="eyebrow">Related planning pages</p>
            <div className="mt-md flex flex-wrap gap-3">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={`${relatedPage.kind}-${relatedPage.slug}`}
                  href={`/${relatedPage.kind === "itinerary" ? "itineraries" : "destinations"}/${relatedPage.slug}`}
                  className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy transition hover:border-gold hover:text-gold"
                >
                  {relatedPage.seoTitle}
                </Link>
              ))}
              <Link
                href="/destinations"
                className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy transition hover:border-gold hover:text-gold"
              >
                All destination guides
              </Link>
              <Link
                href="/itineraries"
                className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy transition hover:border-gold hover:text-gold"
              >
                All itinerary guides
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <article className="border-l border-gold/60 pl-lg">
      <h2 className="font-display text-2xl text-navy">{title}</h2>
      <p className="mt-sm text-base leading-relaxed text-charcoal/70">{body}</p>
    </article>
  );
}
