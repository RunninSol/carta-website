import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CompassMark } from "@/components/CompassMark";
import { GoldRule } from "@/components/GoldRule";
import { FadeIn } from "@/components/FadeIn";
import { CornerAccents } from "@/components/CornerAccents";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Every trip I plan comes with a dedicated travel advisor, a trip hub built around you, and in-trip support you can text. No fees to you. Tell me where you want to go.",
};

const included = [
  "A dedicated travel advisor who picks up the phone and remembers how you travel",
  "A trip hub built for your specific itinerary, on your phone, no login required",
  "Hotel bookings through preferred partnerships, often with upgrades and amenity credits unavailable direct",
  "Restaurant reservations and experiences, including the places that don't take online bookings",
  "In-trip support you can text. Something goes sideways at midnight in Tokyo, I'm the one who fixes it",
  "A post-trip debrief where I update your profile so the next trip starts further along",
];

const faqs = [
  {
    q: "What does this cost me?",
    a: "Nothing, for most trips. I'm paid by the hotels and partners I book, not by you. You pay for the trip itself. That's the whole arrangement. The reason I can do this well is that I'm not trying to upsell you into the property that pays me the most. I'm trying to put you in the property that's right for you, because the next trip depends on it.",
  },
  {
    q: "What if I just want the trip hub, without the planning?",
    a: "The trip hub is built as part of the planning process. I can't build one that's any good without doing the intake and the work first. That's where the personalization comes from. Every note in the hub exists because I asked you a question and listened to the answer. Skip that part and it's just a prettier PDF, which is the thing I started Carta to get away from.",
  },
  {
    q: "Who is behind Carta?",
    a: "Me, Gabe. And behind me, WorldVia Travel Group, one of the leading host travel networks in the United States. That affiliation is how I get the preferred rates, the room upgrades, and the amenity credits you wouldn't see booking direct. It's also how I have someone to call when a property needs a nudge.",
  },
  {
    q: "What about corporate or group travel?",
    a: "I work with companies and clients who have ongoing travel programs. It's a different kind of relationship, more recurring, more volume. If that's you, reach out directly and we'll figure out an arrangement that fits how your team actually moves.",
  },
  {
    q: "How do I get started?",
    a: "Tell me where you want to go. A 20-minute call is enough for me to learn how you travel and for you to learn how I work. If it feels right, we start planning. If it doesn't, no hard feelings. I'd rather have the conversation than not.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
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
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-36 md:pb-32">
          <CornerAccents />
          <div className="relative z-10 mx-auto max-w-prose text-center">
            <FadeIn>
              <CompassMark size={48} variant="gold" className="mx-auto mb-8" />
              <p className="eyebrow">Services</p>
              <h1 className="font-display text-[36px] font-light leading-tight text-ivory md:text-[56px]">
                Every trip includes your trip hub.
              </h1>
              <GoldRule wide className="my-8" />
              <p className="font-display text-lg italic text-ivory/60">
                I book hotels, restaurants, flights, and experiences. I&apos;m
                paid by the hotels and partners I book, not by you. And every
                trip comes with a trip hub built around who you are, plus
                someone you can text when something goes sideways.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-3xl">
            <FadeIn className="text-center">
              <p className="eyebrow">Every Client. Every Trip.</p>
              <h2 className="font-display text-2xl text-navy md:text-[40px]">
                One standard of service.
              </h2>
              <GoldRule wide className="my-8" />
              <p className="mx-auto max-w-xl text-base text-charcoal">
                There&apos;s no tier system. There&apos;s no upgrade package.
                Every client gets the same thing, because I don&apos;t know how
                to do this job halfway.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-10 shadow-card">
                <ul className="space-y-5">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 text-base text-charcoal"
                    >
                      <span
                        className="mt-[0.65em] h-[1.5px] w-4 shrink-0 bg-gold"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-ivory px-6 py-20 md:py-2xl">
          <div className="mx-auto max-w-prose">
            <FadeIn>
              <p className="eyebrow">Questions</p>
              <h2 className="font-display text-2xl text-navy">
                The straightforward answers.
              </h2>
            </FadeIn>

            <div className="mt-12 space-y-0 divide-y divide-navy/10">
              {faqs.map((faq) => (
                <FadeIn key={faq.q} className="py-8">
                  <h3 className="font-display text-lg text-navy">{faq.q}</h3>
                  <p className="mt-3 text-base text-charcoal">{faq.a}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
              A 20-minute call is enough to know if Carta is the right fit
              for how you travel.
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
