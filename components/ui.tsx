import Link from "next/link";

export const wrap = "mx-auto w-full max-w-6xl px-5";
export const h2 = "text-[clamp(28px,3.6vw,44px)] font-bold leading-tight tracking-tight";
export const card = "flex flex-col gap-2.5 rounded-[18px] border border-line bg-white p-6 transition-colors hover:border-sky";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-3 text-sm font-bold uppercase tracking-wider ${light ? "text-[#8cc4f2]" : "text-sky"}`}>{children}</p>;
}

const styles = {
  primary: "bg-brand text-white hover:bg-sky",
  light: "bg-white text-brand hover:bg-[#dcebfa]",
  accent: "bg-sky text-white hover:bg-white hover:text-brand",
  ghostLight: "border-2 border-white text-white hover:bg-white hover:text-brand",
  ghostDark: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
} as const;

export function Button({ href, variant = "primary", children, className = "" }: { href: string; variant?: keyof typeof styles; children: React.ReactNode; className?: string }) {
  const cls = `inline-block rounded-full px-5 py-3.5 text-center text-[15px] font-bold leading-none transition-colors ${styles[variant]} ${className}`;
  if (/^(tel:|mailto:|https?:)/.test(href)) return <a href={href} className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

export function Section({ children, soft = false, id, className = "" }: { children: React.ReactNode; soft?: boolean; id?: string; className?: string }) {
  return (
    <section id={id} className={`${soft ? "bg-soft" : ""} py-14 md:py-[84px] ${className}`}>
      <div className={wrap}>{children}</div>
    </section>
  );
}
