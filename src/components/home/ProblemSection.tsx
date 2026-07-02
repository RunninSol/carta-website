import { FadeIn } from "../FadeIn";

export function ProblemSection() {
  return (
    <section className="bg-ivory px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-prose text-center">
        <p className="eyebrow text-gold">Why I Started Carta</p>
        <h2 className="font-display text-lg text-navy md:text-[48px]">
          I got tired of seeing people pay for luxury travel and get a PDF in their inbox.
        </h2>
        <div className="prose-carta mt-8 text-left text-base text-charcoal">
          <p>
            A list of suggestions. No one to call when something goes sideways.
            No one who actually knows your name, your preferences, what time you
            like to eat dinner.
          </p>
          <p>
            The Ritz costs $2,200 a night. Le Grand Mazarin costs $650. I&apos;ve
            put clients in both and watched them have completely different,
            completely perfect trips, because the right hotel has nothing to do
            with the price tag. Figuring out which one is right for you, that&apos;s
            the part I love. That&apos;s the job.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
