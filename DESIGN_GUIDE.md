# Design Guide — "The Book"

This is the single source of truth for the portfolio's design. **Every component and section must follow it.** The theme is defined once in `app/globals.css` (`@theme` tokens + the `.t-*` type scale) and applied through shared primitives. Do not introduce ad-hoc values.

## Concept
An old-book reading experience: warm paper, ink, one oxblood accent used sparingly. Editorial, calm, confident. It should read like a short book that sells Dip to a founder.

## Color tokens (never hardcode hex/rgba in components)
| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#f4efe6` | page background |
| `--color-paper-2` | `#ece3d4` | panels / insets |
| `--color-ink` | `#1e1b16` | headings, strong text |
| `--color-ink-2` | `#4b463c` | body text |
| `--color-ink-muted` | `#8c8474` | labels, meta, captions |
| `--color-accent` | `#7a2e2e` | oxblood, sparing only |
| `--color-accent-2` | `#5e2020` | accent hover |
| `--color-rule` | `rgba(30,27,22,0.14)` | hairline borders / margins |
| `--color-rule-strong` | `rgba(30,27,22,0.28)` | emphasized borders |

Use as utilities: `bg-paper`, `text-ink`, `text-ink-2`, `text-ink-muted`, `text-accent`, `border-rule`, `border-rule-strong`, `border-accent`, and opacity variants like `bg-accent/[0.06]`. **No inline `style` colors. No hex/rgba in JSX.** SVG may reference `var(--color-ink)` / `var(--color-accent)`.

**Accent rule:** oxblood appears only on small, intentional marks (drop cap, one emphasized word, active states, timeline dots, the monogram, the bookmark ribbon, a single left rule). Never as a large fill.

## Fonts
- **Playfair Display** (`font-display`) — display and headings only.
- **Lora** (body, the default) — all reading text, labels, UI.
- Two families only. No Inter, no sans. Loaded via `next/font` in `app/layout.tsx`.

## Type scale — use ONLY these classes (no ad-hoc `text-[..]` on content)
| Class | Font | Size | Use |
|---|---|---|---|
| `.t-display` | Playfair 600 | `clamp(2.3rem,6.4vw,4rem)` | hero title only |
| `.t-h2` | Playfair 600 | `clamp(1.8rem,4.5vw,2.6rem)` | chapter titles (via `ChapterHeading`) |
| `.t-h3` | Playfair 500 | `clamp(1.2rem,2.6vw,1.45rem)` | sub-headings, card titles |
| `.t-lead` | Lora 400 | `clamp(1.1rem,2.2vw,1.25rem)` | chapter intro / letter |
| `.t-body` | Lora 400 | `17px` / lh 1.8 | all body copy and lists |
| `.t-quote` | Playfair italic | `clamp(1.2rem,2.6vw,1.45rem)` | pull-quotes, worry/mistake lines |
| `.t-meta` | Lora 400 | `14px` | captions, secondary notes, tags, nav |
| `.t-eyebrow` | Lora 500 | `12px` uppercase 0.14em | kickers / labels |

Colors are baked in as defaults but overridable with a color utility (the scale lives in `@layer components`). One body size only: `.t-body`. Never use `text-[15px]/[16px]/[17px]/[18px]` for body.

## Layout & spacing
- **Frame:** all pages render inside `components/book/PageShell.tsx` — a centered `max-w-[720px]` column with `border-x border-rule` running full height (the continuous page-margin rules). It also renders the paper background, bookmark ribbon, and nav.
- **Sections:** every block uses `components/book/Section.tsx` = `px-6 md:px-10 py-16 md:py-24`. One horizontal measure, one vertical rhythm. Never set bespoke section padding.
- **Chapter dividers:** the `✦ ✦ ✦` ornament between chapters. No boxed sections.
- Headings use `ChapterHeading` (numeral + kicker + `.t-h2`).

## Radius
- `rounded-sm` — cards, buttons, inputs, square tags.
- `rounded-full` — pills, dots, the monogram.
- **Never** `rounded-lg` / `rounded-xl`.

## Motion
- Gentle only: `Reveal` (IntersectionObserver fade-up) and `.animate-fade` for click reveals. No 3D, no parallax, no page-turns. Always honor `prefers-reduced-motion` (already handled in `globals.css`).

## Content voice
- Human, confident, first person, present tense. **Never use em-dashes (—).** Use commas/periods.
- Real facts only (résumé-verified metrics). No invented logos, testimonials, or numbers.
- Thesis: teams fail because the *wrong product* ships. Dip helps build the right thing and reduce uncertainty. Speed is a supporting trait, never the headline.

## Responsive
- Fluid type via `clamp` (no fixed-px headings). No horizontal overflow at 320/375/390/768/1024/1280. All interactive elements work by touch and keyboard.

## Rules — do / never
- DO compose pages with `PageShell` + `Section`, headings with `ChapterHeading`.
- DO use `.t-*` for all text and tokens for all color.
- NEVER hardcode hex/rgba, set inline `style` colors, use a second body size, mix radii, or add a sans font.
- When adding anything new, match an existing component's structure and re-read this guide first.

_Note: the two case-study pages (`app/case-study/*`) are pending a refactor onto this system; until then they are the only sanctioned exception._
