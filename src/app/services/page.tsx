import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CompassMark } from "@/components/CompassMark";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import { CornerAccents } from "@/components/CornerAccents";
import { RightFitSection } from "@/components/home/RightFitSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What Carta includes: travel advisory, preferred hotel booking, restaurant and experience planning, a private trip hub, and direct support from Gabe.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Carta",
    description:
      "Travel advisory, preferred hotel booking, restaurant and experience planning, a private trip hub, and direct support from Gabe.",
    url: "/services",
  },
};

const included = [
  {
    title: "Hotel fit and booking",
    body: "I help choose the right property, not just the most famous one. When the fit is right, I book through preferred relationships whenever possible.",
  },
  {
    title: "Restaurants and experiences",
    body: "I handle the reservations, the timing, and the order of the day so the trip feels like it belongs to you, not to a list online.",
  },
  {
    title: "Your trip hub",
    body: "Every reservation, contact, document, map point, and personal note lives in one private phone-friendly guide. No login. No download.",
  },
  {
    title: "In-trip support",
    body: "When something needs to move, you text me. You are not digging through a PDF while standing outside a hotel.",
  },
];

const pricing = [
  {
    q: "What does this cost me?",
    a: "For most hotel-led trips, nothing beyond the trip itself. I am paid by the hotels and partners I book, not as an added planning fee from you. If a trip needs a different arrangement, I will say that before we start.",
  },
  {
    q: "Why would I not just book direct?",
    a: "Sometimes you should. Sometimes I can get a better fit, a better room conversation, breakfast, credits, upgrades, early check-in, or support from someone the property knows. The answer depends on the trip.",
  },
  {
    q: "What if I only want the trip hub?",
    a: "The trip hub is not separate from the planning. It is good because I did the intake, made the calls, made the cuts, and wrote the notes around you. Without that, it is just prettier paperwork.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricing.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <main id="main">
        <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-36 md:pb-32">
          <CornerAccents />
          <div className="relative z-10 mx-auto max-w-prose text-center">
            <FadeIn>
              <CompassMark size={48} variant="gold" className="mx-auto mb-8" />
              <p className="eyebrow">Services</p>
              <h1 className="font-display text-[36px] font-light leading-tight text-ivory md:text-[56px]">
                The planning is personal. The trip hub makes it usable.
              </h1>
              <GoldRule wide className="my-8" />
              <p className="font-display text-lg italic text-ivory/65">
                I book hotels, restaurants, flights, and experiences. Then I put
                the whole trip on your phone with my notes and a direct line to me.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="mx-auto max-w-prose text-center">
              <h2 className="font-display text-2xl text-navy md:text-[44px]">
                What every trip includes.
              </h2>
              <p className="mt-6 text-base text-charcoal">
                There is no tier system. I do the work the same way because I
                do not know how to do this job halfway.
              </p>
            </FadeIn>

            <div className="mt-2xl grid gap-lg md:grid-cols-2">
              {included.map((item) => (
                <FadeIn key={item.title}>
                  <article className="h-full border border-navy/15 bg-warm-bg p-lg md:p-xl">
                    <h3 className="font-display text-lg text-navy">
                      {item.title}
                    </h3>
                    <div className="my-5 h-px w-12 bg-gold" />
                    <p className="text-base text-charcoal">{item.body}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="grain bg-navy px-6 py-20 text-ivory md:py-2xl">
          <FadeIn className="mx-auto max-w-5xl text-center">
            <p className="font-display text-md italic leading-[1.45] text-ivory md:text-lg">
              For most hotel-led trips, my planning is paid through the hotels
              and partners I book, not as an added planning fee from you.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base text-ivory/72">
              You pay for the trip itself. I handle the fit, the bookings, the
              trip hub, and the support around it.
            </p>
            <GoldRule wide className="my-10" />
            <Link href="/contact" className="btn-primary">
              Tell me where you want to go
            </Link>
          </FadeIn>
        </section>

        <RightFitSection />

        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-prose">
            <FadeIn>
              <h2 className="font-display text-2xl text-navy">
                The straightforward answers.
              </h2>
            </FadeIn>

            <div className="mt-12 divide-y divide-navy/10 border-y border-navy/10">
              {pricing.map((faq) => (
                <FadeIn key={faq.q} className="py-8">
                  <h3 className="font-display text-lg text-navy">{faq.q}</h3>
                  <p className="mt-3 text-base text-charcoal">{faq.a}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-2xl">
          <Image
            src="/photos/arrival.jpg"
            alt=""
            aria-hidden
            fill
            className="object-cover opacity-25"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/90"
            aria-hidden
          />
          <CornerAccents />
          <FadeIn className="relative z-10 mx-auto max-w-narrow text-center">
            <h2 className="font-display text-2xl text-ivory md:text-[40px]">
              Tell me where you want to go.
            </h2>
            <p className="mt-6 text-base text-ivory/85">
              A 20-minute call is enough to know if Carta is the right fit for
              how you travel.
            </p>
            <GoldRule wide className="my-10" />
            <Link href="/contact" className="btn-primary">
              Tell me where you want to go
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
