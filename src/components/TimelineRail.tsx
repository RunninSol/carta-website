"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Wraps the how-it-works timeline. A faint rail sits behind a gold line
 * that draws itself downward as the reader scrolls through the steps.
 */
export function TimelineRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative">
      <div
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/15 lg:block"
        aria-hidden
      />
      <motion.div
        style={{ scaleY }}
        className="absolute left-1/2 top-0 hidden h-full w-px origin-top -translate-x-1/2 bg-gold/70 lg:block"
        aria-hidden
      />
      {children}
    </div>
  );
}
