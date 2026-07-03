"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { CompassMark } from "../CompassMark";
import { CornerAccents } from "../CornerAccents";
import { GoldRule } from "../GoldRule";
import { Wordmark } from "../Wordmark";

const HeroGlobe = dynamic(
  () => import("../HeroGlobe").then((m) => m.HeroGlobe),
  { ssr: false }
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const HEADLINE = "Who are you when you travel?".split(" ");

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy px-6 pb-20 pt-24 text-center">
      <CornerAccents />
      <HeroGlobe />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0 }}
        >
          <CompassMark size={80} variant="gold" rotate className="mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.12 }}
        >
          <Wordmark variant="ivory" className="mt-8 block" />
        </motion.div>

        <h1 className="mt-6 font-display text-[36px] font-medium leading-[1.04] tracking-[0.005em] text-ivory sm:text-[48px] lg:text-[68px]">
          {HEADLINE.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden pb-[0.08em] align-bottom"
            >
              <motion.span
                className="inline-block"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.28 + i * 0.055,
                }}
              >
                {word}
              </motion.span>
              {i < HEADLINE.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.55 }}
        >
          <GoldRule wide className="my-8" />
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.65 }}
          className="max-w-lg font-body text-base font-normal leading-[1.6] text-ivory/85"
        >
          Every trip I build starts with that question. I&apos;m a travel
          advisor, and every client gets a trip hub: their restaurants, their
          hotels, their contacts, my personal notes. On their phone. And they
          get me, directly.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.8 }}
        >
          <Link href="/contact" className="btn-primary mt-10">
            Tell me where you want to go
          </Link>
        </motion.div>
      </div>

      <div
        className="scroll-indicator absolute bottom-10 left-1/2 h-12 w-px -translate-x-1/2 bg-ivory/30"
        aria-hidden
      />
    </section>
  );
}
