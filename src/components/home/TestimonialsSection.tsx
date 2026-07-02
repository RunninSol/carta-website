import { FadeIn } from "../FadeIn";

export function TestimonialsSection() {
  return (
    <section className="grain bg-navy px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-narrow text-center">
        <p className="eyebrow text-center">What Carta Is</p>
        <blockquote className="font-display text-md italic leading-[1.6] text-ivory md:text-lg">
          &ldquo;Every client gets a trip hub. Their hotels, their restaurants,
          their contacts, my personal notes. On their phone. Built around who
          they are. And they get me. Directly. You text me, I answer. You call
          me, I pick up. Something goes wrong at midnight in Tokyo, I&apos;m the
          one who fixes it. That&apos;s Carta.&rdquo;
        </blockquote>
        <div className="mt-lg h-px w-12 bg-gold/40 mx-auto" />
        <p className="mt-lg text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
          Gabe Rozavski, Founder
        </p>
      </FadeIn>
    </section>
  );
}
