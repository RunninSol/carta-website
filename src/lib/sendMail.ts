export interface CartaMail {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

function encodeHeader(value: string): string {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function assertSafeHeader(value: string, label: string): void {
  if (/\r|\n/.test(value)) throw new Error(`Invalid ${label} header.`);
}

async function gmailAccessToken(): Promise<string> {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GMAIL_CLIENT_ID || "",
      client_secret: process.env.GMAIL_CLIENT_SECRET || "",
      refresh_token: process.env.GMAIL_REFRESH_TOKEN || "",
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Google OAuth refresh failed: ${response.status}`);
  const data = await response.json();
  if (!data.access_token) throw new Error("Google OAuth refresh returned no access token.");
  return data.access_token;
}

async function sendWithGmailApi(message: CartaMail): Promise<void> {
  const fromAddress = process.env.SMTP_USER || "gabe@travelbycarta.com";
  const fromHeader = process.env.CONTACT_FROM || `Carta <${fromAddress}>`;
  const replyTo = message.replyTo || fromAddress;
  assertSafeHeader(fromHeader, "From");
  assertSafeHeader(message.to, "To");
  assertSafeHeader(replyTo, "Reply-To");
  assertSafeHeader(message.subject, "Subject");
  const boundary = `carta_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const headers = [
    `From: ${fromHeader}`,
    `To: ${message.to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${encodeHeader(message.subject)}`,
    "MIME-Version: 1.0",
    message.html
      ? `Content-Type: multipart/alternative; boundary=\"${boundary}\"`
      : "Content-Type: text/plain; charset=UTF-8",
    ...(!message.html ? ["Content-Transfer-Encoding: 8bit"] : []),
  ];
  const body = message.html
    ? [
        `--${boundary}`,
        "Content-Type: text/plain; charset=UTF-8",
        "Content-Transfer-Encoding: 8bit",
        "",
        message.text,
        `--${boundary}`,
        "Content-Type: text/html; charset=UTF-8",
        "Content-Transfer-Encoding: 8bit",
        "",
        message.html,
        `--${boundary}--`,
      ].join("\r\n")
    : message.text;
  const raw = Buffer.from([...headers, "", body].join("\r\n"), "utf8").toString("base64url");
  const token = await gmailAccessToken();
  const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ raw }),
    cache: "no-store",
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Gmail send failed: ${response.status} ${detail.slice(0, 300)}`);
  }
}

export function mailEnvironmentReady(): boolean {
  return Boolean(
    process.env.SMTP_USER &&
      process.env.GMAIL_CLIENT_ID &&
      process.env.GMAIL_CLIENT_SECRET &&
      process.env.GMAIL_REFRESH_TOKEN
  );
}

export async function sendCartaMail(message: CartaMail): Promise<void> {
  if (!mailEnvironmentReady()) throw new Error("Mail environment is incomplete.");
  await sendWithGmailApi(message);
}
