"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

const TripApp = dynamic(() => import("@/trip-app/TripApp"), { ssr: false });

const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,80}$/;

export default function TripPageClient() {
  const params = useParams();
  const slug = params.slug as string;

  if (!slug || !SLUG_RE.test(slug)) {
    return (
      <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", background: "#0f1e3c", color: "#f5f0e8", fontFamily: "Inter, sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "EB Garamond, serif", fontSize: 13, letterSpacing: "0.42em", marginBottom: 16 }}>CARTA</div>
          <p>This trip could not be found.</p>
        </div>
      </div>
    );
  }

  return <TripApp slug={slug} />;
}
