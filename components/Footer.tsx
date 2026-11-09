import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0a1836] pb-10 pt-14 text-[15px] text-[#c6d2e6]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-4">
        <div>
          <h4 className="mb-2 font-bold text-white">{site.name}</h4>
          <p>{site.tagline}</p>
        </div>
        <div>
          <p><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></p>
        </div>
        <div>
          <p>{site.offices}</p>
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
        <p className="border-t border-[#22386b] pt-4 text-[13px] md:col-span-4">Copyright © 2026 {site.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
