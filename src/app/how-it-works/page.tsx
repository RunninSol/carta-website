import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import { CornerAccents } from "@/components/CornerAccents";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From discovery call to post-trip debrief. Here is exactly what working with Carta looks like, step by step.",
};

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    duration: "20 minutes",
    body: "I learn how you travel. Cuisine preferences, accommodation style, pace, interests, budget posture, past trips you loved and the ones that disappointed. The more detail, the better your trip hub.",
    side: "left",
  },
  {
    num: "02",
    title: "Intake Profile",
    duration: "At your pace",
    body: "You complete a detailed profile form. Dietary needs, companion preferences, airline status, accessibility requirements. This lives in your file and gets sharper with every trip we take together.",
    side: "right",
  },
  {
    num: "03",
    title: "Trip Design",
    duration: "3 to 5 days",
    body: "I build the trip structure. Routing, accommodation, signature experiences. You review and approve before anything is booked. Nothing happens until you say yes.",
    side: "left",
  },
  {
    num: "04",
    title: "Accommodation & Booking",
    duration: "1 to 2 weeks",
    body: "I work with preferred hotel partnerships: Aman, Four Seasons, Rosewood, Relais and Chateaux. The right room at the right rate, often with upgrades and amenity credits you cannot get booking direct.",
    side: "right",
  },
  {
    num: "05",
    title: "Building Your Trip Hub",
    duration: "1 week",
    body: "I start wide and cut hard: remove the generic, add the insider. I verify what is still open, attempt reservations, and write my own notes on every entry. The result reads like a friend who lives there wrote it for you.",
    side: "left",
  },
  {
    num: "06",
    title: "Delivery",
    duration: "T-14 days",
    body: "Two weeks before departure, your trip hub arrives. A private link, no login, no download. Open it on your phone the night before you leave.",
    side: "right",
  },
  {
    num: "07",
    title: "In-Trip Support",
    duration: "Your entire trip",
    body: "Text me, I answer. You call, I pick up. Something goes wrong at midnight in Tokyo, I am the one who fixes it. Response hours are agreed at onboarding, based on your itinerary.",
    side: "left",
  },
  {
    num: "08",
    title: "Post-Trip Debrief",
    duration: "15 minutes",
    body: "I want to know what was right and what missed. Every debrief makes the next trip better. This is how the relationship improves over time, and how your trip hub gets more yours each time.",
    side: "right",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-36 md:pb-32">
          <CornerAccents />
          <div className="relative z-10 mx-auto max-w-prose text-center">
            <FadeIn>
              <p className="eyebrow">The Carta Method</p>
              <h1 className="font-display text-[36px] font-light leading-tight text-ivory md:text-[60px]">
                From our first call to your last night.
              </h1>
              <GoldRule wide className="my-8" />
              <p className="font-display text-lg italic text-ivory/60">
                Here is exactly what working with Carta looks like.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-5xl">
            {/* Desktop: alternating left/right. Mobile: stacked */}
            <div className="relative">
              {/* Center line (desktop only) */}
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/20 lg:block" />

              <div className="space-y-16 lg:space-y-0">
                {steps.map((step, i) => (
                  <FadeIn key={step.num}>
                    <div
                      className={`relative grid lg:grid-cols-2 lg:gap-16 lg:py-12 ${
                        i % 2 === 1 ? "lg:[direction:rtl]" : ""
                      }`}
                    >
                      {/* Content */}
                      <div
                        className={`lg:[direction:ltr] ${
                          i % 2 === 0
                            ? "lg:pr-12 lg:text-right"
                            : "lg:pl-12 lg:text-left"
                        }`}
                      >
                        <p className="font-display text-4xl text-gold">{step.num}</p>
                        <h2 className="mt-2 font-display text-xl text-navy">
                          {step.title}
                        </h2>
                        <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-gold/70">
                          {step.duration}
                        </p>
                        <GoldRule
                          className={`my-5 w-10 ${
                            i % 2 === 0 ? "lg:ml-auto" : ""
                          }`}
                        />
                        <p className="text-base text-charcoal">{step.body}</p>
                      </div>

                      {/* Center dot (desktop only) */}
                      <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold bg-ivory lg:block" />

                      {/* Spacer column */}
                      <div className="hidden lg:block" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bridge to next page */}
        <section className="bg-warm-bg px-6 py-20">
          <FadeIn className="mx-auto max-w-prose text-center">
            <p className="eyebrow">What you receive</p>
            <h2 className="font-display text-2xl text-navy">
              See what a trip hub looks like.
            </h2>
            <p className="mt-6 text-base text-charcoal">
              The process ends with your trip hub: a private digital guide built
              for this trip, for you. Not a template. Not a PDF. A named guide
              written around who you are.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/the-carta" className="btn-secondary">
                See what a trip hub looks like
              </Link>
              <Link
                href="/contact"
                className="text-[11px] uppercase tracking-[0.15em] text-navy transition-colors hover:text-gold"
              >
                Book a Discovery Call
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
