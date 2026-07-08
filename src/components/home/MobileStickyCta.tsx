import Link from "next/link";

const DEMO_TRIP_URL =
  process.env.NEXT_PUBLIC_DEMO_TRIP_URL ||
  "https://www.travelbycarta.com/aspen-paris-8f3k29q7";

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold/35 bg-navy/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={DEMO_TRIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gold bg-gold px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-navy"
        >
          Sample hub
        </a>
        <Link
          href="/contact"
          className="border border-gold px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-gold"
        >
          Contact Gabe
        </Link>
      </div>
    </div>
  );
}
