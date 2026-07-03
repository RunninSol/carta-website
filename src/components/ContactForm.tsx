"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    trip: "",
    source: "",
    company: "", // honeypot
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error ||
            "Something went wrong. Please email gabe@travelbycarta.com directly."
        );
      }

      setStatus("sent");
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email gabe@travelbycarta.com directly."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <div className="mb-6 h-px w-12 bg-gold" />
        <h3 className="font-display text-xl text-navy">
          Your message is on its way.
        </h3>
        <p className="mt-4 text-sm text-mid-gray">
          I respond within 4 hours on business days.
        </p>
        <div className="mb-4 mt-6 h-px w-8 bg-gold/40" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mid-gray/60">
          gabe@travelbycarta.com
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-lg" noValidate>
      <div className="grid gap-lg sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-sm block text-xs font-semibold uppercase tracking-[0.2em] text-mid-gray"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-navy/20 bg-white px-4 py-3 text-sm text-charcoal placeholder-mid-gray/40 outline-none transition-colors focus:border-gold"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-sm block text-xs font-semibold uppercase tracking-[0.2em] text-mid-gray"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-navy/20 bg-white px-4 py-3 text-sm text-charcoal placeholder-mid-gray/40 outline-none transition-colors focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-sm block text-xs font-semibold uppercase tracking-[0.2em] text-mid-gray"
        >
          Phone{" "}
          <span className="normal-case tracking-normal text-mid-gray/50">
            (optional)
          </span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (000) 000-0000"
          className="w-full border border-navy/20 bg-white px-4 py-3 text-sm text-charcoal placeholder-mid-gray/40 outline-none transition-colors focus:border-gold"
        />
      </div>

      <div>
        <label
          htmlFor="trip"
          className="mb-sm block text-xs font-semibold uppercase tracking-[0.2em] text-mid-gray"
        >
          Tell me about your next trip
        </label>
        <textarea
          id="trip"
          name="trip"
          required
          rows={5}
          value={form.trip}
          onChange={handleChange}
          placeholder="Where are you going? When? What are you hoping for?"
          className="w-full resize-none border border-navy/20 bg-white px-4 py-3 text-sm text-charcoal placeholder-mid-gray/40 outline-none transition-colors focus:border-gold"
        />
      </div>

      <fieldset>
        <legend className="mb-sm block text-xs font-semibold uppercase tracking-[0.2em] text-mid-gray">
          How did you hear about me?
        </legend>
        <div className="flex flex-wrap gap-2">
          {[
            ["referral", "A friend or colleague"],
            ["instagram", "Instagram"],
            ["threads", "Threads"],
            ["google", "Google search"],
            ["worldvia", "WorldVia"],
            ["press", "Press or media"],
            ["other", "Other"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  source: prev.source === value ? "" : value,
                }))
              }
              aria-pressed={form.source === value}
              className={`rounded-sm border px-3.5 py-2 text-sm transition-colors ${
                form.source === value
                  ? "border-gold bg-navy text-ivory"
                  : "border-navy/20 bg-white text-charcoal hover:border-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-secondary w-full disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Let's Talk"}
      </button>
    </form>
  );
}
