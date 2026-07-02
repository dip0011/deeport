'use client';

import Link from 'next/link';
import { useState } from 'react';
import GridBackground from '@/components/GridBackground';
import Navigation from '@/components/Navigation';
import ContentContainer from '@/components/ContentContainer';
import CaseStudyScrollMarker from '@/components/CaseStudyScrollMarker';

interface Decision {
  id: string;
  title: string;
  summary: string;
  why: string;
  tradeoff: string;
}

const decisions: Decision[] = [
  {
    id: 'event-driven',
    title: 'Event-driven over batch',
    summary:
      'React to users the moment something happens, instead of on a schedule.',
    why: 'Batch jobs put a gap between what a user does and what the system does about it. For engagement and personalization, that gap is the whole product. Event-driven closes it and lets features respond to real intent instead of a nightly guess.',
    tradeoff:
      'More moving parts to reason about. Ordering, retries, and idempotency all become your problem. Worth it when timing is the value, and overkill when a daily refresh is genuinely fine.',
  },
  {
    id: 'redis',
    title: 'Why Redis',
    summary: 'Keep the hottest reads and counters out of the main database.',
    why: 'Some paths get hit constantly: sessions, rate limits, hot lookups, pub/sub fan-out. Redis serves those from memory so the primary database stays calm and predictable under load.',
    tradeoff:
      'It is another system to run, and it is memory-bound. I keep it for data that is fine to lose or rebuild, and I never treat it as the source of truth.',
  },
  {
    id: 'mongo',
    title: 'Why MongoDB',
    summary:
      'A flexible document model for data whose shape keeps moving early on.',
    why: 'Early products change their data shape almost weekly. A document store lets the schema evolve without a migration for every idea, and it maps cleanly onto how the application already thinks about its objects.',
    tradeoff:
      'You give up some guarantees and easy joins of a relational database. When the data is truly relational and reporting-heavy, I reach for Postgres instead.',
  },
  {
    id: 'sqs',
    title: 'Why SQS',
    summary: 'A managed queue, so work is decoupled and failures stay isolated.',
    why: 'It lets producers and workers scale independently, absorbs spikes, and gives retries and a dead-letter queue out of the box. Managed means one less thing to operate at 2am.',
    tradeoff:
      'It is a plain queue, not a log. No replaying old messages, and no ordering unless you opt into FIFO. That is fine when I need work distribution rather than an event history.',
  },
  {
    id: 'graphql',
    title: 'Why GraphQL',
    summary:
      'Let clients ask for exactly the data they need, in one round trip.',
    why: 'When several screens need different slices of the same data, GraphQL stops both the endpoint sprawl and the over-fetching. The typed schema also doubles as a contract between frontend and backend.',
    tradeoff:
      'Caching and rate limiting are harder than plain REST, and a careless query can get expensive. For simple or public APIs, REST is still the easier call.',
  },
  {
    id: 'queues',
    title: 'Why queues',
    summary: 'Do slow work in the background, so the request stays fast.',
    why: 'Anything slow or flaky, like sending email, calling a third party, or heavy processing, does not belong in the request path. A queue keeps the user-facing response quick and gives retries when the slow thing fails.',
    tradeoff:
      'The work becomes asynchronous, so the interface has to handle in-progress states and eventual results. That is a small price for responsiveness and resilience.',
  },
  {
    id: 'not-kafka',
    title: 'Why not Kafka',
    summary: 'A great tool, but the wrong stage for the teams I was building for.',
    why: 'Kafka is excellent at high-volume streaming and replayable logs. At early-stage scale, a managed queue covered the real needs with a fraction of the operational weight. Running and tuning Kafka is real work, and I did not want a small team carrying it before the product needed it.',
    tradeoff:
      'I gave up log replay and a lot of throughput headroom. The moment a workload genuinely needs a durable, replayable event log, Kafka earns its place, and I would bring it in then.',
  },
];

export default function DecisionsPage() {
  const [open, setOpen] = useState<string | null>(decisions[0].id);

  return (
    <div className="relative min-h-screen bg-white">
      <GridBackground />
      <Navigation />
      <CaseStudyScrollMarker />

      <main className="relative z-10">
        <ContentContainer>
          <div className="pt-12 pb-20 flex flex-col gap-16">
            {/* Hero */}
            <section className="mt-12 md:mt-20 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-[#8A8F98] text-xs font-medium uppercase tracking-wider">
                <span className="text-sm mb-1">⚖️</span>
                Decision Log
              </div>
              <h1 className="text-[34px] md:text-[52px] font-semibold leading-[1.15] tracking-tight text-[#0B0D12]">
                The calls I made,
                <br />
                and why
              </h1>
              <p className="text-lg md:text-xl text-[#5F6368] font-normal leading-relaxed max-w-[600px]">
                Most of engineering is trade-offs. Here are some of the ones I
                have taken, what they bought, and what they cost. No decision
                is free, and I try to be honest about the other side of each.
              </p>
            </section>

            {/* Decisions */}
            <section className="flex flex-col gap-3">
              {decisions.map((d, i) => {
                const isOpen = open === d.id;
                return (
                  <div
                    key={d.id}
                    className="rounded-xl border transition-colors duration-140"
                    style={{
                      borderColor: isOpen
                        ? 'rgba(79,70,229,0.25)'
                        : 'rgba(0,0,0,0.08)',
                    }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : d.id)}
                      className="w-full text-left p-5 md:p-6 flex items-start gap-4"
                    >
                      <span className="text-xs font-medium text-[#8A8F98] mt-1 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1">
                        <span className="block text-lg font-semibold text-[#0B0D12]">
                          {d.title}
                        </span>
                        <span className="block text-sm text-[#5F6368] mt-1 leading-relaxed">
                          {d.summary}
                        </span>
                      </span>
                      <span
                        className="text-xl leading-none mt-0.5 transition-transform duration-140"
                        style={{
                          color: isOpen ? '#4F46E5' : '#8A8F98',
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                        }}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 md:px-6 pb-6 pl-[52px] md:pl-[60px] flex flex-col gap-4 animate-fade-in">
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">
                            Why
                          </div>
                          <p className="text-[15px] text-[#5F6368] leading-relaxed">
                            {d.why}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">
                            Trade-off
                          </div>
                          <p className="text-[15px] text-[#5F6368] leading-relaxed">
                            {d.tradeoff}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>

            {/* Footer navigation */}
            <div className="flex justify-between items-center pt-12 border-t border-black/10 mt-4">
              <Link
                href="/architecture"
                className="flex items-center gap-2 text-black/60 hover:text-black transition-colors"
              >
                <span>←</span>
                Systems
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 text-black/60 hover:text-black transition-colors"
              >
                Back to Work
                <span>→</span>
              </Link>
            </div>
          </div>
        </ContentContainer>
      </main>
    </div>
  );
}
