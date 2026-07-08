import { FadeIn } from "../FadeIn";

const rightFit = [
  "You care where you stay, not only what it costs",
  "You want hotels, restaurants, timing, and support handled together",
  "You prefer texting one person over managing five booking tabs",
  "You are planning a hotel-led leisure trip, family trip, honeymoon, anniversary, or recurring travel",
];

const notFit = [
  "You only want the cheapest possible flight",
  "You already booked everything and only need a pretty itinerary",
  "You want a generic city guide with the same list everyone else has",
];

function FitList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-navy/15 bg-ivory p-lg md:p-xl">
      <h3 className="font-display text-lg text-navy">{title}</h3>
      <div className="mt-lg space-y-base">
        {items.map((item) => (
          <div key={item} className="flex gap-base text-sm text-charcoal">
            <span className="mt-[0.65em] h-[1.5px] w-4 shrink-0 bg-gold" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RightFitSection() {
  return (
    <section className="bg-warm-bg px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="font-display text-lg text-navy md:text-[48px]">
            Carta is not for every trip. That is a good thing.
          </h2>
          <p className="mt-6 text-base text-charcoal">
            I would rather be clear before the call than polite after it. The
            fit matters, because the work is personal.
          </p>
        </div>

        <div className="mt-2xl grid gap-lg lg:grid-cols-2">
          <FitList title="Carta is right for you if" items={rightFit} />
          <FitList title="It is probably not right if" items={notFit} />
        </div>
      </FadeIn>
    </section>
  );
}
