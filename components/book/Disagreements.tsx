import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

const takes = [
  {
    claim: 'Shipping more features rarely means faster growth.',
    body: 'It usually means more surface area to maintain and more ways to confuse the user. Subtraction is underrated.',
  },
  {
    claim: 'Perfect architecture is often expensive procrastination.',
    body: 'Designing for a scale you do not have yet is a comfortable way to avoid the harder question of whether anyone wants this.',
  },
  {
    claim: 'Technical debt is sometimes a smart investment.',
    body: 'Taken deliberately and paid back on purpose, it buys you the one thing early teams cannot make more of: learning.',
  },
  {
    claim: 'A meeting that does not produce a decision was an email.',
    body: 'I protect the team’s focus like it is the budget, because it is.',
  },
];

export default function Disagreements() {
  return (
    <Section>
      <ChapterHeading numeral="VIII" title="Things I will disagree with" />

      <Reveal>
        <p className="t-body mb-10">
          You should know where I push back before we work together, not after.
        </p>
      </Reveal>

      <div className="flex flex-col divide-y divide-rule">
        {takes.map((t, i) => (
          <Reveal key={t.claim} delay={i * 60}>
            <div className="pt-8 pb-8 first:pt-0">
              <h3 className="t-h3 mb-3">{t.claim}</h3>
              <p className="t-body">{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
