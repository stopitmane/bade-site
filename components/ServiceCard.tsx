import Link from "next/link";
import type { Service } from "@/data/services";
import { card } from "./ui";

export default function ServiceCard({ s, long = false }: { s: Service; long?: boolean }) {
  return (
    <article className={card}>
      <span className="grid size-10 place-items-center rounded-[10px] bg-brand text-[15px] font-extrabold text-white">{s.code}</span>
      <h3 className="text-lg font-bold leading-tight">{s.title}</h3>
      <p className="flex-1 text-[15px] text-mute">{long ? s.detail : s.summary}</p>
      <Link href={`/expertise/${s.slug}`} className="text-sm font-bold text-sky hover:underline">More<span className="sr-only"> about {s.title}</span> →</Link>
    </article>
  );
}
