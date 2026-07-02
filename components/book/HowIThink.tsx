'use client';

import { useState } from 'react';
import Section from './Section';
import ChapterHeading from './ChapterHeading';
import Reveal from './Reveal';

type ChoiceId = 'backend' | 'features' | 'users';

const choices: { id: ChoiceId; label: string }[] = [
  { id: 'backend', label: 'Optimize the backend' },
  { id: 'features', label: 'Ship more features' },
  { id: 'users', label: 'Go talk to users' },
];

const reasoning: Record<ChoiceId, string> = {
  backend:
    'Tempting, because it feels productive. But a 28 percent drop rarely comes from latency nobody complained about. Optimizing here is busywork that avoids the real question: what changed for the user?',
  features:
    'This is the reflex that quietly kills early products. More surface area does not fix a leak. I would resist shipping anything new until I understand why people are leaving.',
  users:
    'Closest to how I actually work, with one addition. First I read the funnel to find where the drop happens, then I talk to the people who fell out of it. Data tells me where, users tell me why.',
};

const framework = [
  'Understand the real problem',
  'Measure where it actually hurts',
  'Prototype the smallest fix',
  'Ship it to real users',
  'Learn from what they do',
  'Kill it if the data says so',
];

export default function HowIThink() {
  const [picked, setPicked] = useState<ChoiceId | null>(null);

  return (
    <Section>
      <ChapterHeading numeral="III" title="How I think" />

      <Reveal>
        <p className="t-body mb-4">
          Let me hand you a real moment instead of telling you I am a good
          decision maker.
        </p>
        <p className="t-h3 my-6">
          Signups just dropped 28% this week. What do you do first?
        </p>
      </Reveal>

      <Reveal>
        <div
          className="flex flex-col sm:flex-row gap-3"
          role="group"
          aria-label="Pick a first move"
        >
          {choices.map((c) => {
            const active = picked === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setPicked(c.id)}
                aria-pressed={active}
                className={`flex-1 text-left sm:text-center px-4 py-3 rounded-sm border t-meta transition-colors duration-150 ${
                  active
                    ? 'border-accent bg-accent/[0.06] text-accent'
                    : 'border-rule text-ink-2 hover:border-rule-strong hover:text-ink'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {picked && (
        <div className="mt-8 border-l-2 border-accent pl-6 animate-fade">
          <p className="t-eyebrow mb-2">my reasoning</p>
          <p className="t-body text-ink">{reasoning[picked]}</p>
        </div>
      )}

      <Reveal>
        <div className="mt-14">
          <p className="t-body mb-6">
            Whatever the trigger, the loop underneath is always the same.
          </p>
          <ol className="flex flex-col gap-0">
            {framework.map((step, i) => (
              <li
                key={step}
                className="flex items-baseline gap-4 py-3 border-t border-rule"
              >
                <span className="font-display text-sm text-ink-muted w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="t-body text-ink">{step}</span>
              </li>
            ))}
          </ol>
          <p className="t-meta italic mt-6">
            No feature is sacred. If the data says it is not working, I would
            rather kill it than defend it.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
