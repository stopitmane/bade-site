"use client";
import { useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { h2, Eyebrow, Section } from "./ui";

export default function Testimonials({ soft = true }: { soft?: boolean }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth, 420), behavior: "smooth" });
  };
  return (
    <Section soft={soft}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className={h2}>Join 500+ clients who found success with me</h2>
        </div>
        {testimonials.length > 3 && <div className="flex gap-2">
          <button type="button" onClick={() => scroll(-1)} aria-label="Previous testimonials" className="grid size-11 place-items-center rounded-full border-2 border-brand text-brand hover:bg-brand hover:text-white">←</button>
          <button type="button" onClick={() => scroll(1)} aria-label="Next testimonials" className="grid size-11 place-items-center rounded-full border-2 border-brand text-brand hover:bg-brand hover:text-white">→</button>
        </div>}
      </div>
      <div ref={track} role="region" aria-label="Client testimonials" tabIndex={0} className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2">
        {testimonials.map((t, i) => (
          <figure key={i} className="flex w-[85%] shrink-0 snap-start flex-col gap-4 rounded-[18px] border border-line bg-white p-6 sm:w-[48%] lg:w-[32%]">
            <span aria-hidden className="text-4xl font-extrabold leading-none text-sky">“</span>
            <blockquote className="flex-1 text-[15px] text-mute">{t.quote}</blockquote>
            <figcaption className="text-[15px] font-bold">
              {t.name}
              <span className="block text-[13px] font-normal text-mute">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
