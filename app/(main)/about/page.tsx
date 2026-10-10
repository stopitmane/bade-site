import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Button, Eyebrow, Section, h2 } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Bade Adesemowo | Tech Entrepreneur & AI Innovator",
  description: "Explore Bade Adesemowo's 20+ year journey in technology, from co-founding Social Lender to advising enterprises and championing AI innovation across Africa and beyond.",
  alternates: { canonical: "/about" },
};

const highlights = [
  { t: "Co-Founder & CTO, Social Lender", d: "Scaled to 200k+ users with successful integration into Pay Dashboard/Experian (£100m deal)." },
  { t: "Partner, Bincom", d: "Leading ICT firm in Nigeria." },
  { t: "UK Global Talent Endorsement", d: "Recognized in Digital Technology." },
  { t: "Award-Winning Innovator", d: "MIT Inclusive Innovation Winner, Gartner Most Innovative Digital Business Model, Efma/Accenture Most Disruptive Technology, Alibaba Foundation Africa's Business Heroes Top 50 Finalist." },
];
const why = [
  { t: "Proven technology leadership & scaling", d: "From startup ideation to enterprise acquisition integration." },
  { t: "AI implementation & innovation", d: "Architecting AI solutions and championing UK Global Talent in Digital Technology." },
  { t: "Strategic & full-stack expert", d: "Driving business strategy through technology with deep technical breadth." },
];

export default function About() {
  return (
    <>
      <PageHero tall title="Innovate Responsibly. Build for the Future." sub="Bade Adesemowo is a Nigerian technology entrepreneur whose career spans two decades of building, scaling, and advising technology ventures across Africa and globally." image="blue-blazer" imageAlt="Bade Adesemowo in a blue blazer standing by a window" />

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-[.8fr_1.2fr] md:gap-14">
          <Image src="/images/blazer-wall.webp" alt="Bade Adesemowo in a light grey blazer leaning against a wall" width={768} height={1376} loading="lazy" className="max-h-[600px] w-full rounded-[28px] object-cover object-top" />
          <div>
            <Eyebrow>About Bade</Eyebrow>
            <h2 className={`${h2} mb-4`}>About Bade</h2>
            <p className="max-w-[620px] text-mute">Bade Adesemowo is the Co-Founder and CTO of Social Lender and a Partner at Bincom, a leading ICT firm in Nigeria. He is a thought leader within the African tech ecosystem, championing the responsible and inclusive use of technology to solve real-world challenges.</p>
            <blockquote className="my-6 rounded-r-[14px] border-l-4 border-sky bg-soft px-6 py-5 text-lg font-semibold text-brand">“Nothing is impossible, especially in IT!”</blockquote>
            <h3 className="mb-3 font-bold">Key career highlights</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h.t} className="rounded-[14px] border border-line p-4">
                  <p className="font-bold text-brand">{h.t}</p>
                  <p className="text-[14px] text-mute">{h.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section soft>
        <Eyebrow>Why work with Bade</Eyebrow>
        <h2 className={`${h2} mb-8`}>Your Success Is My Reputation</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {why.map((w, i) => (
            <div key={w.t} className="rounded-[18px] border border-line bg-white p-6">
              <span className="mb-3 grid size-10 place-items-center rounded-[10px] bg-brand font-extrabold text-white">{i + 1}</span>
              <h3 className="mb-1 text-lg font-bold">{w.t}</h3>
              <p className="text-[15px] text-mute">{w.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <Image src="/images/desk.webp" alt="Bade Adesemowo at his desk taking notes" width={768} height={1376} loading="lazy" className="max-h-[480px] w-full rounded-[28px] object-cover object-top" />
          <div>
            <Eyebrow>Events</Eyebrow>
            <h2 className={`${h2} mb-6`}>I am Friendly & Professional</h2>
            <Button href="/invite-to-speak">Invite him to speak</Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
