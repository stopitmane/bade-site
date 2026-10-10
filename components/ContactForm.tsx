"use client";
import { Field, FormStatus, Honeypot, useFormSubmit } from "./Fields";

export default function ContactForm() {
  const { state, onSubmit } = useFormSubmit("/api/contact");
  return (
    <form onSubmit={onSubmit} className="relative grid gap-4 rounded-[18px] border border-line bg-white p-6 md:p-8">
      <Honeypot />
      <Field label="Full name" name="name" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email address" name="email" type="email" required />
        <Field label="Phone number" name="phone" type="tel" />
      </div>
      <Field label="Subject" name="subject" />
      <Field label="Message" name="message" textarea required />
      <button disabled={state === "sending"} className="rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-sky disabled:opacity-60">{state === "sending" ? "Sending..." : "Submit"}</button>
      <FormStatus state={state} success="Thank you! Your message has been sent successfully." />
    </form>
  );
}
