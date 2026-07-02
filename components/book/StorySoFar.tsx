import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

const acts = [
  {
    when: 'The early years',
    title: 'The Builder',
    body: 'I learned to build things on the web. It was enough, for a while, to make the thing work.',
  },
  {
    when: '2020 to 2021',
    title: 'The Freelancer',
    body: 'Clients taught me the hard lesson quickly. Nobody buys features. They buy outcomes. A polished screen that changes nothing is worth nothing.',
  },
  {
    when: '2021 to 2022',
    title: 'Simform',
    body: 'I learned to ship inside real teams, with product managers and designers, sprints and reviews, and the discipline that scale demands.',
  },
  {
    when: '2022 to now',
    title: 'Techmonk',
    body: 'I stopped measuring myself in code shipped and started measuring impact. Owning products end to end, from the first conversation to production at scale.',
  },
];

export default function StorySoFar() {
  return (
    <Section>
      <ChapterHeading numeral="V" title="The story so far" />

      <div className="relative flex flex-col gap-10 border-l border-rule pl-7">
        {acts.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}>
            <div className="relative">
              <span
                className="absolute -left-[35px] top-2 w-2 h-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <p className="t-eyebrow mb-1">{a.when}</p>
              <h3 className="t-h3 mb-2">{a.title}</h3>
              <p className="t-body">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
