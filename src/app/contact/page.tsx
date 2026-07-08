import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CompassMark } from "@/components/CompassMark";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Gabe where you want to go. Start with a sample trip hub, a short discovery call, or a written note.",
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/travelbycarta/discovery-call";

const DEMO_TRIP_URL =
  process.env.NEXT_PUBLIC_DEMO_TRIP_URL ||
  "https://www.travelbycarta.com/aspen-paris-8f3k29q7";

const prompts = [
  "Where are you thinking about going?",
  "Who is traveling with you?",
  "What usually makes a trip feel right?",
  "What do you not want to deal with yourself?",
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section className="bg-warm-bg px-6 pb-16 pt-36">
          <FadeIn className="mx-auto max-w-prose text-center">
            <CompassMark size={40} variant="navy" className="mx-auto mb-6" />
            <p className="eyebrow">Start here</p>
            <h1 className="font-display text-[36px] font-light leading-tight text-navy md:text-[52px]">
              Tell me where you want to go.
            </h1>
            <GoldRule wide className="my-8" />
            <p className="text-base text-charcoal">
              A call is useful, but it is not the only way to start. If you want
              to look around first, open the sample trip hub. If you already know
              what you need, send me the note.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={DEMO_TRIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Open the sample trip hub
              </a>
              <a
                href="mailto:gabe@travelbycarta.com"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep transition-colors hover:text-gold"
              >
                Email Gabe
              </a>
            </div>
          </FadeIn>
        </section>

        <section className="bg-warm-bg px-6 pb-16">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <FadeIn>
              <div className="lg:pt-2">
                <h2 className="font-display text-2xl text-navy">
                  Before we talk, I am usually trying to answer four questions.
                </h2>
                <div className="mt-8 space-y-4">
                  {prompts.map((prompt) => (
                    <div key={prompt} className="flex gap-4 text-base text-charcoal">
                      <span className="mt-[0.65em] h-[1.5px] w-4 shrink-0 bg-gold" />
                      <p>{prompt}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-px w-6 shrink-0 bg-gold" />
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold/80">
                        Email
                      </p>
                      <a
                        href="mailto:gabe@travelbycarta.com"
                        className="mt-1 block text-base text-navy transition-colors hover:text-gold"
                      >
                        gabe@travelbycarta.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-px w-6 shrink-0 bg-gold" />
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold/80">
                        Phone
                      </p>
                      <a
                        href="tel:+13238541678"
                        className="mt-1 block text-base text-navy transition-colors hover:text-gold"
                      >
                        (323) 854-1678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-px w-6 shrink-0 bg-gold" />
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold/80">
                        Response time
                      </p>
                      <p className="mt-1 text-base text-navy">
                        Within 4 hours, business days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-14 border-l-2 border-gold pl-6">
                  <p className="font-display text-lg italic text-navy/70">
                    &ldquo;I&apos;d rather lose a call than book one that isn&apos;t a fit.
                    So I&apos;ll ask honest questions, and I&apos;ll give you honest answers.&rdquo;
                  </p>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-gold/60">
                    Gabe, Carta
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-ivory p-6 shadow-card md:p-8">
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-mid-gray">
                  Pick a time
                </p>
                <h2 className="mb-6 font-display text-2xl font-light text-navy">
                  Book your discovery call
                </h2>
                <CalendlyEmbed url={CALENDLY_URL} />
                <p className="mt-4 text-xs text-mid-gray">
                  Calendar not loading? Email{" "}
                  <a
                    href="mailto:gabe@travelbycarta.com"
                    className="text-navy underline decoration-gold/50 underline-offset-2 hover:text-gold"
                  >
                    gabe@travelbycarta.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+13238541678"
                    className="text-navy underline decoration-gold/50 underline-offset-2 hover:text-gold"
                  >
                    (323) 854-1678
                  </a>{" "}
                  and I&apos;ll set the time myself.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-warm-bg px-6 pb-6">
          <FadeIn className="mx-auto flex max-w-6xl items-center gap-6">
            <div className="h-px flex-1 bg-navy/10" />
            <p className="text-[9px] uppercase tracking-[0.25em] text-mid-gray">
              Or send a note
            </p>
            <div className="h-px flex-1 bg-navy/10" />
          </FadeIn>
        </section>

        <section className="bg-warm-bg px-6 pb-24">
          <FadeIn className="mx-auto max-w-3xl">
            <div className="relative bg-ivory p-8 shadow-card md:p-10">
              <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-mid-gray">
                Tell me about you
              </p>
              <p className="mb-8 text-sm text-charcoal">
                Prefer to write first? Tell me about your next trip and I&apos;ll be
                in touch to set up a time.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </section>

        <section className="bg-ivory px-6 py-12">
          <FadeIn className="mx-auto max-w-prose text-center">
            <p className="text-sm text-mid-gray">
              Carta is affiliated with WorldVia Travel Group. All client
              information is kept strictly confidential.
            </p>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
