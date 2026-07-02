import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

const worries = [
  'Are we building the right thing, or just building?',
  'Is this what users actually want, or what we assume they want?',
  'We have runway for maybe eighteen months.',
  'I need someone who owns problems, not someone who waits for tickets.',
  'Can I trust this person without checking every decision?',
];

export default function FoundersDay() {
  return (
    <Section id="founders-day">
      <ChapterHeading numeral="I" title="A founder's quiet worries" />

      <Reveal>
        <p className="t-body mb-8">
          If you are building something early, your mind is rarely quiet. It
          sounds a little like this.
        </p>
      </Reveal>

      <ul className="flex flex-col gap-4 border-l border-rule pl-6">
        {worries.map((w, i) => (
          <Reveal as="li" key={w} delay={i * 70}>
            <p className="t-quote">&ldquo;{w}&rdquo;</p>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="t-body mt-10">
          Speed is in there somewhere too. But speed is not the problem. Moving
          fast in the wrong direction is. I have spent the last few years
          working inside exactly this.
        </p>
      </Reveal>
    </Section>
  );
}
