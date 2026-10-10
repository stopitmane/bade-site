"use client";
import { Field, FormStatus, Honeypot, useFormSubmit } from "./Fields";

export default function SpeakForm() {
  const { state, onSubmit } = useFormSubmit("/api/speak");
  return (
    <form onSubmit={onSubmit} className="relative grid gap-4 rounded-[18px] border border-line bg-white p-6 md:p-8">
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Event name" name="eventName" required />
        <Field label="Event date" name="eventDate" type="date" required />
        <Field label="Event location (city/country)" name="eventLocation" required />
        <Field label="Event type" name="eventType" required options={["Conference", "Webinar", "Corporate Training"]} />
        <Field label="Expected audience size" name="audience" type="number" />
        <Field label="Your name" name="name" required />
        <Field label="Your email" name="email" type="email" required />
        <Field label="Your phone number" name="phone" type="tel" />
      </div>
      <Field label="Additional details / message" name="message" textarea />
      <button disabled={state === "sending"} className="rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-sky disabled:opacity-60">{state === "sending" ? "Sending..." : "Submit request"}</button>
      <FormStatus state={state} success="Thank you! Your speaking request has been sent. We will get back to you shortly." />
    </form>
  );
}
