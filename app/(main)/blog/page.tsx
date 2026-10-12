import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogExplorer from "@/components/BlogExplorer";
import { Section } from "@/components/ui";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog & Press | Bade Adesemowo",
  description: "Insights on AI, tech talent visas, startup scaling, and the African technology ecosystem from Bade Adesemowo, technology leader, Fractional CTO, and AI innovator.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const cats = [...new Set(posts.flatMap((p) => p.categories))].sort();
  const counts = cats.map((c) => [c, posts.filter((p) => p.categories.includes(c)).length] as const);
  return (
    <>
      <PageHero eyebrow="Our blog" title="Blog & Press" sub="Insights on AI, Technology Leadership, and Global Tech Talent Mobility." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <BlogExplorer posts={posts} categories={cats} />
          <aside className="space-y-6" aria-label="Blog sidebar">
            <div className="rounded-[18px] border border-line p-5">
              <h2 className="mb-3 font-bold">Recent posts</h2>
              <ul className="space-y-2 text-[15px]">
                {posts.map((p) => <li key={p.slug}><Link href={`/blog/${p.slug}`} className="text-mute hover:text-sky">{p.title}</Link></li>)}
              </ul>
            </div>
            <div className="rounded-[18px] border border-line p-5">
              <h2 className="mb-3 font-bold">Categories</h2>
              <ul className="space-y-1 text-[15px] text-mute">
                {counts.map(([c, n]) => <li key={c}>{c} ({n})</li>)}
              </ul>
            </div>
            <div className="rounded-[18px] border border-line p-5">
              <h2 className="mb-2 font-bold">Recent comments</h2>
              <p className="text-[15px] text-mute">No comments to show.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
