import { AppMockup } from "../AppMockup";
import { FadeIn } from "../FadeIn";

const features = [
  "Every reservation, every contact, every document, in one place",
  "My personal notes on each day, each restaurant",
  "A Today view that tells you what's next and when to leave",
  "Works offline, on a plane or in a dead zone",
  "No login. No download. You open a link. It works.",
];

export function AppShowcaseSection() {
  return (
    <section className="bg-warm-bg px-6 py-2xl md:py-4xl">
      <div className="mx-auto grid max-w-7xl items-center gap-2xl lg:grid-cols-2 lg:gap-3xl">
        <FadeIn>
          <p className="eyebrow">The Trip Hub</p>
          <h2 className="font-display text-lg text-navy md:text-[48px]">
            Not an itinerary. A companion.
          </h2>
          <div className="prose-carta mt-lg text-base text-charcoal">
            <p>
              Before you leave, you get a trip hub. A private, phone-friendly
              guide built for this trip, for you.
            </p>
            <p>
              Restaurants filtered by what you care about. Points of interest
              chosen for you, not for everyone. Your bookings, your schedule,
              and a note from me on what to order, when to arrive, and what to
              skip.
            </p>
          </div>
          <ul className="mt-xl space-y-sm text-sm text-charcoal">
            {features.map((f) => (
              <li key={f} className="flex gap-base">
                <span className="mt-1 text-gold">&middot;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="lg:justify-self-end">
          <AppMockup />
        </FadeIn>
      </div>
    </section>
  );
}
