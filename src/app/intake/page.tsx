import type { Metadata } from "next";
import Link from "next/link";
import { CartaIntakeEmbed } from "@/components/CartaIntakeEmbed";
import { CompassMark } from "@/components/CompassMark";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { GoldRule } from "@/components/GoldRule";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Client Intake",
  description:
    "Carta's private client intake. Tell Gabe how you travel so every recommendation can be built around you.",
  alternates: { canonical: "/intake" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Client Intake | Carta",
    description:
      "Tell me who you are when you travel. I read every answer myself.",
    url: "/intake",
  },
};

const beforeYouBegin = [
  "Ten quiet minutes is usually enough.",
  "Rough dates and half-formed ideas are completely fine.",
  "Do not enter passport numbers, Known Traveler Numbers, or payment details. I collect those securely later.",
];

export default function IntakePage() {
  return (
    <>
      <Navigation />
      <main id="main" className="overflow-x-hidden bg-warm-bg">
        <section className="px-6 pb-14 pt-32 md:pb-20 md:pt-40">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <CompassMark size={44} variant="navy" className="mx-auto mb-7" />
            <p className="eyebrow">Client intake</p>
            <h1 className="font-display text-[40px] font-light leading-[1.05] text-navy md:text-[64px]">
              Tell me who you are when you travel.
            </h1>
            <GoldRule wide className="my-8" />
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-charcoal md:text-lg">
              Every trip I build starts here, because the right hotel, restaurant,
              or flight depends on the person taking it. Answer what you want, skip
              what you do not know yet. I read every word myself.
            </p>
          </FadeIn>
        </section>

        <section className="px-4 pb-24 sm:px-6 md:pb-32">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(240px,0.36fr)_minmax(0,1fr)] lg:gap-14">
            <FadeIn className="min-w-0">
              <aside className="lg:sticky lg:top-28">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                  Before you begin
                </p>
                <h2 className="font-display text-lg font-light leading-tight text-navy md:text-xl">
                  You do not need every answer yet.
                </h2>
                <div className="my-7 h-px w-12 bg-gold" />
                <ul className="space-y-5">
                  {beforeYouBegin.map((item) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-charcoal">
                      <span className="mt-[0.7em] h-px w-4 shrink-0 bg-gold" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-l-2 border-gold pl-5">
                  <p className="font-display text-lg italic leading-relaxed text-navy/75">
                    Your answers go to Carta&apos;s private client records. I use them
                    to plan your travel, not to fill an email list.
                  </p>
                </div>

                <p className="mt-8 text-xs leading-relaxed text-mid-gray">
                  This form is securely hosted by Typeform. If it does not load,
                  you can{" "}
                  <a
                    href="https://form.typeform.com/to/AnCEO5lI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy underline decoration-gold/60 underline-offset-4 hover:text-gold-deep"
                  >
                    open it in a new window
                  </a>
                  .
                </p>
              </aside>
            </FadeIn>

            <FadeIn className="min-w-0">
              <CartaIntakeEmbed />
            </FadeIn>
          </div>
        </section>

        <section className="bg-ivory px-6 py-12">
          <FadeIn className="mx-auto max-w-prose text-center">
            <p className="font-display text-xl italic text-navy">
              Need to ask me something before you start?
            </p>
            <p className="mt-3 text-sm text-mid-gray">
              Email{" "}
              <a
                href="mailto:gabe@travelbycarta.com"
                className="text-navy underline decoration-gold/50 underline-offset-4 hover:text-gold-deep"
              >
                gabe@travelbycarta.com
              </a>{" "}
              or return to the{" "}
              <Link
                href="/contact"
                className="text-navy underline decoration-gold/50 underline-offset-4 hover:text-gold-deep"
              >
                contact page
              </Link>
              .
            </p>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
