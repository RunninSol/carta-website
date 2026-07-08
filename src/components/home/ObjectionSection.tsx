import Link from "next/link";
import { FadeIn } from "../FadeIn";

const objections = [
  {
    q: "Can I just ask ChatGPT for restaurants?",
    a: "Yes. It can give you a list. It cannot know what night fits your flight, hold the booking, place it near your hotel, or answer when the plan breaks.",
  },
  {
    q: "Is this just a travel advisor?",
    a: "Yes, and that is the point. I book hotels, restaurants, flights, and experiences. The difference is that the trip does not end as a PDF in your inbox.",
  },
  {
    q: "Can I book direct?",
    a: "Sometimes you should. Sometimes I can get a better fit, a better room conversation, or a benefit you would not see on the public booking page.",
  },
];

export function ObjectionSection() {
  return (
    <section className="grain bg-navy px-6 py-2xl text-ivory md:py-4xl">
      <FadeIn className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="font-display text-lg md:text-[48px]">
            The question is not whether you can book a trip. Of course you can.
          </h2>
          <p className="mt-6 text-base text-ivory/72">
            The question is whether you want the work, the context, and the
            backup handled by someone who knows why each choice is there.
          </p>
        </div>

        <div className="mt-2xl divide-y divide-gold/25 border-y border-gold/35">
          {objections.map((item) => (
            <article
              key={item.q}
              className="grid gap-5 py-lg md:grid-cols-[0.8fr_1.2fr] md:items-start"
            >
              <h3 className="font-display text-md text-ivory">{item.q}</h3>
              <p className="text-base text-ivory/72">{item.a}</p>
            </article>
          ))}
        </div>

        <p className="mt-xl text-center">
          <Link href="/contact" className="btn-primary">
            Tell me where you want to go
          </Link>
        </p>
      </FadeIn>
    </section>
  );
}
