import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

const plan = [
  {
    when: 'Week 1',
    title: 'Understand',
    body: 'Meet everyone. Read the code and the analytics. Find where the product and the users quietly disagree.',
  },
  {
    when: 'Week 2',
    title: 'Fix the obvious',
    body: 'Clear the pain slowing the team down, and earn trust with small, real wins that ship.',
  },
  {
    when: 'Month 1',
    title: 'Ship what matters',
    body: 'Launch measurable improvements and run honest experiments on the questions that actually move the product.',
  },
  {
    when: 'Month 3',
    title: 'Compound',
    body: 'A clearer roadmap, an architecture that will not fight you later, and a team habit of shipping the right things.',
  },
];

export default function IfIJoined() {
  return (
    <Section>
      <ChapterHeading numeral="VII" title="If I joined you tomorrow" />

      <Reveal>
        <p className="t-body mb-10">
          Hiring is a leap of faith, so here is exactly what the first months
          would look like.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {plan.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <div className="h-full rounded-sm border border-rule p-5 md:p-6">
              <p className="t-eyebrow text-accent mb-2">{p.when}</p>
              <h3 className="t-h3 mb-2">{p.title}</h3>
              <p className="t-meta">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
