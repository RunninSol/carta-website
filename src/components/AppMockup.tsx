"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { CompassMark } from "./CompassMark";

type Day = {
  id: string;
  pill: string;
  upNextName: string;
  upNextTime: string;
  leaveBy: string;
  cards: {
    name: string;
    meta: string;
    badge: "Confirmed" | "Idea" | "Added by you";
    note?: string;
  }[];
};

const days: Day[] = [
  {
    id: "thu",
    pill: "Thu 8",
    upNextName: "Septime",
    upNextTime: "8:30 PM",
    leaveBy: "Leave by 8:05",
    cards: [
      {
        name: "Septime",
        meta: "Dinner · 8:30 PM · 11e",
        badge: "Confirmed",
        note: "“Table for 2. Ask for Claire. Order the tasting menu.”",
      },
      {
        name: "Le Marais Walk",
        meta: "Morning · Neighborhood",
        badge: "Idea",
      },
    ],
  },
  {
    id: "fri",
    pill: "Fri 9",
    upNextName: "Musée d'Orsay",
    upNextTime: "10:00 AM",
    leaveBy: "Leave by 9:35",
    cards: [
      {
        name: "Musée d'Orsay",
        meta: "Morning · 10:00 AM · 7e",
        badge: "Confirmed",
        note: "“Skip the main hall first. Fifth floor, the clock window, then work down.”",
      },
      {
        name: "Canal Saint-Martin",
        meta: "Afternoon · Wander",
        badge: "Added by you",
      },
    ],
  },
];

const allPills = ["Wed 7", "Thu 8", "Fri 9", "Sat 10"];

function Badge({ kind }: { kind: Day["cards"][number]["badge"] }) {
  if (kind === "Confirmed") {
    return (
      <span className="shrink-0 rounded-sm bg-navy px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-ivory">
        Confirmed
      </span>
    );
  }
  if (kind === "Idea") {
    return (
      <span className="shrink-0 rounded-sm border border-navy/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-navy/60">
        Idea
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-sm border border-gold/50 bg-gold/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gold-deep">
      Added by you
    </span>
  );
}

export function AppMockup() {
  const reduced = useReducedMotion();
  const [dayIdx, setDayIdx] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);

  // Demo loop
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setDayIdx((i) => (i + 1) % days.length), 4200);
    return () => clearInterval(t);
  }, [reduced]);

  // Scroll parallax: drifts up slightly and straightens as it enters
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3.5, -1.5, 0]);

  // Hover tilt
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const tiltX = useSpring(0, { stiffness: 150, damping: 18 });
  const tiltY = useSpring(0, { stiffness: 150, damping: 18 });
  useEffect(() => {
    tiltX.set(tilt.x);
    tiltY.set(tilt.y);
  }, [tilt, tiltX, tiltY]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  }

  const day = days[dayIdx];

  return (
    <motion.div
      ref={frameRef}
      style={reduced ? undefined : { y, rotate }}
      className="mx-auto w-full max-w-[320px] md:max-w-[390px]"
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={
          reduced
            ? undefined
            : {
                rotateX: tiltX,
                rotateY: tiltY,
                transformPerspective: 900,
              }
        }
        className="overflow-hidden rounded-phone shadow-float"
      >
        <div
          style={{
            background:
              "linear-gradient(160deg, #0F1E3C 0%, #16244F 60%, #0A1428 100%)",
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
                  Day {dayIdx + 2} of 4
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
              <div className="mx-5 mb-3 overflow-hidden rounded-md border border-gold/25 bg-gold/10">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={day.id}
                    initial={reduced ? false : { y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduced ? undefined : { y: -14, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex items-center justify-between px-3 py-2"
                  >
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-gold/80">
                        Up next
                      </p>
                      <p className="font-display text-sm text-ivory">
                        {day.upNextName} &middot; {day.upNextTime}
                      </p>
                    </div>
                    <p className="text-[10px] font-semibold text-gold">
                      {day.leaveBy}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Day selector */}
              <div className="flex gap-1.5 px-5 pb-3 text-[10px] font-semibold uppercase tracking-wider">
                {allPills.map((pill) => (
                  <span
                    key={pill}
                    className={`rounded-sm px-2.5 py-1 transition-colors duration-300 ${
                      pill === day.pill
                        ? "bg-ivory/10 text-ivory"
                        : "text-ivory/35"
                    }`}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="border-t border-ivory/10 bg-ivory px-5 py-4">
              <div className="min-h-[196px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={day.id}
                    initial={reduced ? false : { x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={reduced ? undefined : { x: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {day.cards.map((card) => (
                      <div
                        key={card.name}
                        className="mb-3 rounded-md border border-navy/8 bg-white p-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-display text-base text-navy">
                              {card.name}
                            </p>
                            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-mid-gray">
                              {card.meta}
                            </p>
                          </div>
                          <Badge kind={card.badge} />
                        </div>
                        {card.note && (
                          <p className="mt-2 font-display text-sm italic leading-snug text-charcoal/80">
                            {card.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="rounded-md border border-dashed border-navy/15 bg-white/50 p-2.5 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/40">
                  + Add something of your own
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
