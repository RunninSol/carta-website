import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface InquiryPayload {
  name?: string;
  email?: string;
  phone?: string;
  trip?: string;
  source?: string;
  // Honeypot — real users never fill this.
  company?: string;
}

const SOURCE_LABELS: Record<string, string> = {
  referral: "A friend or colleague",
  instagram: "Instagram",
  google: "Google search",
  worldvia: "WorldVia",
  press: "Press or media",
  other: "Other",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: InquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept (so bots think they succeeded) but send nothing.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const trip = (body.trip || "").trim();
  const source = (body.source || "").trim();

  if (!name || !email || !trip) {
    return NextResponse.json(
      { error: "Name, email, and trip details are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP credentials are not configured.");
    return NextResponse.json(
      {
        error:
          "Inquiries are not yet configured. Please email gabe@travelbycarta.com directly.",
      },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port: Number(SMTP_PORT) || 465,
    secure: (Number(SMTP_PORT) || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const sourceLabel = source ? SOURCE_LABELS[source] || source : "Not provided";
  const to = CONTACT_TO || "gabe@travelbycarta.com";
  const from = CONTACT_FROM || `Carta Website <${SMTP_USER}>`;

  const text = [
    `New discovery call inquiry from travelbycarta.com`,
    ``,
    `Name:  ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Source: ${sourceLabel}`,
    ``,
    `About their trip:`,
    trip,
  ].join("\n");

  const html = `
    <div style="font-family:Georgia,serif;color:#2c2c2c;max-width:560px;">
      <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#c9a84c;">
        New Inquiry · travelbycarta.com
      </p>
      <h2 style="color:#0f1e3c;font-weight:300;">${escapeHtml(name)} wants to talk.</h2>
      <table style="font-size:14px;line-height:1.7;border-collapse:collapse;">
        <tr><td style="padding:2px 16px 2px 0;color:#6b6b6b;">Email</td>
            <td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:2px 16px 2px 0;color:#6b6b6b;">Phone</td>
            <td>${escapeHtml(phone || "Not provided")}</td></tr>
        <tr><td style="padding:2px 16px 2px 0;color:#6b6b6b;">Source</td>
            <td>${escapeHtml(sourceLabel)}</td></tr>
      </table>
      <p style="margin-top:20px;color:#6b6b6b;font-size:12px;text-transform:uppercase;letter-spacing:0.15em;">
        About their trip
      </p>
      <p style="font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(trip)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `Discovery Call Request: ${name}`,
      text,
      html,
    });
  } catch (err) {
    console.error("Contact form: failed to send mail.", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Please email gabe@travelbycarta.com directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
