# Chirag — Portfolio

A dark, moody, cinematic one-page portfolio built with **React + Vite + TypeScript + Tailwind CSS**, animated with **framer-motion** and iconed with **lucide-react**.

## Sections

1. **Hero** — full-screen background video, noise + gradient overlays, navbar pill, and a giant animated name.
2. **About** — multi-style pull-up headline + scroll-linked character-reveal bio.
3. **Work** — three real campaign case studies (Nike, Apple, Samyang) shown as Insight → Idea → Impact.
4. **Experience** — timeline of roles + a skills / certifications / languages strip.
5. **Contact** — email CTA and résumé download.

## Local development

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Add your résumé file

The "Download résumé" button links to `/Chirag-Resume.pdf`. Drop your PDF into the
`public/` folder with that exact name so it is served at the site root:

```
public/Chirag-Resume.pdf
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import** the repo.
3. Vercel auto-detects Vite. Defaults are correct:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**.

## Tech

- Vite + React 18 + TypeScript
- Tailwind CSS 3 (`primary` = `#DEDBC8`, `font-serif` = Instrument Serif italic)
- framer-motion (pull-up text, fade-ins, scroll-linked opacity, card entrances)
- lucide-react (ArrowRight, Check, Timer, Heart, Flame, Mail)
- Fonts: Almarai (global) + Instrument Serif (italic accents)
