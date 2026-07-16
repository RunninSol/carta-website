"use client";

import { useState } from "react";

const TYPEFORM_URL =
  "https://form.typeform.com/to/AnCEO5lI?typeform-medium=embed-snippet&typeform-source=travelbycarta.com";

export function CartaIntakeEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-w-0 max-w-full overflow-hidden bg-navy shadow-float">
      {!loaded && (
        <div
          className="absolute inset-0 z-10 flex min-h-[680px] items-center justify-center bg-navy px-8 text-center"
          role="status"
        >
          <div>
            <div className="mx-auto mb-5 h-px w-16 animate-pulse bg-gold" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">
              Opening your intake
            </p>
          </div>
        </div>
      )}
      <iframe
        src={TYPEFORM_URL}
        title="Carta client intake questionnaire"
        className="block min-h-[760px] w-full border-0 md:min-h-[820px]"
        allow="camera; microphone; autoplay; encrypted-media"
        onLoad={() => setLoaded(true)}
      />
      <noscript>
        <p className="p-8 text-center text-sm text-ivory">
          JavaScript is required for the intake form. You can open it directly at{" "}
          <a
            href="https://form.typeform.com/to/AnCEO5lI"
            className="text-gold underline underline-offset-4"
          >
            form.typeform.com
          </a>
          .
        </p>
      </noscript>
    </div>
  );
}
