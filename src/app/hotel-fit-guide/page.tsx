import type { Metadata } from "next";
import Link from "next/link";
import { CompassMark } from "@/components/CompassMark";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { GoldRule } from "@/components/GoldRule";
import { HotelFitGuideForm } from "@/components/HotelFitGuideForm";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Hotel Fit Guide",
  description:
    "Seven questions Gabe uses to choose a luxury hotel by fit, not by star rating. Get the free Carta Hotel Fit Guide.",
  alternates: { canonical: "/hotel-fit-guide" },
  openGraph: {
    title: "The Hotel Fit Guide | Carta",
    description: "Seven questions to answer before you spend $1,000 a night on the wrong hotel.",
    url: "/hotel-fit-guide",
  },
};

const questions = [
  "Where do you want to be at 8 p.m.?",
  "What does the entry room actually feel like?",
  "Will you use the hotel, or only sleep there?",
  "What kind of service makes you comfortable?",
  "Which benefits change the real price?",
  "What is the hotel's weak point?",
  "What are you paying extra for?",
];

export default function HotelFitGuidePage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section className="grain bg-navy px-6 pb-20 pt-36 text-ivory md:pb-24">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <CompassMark size={52} variant="gold" className="mx-auto mb-7" />
            <p className="eyebrow">A decision guide from Carta</p>
            <h1 className="font-display text-[42px] font-medium leading-[1.04] md:text-[68px]">The Hotel Fit Guide</h1>
            <GoldRule wide className="my-8" />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ivory/85">
              Seven questions to answer before you spend $1,000 a night on the wrong hotel.
            </p>
          </FadeIn>
        </section>

        <section className="bg-warm-bg px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <p className="eyebrow">The expensive mistake</p>
              <h2 className="font-display text-2xl leading-tight text-navy md:text-[44px]">
                A very good hotel can still be wrong for you.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal">
                A five-star rating tells you what a hotel has. It does not tell you whether the room, the neighborhood, or the service rhythm fits the way you travel.
              </p>
              <p className="mt-5 text-base leading-relaxed text-charcoal">
                I made this guide from the seven questions I use before I recommend one.
              </p>
              <ol className="mt-8 space-y-3">
                {questions.map((question, index) => (
                  <li key={question} className="flex gap-4 text-sm text-charcoal">
                    <span className="font-semibold text-gold-deep">0{index + 1}</span>
                    <span>{question}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-mid-gray">Five pages. Built to save, print, or keep open beside a hotel shortlist.</p>
            </FadeIn>
            <FadeIn>
              <HotelFitGuideForm />
            </FadeIn>
          </div>
        </section>

        <section className="bg-ivory px-6 py-16">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xl italic leading-relaxed text-navy">
              Already have a real trip in mind? You do not need to download anything first.
            </p>
            <Link href="/contact" className="btn-secondary mt-7 inline-block">
              Tell me where you want to go
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
