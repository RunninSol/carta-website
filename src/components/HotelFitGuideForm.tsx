"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

export function HotelFitGuideForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [deliveredByEmail, setDeliveredByEmail] = useState(false);
  const [utm, setUtm] = useState({ source: "", medium: "", campaign: "" });
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    destination: "",
    planningPain: "",
    consent: false,
    company: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      source: params.get("utm_source") || "",
      medium: params.get("utm_medium") || "",
      campaign: params.get("utm_campaign") || "",
    });
  }, []);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const response = await fetch("/api/hotel-fit-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: utm.source || "Website",
          utmSource: utm.source,
          utmMedium: utm.medium,
          utmCampaign: utm.campaign,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "The guide could not be delivered.");
      setDeliveredByEmail(Boolean(data.deliveredByEmail));
      setStatus("sent");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The guide could not be delivered.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/40 bg-ivory p-8 text-center shadow-card md:p-10" role="status">
        <p className="eyebrow">Your guide is ready</p>
        <h2 className="font-display text-2xl text-navy">
          {deliveredByEmail ? "Check your inbox." : "Open it below."}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-charcoal">
          {deliveredByEmail
            ? `I sent the guide to ${form.email}. You can also open it now.`
            : "Your request is saved. The email copy was delayed, so use the direct link now."}
        </p>
        <a
          href="/guides/carta-hotel-fit-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-8 inline-block"
        >
          Open the Hotel Fit Guide
        </a>
        <p className="mt-6 text-sm text-mid-gray">
          Already comparing hotels? Reply to the email with the shortlist. I read every note myself.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6 border border-navy/10 bg-ivory p-6 shadow-card md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-mid-gray">
          First name
          <input
            required
            name="firstName"
            value={form.firstName}
            onChange={(event) => setForm({ ...form, firstName: event.target.value })}
            className="mt-2 w-full border border-navy/20 bg-white px-4 py-3 text-base normal-case tracking-normal text-charcoal outline-none focus:border-gold"
            autoComplete="given-name"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-mid-gray">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="mt-2 w-full border border-navy/20 bg-white px-4 py-3 text-base normal-case tracking-normal text-charcoal outline-none focus:border-gold"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-mid-gray">
        Where are you thinking about going?
        <input
          name="destination"
          value={form.destination}
          onChange={(event) => setForm({ ...form, destination: event.target.value })}
          placeholder="Paris, Japan, somewhere warm in March"
          className="mt-2 w-full border border-navy/20 bg-white px-4 py-3 text-base normal-case tracking-normal text-charcoal placeholder:text-mid-gray/50 outline-none focus:border-gold"
        />
      </label>

      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-mid-gray">
        What is the hardest part of choosing a hotel?
        <textarea
          name="planningPain"
          rows={3}
          value={form.planningPain}
          onChange={(event) => setForm({ ...form, planningPain: event.target.value })}
          placeholder="Too many options, not trusting reviews, choosing the room, getting the location right"
          className="mt-2 w-full resize-none border border-navy/20 bg-white px-4 py-3 text-base normal-case tracking-normal text-charcoal placeholder:text-mid-gray/50 outline-none focus:border-gold"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal">
        <input
          required
          type="checkbox"
          checked={form.consent}
          onChange={(event) => setForm({ ...form, consent: event.target.checked })}
          className="mt-1 h-4 w-4 accent-navy"
        />
        <span>
          Send me the guide and up to two short, useful follow-ups. I can opt out by replying at any time. See the{" "}
          <a href="/privacy" className="text-navy underline decoration-gold/60 underline-offset-4">
            privacy policy
          </a>
          .
        </span>
      </label>

      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Company
          <input
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
          />
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {error} Email gabe@travelbycarta.com and I will send it myself.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-secondary w-full disabled:opacity-60">
        {status === "submitting" ? "Sending the guide..." : "Send me the Hotel Fit Guide"}
      </button>
      <p className="text-center text-xs text-mid-gray">No weekly newsletter. No travel deals. Just the guide and the two follow-ups you requested.</p>
    </form>
  );
}
