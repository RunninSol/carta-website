"use client";

import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  /** Full public Calendly scheduling URL. */
  url: string;
  className?: string;
}

/**
 * Inline Calendly embed. No OAuth / API key required — just a public
 * scheduling link. Loads Calendly's widget script once and themes the
 * widget with Carta's navy + gold.
 */
export function CalendlyEmbed({ url, className = "" }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = "calendly-widget-script";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Brand the inline widget via Calendly's URL params.
  const themed = `${url}${url.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=f5f0e8&text_color=0f1e3c&primary_color=c9a84c`;

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className}`}
      data-url={themed}
      style={{ minWidth: "320px", height: "660px" }}
    />
  );
}
