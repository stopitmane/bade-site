import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { Button, Eyebrow, Section, h2 } from "@/components/ui";
import { services, offerGroups } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services | Fractional CTO, AI Consulting & Tech Talent Visa",
  description: "Explore Bade Adesemowo's consulting services: Fractional CTO leadership, AI and machine learning consulting, technology strategy, product innovation, and UK Tech Talent Visa guidance.",
  alternates: { canonical: "/expertise" },
};

export default function Expertise() {
  return (
    <>
      <PageHero eyebrow="Expertise" title="Empowering the Future with AI & Technology" sub="World-class technology strategy, AI solutions, and product innovation tailored to your business goals.">
        <Button href="/contact" variant="light">Get in touch</Button>
        <Button href={site.phoneHref} variant="ghostLight">Call now: {site.phone}</Button>
      </PageHero>

      <Section>
        <Eyebrow>My expertise</Eyebrow>
        <h2 className={`${h2} mb-9 max-w-3xl`}>Transforming Ambitions into Scalable Solutions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <ServiceCard key={s.slug} s={s} long />)}
        </div>
      </Section>

      <Section soft>
        <Eyebrow>Detailed service breakdown</Eyebrow>
        <h2 className={`${h2} mb-9`}>What I Can Offer You</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {offerGroups.map((g, i) => (
            <div key={g.title} className="rounded-[18px] border border-line bg-white p-6">
              <p className="mb-1 text-sm font-bold text-sky">0{i + 1}</p>
              <h3 className="mb-3 text-xl font-bold">{g.title}</h3>
              <ul className="space-y-2 text-[15px] text-mute">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-sky" />{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Let's bring your next big idea to life" text="Tell us about your goals and we will shape the right engagement." image="sketch-window" />
    </>
  );
}
