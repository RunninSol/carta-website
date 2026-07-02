import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { GoldRule } from "../GoldRule";

const steps = [
  {
    num: "01",
    title: "You tell me who you are",
    body: "A 30-minute call. Cuisine preferences, travel pace, past trips you loved, the ones that missed. The more I know, the better your trip.",
  },
  {
    num: "02",
    title: "I build your trip",
    body: "I handle the research, the bookings, the reservations. Hotels through preferred partnerships, restaurants with confirmed tables. You review and confirm. I handle the rest.",
  },
  {
    num: "03",
    title: "Your trip hub arrives",
    body: "Two weeks before departure, you get a trip hub. A private, phone-friendly guide built for your specific trip. Every reservation, every contact, my personal notes on each day. No login. No download. You open a link. It works.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="grain bg-navy px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-7xl">
        <p className="eyebrow text-center">How It Works</p>
        <h2 className="text-center font-display text-lg text-ivory md:text-[48px]">
          Three steps. That&apos;s the whole thing.
        </h2>

        <div className="mt-2xl grid gap-2xl md:grid-cols-3 md:gap-lg">
          {steps.map((step) => (
            <div key={step.num} className="text-center md:text-left">
              <p className="font-display text-[48px] font-medium text-gold">{step.num}</p>
              <GoldRule className="my-lg w-12 md:mx-0 md:ml-0" />
              <h3 className="font-display text-md text-ivory">{step.title}</h3>
              <p className="mt-4 text-base text-ivory/85">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-2xl text-center">
          <Link
            href="/how-it-works"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-soft"
          >
            See the full process
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
