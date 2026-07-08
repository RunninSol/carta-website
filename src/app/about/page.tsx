import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CompassMark } from "@/components/CompassMark";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import { CornerAccents } from "@/components/CornerAccents";

export const metadata: Metadata = {
  title: "About",
  description:
    "Carta is Gabe Rozavski's travel advisory. A person who picks up the phone, remembers how you travel, and builds the trip around you.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Carta",
    description:
      "Carta is Gabe Rozavski's travel advisory. A person who picks up the phone, remembers how you travel, and builds the trip around you.",
    url: "/about",
  },
};

const principles = [
  "Specific beats generic",
  "The judgment is the product",
  "The trip should feel calm while you are in it",
  "Care is only real if someone answers",
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section className="bg-ivory px-6 pb-20 pt-36 md:pb-32">
          <div className="mx-auto max-w-prose text-center">
            <FadeIn>
              <CompassMark size={48} variant="navy" className="mx-auto mb-8" />
              <h1 className="font-display text-[36px] italic font-light leading-tight text-navy md:text-[56px]">
                I named it Carta because it means maps.
              </h1>
              <GoldRule wide className="my-8" />
              <p className="font-display text-lg italic text-mid-gray">
                That felt right for a travel advisor. A company named for the
                actual work: helping people find their way, specifically.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-warm-bg px-6 py-20 md:py-2xl">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <h2 className="font-display text-2xl text-navy">
                The problem was never that people lacked recommendations.
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
                  The worst trips were the ones where I had forty tabs, someone
                  else&apos;s blog, and no one to call when the plan moved. I would
                  come home tired, and somewhere in the back of my mind I would
                  know I missed the thing I actually wanted.
                </p>
                <p>
                  Carta exists for that gap. I wanted to be the well-traveled
                  friend for other people. The one who has been there, who knows
                  the guy, who remembers that you like to eat dinner early and
                  that you hate paying for breakfast.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
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
                    alt="Carta chart of Paris: avenues radiating from a gold center"
                    width={1200}
                    height={1500}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="h-auto w-full shadow-card"
                  />
                )}
                <div className="mt-6 border-l-2 border-gold pl-6">
                  <p className="font-display text-lg italic text-navy/70">
                    &ldquo;The more specific the recommendation, the more trusted the source.&rdquo;
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold-deep">
                    Gabe, Founder, Carta
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="grain bg-navy px-6 py-20 text-ivory md:py-2xl">
          <FadeIn className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-prose text-center">
              <h2 className="font-display text-2xl md:text-[48px]">
                What I believe about travel.
              </h2>
              <p className="mt-6 text-base text-ivory/72">
                The technology is useful because it keeps the care close. It is
                not the reason the trip works.
              </p>
              <GoldRule wide className="my-8" />
            </div>
            <div className="mt-2xl grid gap-lg md:grid-cols-2 lg:grid-cols-4">
              {principles.map((item) => (
                <div key={item} className="border border-gold/35 bg-ivory/5 p-lg">
                  <p className="font-display text-lg text-ivory">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <FadeIn className="mx-auto max-w-prose">
            <h2 className="font-display text-2xl text-navy">
              The network behind the care.
            </h2>
            <div className="prose-carta mt-8 text-base text-charcoal">
              <p>
                Carta is affiliated with WorldVia Travel Group, one of the
                leading host travel networks in the United States. That gives my
                clients access to preferred hotel relationships, upgrade
                programs, and supplier support that direct booking does not
                always reach.
              </p>
              <p>
                I use those levers quietly. A better room conversation. A note
                to the property. A breakfast credit. A human to call when the
                booking needs attention. The point is not to brag about access.
                The point is to make the trip feel cared for.
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-2xl">
          <CornerAccents />
          <FadeIn className="relative z-10 mx-auto max-w-narrow text-center">
            <CompassMark size={40} variant="gold" className="mx-auto mb-8" />
            <h2 className="font-display text-2xl text-ivory md:text-[40px]">
              I am starting small. On purpose.
            </h2>
            <p className="mx-auto mt-8 max-w-md text-base text-ivory/85">
              The value of Carta is in the relationship and the quality of the
              trip hub itself. Those do not scale by accident.
            </p>
            <GoldRule wide className="my-10" />
            <Link href="/contact" className="btn-primary">
              Tell me where you want to go
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
