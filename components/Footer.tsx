import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0a1836] pb-10 pt-14 text-[15px] text-[#c6d2e6]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-4">
        <div>
          <h4 className="mb-2 font-bold text-white">{site.name}</h4>
          <p>{site.tagline}</p>
          <p className="mt-2">{site.hours}. {site.hoursNote}.</p>
        </div>
        <div>
          <h4 className="mb-2 font-bold text-white">Call us directly</h4>
          <p><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></p>
          <h4 className="mb-2 mt-4 font-bold text-white">Email</h4>
          {site.emails.map((e) => (
            <p key={e}><a href={`mailto:${e}`} className="hover:text-white">{e}</a></p>
          ))}
        </div>
        <div>
          <h4 className="mb-2 font-bold text-white">Offices</h4>
          <p>{site.offices}</p>
          <p className="mt-2">{site.address}</p>
        </div>
        <div>
          <h4 className="mb-2 font-bold text-white">Quick links</h4>
          <ul className="space-y-1">
            {site.nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
            <li><Link href="/search" className="hover:text-white">Search</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-white">Sitemap</a></li>
          </ul>
        </div>
        <p className="border-t border-[#22386b] pt-4 text-[13px] md:col-span-4">Copyright © 2025 {site.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
