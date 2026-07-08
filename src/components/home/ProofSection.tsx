import { FadeIn } from "../FadeIn";
import { GoldRule } from "../GoldRule";

const proof = [
  {
    label: "Affiliation",
    title: "WorldVia Travel Group",
    body: "That gives me the hotel relationships, support network, and preferred partner access behind the scenes.",
  },
  {
    label: "Benefits",
    title: "Preferred hotel booking",
    body: "Depending on the property, that can mean breakfast, credits, upgrades, early check-in, or a better room conversation.",
  },
  {
    label: "Support",
    title: "You text Gabe",
    body: "If a reservation moves or a flight lands late, you are not digging through a PDF. You are texting the person who built the trip.",
  },
];

export function ProofSection() {
  return (
    <section className="grain bg-navy px-6 py-2xl text-ivory md:py-4xl">
      <FadeIn className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="font-display text-lg md:text-[48px]">
            The trip hub is the part you see. The judgment is the part you feel.
          </h2>
          <p className="mt-6 text-base text-ivory/72">
            I am not trying to replace care with software. I use the trip hub to
            make the care easier to reach when you are actually traveling.
          </p>
          <GoldRule wide className="my-8" />
        </div>

        <div className="mt-2xl grid gap-lg md:grid-cols-3">
          {proof.map((item) => (
            <article
              key={item.title}
              className="border border-gold/35 bg-ivory/5 p-lg"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold/85">
                {item.label}
              </p>
              <h3 className="mt-5 font-display text-lg text-ivory">
                {item.title}
              </h3>
              <p className="mt-4 text-sm text-ivory/72">{item.body}</p>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
