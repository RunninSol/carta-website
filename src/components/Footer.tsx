import Link from "next/link";
import { CompassMark } from "./CompassMark";
import { GoldRule } from "./GoldRule";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/the-carta", label: "Trip Hub" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/destinations", label: "Destinations" },
  { href: "/itineraries/honeymoon-itinerary", label: "Honeymoons" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <GoldRule className="w-full" />
      <div className="mx-auto grid max-w-7xl gap-2xl px-6 py-2xl md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-3xl">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <CompassMark size={36} variant="gold" />
            <span className="font-display text-sm font-medium tracking-[0.42em]">CARTA</span>
          </div>
          <p className="font-display text-md italic text-ivory/70">
            The expert who impresses you with care.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold/70">
            Navigate
          </p>
          <ul className="space-y-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/60 transition-colors hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold/70">
            Contact
          </p>
          <ul className="space-y-sm text-sm text-ivory/60">
            <li>
              <a href="mailto:gabe@travelbycarta.com" className="hover:text-ivory">
                gabe@travelbycarta.com
              </a>
            </li>
            <li>
              <a href="tel:+13238541678" className="hover:text-ivory">
                (323) 854-1678
              </a>
            </li>
            <li>travelbycarta.com</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold/70">
            Affiliations
          </p>
          <p className="text-sm leading-relaxed text-ivory/60">
            Affiliated with WorldVia Travel Group
          </p>
          <p className="mt-sm text-sm text-ivory/40">IATA &middot; Seller of Travel</p>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 py-6 text-center text-xs text-ivory/30 lg:px-10">
        &copy; 2026 Travel By Carta LLC &middot; All rights reserved
      </div>
    </footer>
  );
}
