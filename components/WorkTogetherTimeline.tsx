'use client';

import ContentContainer from '@/components/ContentContainer';

const CALENDAR_LINK =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Book+a+15-min+intro+with+Dip&details=Please+add+your+preferred+time.+Invitee:+dipdhameliya2001%40gmail.com&add=dipdhameliya2001%40gmail.com&location=Google+Meet';

const steps = [
  {
    when: 'Week 1',
    title: 'Discovery',
    body: 'We get sharp on the users, the problem, and what actually needs to exist.',
  },
  {
    when: 'Week 2',
    title: 'Prototype',
    body: 'A working prototype in your hands, not a slide deck.',
  },
  {
    when: 'Week 3',
    title: 'Architecture',
    body: 'The system gets a shape that holds up well past demo day.',
  },
  {
    when: 'Week 4',
    title: 'Production',
    body: 'The first real version ships, with monitoring from day one.',
  },
  {
    when: 'Week 8',
    title: 'First users',
    body: 'Real users, real feedback, and a tight loop to act on it.',
  },
  {
    when: 'Week 20',
    title: 'Scaling',
    body: 'The product grows, and the system grows with it without breaking.',
  },
];

export default function WorkTogetherTimeline() {
  return (
    <section className="py-20">
      <ContentContainer>
        <div
          className="max-w-[640px] space-y-12 border-t pt-20"
          style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          <div className="space-y-4">
            <p
              className="text-xs uppercase tracking-wider"
              style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
            >
              What the first months look like
            </p>
            <h2
              className="text-2xl md:text-[32px] font-semibold tracking-tight"
              style={{ color: '#0B0D12' }}
            >
              If we work together
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-[3px] top-1 bottom-1 w-px"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)' }}
            />
            <div className="space-y-9">
              {steps.map((step) => (
                <div key={step.title} className="relative flex gap-6">
                  <span
                    className="relative z-10 mt-1.5 w-[7px] h-[7px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#4F46E5' }}
                  />
                  <div className="space-y-1 -mt-0.5">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-xs uppercase tracking-wider"
                        style={{ color: '#8A8F98', letterSpacing: '0.08em' }}
                      >
                        {step.when}
                      </span>
                      <h3
                        className="text-base font-semibold"
                        style={{ color: '#0B0D12' }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#5F6368', lineHeight: '1.6' }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-140"
              style={{ backgroundColor: '#4F46E5', color: '#FFFFFF' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#4338CA')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#4F46E5')
              }
            >
              Book a 15-min intro
            </a>
            <a
              href="mailto:dipdhameliya2001@gmail.com"
              className="text-sm font-medium transition-colors duration-140"
              style={{ color: '#5F6368' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0B0D12')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5F6368')}
            >
              or send a quick email
            </a>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
