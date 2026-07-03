import Link from "next/link";
import { FadeIn } from "../FadeIn";

const features = [
  "A dedicated travel advisor who picks up the phone",
  "A trip hub built for your specific trip, on your phone",
  "Hotel bookings through preferred partnerships, often with upgrades",
  "Restaurant reservations and experiences, including places that don't take online bookings",
  "In-trip support: text me, I answer",
  "Post-trip debrief so the next trip is even better",
];

export function ServicesSection() {
  return (
    <section className="bg-ivory px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-lg text-navy md:text-[48px]">
          One standard of service.
        </h2>
        <p className="mt-4 text-center text-sm text-mid-gray">
          Every client. Every trip.
        </p>

        <div className="mx-auto mt-2xl max-w-2xl">
          <div className="bg-white p-xl shadow-card md:p-2xl">
            <ul className="space-y-lg">
              {features.map((f) => (
                <li key={f} className="flex gap-base text-base text-charcoal">
                  <span
                    className="mt-[0.65em] h-[1.5px] w-4 shrink-0 bg-gold"
                    aria-hidden
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-2xl text-center">
          <Link
            href="/services"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep transition-colors hover:text-gold"
          >
            How the pricing works &rarr;
          </Link>
        </p>
      </FadeIn>
    </section>
  );
}
