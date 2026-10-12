import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import { Button, Eyebrow, Section, h2 } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Bade Adesemowo",
  description: "Schedule a free 20-minute consultation with Bade Adesemowo to explore how Fractional CTO leadership or AI consulting can transform your technology strategy.",
  alternates: { canonical: "/free-consultation" },
};

function calendlyEmbed(url: string): string {
  const u = new URL(url);
  u.searchParams.delete("month");
  u.searchParams.set("embed_type", "Inline");
  u.searchParams.set("embed_domain", new URL(site.url).hostname);
  u.searchParams.set("hide_gdpr_banner", "1");
  u.searchParams.set("primary_color", "2b78bd");
  return u.toString();
}

const expect = [
  { t: "20-minute session", d: "A focused conversation about your goals." },
  { t: "Actionable insights", d: "Leave with clear next steps." },
  { t: "No obligation", d: "A free call with no strings attached." },
];
const trust = ["20+ years of experience.", "Award-winning innovator recognized by MIT, Gartner, and Alibaba Foundation.", "Global perspective: scaling solutions across 16+ countries."];

export default function FreeConsultation() {
  return (
    <>
      <PageHero tall title="Book Your Free Consultation" sub="Take the first step towards transforming your technology strategy." image="grey-seated" imageAlt="Bade Adesemowo seated in a grey suit">
        <Button href={site.phoneHref} variant="light">Call now: {site.phone}</Button>
        <Button href="#book" variant="accent">Pick a time</Button>
      </PageHero>

      <Section id="book">
        <Eyebrow>Booking</Eyebrow>
        <h2 className={`${h2} mb-8`}>Select a Time That Works for You</h2>
        {site.calendlyUrl ? (
          <>
            <iframe title="Book a free consultation" src={calendlyEmbed(site.calendlyUrl)} loading="lazy" className="h-[720px] w-full rounded-[22px] border border-line" />
            <p className="mt-4 text-center text-[15px] text-mute">
              Calendar not loading? <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-sky hover:underline">Open the booking page</a> or call <a href={site.phoneHref} className="font-bold text-sky hover:underline">{site.phone}</a>.
            </p>
          </>
        ) : (
          <div className="rounded-[22px] border border-dashed border-sky bg-soft p-8 text-center">
            <p className="mb-4 text-lg font-semibold">Online booking opens soon.</p>
            <p className="mb-6 text-mute">In the meantime, call or email to reserve your free session.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={site.phoneHref}>Call now: {site.phone}</Button>
              <Button href={`mailto:${site.emails[0]}?subject=Free%20consultation`} variant="ghostDark">Email to book</Button>
            </div>
          </div>
        )}
        <h3 className="mb-4 mt-12 text-xl font-bold">What to expect</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {expect.map((e) => (
            <div key={e.t} className="rounded-[18px] border border-line p-6">
              <h4 className="mb-1 font-bold text-brand">{e.t}</h4>
              <p className="text-[15px] text-mute">{e.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section soft>
        <Eyebrow>Trust signals</Eyebrow>
        <h2 className={`${h2} mb-8`}>Why Book a Call?</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {trust.map((t) => <li key={t} className="rounded-[18px] border border-line bg-white p-6 font-semibold">{t}</li>)}
        </ul>
      </Section>

      <Testimonials soft={false} />
    </>
  );
}
