"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Button } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <Link href="/" onClick={close} aria-label="Bade Adesemowo home" className="block shrink-0">
          <Image src="/images/logo.png" alt="Bade Adesemowo, Best Use of Technology" width={46} height={46} priority className="size-[46px]" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium text-mute lg:flex">
          {site.nav.map((n) =>
            n.label === "Expertise" ? (
              <div key={n.href} className="group relative">
                <Link href={n.href} className="inline-flex items-center gap-1 py-5 hover:text-ink">Expertise <span aria-hidden className="text-[10px]">▼</span></Link>
                <div className="invisible absolute left-0 top-full w-72 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/expertise/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm hover:bg-soft hover:text-ink">{s.title}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={n.href} href={n.href} className="hover:text-ink">{n.label}</Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search the site" className="grid size-10 place-items-center rounded-full text-mute hover:bg-soft hover:text-ink">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          </Link>
          <Button href="/free-consultation" variant="accent" className="hidden whitespace-nowrap !px-4 !py-3 md:inline-block">Book a free consultation</Button>
          <button type="button" aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full text-ink hover:bg-soft lg:hidden">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white px-5 pb-6 pt-3 lg:hidden">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={close} className="block border-b border-line py-3 font-semibold">{n.label}</Link>
          ))}
          <p className="pb-1 pt-4 text-xs font-bold uppercase tracking-wider text-sky">Services</p>
          {services.map((s) => (
            <Link key={s.slug} href={`/expertise/${s.slug}`} onClick={close} className="block py-2 text-[15px] text-mute">{s.title}</Link>
          ))}
          <div className="mt-4"><Button href="/free-consultation" variant="accent" className="block">Book a free consultation</Button></div>
        </nav>
      )}
    </header>
  );
}
