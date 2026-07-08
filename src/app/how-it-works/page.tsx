import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import { CornerAccents } from "@/components/CornerAccents";
import { GuidedTripHubSection } from "@/components/home/GuidedTripHubSection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From first call to trip hub delivery and in-trip support. See exactly what working with Carta looks like.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Carta",
    description:
      "From first call to trip hub delivery and in-trip support. See exactly what working with Carta looks like.",
    url: "/how-it-works",
  },
};

const steps = [
  {
    title: "You tell me who you are when you travel",
    body: "We talk through pace, hotels, restaurants, budget posture, past trips you loved, and the trips that missed. The point is not to fill out a form. The point is to understand you.",
  },
  {
    title: "I design the trip and make the calls",
    body: "I choose the hotel logic, map the days, work the reservations, and remove the generic. Nothing gets booked until the plan makes sense to you.",
  },
  {
    title: "The trip hub arrives before you leave",
    body: "Two weeks before departure, you get a private link with the trip on your phone: every reservation, every contact, every document, and my notes.",
  },
  {
    title: "You text me when something changes",
    body: "Flights move. Restaurants run late. A museum closes a room. You are not alone with a PDF. You have the person who built the trip.",
  },
  {
    title: "The next trip starts smarter",
    body: "Afterward, I ask what worked and what missed. Your profile gets sharper, and the next trip starts further along.",
  },
];

const checkpoints = [
  "Hotel shortlist and booking path",
  "Restaurant and experience plan",
  "Trip hub with maps, documents, and notes",
  "Calendar-ready schedule",
  "Direct support from Gabe while traveling",
];

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-36 md:pb-32">
          <Image
            src="/photos/in-transit.jpg"
            alt=""
            aria-hidden
            fill
            className="object-cover opacity-30"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/60 to-navy"
            aria-hidden
          />
          <CornerAccents />
          <div className="relative z-10 mx-auto max-w-prose text-center">
            <FadeIn>
              <p className="eyebrow">How it works</p>
              <h1 className="font-display text-[36px] font-light leading-tight text-ivory md:text-[60px]">
                The work starts before the booking and continues while you travel.
              </h1>
              <GoldRule wide className="my-8" />
              <p className="font-display text-lg italic text-ivory/65">
                The trip hub is the visible part. The calls, judgment, and
                follow-through are what make it useful.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="mx-auto max-w-prose text-center">
              <h2 className="font-display text-2xl text-navy md:text-[44px]">
                Five parts. One relationship.
              </h2>
              <p className="mt-6 text-base text-charcoal">
                This is not a handoff from one department to another. You work
                with me from the first question to the last night of the trip.
              </p>
            </FadeIn>

            <div className="mt-2xl divide-y divide-navy/10 border-y border-navy/10">
              {steps.map((step, index) => (
                <FadeIn key={step.title} className="py-lg">
                  <article className="grid gap-5 md:grid-cols-[120px_1fr] md:items-start">
                    <p className="font-display text-xl text-gold/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="font-display text-lg text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base text-charcoal">{step.body}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="grain bg-navy px-6 py-20 text-ivory md:py-2xl">
          <FadeIn className="mx-auto max-w-7xl">
            <div className="grid gap-2xl lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <h2 className="font-display text-2xl md:text-[44px]">
                  What you should have before wheels up.
                </h2>
                <p className="mt-6 text-base text-ivory/72">
                  If I have done the job well, the trip feels calm before it
                  starts. You know where things are. You know who to text. You
                  know what is next.
                </p>
              </div>
              <div className="grid gap-base sm:grid-cols-2">
                {checkpoints.map((item) => (
                  <div key={item} className="border border-gold/35 bg-ivory/5 p-base">
                    <p className="text-sm text-ivory/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <GuidedTripHubSection />

        <section className="bg-warm-bg px-6 py-20">
          <FadeIn className="mx-auto max-w-prose text-center">
            <h2 className="font-display text-2xl text-navy">
              The next step is simple.
            </h2>
            <p className="mt-6 text-base text-charcoal">
              Tell me where you want to go. I will ask a few honest questions,
              and we will know quickly whether Carta is the right fit.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-secondary">
                Tell me where you want to go
              </Link>
              <Link
                href="/the-carta"
                className="text-[11px] uppercase tracking-[0.15em] text-navy transition-colors hover:text-gold"
              >
                See the trip hub
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
