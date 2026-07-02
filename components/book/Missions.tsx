import Link from 'next/link';
import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';
import ArchFlow from './ArchFlow';

const missions = [
  {
    href: '/case-study/techmonk',
    title: 'Full-Stack Customer Engagement Platform',
    line: 'From fragmented, manual workflows to a unified, real-time engagement system.',
    tags: ['~80% workflows automated', 'Millions of events / day'],
  },
  {
    href: '/case-study/personalization-engine',
    title: 'One-to-One Personalization Engine',
    line: 'Personalization driven by live behavior, not overnight batch jobs.',
    tags: ['2.5x engagement', '+150% YoY'],
  },
];

const products = [
  {
    name: 'Customer Engagement',
    line: 'Omnichannel engagement across web, WhatsApp, email, and voice.',
  },
  {
    name: '1:1 Personalisation',
    line: 'Real-time, next-best experiences instead of fixed segments.',
  },
  {
    name: 'Customer Intelligence',
    line: 'A living, unified understanding of every customer.',
  },
];

export default function Missions() {
  return (
    <Section id="work">
      <ChapterHeading numeral="IV" title="The work" />

      <Reveal>
        <p className="t-body mb-8">
          The systems I build tend to share a shape. A user does something, and
          instead of a report landing tomorrow, the whole product reacts now.
          Trace one action through it.
        </p>
      </Reveal>

      <Reveal>
        <ArchFlow />
      </Reveal>

      <Reveal>
        <p className="t-body mt-14 mb-6">
          Two of those builds, written up in full.
        </p>
      </Reveal>

      <div className="flex flex-col gap-4">
        {missions.map((m, i) => (
          <Reveal key={m.href} delay={i * 80}>
            <Link
              href={m.href}
              className="group block rounded-sm border border-rule hover:border-rule-strong transition-colors p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="t-h3">{m.title}</h3>
                <span className="text-ink-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1">
                  &rarr;
                </span>
              </div>
              <p className="t-meta mt-2">{m.line}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {m.tags.map((t) => (
                  <span
                    key={t}
                    className="t-meta border border-rule rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12">
          <p className="t-eyebrow mb-5">
            part of Techmonk&rsquo;s product suite I helped build
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {products.map((p) => (
              <div key={p.name} className="flex flex-col gap-1.5">
                <span className="font-display text-ink font-medium">
                  {p.name}
                </span>
                <span className="t-meta">{p.line}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
