import { sendMail } from "@/lib/mail";

type Body = Record<string, string | undefined>;
const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let b: Body;
  try { b = await request.json(); } catch { return Response.json({ ok: false }, { status: 400 }); }
  if (clean(b.website)) return Response.json({ ok: true }); // honeypot: pretend success to bots
  const get = (k: string) => clean(b[k]);
  if (!get("name") || !emailOk(get("email")) || !get("eventName") || !get("eventDate") || !get("eventLocation") || !get("eventType")) return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
  const ok = await sendMail(`Speaking request: ${get("eventName")}`, [["Event name", get("eventName")], ["Event date", get("eventDate")], ["Location", get("eventLocation")], ["Event type", get("eventType")], ["Audience size", get("audience")], ["Name", get("name")], ["Email", get("email")], ["Phone", get("phone")], ["Details", get("message")]], get("email"));
  return Response.json({ ok }, { status: ok ? 200 : 502 });
}
