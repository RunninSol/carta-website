import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { GoldRule } from "../GoldRule";

export function BrandStorySection() {
  return (
    <section className="grain bg-navy px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-narrow text-center">
        <blockquote className="font-display text-md italic leading-[1.6] text-ivory md:text-lg">
          &ldquo;Carta means maps. I named it that because every trip I build
          starts with a simple question: who are you when you travel? Do you
          move fast or do you breathe? What&apos;s the best trip you&apos;ve
          ever taken? What would make a trip feel like it went wrong?&rdquo;
        </blockquote>
        <p className="mt-lg text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
          Gabe Rozavski, Founder
        </p>
        <GoldRule wide className="my-2xl" />
        <Link
          href="/about"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-soft"
        >
          Read my story
        </Link>
      </FadeIn>
    </section>
  );
}
