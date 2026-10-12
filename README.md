# SAMPLE CAFÉ

A production-quality, frontend-only specialty coffee shop portfolio project for **NinjaTech Guys**. The brand, address, reviews, contact details, and form behavior are intentionally fictional/demo content.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS (with a custom semantic token system)
- Motion for React / Framer Motion
- Lucide React
- React Hook Form + Zod
- `next/font` and `next/image`

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The production checks are:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

- `src/app` — the five routes, shared layout, metadata, and custom 404
- `src/components/layout` — header, footer, transitions, back-to-top
- `src/components/menu` — search, category filters, and accessible item details
- `src/components/gallery` — filters and keyboard-controlled lightbox
- `src/components/contact` — validated, simulated form
- `src/components/ui` — reusable motion and link primitives
- `src/data` — menu, gallery, testimonials, and centralized business details
- `src/types` — shared content types

## Customize for a real client

- [ ] Replace all values in `src/data/business.ts`, including address, phone, email, hours, maps, social links, and the NinjaTech Guys portfolio URL.
- [ ] Verify every public contact link before launch.
- [ ] Replace fictional testimonials with approved, attributable client reviews.
- [ ] Update menu items, prices, allergens, and photography with client-approved information.
- [ ] Replace the demo Unsplash images with owned/licensed brand photography where possible.
- [ ] Update `metadataBase` and Open Graph information in `src/app/layout.tsx` to the production domain.
- [ ] Connect the form to an approved service only after adding privacy, consent, spam protection, and delivery/error handling.
- [ ] Add verified structured data only when the café is a real operating business.

## Demo behavior

Theme preference is stored in `localStorage`. The contact form does **not** send or store data; it validates in the browser, waits briefly, and displays an explicit demo confirmation. There is no ordering, checkout, payment, account, or reservation functionality.
