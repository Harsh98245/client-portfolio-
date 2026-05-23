# Chirag — Marketing Professional Portfolio

A personal portfolio website for **Chirag**, a marketing professional specializing in
campaign strategy, media planning, and brand storytelling. Chirag is a Communications &
Media Studies graduate (York University, Dean's Honour Roll), Google-certified in Ads,
Analytics, and DV360, with experience driving measurable results across multicultural,
multilingual markets.

This site presents his work as a single-page, cinematic experience — dark, moody, and
animated — built to make his strategy and campaign thinking stand out.

> Designed and built by **Harsh** ([@Harsh98245](https://github.com/Harsh98245)).

## What's inside

| Section | Highlights |
|---|---|
| **Hero** | Full-screen background video with an animated name treatment. |
| **About** | Scroll-linked text reveal introducing Chirag and his focus. |
| **Work** | Three campaign case studies (Nike, Apple, Samyang) framed as Insight → Idea → Impact. |
| **Experience** | Timeline of roles across Canada and Mexico + a skills, certifications & languages strip. |
| **Contact** | Direct email CTA and résumé download. |

## Tech stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS 3** — warm cream palette (`primary` = `#DEDBC8`) on black
- **framer-motion** — pull-up text, fade-ins, scroll-linked opacity, card entrances
- **lucide-react** — icons
- **Fonts** — Almarai (global) + Instrument Serif (italic accents)

## Run it locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Add the résumé file

The "Download résumé" button links to `/Chirag-Resume.pdf`. Place the PDF in the
`public/` folder with that exact name so it is served at the site root:

```
public/Chirag-Resume.pdf
```

## Deploy to Vercel

1. Push to GitHub (already done).
2. In Vercel: **New Project → Import** this repository.
3. Vercel auto-detects Vite — defaults are correct (build `npm run build`, output `dist`).
4. **Deploy.** Every push to `main` redeploys automatically.
