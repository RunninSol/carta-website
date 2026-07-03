import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CompassMark } from "@/components/CompassMark";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import { AppMockup } from "@/components/AppMockup";
import { StrikeThrough } from "@/components/StrikeThrough";

const DEMO_TRIP_URL =
  process.env.NEXT_PUBLIC_DEMO_TRIP_URL ||
  "https://www.travelbycarta.com/aspen-paris-8f3k29q7";

export const metadata: Metadata = {
  title: "The Carta",
  description:
    "Your trip hub. A private digital guide, built for this trip, for you. Not an itinerary. A companion.",
};

const sections = [
  {
    num: "01",
    title: "Your Itinerary",
    desc: "The spine of the trip. Flights, transfers, check-ins, reservations, and activities, organized day by day with times, confirmation codes, and a status on every item. Confirmed looks confirmed. An idea looks like an idea.",
  },
  {
    num: "02",
    title: "Today",
    desc: "Open the app on a trip day and it lands on that day, with an Up Next banner for whatever is coming and a leave-by time so you're never rushing to a table I worked to get you.",
  },
  {
    num: "03",
    title: "My Picks",
    desc: "Restaurants, bars, shops, and sights I chose for you, filtered by category, each with my personal note. Save one and the app asks which day and what time. It joins your itinerary.",
  },
  {
    num: "04",
    title: "The Map",
    desc: "Everything placed on one map, marked by type and status. Tap a day and the map shows that day. Directions hand off to the maps app your phone already uses.",
  },
  {
    num: "05",
    title: "Your Documents",
    desc: "Boarding passes, hotel confirmations, tickets. Attached to the reservation they belong to, one tap away, no digging through email at the front desk.",
  },
  {
    num: "06",
    title: "Getting Around",
    desc: "Transport notes, key phrases, which neighborhoods are walkable and which aren't. The things guidebooks skip. Plus Essentials: emergency numbers, the 24-hour pharmacy, your hotel's address ready to show a driver.",
  },
  {
    num: "07",
    title: "My Notes",
    desc: "On every entry. What to order, when to arrive, what to skip, who to ask for. Written by me, the person who built your trip, not pulled from reviews.",
  },
];

const pocketFeatures = [
  {
    title: "Works offline",
    desc: "On a plane or in a dead zone, your trip hub still opens with everything in it. It refreshes itself whenever you have signal.",
  },
  {
    title: "Lives on your home screen",
    desc: "Add it from Safari's share menu and it opens full screen with a Carta compass icon, like any app on your phone. No app store.",
  },
  {
    title: "Show the driver",
    desc: "Any address, full screen, in large type, with the ask phrase in the local language. Hold up your phone. Done.",
  },
  {
    title: "Add to calendar",
    desc: "One tap sends the whole trip to your phone's calendar: times, addresses, confirmation codes, my notes.",
  },
  {
    title: "Live flight status",
    desc: "Every flight in your itinerary links to live tracking. Delays, gates, all of it, without opening another app.",
  },
  {
    title: "Make it yours",
    desc: "Add your own plans: a run, a nap, a place a friend mentioned. They land on your timeline, tagged as yours, and I see nothing unless you ask me to book it.",
  },
  {
    title: "Updates while you travel",
    desc: "I can change a time, swap a reservation, or drop in a new pick from wherever I am. You refresh, it's there.",
  },
  {
    title: "I'm one tap away",
    desc: "Text or call me from inside the app. Plus a one-tap save so I land in your contacts as Gabe, Carta Travel.",
  },
];

const comparisons = [
  {
    generic: "200 restaurant results",
    carta: "18 restaurants, the ones right for you",
  },
  {
    generic: "User review aggregates",
    carta: "My personal notes on every entry",
  },
  {
    generic: 'Generic "top sights"',
    carta: "Filtered to your stated interests",
  },
  {
    generic: "No reservation status",
    carta: "Every bookable item, handled by me",
  },
  {
    generic: "Same for every user",
    carta: "Named for you, rebuilt every trip",
  },
];

