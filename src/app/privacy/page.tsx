import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Carta collects and uses information submitted through travelbycarta.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main id="main" className="bg-warm-bg px-6 pb-24 pt-36">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow">Privacy</p>
          <h1 className="font-display text-4xl text-navy md:text-6xl">Your information stays part of the conversation.</h1>
          <p className="mt-6 text-sm text-mid-gray">Last updated July 28, 2026</p>

          <div className="mt-12 space-y-10 text-base leading-relaxed text-charcoal">
            <section>
              <h2 className="font-display text-2xl text-navy">What Carta collects</h2>
              <p className="mt-3">When you request a guide, contact Carta, book a call, or complete the private client intake, Carta may collect the contact details and trip information you choose to provide. The website also uses Vercel Analytics to understand aggregate site activity and Vercel BotID to help distinguish real form submissions from automated abuse.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-navy">How it is used</h2>
              <p className="mt-3">Carta uses this information to deliver requested resources, respond to inquiries, decide whether Carta is a fit for a trip, plan and support accepted travel, and improve the website and service. Carta does not sell personal information.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-navy">Who processes it</h2>
              <p className="mt-3">Carta uses service providers needed to operate the business, including Vercel for website hosting, analytics, and bot detection; Google for email; Airtable for client relationship records; Typeform for the private intake; and Calendly for scheduling. Each provider processes information under its own privacy terms.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-navy">Marketing choices</h2>
              <p className="mt-3">Carta sends a requested guide and only the short follow-ups described beside the form. You can opt out by replying “unsubscribe” to any message. Operational messages about a requested or active trip may still be sent when necessary.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-navy">Retention and access</h2>
              <p className="mt-3">Carta keeps information only as long as it is reasonably needed for the purpose it was collected, business records, and legal obligations. To ask what Carta holds, correct it, or request deletion, email <a href="mailto:gabe@travelbycarta.com" className="text-navy underline decoration-gold/60 underline-offset-4">gabe@travelbycarta.com</a>.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-navy">Travel information</h2>
              <p className="mt-3">Do not send passport numbers, payment card details, or other highly sensitive information through a public website form or ordinary email. Carta will provide a secure process when that information is required for an accepted trip.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
