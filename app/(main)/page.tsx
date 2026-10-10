import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import PostCard from "@/components/PostCard";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { Button, Eyebrow, Section, h2 } from "@/components/ui";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Bade Adesemowo | Technology Leader, Fractional CTO & Scale-up Advisor",
  description: "Driving technology innovation and growth. Bade Adesemowo is a Nigerian tech entrepreneur, AI expert, and Fractional CTO with over 20 years of experience scaling startups and advising enterprises globally.",
  alternates: { canonical: "/" },
};

const why = [
  { t: "Proven technology leadership & scaling", d: "Leading technology from startup ideation (Social Lender) through growth (200k+ users, multi-country expansion) to enterprise acquisition integration (Pay Dashboard/Experian £100m deal)." },
  { t: "AI implementation & innovation", d: "Architecting and delivering AI solutions (RAG, LLM integration, MLOps) and UK Global Talent in Digital Technology." },
  { t: "Strategic & full-stack expert", d: "Driving business strategy via technology, managing global teams, and knowledge across software development, cloud (AWS/Azure/GCP), DevOps, Fintech, and cybersecurity." },
];

export default function Home() {
  return (
    <>
      <PageHero tall eyebrow="Driving technology innovation and growth" title="Shaping the Future with Intelligent Solutions" sub="A visionary tech leader driving business growth, advising startups, developing top talent, and leading AI engineering to foster innovation and solve complex challenges." image="hero-dark" imageAlt="Portrait of Bade Adesemowo in a dark suit with arms crossed">
        <Button href="/invite-to-speak" variant="light">Invite him to speak</Button>
        <Button href="/free-consultation" variant="accent">Book a free consultation</Button>
      </PageHero>

      <div className="border-b border-line bg-soft py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-9 gap-y-3 px-5 font-bold text-mute">
          <span className="text-sm font-medium">Trusted by world-class organizations</span>
          {site.trustedBy.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-[.8fr_1.2fr] md:gap-14">
          <Image src="/images/grey-seated.webp" alt="Bade Adesemowo seated in an office chair, wearing a grey suit" width={768} height={1376} className="max-h-[560px] w-full rounded-[28px] object-cover object-top" />
          <div>
            <Eyebrow>About</Eyebrow>
            <h2 className={`${h2} mb-4`}>Technology Leader & Scale-up Advisor</h2>
            <p className="max-w-[620px] text-mute">Bade Adesemowo is a Nigerian technology entrepreneur, investor, and business leader with over 20 years of experience. He is the Co-Founder and CTO of Social Lender, a fintech utilizing social reputation for financial access, and a Partner at Bincom.</p>
            <p className="my-5 text-[22px] font-extrabold text-brand">Bade Adesemowo</p>
            <Button href="/about">Learn more about Bade</Button>
          </div>
        </div>
      </Section>

      <Section soft>
        <Eyebrow>My expertise</Eyebrow>
        <h2 className={`${h2} mb-9 max-w-3xl`}>Delivering Best Use of Technology with Innovation</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
        <div className="mt-8"><Button href="/expertise">View all services</Button></div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr] md:gap-14">
          <div>
            <Eyebrow>Why work with Bade</Eyebrow>
            <h2 className={`${h2} mb-6`}>Your Success Is Our Reputation</h2>
            <div className="space-y-4">
              {why.map((w) => (
                <div key={w.t} className="rounded-[14px] border border-line bg-white p-5">
                  <h3 className="mb-1 font-bold text-brand">{w.t}</h3>
                  <p className="text-[15px] text-mute">{w.d}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-6 rounded-r-[14px] border-l-4 border-sky bg-soft px-6 py-5 font-medium">
              “AI will not take your job. It is the guys that embrace the technology that will take it.”
              <cite className="mt-1.5 block text-sm font-normal not-italic text-mute">Bade Adesemowo</cite>
            </blockquote>
          </div>
          <Image src="/images/blue-shirt.webp" alt="Bade Adesemowo smiling in a light blue shirt with arms crossed" width={768} height={1376} loading="lazy" className="max-h-[560px] w-full rounded-[28px] object-cover object-top" />
        </div>
      </Section>

      <Testimonials />

      <Section>
        <Eyebrow>Our blog</Eyebrow>
        <h2 className={`${h2} mb-9`}>Latest From Our Press</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => <PostCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-8"><Button href="/blog">Visit the blog</Button></div>
      </Section>

      <CtaBand />
    </>
  );
}
