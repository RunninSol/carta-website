"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Text whose strike-through line draws itself when scrolled into view. */
export function StrikeThrough({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <span className="relative inline-block">
      {children}
      <motion.span
        aria-hidden
        className="absolute left-0 top-1/2 h-px w-full origin-left bg-mid-gray/60"
        initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
      />
    </span>
  );
}
