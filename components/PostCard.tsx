import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";
import { excerpt } from "@/lib/format";

export default function PostCard({ p }: { p: Post }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-white transition-colors hover:border-sky">
      <Link href={`/blog/${p.slug}`} tabIndex={-1} aria-hidden>
        <Image src={`/images/card-${p.image}.webp`} alt="" width={768} height={480} loading="lazy" sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="aspect-[16/10] w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[13px] text-mute">{p.categories.join(", ")}</p>
        <h3 className="text-lg font-bold leading-snug"><Link href={`/blog/${p.slug}`} className="hover:text-sky">{p.title}</Link></h3>
        <p className="flex-1 text-[15px] text-mute">{excerpt(p.paragraphs[0])}</p>
        <Link href={`/blog/${p.slug}`} className="text-sm font-bold text-sky hover:underline">Read more<span className="sr-only">: {p.title}</span> →</Link>
      </div>
    </article>
  );
}
