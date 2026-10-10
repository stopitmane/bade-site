import Image from "next/image";
import { wrap, Eyebrow } from "./ui";

export default function PageHero({
  eyebrow, title, sub, image, imageAlt, children, tall = false,
}: { eyebrow?: string; title: string; sub?: string; image?: string; imageAlt?: string; children?: React.ReactNode; tall?: boolean }) {
  return (
    <section className="bg-deep text-white">
      <div className={`${wrap} grid items-end gap-5 ${image ? "md:grid-cols-[1.1fr_.9fr]" : ""} ${tall ? "md:min-h-[600px]" : "md:min-h-[420px]"}`}>
        <div className="py-12 md:py-[72px]">
          {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
          <h1 className="mb-5 text-[clamp(34px,5.2vw,64px)] font-extrabold leading-[1.05] tracking-tight">{title}</h1>
          {sub && <p className="mb-8 max-w-[560px] text-lg text-[#c6d2e6]">{sub}</p>}
          {children && <div className="flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <Image
            src={`/images/${image}.webp`} alt={imageAlt ?? ""} width={768} height={1376} priority
            className={`ml-auto w-auto rounded-t-[200px] object-cover object-top ${tall ? "max-h-[380px] md:max-h-[640px]" : "max-h-[320px] md:max-h-[460px]"}`}
          />
        )}
      </div>
    </section>
  );
}
