"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CompassMark } from "../CompassMark";
import { CornerAccents } from "../CornerAccents";
import { GoldRule } from "../GoldRule";
import { Wordmark } from "../Wordmark";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const delays = [0, 0.12, 0.24, 0.36, 0.48, 0.6];

export function HeroSection() {
  return (
    <section className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy px-6 pb-20 pt-24 text-center">
      <CornerAccents />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: delays[0] }}
        >
          <CompassMark size={80} variant="gold" rotate className="mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: delays[1] }}
        >
          <Wordmark variant="ivory" className="mt-8 block" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: delays[2] }}
          className="mt-6 font-display text-[36px] font-medium leading-[1.04] tracking-[0.005em] text-ivory sm:text-[48px] lg:text-[68px]"
        >
          The expert who impresses you with care.
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: delays[3] }}
        >
          <GoldRule wide className="my-8" />
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: delays[4] }}
          className="max-w-lg font-body text-base font-normal leading-[1.6] text-ivory/85"
        >
          I&apos;m a travel advisor. I build a trip hub for every client:
          their restaurants, their hotels, their contacts, my personal notes.
          On their phone. And they get me, directly.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: delays[5] }}
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