export default function TheCartaPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero */}
        <section className="bg-ivory px-6 pb-20 pt-36 md:pb-32">
          <div className="mx-auto max-w-prose text-center">
            <FadeIn>
              <CompassMark size={48} variant="navy" className="mx-auto mb-8" />
              <p className="eyebrow">The Product</p>
              <h1 className="font-display text-[48px] font-light italic text-navy md:text-[72px]">
                Your trip hub.
              </h1>
              <GoldRule wide className="my-8" />
              <p className="font-display text-lg italic text-mid-gray">
                A private digital guide, built for this trip, for you.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* What's inside (two column) */}
        <section className="bg-warm-bg px-6 py-20 md:py-2xl">
          <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <p className="eyebrow">What&apos;s Inside</p>
              <h2 className="font-display text-2xl text-navy md:text-[40px]">
                Seven sections. One guide. Built for the way you travel.
              </h2>
              <div className="mt-12 space-y-8">
                {sections.map((s) => (
                  <div key={s.num} className="flex gap-6">
                    <span className="mt-1 shrink-0 font-display text-xl text-gold/60">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-navy">{s.title}</h3>
                      <p className="mt-1 text-base text-charcoal">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn className="lg:sticky lg:top-24">
              <AppMockup />
            </FadeIn>
          </div>
        </section>

        {/* In your pocket */}
        <section className="bg-warm-bg px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <p className="eyebrow">In Your Pocket</p>
              <h2 className="font-display text-2xl text-navy md:text-[40px]">
                Built for the day you&apos;re actually traveling.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-charcoal">
                A trip hub earns its place on the worst travel day, not the
                best one. Dead battery bars, a driver who doesn&apos;t speak
                English, a gate change at midnight. It&apos;s built for that.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
              {pocketFeatures.map((f) => (
                <FadeIn key={f.title} className="bg-warm-bg">
                  <div className="h-full bg-ivory p-6">
                    <h3 className="font-display text-lg text-navy">{f.title}</h3>
                    <div className="my-3 h-px w-8 bg-gold/50" />
                    <p className="text-sm leading-relaxed text-charcoal">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Midnight band */}
        <section className="relative overflow-hidden">
          <div className="relative h-[380px] md:h-[480px]">
            <Image
              src="/photos/midnight-help.jpg"
              alt="Hands holding a glowing phone in the back seat of a taxi at night, rain-blurred city lights outside"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/55" aria-hidden />
            <FadeIn className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <blockquote className="max-w-2xl font-display text-md italic leading-[1.5] text-ivory md:text-lg">
                &ldquo;Something goes wrong at midnight in Tokyo, I&apos;m the
                one who fixes it.&rdquo;
              </blockquote>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Gabe &middot; one tap away, inside your trip hub
              </p>
            </FadeIn>
          </div>
        </section>

        {/* The difference */}
        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-3xl">
            <FadeIn className="text-center">
              <p className="eyebrow">The Difference</p>
              <h2 className="font-display text-2xl text-navy md:text-[40px]">
                Not a travel app. Yours.
              </h2>
            </FadeIn>

            <FadeIn className="mt-12">
              {/* Header row */}
              <div className="grid grid-cols-2 border-b border-navy/10 pb-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mid-gray">
                  Generic travel app
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  Your trip hub
                </p>
              </div>
              {/* Data rows */}
              {comparisons.map((row) => (
                <div
                  key={row.generic}
                  className="grid grid-cols-2 border-b border-navy/8 py-5"
                >
                  <p className="pr-4 text-sm text-mid-gray">
                    <StrikeThrough>{row.generic}</StrikeThrough>
                  </p>
                  <p className="text-sm font-medium text-navy">{row.carta}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* Sample entry */}
        <section className="bg-navy px-6 py-20 md:py-2xl">
          <FadeIn className="mx-auto max-w-prose">
            <p className="eyebrow text-center">Sample Entry</p>
            <h2 className="text-center font-display text-2xl text-ivory">
              This is what an entry looks like.
            </h2>

            <div className="mt-12 bg-navy-mid/40 p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl text-ivory">
                    Septime
                  </h3>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-mid-gray">
                    Dinner · Modern French · Paris
                  </p>
                </div>
                <span className="shrink-0 rounded-sm bg-navy px-3 py-1 text-[9px] uppercase tracking-wider text-ivory">
                  Confirmed · 8:30pm
                </span>
              </div>

              <div className="my-5 h-px w-full bg-ivory/10" />

              <p className="text-[10px] uppercase tracking-[0.15em] text-gold/60">
                A note from Gabe
              </p>
              <p className="mt-3 font-display text-base italic leading-relaxed text-ivory/80">
                &ldquo;Table for two. Ask for Claire when you arrive, she runs
                the floor and takes good care of my guests. Order the tasting
                menu and let them pace it. Don&apos;t fill up on the bread, the
                fish course is the one you&apos;re here for.&rdquo;
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-ivory/40">
                Gabe
              </p>

              <div className="mt-6 flex gap-3">
                <span className="rounded-sm border border-ivory/20 px-3 py-1 text-[9px] uppercase tracking-wider text-ivory/50">
                  Map
                </span>
                <span className="rounded-sm border border-ivory/20 px-3 py-1 text-[9px] uppercase tracking-wider text-ivory/50">
                  Save
                </span>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-ivory/50">
              Every restaurant, sight, and experience in your trip hub looks
              like this.
            </p>
          </FadeIn>
        </section>

        {/* Tech note */}
        <section className="bg-warm-bg px-6 py-20">
          <FadeIn className="mx-auto max-w-prose text-center">
            <p className="eyebrow">The Technology</p>
            <h2 className="font-display text-2xl text-navy">
              No app store required.
            </h2>
            <p className="mt-6 text-base text-charcoal">
              Your trip hub is a private web link, built for your trip alone
              and delivered about two weeks before departure. No download. No
              account. Open it on any phone, tablet, or laptop. Add it to your
              home screen and it behaves like an app. Lose signal and it keeps
              working anyway.
            </p>
            <GoldRule wide className="my-10" />
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={DEMO_TRIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Explore a sample trip hub
              </a>
              <Link
                href="/contact"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:text-gold"
              >
                Tell me where you want to go &rarr;
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
