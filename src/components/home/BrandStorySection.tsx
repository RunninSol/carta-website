import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { CompassMark } from "../CompassMark";
import { GoldRule } from "../GoldRule";

export function BrandStorySection() {
  return (
    <section className="grain bg-navy px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto grid max-w-4xl items-center gap-2xl md:grid-cols-[auto_1fr] md:gap-3xl">
        <CompassMark size={96} variant="gold" rotate className="mx-auto" />
        <div className="text-center md:text-left">
          <p className="eyebrow">Why &ldquo;Carta&rdquo;</p>
          <h2 className="font-display text-lg text-ivory md:text-[40px]">
            Carta means maps.
          </h2>
          <p className="mt-6 max-w-prose text-base leading-[1.7] text-ivory/85">
            I named it that because every trip I build starts with a simple
            question: who are you when you travel? Do you move fast or do you
            breathe? What&apos;s the best trip you&apos;ve ever taken? What
            would make a trip feel like it went wrong?
          </p>
          <GoldRule className="mx-auto my-8 w-12 md:mx-0" />
          <Link
            href="/about"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-soft"
          >
            Read my story &rarr;
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
