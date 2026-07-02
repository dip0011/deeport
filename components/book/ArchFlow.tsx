'use client';

import { useState } from 'react';

const steps = [
  { label: 'User acts', note: 'Someone clicks, buys, or abandons a cart.' },
  {
    label: 'Frontend responds',
    note: 'The interface reacts instantly. Nothing waits on a nightly batch.',
  },
  {
    label: 'Event queued',
    note: 'The action becomes a durable event on a queue, so nothing is lost under load.',
  },
  {
    label: 'Workers process',
    note: 'Workers pick it up and apply the rules in parallel, scaling with traffic.',
  },
  {
    label: 'Message sent',
    note: 'The right message goes out on the right channel, at the moment it matters.',
  },
  {
    label: 'Analytics update',
    note: 'Dashboards reflect what happened in near real time.',
  },
  {
    label: 'Journey continues',
    note: 'The next best step of the customer journey kicks off on its own.',
  },
];

export default function ArchFlow() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-sm border border-rule bg-paper-2/50 p-5 md:p-7">
      <div className="flex items-center justify-between mb-5">
        <p className="t-eyebrow">one action, through the whole system</p>
        <button
          onClick={() => setActive((a) => (a + 1) % steps.length)}
          className="t-meta text-accent hover:text-accent-2 transition-colors"
        >
          trace it &rarr;
        </button>
      </div>

      {/* nodes */}
      <div className="flex flex-wrap gap-x-2 gap-y-2.5">
        {steps.map((s, i) => {
          const isActive = i === active;
          const isPast = i < active;
          return (
            <div key={s.label} className="flex items-center gap-2">
              <button
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`px-2.5 py-1.5 rounded-sm border text-xs transition-colors duration-150 ${
                  isActive
                    ? 'border-accent bg-accent text-paper'
                    : isPast
                      ? 'border-rule-strong text-ink'
                      : 'border-rule text-ink-muted hover:text-ink'
                }`}
              >
                {s.label}
              </button>
              {i < steps.length - 1 && (
                <span
                  className={`text-xs ${isPast ? 'text-ink' : 'text-ink-muted'}`}
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* active note */}
      <p key={active} className="mt-5 t-body text-ink animate-fade">
        <span className="font-display font-medium">{steps[active].label}.</span>{' '}
        {steps[active].note}
      </p>
    </div>
  );
}
