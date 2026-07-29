import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { mailEnvironmentReady, sendCartaMail } from "@/lib/sendMail";

export const runtime = "nodejs";

interface GuidePayload {
  firstName?: string;
  email?: string;
  destination?: string;
  planningPain?: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  consent?: boolean;
  company?: string;
}

const GUIDE_URL = "https://www.travelbycarta.com/guides/carta-hotel-fit-guide.pdf";
const CONTACT_URL = "https://www.travelbycarta.com/contact";
function requestAllowed(request: Request): boolean {
  const origin = request.headers.get("origin") || "";
  const allowedOrigins = new Set([
    "https://www.travelbycarta.com",
    "https://travelbycarta.com",
    "http://localhost:3000",
    "http://localhost:3001",
  ]);
  if (process.env.VERCEL_URL) allowedOrigins.add(`https://${process.env.VERCEL_URL}`);
  if (process.env.VERCEL_BRANCH_URL) allowedOrigins.add(`https://${process.env.VERCEL_BRANCH_URL}`);
  if (!origin) return process.env.NODE_ENV !== "production";
  return allowedOrigins.has(origin);
}

function referralSource(source: string): string {
  const labels: Record<string, string> = {
    threads: "Threads",
    instagram: "Instagram",
    reddit: "Reddit",
    pinterest: "Pinterest",
    google: "Google",
    referral: "Referral",
    partner: "Partner",
  };
  return labels[source.toLowerCase()] || "Website";
}

function clean(value: unknown, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function airtableHeaders() {
  return {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    "Content-Type": "application/json",
  };
}

function airtableTableUrl(tableId: string) {
  return `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${tableId}`;
}

async function airtableJson(url: string, init: RequestInit) {
  const response = await fetch(url, init);
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Airtable ${response.status}: ${body.slice(0, 300)}`);
  }
  return response.json();
}

async function upsertLead(fields: Record<string, unknown>) {
  const clientsTable = process.env.AIRTABLE_CLIENTS_TABLE_ID;
  const tasksTable = process.env.AIRTABLE_TASKS_TABLE_ID;
  if (!clientsTable || !tasksTable) throw new Error("Airtable table IDs are missing.");

  const email = String(fields.Email);
  const formula = encodeURIComponent(`{Email}='${email.replace(/'/g, "\\'")}'`);
  const existing = await airtableJson(
    `${airtableTableUrl(clientsTable)}?maxRecords=1&filterByFormula=${formula}`,
    { headers: airtableHeaders(), cache: "no-store" }
  );

  let client = existing.records?.[0];
  let isNewLead = false;
  if (!client) {
    const upsert = await airtableJson(airtableTableUrl(clientsTable), {
      method: "PATCH",
      headers: airtableHeaders(),
      body: JSON.stringify({
        performUpsert: { fieldsToMergeOn: ["Email"] },
        records: [{ fields }],
        typecast: true,
      }),
    });
    client = upsert.records?.[0];
    if (!client?.id) throw new Error("Airtable lead upsert returned no record.");
    isNewLead = Array.isArray(upsert.createdRecords) && upsert.createdRecords.includes(client.id);
  }

  const followUpDue = new Date();
  followUpDue.setUTCDate(followUpDue.getUTCDate() + 2);
  const callDue = new Date();
  callDue.setUTCDate(callDue.getUTCDate() + 6);
  const requestedAt = new Date().toISOString();
  const requestId = crypto.randomUUID().slice(0, 8);
  const tasks = isNewLead
    ? [
        {
          Task: `Send hotel-fit insight to guide lead: ${fields["Client Name"]}`,
          Client: [client.id],
          Owner: "Gabe",
          Status: "Todo",
          Priority: "Normal",
          "Due Date": followUpDue.toISOString().slice(0, 10),
          "Next Step":
            "Send one useful note about hotel fit or room-category tradeoffs. Stop if they opt out.",
        },
        {
          Task: `Offer a discovery call to guide lead: ${fields["Client Name"]}`,
          Client: [client.id],
          Owner: "Gabe",
          Status: "Todo",
          Priority: "Normal",
          "Due Date": callDue.toISOString().slice(0, 10),
          "Next Step":
            "If a real trip is in view, offer a 20-minute discovery call. No artificial urgency. Stop if they opted out.",
        },
      ]
    : [
        {
          Task: `Review repeat Hotel Fit Guide request: ${email} — ${requestedAt} — ${requestId}`,
          Client: [client.id],
          Owner: "Gabe",
          Status: "Todo",
          Priority: "Normal",
          "Due Date": followUpDue.toISOString().slice(0, 10),
          "Next Step": `Review the new guide request without changing the existing client record. ${String(fields.Notes || "")}`,
        },
      ];

  let taskAutomationReady = true;
  try {
    await airtableJson(airtableTableUrl(tasksTable), {
      method: "PATCH",
      headers: airtableHeaders(),
      body: JSON.stringify({
        performUpsert: { fieldsToMergeOn: ["Task"] },
        typecast: true,
        records: tasks.map((taskFields) => ({ fields: taskFields })),
      }),
    });
  } catch (taskError) {
    taskAutomationReady = false;
    console.error("Hotel Fit Guide task creation failed.", taskError);
    if (isNewLead) {
      try {
        await airtableJson(`${airtableTableUrl(clientsTable)}/${client.id}`, {
          method: "PATCH",
          headers: airtableHeaders(),
          body: JSON.stringify({
            fields: {
              Notes: `${String(fields.Notes || "")}\n[FOLLOW-UP TASK CREATION FAILED — manual repair required]`,
            },
          }),
        });
      } catch (markerError) {
        console.error("Hotel Fit Guide task-failure marker failed.", markerError);
      }
    }
  }

  return { clientId: client.id as string, taskAutomationReady };
}

