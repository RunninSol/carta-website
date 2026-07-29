import Link from "next/link";
import { FadeIn } from "../FadeIn";

export function FinalCtaSection() {
  return (
    <section className="bg-warm-bg px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-prose text-center">
        <h2 className="font-display text-lg text-navy md:text-[48px]">
          Tell me where you want to go.
        </h2>
        <p className="mt-lg text-base text-charcoal">
          A 20-minute call is enough to know if Carta is the right fit. No
          commitment. No pitch. Just a conversation.
        </p>
        <Link href="/contact" className="btn-secondary mt-xl inline-block">
          Book a Call
        </Link>
        <p className="mt-6 text-sm text-mid-gray">
          Still choosing where to stay?{" "}
          <Link
            href="/hotel-fit-guide?utm_source=homepage-final-cta&utm_medium=onsite&utm_campaign=hotel-fit-guide"
            className="text-navy underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold-deep"
          >
            Get the Hotel Fit Guide
          </Link>
          .
        </p>
      </FadeIn>
    </section>
  );
}
