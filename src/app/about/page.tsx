import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CompassMark } from "@/components/CompassMark";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import { CornerAccents } from "@/components/CornerAccents";

export const metadata: Metadata = {
  title: "About",
  description:
    "I named it Carta because it means maps. A travel advisor built around one person who picks up the phone, remembers what time you like to eat dinner, and gets it right.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ivory px-6 pb-20 pt-36 md:pb-32">
          <div className="mx-auto max-w-prose text-center">
            <FadeIn>
              <CompassMark size={48} variant="navy" className="mx-auto mb-8" />
              <h1 className="font-display text-[36px] italic font-light leading-tight text-navy md:text-[56px]">
                I named it Carta because it means maps.
              </h1>
              <GoldRule wide className="my-8" />
              <p className="font-display text-lg italic text-mid-gray">
                That felt right for a travel advisor. A company named for the
                thing it actually does: help people find their way. Specifically.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Origin story */}
        <section className="bg-warm-bg px-6 py-20 md:py-2xl">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <p className="eyebrow">The Origin</p>
              <h2 className="font-display text-2xl text-navy">
                It started with the best trip I ever took.
              </h2>
              <div className="prose-carta mt-8 text-base text-charcoal">
                <p>
                  The best trip I ever took was the one where a friend who had
                  lived there for years told me exactly what to do. Not the
                  best-reviewed restaurant on Google. His restaurant. The place
                  he went on a Tuesday with his wife. The bar where they knew
                  his name.
                </p>
                <p>
                  The worst trips were the ones where I had a browser window,
                  forty tabs, and someone else&apos;s blog. I&apos;d come home
                  tired, and somewhere in the back of my mind I&apos;d know I&apos;d
                  missed the thing I actually wanted.
                </p>
                <p>
                  That gap is the whole reason Carta exists. I wanted to be the
                  well-traveled friend for other people. The one who has been
                  there, who knows the guy, who remembers that you like to eat
                  dinner early and that you hate paying for breakfast.
                </p>
                <p>
                  The name says what it does. A carta is a map. A chart for
                  finding your way. I wanted a company named for the actual work,
                  not a metaphor, not a tagline. Just the work.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Founder card: atelier photo when available, chart art until then */}
              <div className="relative">
                {existsSync(
                  path.join(process.cwd(), "public", "photos", "atelier.jpg")
                ) ? (
                  <Image
                    src="/photos/atelier.jpg"
                    alt="A travel advisor's desk at evening: an open notebook, an unrolled map of Paris, warm lamp light"
                    width={1250}
                    height={768}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="h-auto w-full shadow-card"
                  />
                ) : (
                  <Image
                    src="/editorial/paris.png"
                    alt="Carta chart of Paris: avenues radiating from a gold étoile"
                    width={1200}
                    height={1500}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="h-auto w-full shadow-card"
                  />
                )}
                <div className="mt-6 border-l-2 border-gold pl-6">
                  <p className="font-display text-lg italic text-navy/70">
                    &ldquo;The more specific the recommendation, the more
                    trusted the source. I built a company on that
                    truth.&rdquo;
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold-deep">
                    Gabe, Founder, Carta
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-gold/20" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What makes Carta different */}
        <section className="bg-navy px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <p className="eyebrow text-center">What Makes It Different</p>
              <h2 className="text-center font-display text-2xl text-ivory md:text-[48px]">
                You get a trip hub. And you get me. Directly.
              </h2>
              <div className="prose-carta mx-auto mt-10 max-w-prose text-base text-ivory/75">
                <p>
                  The most common question I get is whether I&apos;m a travel
                  agent. Yes. I&apos;m a travel advisor. I book hotels,
                  restaurants, flights, experiences. I&apos;m paid by the hotels
                  and partners I book, not by you. For most trips, nothing
                  beyond the trip itself.
                </p>
                <p>
                  But that is not the whole story, and it is not what makes
                  this different. Every client also gets a trip hub. A private,
                  phone-friendly guide built for their specific trip. Every
                  reservation, every contact, every neighborhood mapped around
                  what they actually care about. My personal notes on each day.
                  What to order, what to skip, what time to leave the hotel. No
                  login. No download. You open a link. It works.
                </p>
                <p>
                  And you get me. Directly. You text me, I answer. You call me,
                  I pick up. Something goes wrong at midnight in Tokyo, I am the
                  one who fixes it.
                </p>
                <p>
                  The Ritz Paris costs $2,200 a night. Le Grand Mazarin costs
                  $650. I have put clients in both and watched them have
                  completely different, completely perfect trips, because the
                  right hotel has nothing to do with the price tag. The Ritz is
                  for someone who wants old-world glamour, Place Vendome, the
                  suite where Coco Chanel lived for thirty years. Le Grand
                  Mazarin is for someone who wants Le Marais energy, a marble
                  pool, a lobby bar that feels like a private club. The question
                  I always ask: when you picture yourself in Paris, where are
                  you sitting? The answer tells me everything I need to know.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* WorldVia affiliation */}
        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <FadeIn className="mx-auto max-w-prose">
            <p className="eyebrow">Affiliations</p>
            <h2 className="font-display text-2xl text-navy">
              The network behind Carta.
            </h2>
            <div className="prose-carta mt-8 text-base text-charcoal">
              <p>
                Carta is affiliated with WorldVia Travel Group, one of the
                leading host travel networks in the United States. That gives
                my clients access to preferred hotel rates, upgrade programs,
                and supplier relationships that are not available through direct
                booking.
              </p>
              <p>
                WorldVia partnerships include Aman, Four Seasons, Rosewood, and
                Relais &amp; Chateaux, among others. When you book through
                Carta, you often receive room upgrades, amenity credits, and
                early check-in that simply are not available to the public. I
                use every one of those levers, quietly, in the background,
                while you are at dinner.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.2em] text-mid-gray">
                Affiliated with WorldVia Travel Group
              </span>
              <span className="text-mid-gray/40">&middot;</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-mid-gray">
                IATA
              </span>
              <span className="text-mid-gray/40">&middot;</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-mid-gray">
                Seller of Travel
              </span>
            </div>
          </FadeIn>
        </section>

        {/* Starting small */}
        <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-2xl">
          <CornerAccents />
          <FadeIn className="relative z-10 mx-auto max-w-narrow text-center">
            <CompassMark size={40} variant="gold" className="mx-auto mb-8" />
            <h2 className="font-display text-2xl text-ivory md:text-[40px]">
              I am starting small. On purpose.
            </h2>
            <div className="prose-carta mx-auto mt-8 max-w-md text-base text-ivory/85">
              <p>
                The value of Carta is in the relationship and the quality of the
                trip hub itself. Those do not scale by accident. I will grow
                when I can grow without compromising either.
              </p>
              <p>
                Right now I work with a deliberately small number of clients. If
                that sounds like what you are looking for, the first step is a
                twenty-minute call. No pressure, no pitch. Just a conversation
                about where you want to go.
              </p>
            </div>
            <GoldRule wide className="my-10" />
            <a href="/contact" className="btn-primary">
              Tell me where you want to go
            </a>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
