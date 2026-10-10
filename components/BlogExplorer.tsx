"use client";
import { useMemo, useState } from "react";
import type { Post } from "@/data/posts";
import PostCard from "./PostCard";

export default function BlogExplorer({ posts, categories }: { posts: Post[]; categories: string[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return posts.filter((p) => (cat === "All" || p.categories.includes(cat)) && (!needle || (p.title + " " + p.paragraphs.join(" ")).toLowerCase().includes(needle)));
  }, [posts, q, cat]);
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...categories].map((c) => (
            <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${cat === c ? "border-brand bg-brand text-white" : "border-line text-mute hover:border-sky hover:text-ink"}`}>{c}</button>
          ))}
        </div>
        <label className="block sm:w-64">
          <span className="sr-only">Search articles</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." className="w-full rounded-full border border-line px-4 py-2.5 text-[15px] outline-none focus:border-sky focus:ring-2 focus:ring-sky/30" />
        </label>
      </div>
      {shown.length ? (
        <div className="grid gap-5 sm:grid-cols-2">{shown.map((p) => <PostCard key={p.slug} p={p} />)}</div>
      ) : (
        <p className="rounded-2xl bg-soft p-6 text-mute" role="status">No articles match your search.</p>
      )}
    </div>
  );
}
