# My Catchy Interiors

A quiet, editorial website for a boutique interior design studio — inspired by the calm, luxury aesthetic of studios like Stillpoint, Vincent Van Duysen, and Axel Vervoordt. Built as an Awwwards-style experience with slow, confident motion and a mobile-first responsive system.

Live feel: _warm minimalism, natural materials, quiet confidence, honest proportion._

---

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **React 19** — latest React with new features
- **TypeScript 5.9** — full type safety
- **Tailwind CSS** + design tokens (TypeScript config)
- **shadcn/ui** primitives available
- **Framer Motion** — scroll reveals, parallax, magnetic buttons, word-by-word text masks
- **Lenis** — buttery smooth scrolling
- **Fraunces** (variable serif with SOFT / WONK / opsz axes) + **Inter** for micro text
- **MongoDB** driver pre-wired (unused for now)
- **npm** — package manager

## Features

- Sticky translucent navigation with animated full-screen dark overlay menu
- Cinematic hero with parallax + scale, word-by-word serif reveal, italic highlight
- Horizontal marquee of brand values
- Asymmetric editorial project grid with image reveal wipes and hover zoom
- Dark “Studio” section with parallax image stack and stats
- Expandable services list with magnetic interactions
- Fragments gallery, pull-quote testimonial, journal cards
- Huge magnetic contact CTA + editorial footer
- Subtle film-grain overlay, custom morphing cursor, animated scroll indicator

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  api/[[...path]]/route.ts   # Catch-all API route (Next.js App Router)
  layout.tsx                 # Root layout, Fraunces + Inter fonts
  page.tsx                   # Single-page composition (all sections)
  globals.css                # Design tokens + utilities

components/
  lenis-provider.tsx         # Smooth scroll context
  cursor.tsx                 # Custom morphing cursor
  magnetic.tsx               # Magnetic hover wrapper
  reveal.tsx                 # FadeUp, WordReveal, ImageReveal
  ui/                        # shadcn/ui primitives

lib/                         # Utils
public/                      # Static assets
```

## Design tokens

| Token    | Value       | Use                   |
| -------- | ----------- | --------------------- |
| `--bg`   | `#efeae1`   | Page background       |
| `--ink`  | `#1a1a1a`   | Primary text / dark   |
| `--cream`| `#f5f1e8`   | On-dark text          |
| `--clay` | `#8a6f52`   | Accent                |
| `--muted`| `#6b6357`   | Secondary text        |

Typography pairs a slow, confident serif (Fraunces) with a quiet sans (Inter). Italic is used as a recurring highlight across headlines — _restraint_, _unfolds_, _considered_.

## License

© 2025 My Catchy Interiors — all quietly reserved.
