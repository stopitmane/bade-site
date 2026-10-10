"use client";
import { useState } from "react";

const input = "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-sky focus:ring-2 focus:ring-sky/30";

export function Field({ label, name, type = "text", required = false, textarea = false, options }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean; options?: string[] }) {
  return (
    <label className="block text-sm font-semibold">
      {label}{required && <span className="text-sky"> *</span>}
      {options ? (
        <select name={name} required={required} defaultValue="" className={`mt-1.5 ${input} font-normal`}>
          <option value="" disabled>Select</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea name={name} required={required} rows={5} className={`mt-1.5 ${input} font-normal`} />
      ) : (
        <input name={name} type={type} required={required} className={`mt-1.5 ${input} font-normal`} />
      )}
    </label>
  );
}

export function useFormSubmit(endpoint: string) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      if (!res.ok) throw new Error();
      form.reset();
      setState("done");
    } catch {
      setState("error");
    }
  }
  return { state, onSubmit };
}

export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
    </div>
  );
}

export function FormStatus({ state, success }: { state: "idle" | "sending" | "done" | "error"; success: string }) {
  return (
    <div role="status" aria-live="polite">
      {state === "done" && <p className="rounded-xl bg-[#e6f1fb] p-4 font-semibold text-brand">{success}</p>}
      {state === "error" && <p className="rounded-xl bg-red-50 p-4 font-semibold text-red-700">Something went wrong. Please try again or call us directly.</p>}
    </div>
  );
}
