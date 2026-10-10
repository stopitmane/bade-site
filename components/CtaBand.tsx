import Image from "next/image";
import { site } from "@/data/site";
import { Button, wrap } from "./ui";

export default function CtaBand({ title = "Ready to join them?", text = "Let's discuss how we can achieve your technology goals together.", image = "sketch-crossed", imageAlt = "Pencil portrait of Bade Adesemowo" }: { title?: string; text?: string; image?: string; imageAlt?: string }) {
  return (
    <section className="pb-14 md:pb-[84px]">
      <div className={wrap}>
        <div className="grid items-center overflow-hidden rounded-[28px] bg-deep text-white md:grid-cols-[1.2fr_.8fr]">
          <div className="p-8 md:p-12">
            <h2 className="mb-3.5 text-[clamp(28px,3.6vw,44px)] font-bold leading-tight tracking-tight">{title}</h2>
            <p className="text-[#c6d2e6]">{text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/free-consultation" variant="accent">Book a free consultation</Button>
              <Button href={site.phoneHref} variant="ghostLight">Call now: {site.phone}</Button>
            </div>
          </div>
          <Image src={`/images/${image}.webp`} alt={imageAlt} width={768} height={1376} loading="lazy" className="h-full max-h-[360px] w-full object-cover object-top opacity-90" />
        </div>
      </div>
    </section>
  );
}
