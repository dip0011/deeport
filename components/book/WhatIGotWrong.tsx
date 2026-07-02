import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

const mistakes = [
  'I built features nobody asked for, and defended them longer than I should have.',
  'I over-engineered systems for a scale that was still years away.',
  'I trusted my own assumptions about users instead of going to check.',
];

export default function WhatIGotWrong() {
  return (
    <Section>
      <ChapterHeading numeral="VI" title="What I got wrong" />

      <Reveal>
        <p className="t-body mb-8">
          I would rather you hear this from me than wonder. The good judgment I
          have now was paid for in mistakes.
        </p>
      </Reveal>

      <ul className="flex flex-col gap-5">
        {mistakes.map((m, i) => (
          <Reveal as="li" key={m} delay={i * 70}>
            <p className="t-quote text-ink-2">{m}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="t-body text-ink mt-10 border-l-2 border-accent pl-6">
          Every one of those changed how I build. They are the reason I now
          start with the problem and the user, not the code.
        </p>
      </Reveal>
    </Section>
  );
}
