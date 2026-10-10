import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/data/site";

const jakarta = localFont({ src: "./fonts/PlusJakartaSans-latin.woff2", variable: "--font-jakarta", weight: "200 800", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Bade Adesemowo | Technology Leader, Fractional CTO & Scale-up Advisor", template: "%s" },
  description: "Driving technology innovation and growth. Bade Adesemowo is a Nigerian tech entrepreneur, AI expert, and Fractional CTO with over 20 years of experience scaling startups and advising enterprises globally.",
  openGraph: { type: "website", siteName: site.name, images: ["/images/hero-dark.webp"] },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/hero-dark.webp`,
  jobTitle: "Fractional CTO and Scale-up Advisor",
  description: "Nigerian technology entrepreneur, AI expert and Fractional CTO with over 20 years of experience.",
  telephone: site.phone,
  email: site.emails[0],
  worksFor: [{ "@type": "Organization", name: "Social Lender" }, { "@type": "Organization", name: "Bincom" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        {ga && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
