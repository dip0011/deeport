import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

const CALENDAR_LINK =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Book+a+15-min+intro+with+Dip&details=Please+add+your+preferred+time.+Invitee:+dipdhameliya2001%40gmail.com&add=dipdhameliya2001%40gmail.com&location=Google+Meet';

const links = [
  { label: 'Email', href: 'mailto:dipdhameliya2001@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/dip0011' },
  { label: 'Book a 15-min intro', href: CALENDAR_LINK },
];

export default function DearFounder() {
  return (
    <Section id="contact">
      <ChapterHeading kicker="Epilogue" numeral="❧" title="Dear Founder" />

      <Reveal>
        <div className="flex flex-col gap-6">
          <p className="t-lead text-ink">
            I know hiring is a risk. Every engineer says they move fast and own
            outcomes, and you have no way to tell who means it.
          </p>
          <p className="t-lead text-ink">
            So instead of asking you to believe me, I asked you to spend a few
            minutes inside how I think. If that matched the way you want to
            build your company, then this whole book was the pitch.
          </p>
          <p className="t-lead text-ink">
            If you care about shipping the right product, not just more code, I
            would love to hear what you are building.
          </p>
          <p className="t-lead">Yours,</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex items-center gap-4 mt-6">
          <span
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent text-accent font-display font-semibold"
            aria-hidden="true"
          >
            DD
          </span>
          <span className="font-display text-2xl text-ink">Dip Dhameliya</span>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-14 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-rule-strong text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <span className="t-meta text-ink group-hover:text-accent">
                {l.label}
              </span>
              <span className="text-xs group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="rule mt-20 mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="t-meta">
            Dip Dhameliya · Product-focused Full Stack Engineer
          </span>
          <span className="t-meta small-caps">available for the next chapter</span>
        </div>
      </Reveal>
    </Section>
  );
}
