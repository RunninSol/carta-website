import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { GoldRule } from "../GoldRule";

const DEMO_TRIP_URL =
  process.env.NEXT_PUBLIC_DEMO_TRIP_URL ||
  "https://www.travelbycarta.com/aspen-paris-8f3k29q7";

const ordinary = [
  "A PDF buried in email",
  "Confirmations scattered across inboxes",
  "Restaurant links you have to sort yourself",
  "No clear answer when the plan changes",
];

const carta = [
  "A Today view that tells you what matters now",
  "Maps, bookings, contacts, and documents in one place",
  "Personal notes on what to order, when to arrive, and what to skip",
  "A direct line to Gabe when something needs to move",
  "Offline access for planes, trains, and dead zones",
];

export function BeforeAfterSection() {
  return (
    <section className="bg-ivory px-6 py-2xl md:py-4xl">
      <FadeIn className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-prose text-center">
          <p className="eyebrow">Before and After</p>
          <h2 className="font-display text-lg text-navy md:text-[48px]">
            The difference is not prettier paperwork.
          </h2>
          <p className="mt-6 text-base text-charcoal">
            The trip hub is proof of the work. It takes the loose pieces of a
            trip and turns them into something you can actually use while you
            are moving.
          </p>
          <GoldRule wide className="my-8" />
        </div>

        <div className="mt-2xl grid gap-lg lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border border-navy/15 bg-warm-bg p-lg md:p-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-mid-gray">
              What most travelers get
            </p>
            <div className="mt-lg space-y-sm">
              {ordinary.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border border-navy/10 bg-ivory px-4 py-3 text-sm text-charcoal/75"
                >
                  <span>{item}</span>
                  <span className="font-display text-lg text-navy/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-lg border border-navy/10 bg-ivory p-base">
              <p className="font-display text-md italic text-navy/60">
                Useful before you leave. Harder when you are standing outside a
                hotel, looking for the next thing.
              </p>
            </div>
          </div>

          <div className="grain relative overflow-hidden bg-navy p-lg text-ivory md:p-xl">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/20" />
            <div className="pointer-events-none absolute bottom-10 right-12 h-32 w-32 rounded-full border border-gold/10" />

            <div className="relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                What Carta gives you
              </p>

              <div className="mt-lg grid gap-base md:grid-cols-2">
                <div className="border border-gold/35 bg-ivory/10 p-base">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/90">
                    Today
                  </p>
                  <h3 className="mt-3 font-display text-lg text-ivory">
                    8:15 PM, Le Petit Vendome
                  </h3>
                  <p className="mt-3 text-sm text-ivory/70">
                    Leave the hotel by 7:42. Ask for the corner table. Order
                    the roast chicken if it is still on the board.
                  </p>
                </div>

                <div className="border border-gold/20 bg-ivory/5 p-base">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/90">
                    In one place
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-ivory/78">
                    <p>Hotel contact</p>
                    <p>Airport car</p>
                    <p>Restaurant notes</p>
                    <p>Museum tickets</p>
                  </div>
                </div>
              </div>

              <div className="mt-base grid gap-base md:grid-cols-5">
                {carta.map((item) => (
                  <div
                    key={item}
                    className="border-t border-gold/35 pt-4 text-sm text-ivory/82 md:col-span-1"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-xl flex flex-wrap items-center gap-5">
                <a
                  href={DEMO_TRIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary border-gold bg-gold text-navy hover:bg-gold-soft"
                >
                  Open the sample trip hub
                </a>
                <Link
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-soft"
                >
                  Tell me where you want to go
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
