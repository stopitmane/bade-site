import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Button } from "./ui";

export default function MinimalHeader({ action }: { action: "phone" | "contact" }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Bade Adesemowo home">
          <Image src="/images/logo.png" alt="Bade Adesemowo, Best Use of Technology" width={46} height={46} priority className="size-[46px]" />
        </Link>
        {action === "phone" ? (
          <a href={site.phoneHref} className="text-[15px] font-bold text-brand hover:text-sky">{site.phone}</a>
        ) : (
          <Button href="/contact" variant="primary" className="!px-4 !py-3">Contact</Button>
        )}
      </div>
    </header>
  );
}
