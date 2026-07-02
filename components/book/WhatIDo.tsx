import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

const ladder = ['Software', 'Products', 'Businesses', 'Outcomes'];

const stats = [
  { value: 'Millions', label: 'events processed per day' },
  { value: '~80%', label: 'of manual workflows automated' },
  { value: '30%', label: 'higher conversions' },
  { value: '20%', label: 'lower customer acquisition cost' },
];

export default function WhatIDo() {
  return (
    <Section>
      <ChapterHeading numeral="II" title="What I actually do" />

      <Reveal>
        <p className="t-body drop-cap">
          Most engineers stop at the first word below. I have learned to care
          about the last one. Code is only the beginning of a longer chain, and
          the further along that chain you can think, the more useful you are to
          a founder.
        </p>
      </Reveal>

      <Reveal>
        <div className="my-12 flex flex-wrap items-center gap-x-3 gap-y-2">
          {ladder.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              <span
                className={`font-display text-[clamp(1.3rem,3.4vw,2rem)] ${
                  i === ladder.length - 1
                    ? 'text-accent font-semibold'
                    : 'text-ink'
                }`}
              >
                {word}
              </span>
              {i < ladder.length - 1 && (
                <span className="text-ink-muted text-lg">&rarr;</span>
              )}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="t-quote border-l-2 border-accent pl-6 my-4">
          I write code, but my real job is reducing uncertainty.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-14">
          <p className="t-eyebrow mb-6">what that has looked like in numbers</p>
          <div className="grid grid-cols-2 gap-y-8 gap-x-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <span className="font-display text-[clamp(1.8rem,5vw,2.6rem)] font-semibold text-ink leading-none">
                  {s.value}
                </span>
                <span className="t-meta">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="t-meta italic mt-6">
            From my years at Techmonk, taking products from idea to production.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
