# Bade Adesemowo website (Next.js 16, App Router, Tailwind 4)

Personal brand and consulting site. Copy source of truth: "Bade Adesemowo website Content" doc (content + PRD).
Read `AGENTS.md` and the bundled docs in `node_modules/next/dist/docs/` before changing Next.js APIs (Cache Components is enabled: runtime data like `searchParams` must sit inside `<Suspense>`).

## Structure
- `app/(main)`: Home, About, Expertise, Expertise/[slug] (8 services), Blog, Blog/[slug], Contact, Search (header + footer)
- `app/(consult)/free-consultation`, `app/(speak)/invite-to-speak`: minimal header
- `app/api/contact`, `app/api/speak`: form handlers (honeypot, validation, Resend email via `lib/mail.ts`)
- `data/`: `site.ts`, `services.ts`, `testimonials.ts`, `posts.ts` (all copy lives here, not in components)
- `components/`: Header, MinimalHeader, Footer, PageHero, Testimonials (scroll-snap carousel), BlogExplorer, forms, ui helpers
- `app/fonts/`: self-hosted Plus Jakarta Sans (no Google Fonts fetch at build)

## Design rules
Client asked to stick to the logo colors: navy #1b3a78 (brand), sky blue #2b78bd (CTAs), deep navy #0e2149 (dark sections), white and #f2f4f8. No other accent colors. Cards: 18px radius, 1px border. Light theme only.

## Content rules
Do not invent copy. Service pages are built only from the PRD table and the doc's Expertise breakdown.

## Client decisions (Oliv, Oct 12)
- Testimonials: company names left out of roles; list matches the doc Testimonials tab (2 quotes)
- Calendly: https://calendly.com/badesemowo/20mins_freeconsulting (20-minute session; site copy says 20-minute)
- Form emails go to b.adesemowo@gmail.com (needs RESEND_API_KEY to actually send)
- Blog dates left out everywhere (cards, articles, sidebar, sitemap, schema)
- Domain: https://web.badesemowo.com (default in data/site.ts; do not set NEXT_PUBLIC_SITE_URL to the vercel.app address for the final deploy)

## Open items before launch
- Confirm testimonial names are approved
- Set RESEND_API_KEY in Vercel (without it forms only log, nothing is emailed). Default sender onboarding@resend.dev only delivers to the Resend account owner's email; verify a domain to send to others
- Optional: NEXT_PUBLIC_GA_ID
- Footer links FAQs and Community from the doc have no pages yet and are left out
