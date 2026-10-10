import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { Button, Eyebrow, Section, h2 } from "@/components/ui";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: `${s.title} | Bade Adesemowo`, description: s.detail, alternates: { canonical: `/expertise/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = s.relatedCategory ? posts.filter((p) => p.categories.includes(s.relatedCategory!)) : [];
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.detail,
    provider: { "@type": "Person", name: site.name, url: site.url },
    url: `${site.url}/expertise/${s.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero eyebrow="Expertise" title={s.title} sub={s.detail}>
        <Button href="/free-consultation" variant="accent">Book a free consultation</Button>
        <Button href={site.phoneHref} variant="ghostLight">Call now: {site.phone}</Button>
      </PageHero>

      <Section>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-mute">
          <Link href="/expertise" className="hover:text-ink">Expertise</Link> / <span className="font-semibold text-ink">{s.title}</span>
        </nav>
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[18px] border border-line bg-white p-6 md:p-8">
            <Eyebrow>Focus</Eyebrow>
            <p className="text-xl font-bold text-brand">{s.focus}</p>
          </div>
          <div className="rounded-[18px] border border-line bg-white p-6 md:p-8">
            <Eyebrow>Key deliverables</Eyebrow>
            <ul className="space-y-2.5">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 font-semibold"><span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-sky" />{d}</li>
              ))}
            </ul>
          </div>
        </div>

        {s.included && (
          <div className="mt-8 rounded-[18px] bg-soft p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">{s.included.title}</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {s.included.items.map((it) => (
                <li key={it} className="flex gap-3 rounded-[14px] bg-white p-4 text-[15px] text-mute"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-sky" />{it}</li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {related.length > 0 && (
        <Section soft>
          <Eyebrow>Related reading</Eyebrow>
          <h2 className={`${h2} mb-8`}>From the blog</h2>
          <div className="grid gap-5 md:grid-cols-3">{related.map((p) => <PostCard key={p.slug} p={p} />)}</div>
        </Section>
      )}

      <Section>
        <h2 className={`${h2} mb-8`}>Explore other services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{others.map((o) => <ServiceCard key={o.slug} s={o} />)}</div>
        <div className="mt-8"><Button href="/expertise" variant="ghostDark">View all services</Button></div>
      </Section>

      <CtaBand title={`Talk to Bade about ${s.title}`} text="Book a free 30-minute consultation to explore how this can work for your business." />
    </>
  );
}
