import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CompassMark } from "@/components/CompassMark";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import { AppMockup } from "@/components/AppMockup";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";

const DEMO_TRIP_URL =
  process.env.NEXT_PUBLIC_DEMO_TRIP_URL ||
  "https://www.travelbycarta.com/aspen-paris-8f3k29q7";

export const metadata: Metadata = {
  title: "Trip Hub",
  description:
    "Carta trip hubs are private phone-friendly guides with itinerary, map, documents, personal notes, and direct support from Gabe.",
  alternates: { canonical: "/the-carta" },
  openGraph: {
    title: "Trip Hub | Carta",
    description:
      "Carta trip hubs are private phone-friendly guides with itinerary, map, documents, personal notes, and direct support from Gabe.",
    url: "/the-carta",
  },
};

const moments = [
  {
    title: "Today view",
    body: "Open it on a trip day and the next thing is obvious: where you are going, when to leave, and what matters right now.",
  },
  {
    title: "Mapped context",
    body: "Hotels, restaurants, transfers, sights, and open time sit together so the day makes sense geographically.",
  },
  {
    title: "Personal notes",
    body: "What to order, who to ask for, when to arrive, and what to skip. The notes are the judgment, not decoration.",
  },
  {
    title: "Essentials",
    body: "Documents, contacts, confirmations, addresses, and backup details live where you need them, even with bad signal.",
  },
];

const guardrails = [
  "A public sample shows the product without exposing a real client trip",
  "Sensitive supplier and client details stay private",
  "The interface is proof, but the judgment is still the product",
];

export default function TheCartaPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section className="bg-ivory px-6 pb-20 pt-36 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <CompassMark size={48} variant="navy" className="mb-8" />
              <p className="eyebrow">The trip hub</p>
              <h1 className="font-display text-[42px] font-light leading-tight text-navy md:text-[72px]">
                Not an itinerary. A companion.
              </h1>
              <GoldRule className="my-8 w-16" />
              <p className="max-w-xl text-base text-charcoal">
                Every client gets a private, phone-friendly guide built around
                their trip. Reservations, documents, maps, contacts, and my
                notes. No login. No download. You open a link. It works.
              </p>
              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href={DEMO_TRIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Open the sample trip hub
                </a>
                <Link
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep transition-colors hover:text-gold"
                >
                  Tell me where you want to go
                </Link>
              </div>
            </FadeIn>
            <FadeIn className="justify-self-center lg:justify-self-end">
              <AppMockup />
            </FadeIn>
          </div>
        </section>

        <section className="grain bg-navy px-6 py-20 text-ivory md:py-2xl">
          <FadeIn className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-prose text-center">
              <h2 className="font-display text-2xl md:text-[44px]">
                What the hub is actually doing.
              </h2>
              <p className="mt-6 text-base text-ivory/72">
                It is not trying to impress you with software. It is trying to
                make the trip feel calm when you are moving.
              </p>
              <GoldRule wide className="my-8" />
            </div>
            <div className="mt-2xl grid gap-lg md:grid-cols-2 lg:grid-cols-4">
              {moments.map((item, index) => (
                <article
                  key={item.title}
                  className="border border-gold/35 bg-ivory/5 p-lg"
                >
                  <p className="font-display text-xl text-gold/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-lg text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-ivory/72">{item.body}</p>
                </article>
              ))}
            </div>
          </FadeIn>
        </section>

        <BeforeAfterSection />

        <section className="bg-warm-bg px-6 py-20 md:py-2xl">
          <FadeIn className="mx-auto max-w-prose text-center">
            <h2 className="font-display text-2xl text-navy md:text-[44px]">
              What I show publicly, and what stays private.
            </h2>
            <p className="mt-6 text-base text-charcoal">
              I want people to understand the quality of the trip hub without
              publishing the machine room. The public sample is a proof of taste,
              not a client file.
            </p>
          </FadeIn>
          <div className="mx-auto mt-2xl grid max-w-5xl gap-lg md:grid-cols-3">
            {guardrails.map((item) => (
              <FadeIn key={item}>
                <div className="h-full border border-navy/15 bg-ivory p-lg">
                  <p className="text-base text-charcoal">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-2xl">
          <Image
            src="/photos/midnight-help.jpg"
            alt="Hands holding a glowing phone in the back seat of a taxi at night, rain-blurred city lights outside"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-navy/65" aria-hidden />
          <FadeIn className="relative z-10 mx-auto max-w-prose text-center">
            <blockquote className="font-display text-md italic leading-[1.5] text-ivory md:text-lg">
              &ldquo;Something goes wrong at midnight in Tokyo, I&apos;m the one who fixes it.&rdquo;
            </blockquote>
            <p className="mt-6 text-base text-ivory/72">
              That line matters more when the button to reach me is sitting
              inside the guide you already have open.
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
