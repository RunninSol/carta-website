import Link from "next/link";
import { FadeIn } from "../FadeIn";

export function CostClaritySection() {
  return (
    <section className="bg-ivory px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-5xl border-y border-navy/15 py-2xl text-center">
        <p className="font-display text-md italic text-navy/70 md:text-lg">
          For most hotel-led trips, my planning is paid through the hotels and
          partners I book, not as an added planning fee from you.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base text-charcoal">
          You pay for the trip itself. I handle the fit, the bookings, the trip
          hub, and the support around it. If a trip needs a different
          arrangement, I will say that plainly before we start.
        </p>
        <Link
          href="/services"
          className="mt-xl inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep transition-colors hover:text-gold"
        >
          How the pricing works
        </Link>
      </FadeIn>
    </section>
  );
}
