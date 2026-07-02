import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

const takes = [
  'More features rarely means faster growth.',
  'Perfect architecture is often procrastination.',
  'Technical debt can be a smart bet.',
  'A meeting without a decision was an email.',
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

      <ul className="flex flex-col gap-6 md:gap-7">
        {takes.map((t, i) => (
          <Reveal as="li" key={t} delay={i * 60}>
            <h3 className="t-h3">{t}</h3>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
