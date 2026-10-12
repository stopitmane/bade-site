// Sends form submissions by email through Resend when RESEND_API_KEY is set.
// Without it (local dev), the submission is logged and treated as successful.
export async function sendMail(subject: string, lines: [string, string][], replyTo?: string): Promise<boolean> {
  const text = lines.map(([k, v]) => `${k}: ${v || "-"}`).join("\n");
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "b.adesemowo@gmail.com";
  if (!key) {
    console.log(`[form] ${subject}\n${text}`);
    return true;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Website <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      subject,
      text,
      reply_to: replyTo,
    }),
  });
  return res.ok;
}
