import Link from 'next/link';
import PageShell from '@/components/book/PageShell';
import Section from '@/components/book/Section';

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-px w-8 bg-rule-strong" />
      <h2 className="t-h3">{children}</h2>
    </div>
  );
}

export default function TechmonkCaseStudy() {
  return (
    <PageShell>
      {/* Hero */}
      <Section className="pt-10 md:pt-14">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 t-eyebrow">
            <span className="text-sm">📁</span>
            Project
          </div>
          <h1 className="t-display text-balance">
            Full-Stack Customer Engagement Platform
          </h1>
          <p className="t-lead max-w-[52ch]">
            A full-stack customer engagement platform designed to unify
            marketing and sales workflows while enabling real-time,
            behavior-driven personalization across channels.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {['👤 Founding Engineer', '⏱️ 18 Months', '⚙️ Next, Node, MongoDB, Redis, AWS'].map(
              (m) => (
                <span
                  key={m}
                  className="t-meta border border-rule rounded-full px-3 py-1"
                >
                  {m}
                </span>
              )
            )}
          </div>

          <div className="mt-6 w-full aspect-video rounded-sm bg-paper-2 border border-rule overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-ink/10 to-ink/5 opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-ink/10 backdrop-blur-sm border border-rule px-5 py-3 rounded-sm">
                <span className="font-display italic text-ink">
                  Engagement Platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Body */}
      <Section className="pt-0">
        <div className="flex flex-col gap-16">
          {/* Context */}
          <div className="border-l-2 border-accent/40 pl-6">
            <p className="t-lead text-ink mb-4">
              Marketing and sales teams were operating through fragmented tools
              and manual workflows. Personalization existed in theory, but
              execution relied heavily on batch processing and human
              intervention.
            </p>
            <div className="t-body mb-4">
              As usage grew, teams faced three compounding problems:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Personalization lagged behind real user behavior</li>
                <li>Manual workflows consumed operational bandwidth</li>
                <li>Existing systems could not scale reliably under peak traffic</li>
              </ul>
            </div>
            <p className="t-body">
              The product needed to move from campaign-based execution to
              real-time customer engagement, without increasing operational
              complexity.
            </p>
          </div>

          {/* My Role */}
          <div>
            <SectionTitle>My Role</SectionTitle>
            <p className="t-body mb-6">
              As a founding-level product-focused full stack engineer, I owned
              the problem end to end, from product discovery to production
              reliability.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Working directly with founders to translate business goals into system capabilities',
                'Defining how personalization should behave at the product level, not just the technical level',
                'Designing the system architecture to support real-time decision-making',
                'Building and shipping the core platform across backend, frontend, and infrastructure',
                'Owning production readiness, observability, and scaling strategy',
              ].map((r) => (
                <li key={r} className="flex items-start gap-3 t-body">
                  <span className="text-ink-muted">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="t-body mt-6">
              My role was not limited to implementation, I was responsible for
              what we built, why we built it, and how it would scale under real
              usage.
            </p>
          </div>

          {/* Strategic Decisions */}
          <div>
            <SectionTitle>Strategic Decisions</SectionTitle>
            <div className="flex flex-col gap-10">
              {/* Decision 1 */}
              <div>
                <p className="t-eyebrow mb-3">Decision 01</p>
                <h3 className="t-h3 mb-3">
                  Event-Driven Engagement over Batch Workflows
                </h3>
                <p className="t-body mb-6">
                  Batch-based workflows introduced delays between user actions
                  and system responses. This created stale personalization and
                  limited experimentation velocity.
                </p>

                <div className="flex items-center justify-center gap-8 py-6 mb-6 opacity-60">
                  <span className="w-8 h-8 rounded-sm border border-rule-strong flex items-center justify-center">
                    <span className="block w-2 h-2 bg-ink rounded-full" />
                  </span>
                  <span className="h-px w-8 bg-gradient-to-r from-transparent via-ink to-transparent" />
                  <span className="w-8 h-8 rounded-sm border border-ink flex items-center justify-center">
                    <span className="block w-2 h-2 bg-ink rounded-full" />
                  </span>
                  <span className="h-px w-8 bg-gradient-to-r from-transparent via-ink to-transparent" />
                  <span className="w-8 h-8 rounded-sm border border-rule-strong flex items-center justify-center">
                    <span className="block w-2 h-2 bg-ink rounded-full" />
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="t-eyebrow mb-1.5">Why</p>
                    <p className="t-body">
                      We transitioned to an event-driven architecture where user
                      actions triggered real-time workflows. This allowed the
                      product to respond immediately to user intent and unlock
                      meaningful personalization at scale.
                    </p>
                  </div>
                  <div>
                    <p className="t-eyebrow mb-1.5">Trade-off</p>
                    <p className="t-body">
                      Increased system complexity in exchange for significantly
                      better responsiveness and flexibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decision 2 */}
              <div>
                <p className="t-eyebrow mb-3">Decision 02</p>
                <h3 className="t-h3 mb-3">
                  Workflow Automation as a Product Capability
                </h3>
                <p className="t-body mb-6">
                  Manual intervention was a core bottleneck. Rather than
                  treating automation as an operational concern, we designed it
                  as a first-class product feature.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 max-w-[420px]">
                  <div className="rounded-sm border border-rule p-4 flex flex-col items-center gap-2 opacity-60">
                    <span className="t-eyebrow">Manual</span>
                    <span className="text-2xl py-1">📝</span>
                    <span className="t-meta">Operational</span>
                  </div>
                  <div className="rounded-sm border border-ink p-4 flex flex-col items-center gap-2">
                    <span className="t-eyebrow text-ink">Automated</span>
                    <span className="text-2xl py-1">⚡</span>
                    <span className="t-meta">Product Feature</span>
                  </div>
                </div>

                <div>
                  <p className="t-eyebrow mb-1.5">Why</p>
                  <p className="t-body">
                    Workflows were modeled as configurable, event-triggered
                    systems rather than static sequences. This reduced manual
                    effort while increasing consistency and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Overview */}
          <div>
            <SectionTitle>Technical Overview</SectionTitle>
            <ul className="flex flex-col gap-3">
              {[
                'Event-driven backend handling real-time user activity',
                'Scalable APIs supporting personalization logic',
                'Frontend interfaces for managing workflows and engagement logic',
                'Infrastructure designed for throughput, low latency, and fault tolerance',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 t-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-2.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <SectionTitle>Impact</SectionTitle>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { k: 'Efficiency', v: '~80%', d: 'Reduction in manual workflow operations' },
                { k: 'Scale', v: 'Millions', d: 'Events handled reliably per day' },
                { k: 'Speed', v: 'Real-time', d: 'Personalization cycles tied to behavior' },
                { k: 'Engagement', v: 'Improved', d: 'Efficiency across marketing and sales' },
              ].map((s) => (
                <div key={s.k} className="flex flex-col gap-1.5">
                  <span className="t-eyebrow">{s.k}</span>
                  <span className="font-display text-[clamp(1.8rem,5vw,2.6rem)] font-semibold text-ink leading-none">
                    {s.v}
                  </span>
                  <span className="t-meta">{s.d}</span>
                </div>
              ))}
            </div>

            {/* Conversion chart */}
            <div className="flex flex-col gap-4 rounded-sm border border-rule bg-paper-2 p-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="t-eyebrow mb-1">Performance</p>
                  <p className="font-display text-xl text-ink">Conversion Velocity</p>
                </div>
                <span className="t-meta text-ink font-medium bg-ink/10 px-2 py-1 rounded-sm">
                  +5.2% MoM
                </span>
              </div>
              <div className="relative w-full h-[160px] mt-2 text-ink">
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 300 100"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="0" y2="0" />
                  <line stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="50" y2="50" />
                  <line stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="100" y2="100" />
                  <path d="M0 80 C 40 80, 50 60, 100 60 C 150 60, 180 30, 220 30 C 260 30, 280 10, 300 5 V 100 H 0 Z" fill="url(#chartGradient)" />
                  <path d="M0 80 C 40 80, 50 60, 100 60 C 150 60, 180 30, 220 30 C 260 30, 280 10, 300 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                  <circle cx="100" cy="60" r="3" stroke="currentColor" strokeWidth="2" style={{ fill: 'var(--color-paper)' }} />
                  <circle cx="220" cy="30" r="3" stroke="currentColor" strokeWidth="2" style={{ fill: 'var(--color-paper)' }} />
                  <circle cx="300" cy="5" r="4" style={{ fill: 'var(--color-accent)' }} />
                </svg>
              </div>
              <div className="flex justify-between pt-4 border-t border-rule">
                <span className="t-eyebrow">Q1 Start</span>
                <span className="t-eyebrow">Current</span>
              </div>
              <span className="t-meta italic">
                *Representative trend, not an exact analytics export
              </span>
            </div>

            <div className="mt-8">
              <h3 className="t-h3 mb-3">The Architecture</h3>
              <p className="t-body mb-4">
                Achieved by migrating a monolithic codebase to a microservices
                architecture, utilizing an event-driven design to handle peak
                loads efficiently without manual intervention.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Event-driven', 'Asynchronous', 'Scalable', 'Fault-tolerant', 'Observable'].map(
                  (t) => (
                    <span
                      key={t}
                      className="t-meta rounded-sm border border-rule bg-paper-2 px-3 py-1"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div className="border-l-2 border-accent/40 bg-paper-2 p-6">
            <p className="t-quote text-ink-2">
              &ldquo;Building this platform reinforced an important lesson:
              real-time systems are product decisions, not just technical ones.
              Choosing event-driven architecture early introduced complexity,
              but it became the foundation that allowed the product to scale
              without slowing teams down. The ability to react to users
              instantly proved to be a long-term competitive advantage as usage
              grew.&rdquo;
            </p>
          </div>

          {/* Footer nav */}
          <div className="flex justify-between items-center pt-10 border-t border-rule">
            <Link
              href="/"
              className="t-meta text-ink-2 hover:text-accent transition-colors"
            >
              ← Back to Work
            </Link>
            <Link
              href="/case-study/personalization-engine"
              className="t-meta text-ink-2 hover:text-accent transition-colors"
            >
              Next Project →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
