import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PostCard from "@/components/PostCard";
import { Section, wrap, h2 } from "@/components/ui";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { excerpt } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} | Bade Adesemowo`, description: excerpt(p.paragraphs[0], 155), alternates: { canonical: `/blog/${p.slug}` }, openGraph: { type: "article", images: [`/images/card-${p.image}.webp`] } };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    image: `${site.url}/images/card-${p.image}.webp`,
    author: { "@type": "Person", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <article>
        <header className="bg-deep text-white">
          <div className={`${wrap} max-w-4xl py-12 md:py-16`}>
            <Link href="/blog" className="mb-6 inline-block text-sm font-bold text-[#8cc4f2] hover:text-white">← Back to blog</Link>
            <h1 className="mb-4 text-[clamp(28px,4.4vw,48px)] font-extrabold leading-tight tracking-tight">{p.title}</h1>
            <p className="text-[#c6d2e6]">{p.categories.join(", ")}</p>
          </div>
        </header>
        <div className={`${wrap} max-w-3xl py-10 md:py-14`}>
          <Image src={`/images/card-${p.image}.webp`} alt={p.imageAlt} width={768} height={480} priority className="mb-10 aspect-[16/10] w-full rounded-[22px] object-cover" />
          <div className="space-y-5 text-[17px] leading-8 text-[#26324a]">
            {p.paragraphs.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </div>
      </article>
      <Section soft>
        <h2 className={`${h2} mb-8`}>More from the blog</h2>
        <div className="grid gap-5 md:grid-cols-3">{more.map((x) => <PostCard key={x.slug} p={x} />)}</div>
      </Section>
      <CtaBand />
    </>
  );
}
