import { CompassMark } from "./CompassMark";

export function AppMockup() {
  return (
    <div className="app-float mx-auto w-full max-w-[320px] md:max-w-[390px]">
      <div
        className="overflow-hidden rounded-phone shadow-float"
        style={{
          background: "linear-gradient(160deg, #0F1E3C 0%, #16244F 60%, #0A1428 100%)",
          border: "8px solid #0A1428",
        }}
      >
        <div className="rounded-phone-inner overflow-hidden">
          {/* Header */}
          <div className="relative">
            <div className="flex justify-between px-5 pt-3 text-xs tracking-wide text-ivory/40">
              <span>9:41</span>
              <span>&bull;&bull;&bull;</span>
            </div>

            <svg
              className="pointer-events-none absolute -right-8 top-4 opacity-[0.06]"
              width="180"
              height="180"
              viewBox="0 0 52 52"
              fill="none"
              aria-hidden
            >
              <circle cx="26" cy="26" r="24.5" stroke="#C9A84C" strokeWidth="0.75" />
              <line x1="26" y1="4" x2="26" y2="48" stroke="#C9A84C" strokeWidth="0.5" />
              <line x1="4" y1="26" x2="48" y2="26" stroke="#C9A84C" strokeWidth="0.5" />
              <polygon points="26,10 28,24 26,22 24,24" fill="#C9A84C" />
              <circle cx="26" cy="26" r="2" fill="#C9A84C" />
            </svg>

            <div className="flex items-center justify-between px-5 pb-3 pt-3">
              <div className="flex items-center gap-2">
                <CompassMark size={18} variant="gold" />
                <span className="font-display text-sm tracking-[0.3em] text-ivory/60">
                  CARTA
                </span>
              </div>
              <span className="rounded-sm border border-gold/30 px-2 py-0.5 text-[9px] uppercase tracking-[0.15em] text-gold/80">
                Day 2 of 4
              </span>
            </div>

            {/* Trip title */}
            <div className="px-5 pb-3">
              <p className="font-display text-[24px] font-medium leading-tight text-ivory">
                Paris &middot; October
              </p>
              <p className="mt-0.5 text-[10px] tracking-wider text-ivory/35">
                Prepared for Aspen &amp; Warner &middot; Your advisor: Gabe
              </p>
            </div>

            {/* Itinerary / Picks toggle */}
            <div className="mx-5 mb-3 flex rounded-md bg-navy-900/60 p-0.5 text-[10px] font-semibold uppercase tracking-[0.15em]">
              <span className="flex-1 rounded-sm bg-gold/90 py-1.5 text-center text-navy">
                Itinerary
              </span>
              <span className="flex-1 py-1.5 text-center text-ivory/45">
                Picks
              </span>
            </div>

            {/* Up next banner */}
            <div className="mx-5 mb-3 flex items-center justify-between rounded-md border border-gold/25 bg-gold/10 px-3 py-2">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-gold/80">
                  Up next
                </p>
                <p className="font-display text-sm text-ivory">
                  Septime &middot; 8:30 PM
                </p>
              </div>
              <p className="text-[10px] font-semibold text-gold">
                Leave by 8:05
              </p>
            </div>

            {/* Day selector */}
            <div className="flex gap-1.5 px-5 pb-3 text-[10px] font-semibold uppercase tracking-wider">
              <span className="rounded-sm px-2.5 py-1 text-ivory/35">Wed 7</span>
              <span className="rounded-sm bg-ivory/10 px-2.5 py-1 text-ivory">
                Thu 8
              </span>
              <span className="rounded-sm px-2.5 py-1 text-ivory/35">Fri 9</span>
              <span className="rounded-sm px-2.5 py-1 text-ivory/35">Sat 10</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-ivory/10 bg-ivory px-5 py-4">
            <div className="mb-3 rounded-md border border-navy/8 bg-white p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-display text-base text-navy">Septime</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-mid-gray">
                    Dinner &middot; 8:30 PM &middot; 11e
                  </p>
                </div>
                <span className="shrink-0 rounded-sm bg-navy px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-ivory">
                  Confirmed
                </span>
              </div>
              <p className="mt-2 font-display text-sm italic leading-snug text-charcoal/80">
                &ldquo;Table for 2. Ask for Claire. Order the tasting menu.&rdquo;
              </p>
            </div>

            <div className="mb-3 rounded-md border border-navy/8 bg-white p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-display text-sm text-navy">Le Marais Walk</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-mid-gray">
                    Morning &middot; Neighborhood
                  </p>
                </div>
                <span className="shrink-0 rounded-sm border border-navy/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-navy/60">
                  Idea
                </span>
              </div>
            </div>

            <div className="rounded-md border border-dashed border-navy/15 bg-white/50 p-2.5 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/40">
                + Add something of your own
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
