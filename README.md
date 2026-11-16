# Men's Salon Landing Page

One-page landing page for **Men's Salon** (Haircut • Grooming • Styling), built with Next.js 16, React 19 and Tailwind CSS 3 to match the supplied design. It follows the same project structure as the other landing pages (Haulix, Constrix, Velora): every piece of text, image and link lives in `data/templates.json`, and the components only render it.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx            fonts, metadata, header, footer, scroll reveal
  page.tsx              the sections in page order
  globals.css           theme colours (CSS variables)
components/
  common/               Header (gold top bar, sticky menu bar, dropdown menu on phones and tablets), Footer, FooterNav
  sections/             Hero, About (+ video popup), Services, Why Choose Us, Packages, Gallery (+ photo viewer),
                        Testimonials (slider), Contact (+ contact form)
  ui/                   Icon, Eyebrow, MustacheDivider, ScrollReveal, FormSuccess, useDummySubmit, useActiveSection
data/templates.json     all content (sections and their variants)
types/templates.types.ts
public/images/          photos (cut from the design), logo and favicon
```

Each section's `id` in `templates.json` matches a header link (`#about` → `id="about"`). Every "Book" button leads to the contact form.

The play button on the About photo shows only when `About.videoUrl` is set (a YouTube link or a video file); it opens the video in a popup.

## Responsive

Designed for phones, tablets, 1024px and desktop. From 1024px up the root font size follows the 1440px design (`1rem = 100vw / 90`, at most 16px), so 1024px shows exactly the 1440px layout, only smaller.

## Forms

The contact form uses a dummy submit (`useDummySubmit`): it shows a sending state and a thank-you message in place of the button, but nothing is sent anywhere yet.
