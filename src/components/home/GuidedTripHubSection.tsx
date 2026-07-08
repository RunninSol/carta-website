import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { GoldRule } from "../GoldRule";

const steps = [
  {
    title: "Today view",
    body: "The first screen answers the question you actually have in the moment: what is next, where do I go, and when should I leave?",
  },
  {
    title: "Mapped context",
    body: "Restaurants, hotels, museums, transfers, and open time sit on the same map, so the day makes sense geographically.",
  },
  {
    title: "Personal notes",
    body: "This is where the judgment shows up. What to order. What to skip. Why this hotel fits you and not someone else.",
  },
  {
    title: "Essentials",
    body: "Contacts, documents, confirmations, and backup details live where you need them. No login. No download. Just the link.",
  },
];

const DEMO_TRIP_URL =
  process.env.NEXT_PUBLIC_DEMO_TRIP_URL ||
  "https://www.travelbycarta.com/aspen-paris-8f3k29q7";

export function GuidedTripHubSection() {
  return (
    <section className="bg-ivory px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto grid max-w-7xl gap-2xl lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <h2 className="font-display text-lg text-navy md:text-[48px]">
            What to notice when you open the sample.
          </h2>
          <p className="mt-6 text-base text-charcoal">
            I am not showing the trip hub because the interface is the secret.
            I am showing it because the care becomes obvious when the details
            are organized around the traveler.
          </p>
          <GoldRule className="my-8 w-16" />
          <div className="flex flex-wrap gap-5">
            <a
              href={DEMO_TRIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Open the sample trip hub
            </a>
            <Link
              href="/the-carta"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep transition-colors hover:text-gold"
            >
              See how the hub works
            </Link>
          </div>
        </div>

        <div className="grid gap-base sm:grid-cols-2">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="border border-navy/15 bg-warm-bg p-lg"
            >
              <p className="font-display text-xl text-gold/60">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg text-navy">
                {step.title}
              </h3>
              <p className="mt-4 text-sm text-charcoal">{step.body}</p>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
