"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/the-carta", label: "Trip Hub" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/intake", label: "Client Intake" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 h-16 bg-navy/95 backdrop-blur-sm transition-all duration-300 ${
          scrolled || menuOpen ? "shadow-card" : ""
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
            aria-label="Carta home"
          >
            <Image
              src="/brand/lockup_h_ivory_transparent.png"
              alt="Carta"
              width={172}
              height={40}
              priority
              unoptimized
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                    active ? "text-gold" : "text-ivory/70 hover:text-ivory"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold/70" />
                  )}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary py-3">
              Book a Call
            </Link>
          </nav>

          <button
            type="button"
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-px w-6 bg-ivory transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-ivory transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-ivory transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Scroll progress hairline */}
        <motion.div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-[1.5px] origin-left"
          style={{
            scaleX: progress,
            background:
              "linear-gradient(to right, #C9A84C, #D8BE73, #C9A84C)",
          }}
        />
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-xl ${
                pathname === link.href ? "text-gold" : "text-ivory"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </>
  );
}
