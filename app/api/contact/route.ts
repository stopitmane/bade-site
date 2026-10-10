import { sendMail } from "@/lib/mail";

type Body = Record<string, string | undefined>;
const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let b: Body;
  try { b = await request.json(); } catch { return Response.json({ ok: false }, { status: 400 }); }
  if (clean(b.website)) return Response.json({ ok: true }); // honeypot: pretend success to bots
  const get = (k: string) => clean(b[k]);
  if (!get("name") || !emailOk(get("email")) || !get("message")) return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
  const ok = await sendMail(`Website contact: ${get("subject") || get("name")}`, [["Name", get("name")], ["Email", get("email")], ["Phone", get("phone")], ["Subject", get("subject")], ["Message", get("message")]], get("email"));
  return Response.json({ ok }, { status: ok ? 200 : 502 });
}
