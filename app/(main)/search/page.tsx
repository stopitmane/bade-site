import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Section, h2 } from "@/components/ui";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { excerpt } from "@/lib/format";

export const metadata: Metadata = { title: "Search | Bade Adesemowo", robots: { index: false } };

type Hit = { title: string; href: string; kind: string; text: string };

const pages: Hit[] = [
  { title: "Home", href: "/", kind: "Page", text: "Shaping the future with intelligent solutions Fractional CTO scale-up advisor" },
  { title: "About Bade", href: "/about", kind: "Page", text: "Social Lender Bincom UK Global Talent endorsement award-winning innovator" },
  { title: "Expertise", href: "/expertise", kind: "Page", text: "Services AI machine learning technology strategy product innovation" },
  { title: "Blog & Press", href: "/blog", kind: "Page", text: "Insights on AI technology leadership global tech talent mobility" },
  { title: "Contact", href: "/contact", kind: "Page", text: "Contact form phone email offices Lagos London" },
  { title: "Book a free consultation", href: "/free-consultation", kind: "Page", text: "Free 20-minute consultation Calendly booking" },
  { title: "Invite Bade to speak", href: "/invite-to-speak", kind: "Page", text: "Keynote speaker conferences webinars corporate events" },
];

async function Results({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const needle = q.trim().toLowerCase();
  const all: Hit[] = [
    ...pages,
    ...services.map((s) => ({ title: s.title, href: `/expertise/${s.slug}`, kind: "Service", text: [s.detail, s.focus, ...s.deliverables, ...(s.included?.items ?? [])].join(" ") })),
    ...posts.map((p) => ({ title: p.title, href: `/blog/${p.slug}`, kind: "Blog", text: p.paragraphs.join(" ") })),
  ];
  const hits = needle ? all.filter((h) => (h.title + " " + h.text).toLowerCase().includes(needle)) : [];
  return (
    <>
      <form action="/search" role="search" className="mb-8 flex max-w-xl gap-2">
        <label className="flex-1"><span className="sr-only">Search the site</span>
          <input name="q" defaultValue={q} placeholder="Search services, articles, pages..." className="w-full rounded-full border border-line px-5 py-3 outline-none focus:border-sky focus:ring-2 focus:ring-sky/30" />
        </label>
        <button className="rounded-full bg-brand px-6 py-3 font-bold text-white hover:bg-sky">Search</button>
      </form>
      {needle ? (
        hits.length ? (
          <ul className="space-y-4">
            {hits.map((h) => (
              <li key={h.href} className="rounded-[14px] border border-line p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-sky">{h.kind}</p>
                <Link href={h.href} className="text-lg font-bold hover:text-sky">{h.title}</Link>
                <p className="text-[15px] text-mute">{excerpt(h.text, 150)}</p>
              </li>
            ))}
          </ul>
        ) : <p className="text-mute">No results for “{q}”.</p>
      ) : <p className="text-mute">Type a keyword to search the site.</p>}
    </>
  );
}

export default function Search({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  return (
    <Section className="min-h-[60vh]">
      <h1 className={`${h2} mb-6`}>Search</h1>
      <Suspense fallback={<p className="text-mute">Loading...</p>}>
        <Results searchParams={searchParams} />
      </Suspense>
    </Section>
  );
}
