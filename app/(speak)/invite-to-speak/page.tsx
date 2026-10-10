import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SpeakForm from "@/components/SpeakForm";
import { Button, Eyebrow, Section, h2 } from "@/components/ui";

export const metadata: Metadata = {
  title: "Invite Bade Adesemowo to Speak | Tech & AI Keynote Speaker",
  description: "Book Bade Adesemowo for conferences, webinars, or corporate events. A dynamic keynote speaker on AI, global tech talent mobility, and scaling African startups.",
  alternates: { canonical: "/invite-to-speak" },
};

const topics = ["The Best Use of AI in Modern Enterprises.", "Global Tech Talent Mobility.", "Scaling African Tech Startups.", "Technology Leadership & Strategy."];
const why = ["Dynamic & Engaging.", "Real-World Experience.", "Global Recognition.", "Professional & Friendly."];
const past = ["Bincom Dev Center Tech Network Event (Feb 2025).", "UK Tech Talent Visa Webinar.", "Global Tech Conferences."];

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((t) => <li key={t} className="rounded-[14px] border border-line bg-white p-5 font-semibold">{t}</li>)}
    </ul>
  );
}

export default function Speak() {
  return (
    <>
      <PageHero tall title="Invite Bade Adesemowo to Speak" sub="A visionary tech leader driving business growth and inspiring audiences worldwide." image="blue-shirt" imageAlt="Bade Adesemowo smiling in a light blue shirt with arms crossed">
        <Button href="#request" variant="accent">Check availability</Button>
      </PageHero>

      <Section>
        <Eyebrow>Speaking topics</Eyebrow>
        <h2 className={`${h2} mb-8`}>What Bade Speaks About</h2>
        <List items={topics} />
      </Section>

      <Section soft>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Why book Bade</Eyebrow>
            <h2 className={`${h2} mb-8`}>Why Event Organizers Book Bade</h2>
            <ul className="space-y-3">{why.map((t) => <li key={t} className="rounded-[14px] border border-line bg-white p-5 font-semibold">{t}</li>)}</ul>
          </div>
          <div>
            <Eyebrow>Past engagements</Eyebrow>
            <h2 className={`${h2} mb-8`}>Recent Speaking Engagements</h2>
            <ul className="space-y-3">{past.map((t) => <li key={t} className="rounded-[14px] border border-line bg-white p-5 font-semibold">{t}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section id="request">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Booking form</Eyebrow>
          <h2 className={`${h2} mb-8`}>Request Bade for Your Event</h2>
          <SpeakForm />
        </div>
      </Section>
    </>
  );
}
