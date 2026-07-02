# Project: Dip Dhameliya portfolio ("The Book")

An old-book, editorial storytelling portfolio (Next.js 16 App Router, React 19, Tailwind v4).

## Design system is strict
All visual work MUST follow **`DESIGN_GUIDE.md`**. Read it before changing any UI. In short:
- Theme is defined once in `app/globals.css` (`@theme` tokens + `.t-*` type scale). Do not hardcode hex/rgba or ad-hoc font sizes in components.
- Fonts: **Playfair Display** (`font-display`, headings) + **Lora** (body, default). No sans, no third font.
- Text uses only the `.t-*` classes; color uses only theme utilities (`text-ink`, `text-ink-2`, `text-ink-muted`, `text-accent`, `border-rule`, ...).
- Layout: compose pages with `components/book/PageShell.tsx` (framed 720px column with continuous margin rules) and `components/book/Section.tsx` (uniform padding). Headings via `components/book/ChapterHeading.tsx`.
- Radius: `rounded-sm` (cards/buttons) or `rounded-full` (pills/dots) only.
- Accent oxblood (`#7a2e2e`) is used sparingly, never as a large fill.

## Content rules
- Human voice, first person. **Never use em-dashes (—).**
- Real, résumé-verified facts only. No invented metrics/logos/testimonials.
- Positioning: teams fail because the *wrong product* ships; Dip builds the right thing and reduces uncertainty. Speed is secondary, never the headline.

## Status
- The whole site (landing + both case studies) is on the design system. Keep it that way: any new page composes `PageShell` + `Section` and uses `.t-*` + tokens.
