import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Button, Eyebrow, Section, h2 } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Bade Adesemowo | Book a Consultation",
  description: "Get in touch with Bade Adesemowo for Fractional CTO services, AI consulting, speaking engagements, or tech talent visa coaching. Book a consultation today.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Bring Your Next Big Idea to Life" sub="Contact Bade Adesemowo for consulting, speaking engagements, or media inquiries.">
        <Button href="/free-consultation" variant="accent">Book a free consultation</Button>
        <Button href={site.phoneHref} variant="ghostLight">Call now: {site.phone}</Button>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <Eyebrow>Contact information</Eyebrow>
            <h2 className={`${h2} mb-6`}>Get in touch</h2>
            <dl className="space-y-5 text-[15px]">
              <div><dt className="font-bold">Locations</dt><dd className="text-mute">{site.locations}</dd><dd className="text-mute">{site.address}</dd></div>
              <div><dt className="font-bold">Brand offices</dt><dd className="text-mute">{site.offices}</dd></div>
              <div><dt className="font-bold">Email</dt>{site.emails.map((e) => <dd key={e}><a href={`mailto:${e}`} className="text-sky hover:underline">{e}</a></dd>)}</div>
              <div><dt className="font-bold">Call directly</dt><dd><a href={site.phoneHref} className="text-sky hover:underline">{site.phone}</a></dd></div>
              <div><dt className="font-bold">Work hours</dt><dd className="text-mute">Mon to Sat 8.00 to 17.00 | {site.hoursNote}</dd></div>
            </dl>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      <section aria-label="Map of the Lagos office" className="pb-14 md:pb-[84px]">
        <div className="mx-auto max-w-6xl px-5">
          <iframe title="Map of Lagos, Nigeria" src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full rounded-[22px] border border-line" />
        </div>
      </section>
    </>
  );
}