export async function POST(request: Request) {
  if (!requestAllowed(request)) {
    return NextResponse.json(
      { error: "This request could not be verified." },
      { status: 403 }
    );
  }

  const verification = await checkBotId();
  if (verification.isBot) {
    return NextResponse.json({ error: "This request could not be verified." }, { status: 403 });
  }

  let body: GuidePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.company)) return NextResponse.json({ ok: true });

  const firstName = clean(body.firstName, 80);
  const email = clean(body.email, 254).toLowerCase();
  const destination = clean(body.destination, 160);
  const planningPain = clean(body.planningPain, 500);
  const source = clean(body.source, 80) || "Website";
  const utmSource = clean(body.utmSource, 120);
  const utmMedium = clean(body.utmMedium, 120);
  const utmCampaign = clean(body.utmCampaign, 160);

  if (!firstName || !validEmail(email) || body.consent !== true) {
    return NextResponse.json(
      { error: "First name, a valid email, and permission to send the guide are required." },
      { status: 400 }
    );
  }

  const required = [
    "AIRTABLE_API_KEY",
    "AIRTABLE_BASE_ID",
    "AIRTABLE_CLIENTS_TABLE_ID",
    "AIRTABLE_TASKS_TABLE_ID",
    "SMTP_USER",
  ];
  if (required.some((key) => !process.env[key]) || !mailEnvironmentReady()) {
    console.error("Hotel Fit Guide: required environment is incomplete.");
    return NextResponse.json(
      { error: "Guide delivery is temporarily unavailable. Please email gabe@travelbycarta.com." },
      { status: 503 }
    );
  }

  const notes = [
    "Requested the Carta Hotel Fit Guide.",
    destination ? `Destination: ${destination}` : "",
    planningPain ? `Planning concern: ${planningPain}` : "",
    `Source: ${source}`,
    utmSource ? `UTM source: ${utmSource}` : "",
    utmMedium ? `UTM medium: ${utmMedium}` : "",
    utmCampaign ? `UTM campaign: ${utmCampaign}` : "",
    "Permission: guide delivery and up to two useful follow-ups; opt out by reply.",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const leadResult = await upsertLead({
      "Client Name": firstName,
      Email: email,
      Stage: "Lead",
      "Referral Source": referralSource(source),
      "Preferred Contact Method": "Email",
      "Last Contact Date": new Date().toISOString().slice(0, 10),
      "Next Action": "Send the Hotel Fit Guide follow-up and qualify whether a real trip is in view.",
      Notes: notes,
    });

    const gabe = process.env.CONTACT_TO || "gabe@travelbycarta.com";

    const deliveries = await Promise.allSettled([
      sendCartaMail({
        to: email,
        replyTo: gabe,
        subject: "Your Carta Hotel Fit Guide",
        text: `Hi ${firstName},\n\nHere is the Hotel Fit Guide: ${GUIDE_URL}\n\nThe expensive mistake is rarely choosing a bad hotel. It is choosing a very good hotel that is wrong for the way you travel. These are the seven questions I use before I recommend one.\n\nIf you already have a destination or a shortlist, reply and send it to me. I read every note myself.\n\nGabe\nCarta\n${CONTACT_URL}\n\nYou asked for this guide at travelbycarta.com. Reply with unsubscribe if you do not want the two short follow-ups you requested.`,
        html: `<div style="max-width:600px;font-family:Arial,sans-serif;color:#2C2C2C;line-height:1.7"><p style="font-size:11px;letter-spacing:.2em;color:#C9A84C;text-transform:uppercase">Carta · Hotel Fit Guide</p><h1 style="font-family:Georgia,serif;font-weight:400;color:#0F1E3C">Hi ${escapeHtml(firstName)},</h1><p>Here is the guide you requested.</p><p><a href="${GUIDE_URL}" style="display:inline-block;background:#0F1E3C;color:#F5F0E8;padding:13px 18px;text-decoration:none">Open the Hotel Fit Guide</a></p><p>The expensive mistake is rarely choosing a bad hotel. It is choosing a very good hotel that is wrong for the way you travel. These are the seven questions I use before I recommend one.</p><p>If you already have a destination or a shortlist, reply and send it to me. I read every note myself.</p><p>Gabe<br/>Carta</p><hr style="border:0;border-top:1px solid #ddd;margin:28px 0"/><p style="font-size:12px;color:#666">You asked for this guide at travelbycarta.com. Reply with “unsubscribe” if you do not want the two short follow-ups you requested.</p></div>`,
      }),
      sendCartaMail({
        to: gabe,
        replyTo: email,
        subject: `${leadResult.taskAutomationReady ? "" : "TASK REPAIR NEEDED — "}Hotel Fit Guide Lead: ${firstName}`,
        text: `${firstName} requested the Hotel Fit Guide.\nEmail: ${email}\nDestination: ${destination || "Not provided"}\nPlanning concern: ${planningPain || "Not provided"}\nSource: ${source}\nUTM: ${utmSource || "-"} / ${utmMedium || "-"} / ${utmCampaign || "-"}\nTask automation: ${leadResult.taskAutomationReady ? "ready" : "failed — create follow-up tasks manually"}`,
      }),
    ]);

    const deliveredByEmail = deliveries[0].status === "fulfilled";
    if (deliveries[0].status === "rejected") {
      console.error("Hotel Fit Guide email delivery failed.", deliveries[0].reason);
    }
    if (deliveries[1].status === "rejected") {
      console.error("Hotel Fit Guide internal notification failed.", deliveries[1].reason);
    }

    return NextResponse.json({
      ok: true,
      deliveredByEmail,
      followUpTasksReady: leadResult.taskAutomationReady,
      guideUrl: "/guides/carta-hotel-fit-guide.pdf",
    });
  } catch (error) {
    console.error("Hotel Fit Guide lead delivery failed.", error);
    return NextResponse.json(
      { error: "I could not deliver the guide right now. Please email gabe@travelbycarta.com." },
      { status: 502 }
    );
  }

}
