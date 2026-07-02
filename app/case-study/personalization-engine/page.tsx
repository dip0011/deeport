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

export default function PersonalizationEngineCaseStudy() {
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
            One-to-One Personalization Engine
          </h1>
          <p className="t-lead max-w-[52ch]">
            A real-time personalization engine designed to deliver one-to-one
            customer experiences by reacting instantly to behavioral signals
            instead of relying on static segmentation.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {['👤 Lead Engineer', '⏱️ 12 Months', '⚙️ Next, Node, MongoDB, Shopify, AWS'].map(
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
                  Personalization Engine
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
              The existing personalization system relied on batch processing and
              predefined segments. Users often received generic campaigns hours
              after relevant actions, reducing engagement and impact.
            </p>
            <div className="t-body mb-4">
              Key challenges included:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Delayed personalization caused by batch workflows</li>
                <li>Static segmentation that failed to capture real intent</li>
                <li>Difficulty experimenting quickly without affecting system stability</li>
              </ul>
            </div>
            <p className="t-body">
              To drive meaningful engagement, the product needed to evaluate
              user behavior as it happened and trigger personalized actions
              instantly.
            </p>
          </div>

          {/* My Role */}
          <div>
            <SectionTitle>My Role</SectionTitle>
            <p className="t-body mb-6">
              As the lead backend engineer with strong product ownership, I
              designed and implemented the personalization engine from the
              ground up.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Defining behavior-based personalization logic with product stakeholders',
                'Designing a scalable, event-first data model',
                'Building high-throughput ingestion and processing pipelines',
                'Ensuring data consistency, reliability, and zero-downtime deployments',
                'Supporting rapid experimentation without compromising production stability',
              ].map((r) => (
                <li key={r} className="flex items-start gap-3 t-body">
                  <span className="text-ink-muted">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="t-body mt-6">
              The focus was always on enabling product teams to move faster
              while maintaining trust in the system.
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
                  Behavior-Based Triggers over Time-Based Jobs
                </h3>
                <p className="t-body mb-6">
                  Replaced time-based batch jobs with real-time event listeners.
                  This shift allowed the system to react instantly to user
                  actions, such as abandoning a cart or viewing a pricing page,
                  rather than waiting for a nightly sync.
                </p>

                <div className="flex items-center justify-center gap-6 py-6 mb-6 opacity-60">
                  <span className="w-10 h-10 rounded-sm border border-rule-strong flex items-center justify-center">
                    <span className="block w-2 h-2 bg-ink rounded-full" />
                  </span>
                  <span className="h-px w-6 bg-gradient-to-r from-transparent via-ink to-transparent" />
                  <span className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center">
                    <span className="block w-3 h-3 bg-ink rounded-full" />
                  </span>
                  <span className="h-px w-6 bg-gradient-to-r from-transparent via-ink to-transparent" />
                  <span className="w-10 h-10 rounded-sm border border-rule-strong flex items-center justify-center">
                    <span className="block w-2 h-2 bg-ink rounded-full" />
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="t-eyebrow mb-1.5">Why</p>
                    <p className="t-body">
                      Batch processing introduced an unacceptable lag between
                      user intent and system reaction. Real-time triggers closed
                      this gap, enabling high-context interventions at the exact
                      moment of relevance.
                    </p>
                  </div>
                  <div>
                    <p className="t-eyebrow mb-1.5">Trade-off</p>
                    <p className="t-body">
                      Required a shift to a more complex, always-on
                      infrastructure compared to simpler cron jobs, increasing
                      operational overhead.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decision 2 */}
              <div>
                <p className="t-eyebrow mb-3">Decision 02</p>
                <h3 className="t-h3 mb-3">Event-First Data Model</h3>
                <p className="t-body mb-6">
                  Designed the database schema around immutable events rather
                  than mutable user state. Every interaction was stored as a
                  discrete event, allowing us to reconstruct user state at any
                  point in time.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 max-w-[420px]">
                  <div className="rounded-sm border border-rule p-4 flex flex-col items-center gap-2 opacity-60">
                    <span className="t-eyebrow">State-based</span>
                    <div className="flex flex-col items-center gap-1 py-1">
                      <div className="w-12 h-8 rounded-sm border border-rule-strong bg-paper-2 flex items-center justify-center text-[8px] text-ink-muted">
                        User
                      </div>
                      <span className="text-[8px] text-ink-muted">Mutable</span>
                    </div>
                    <span className="t-meta">Traditional</span>
                  </div>
                  <div className="rounded-sm border border-ink p-4 flex flex-col items-center gap-2">
                    <span className="t-eyebrow text-ink">Event-based</span>
                    <div className="flex flex-col items-center gap-1 py-1">
                      <div className="w-12 h-8 rounded-sm border-2 border-ink bg-paper flex items-center justify-center text-[8px] text-ink">
                        Event
                      </div>
                      <span className="text-[8px] text-ink-muted">Immutable</span>
                    </div>
                    <span className="t-meta">Our Approach</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="t-eyebrow mb-1.5">Why</p>
                    <p className="t-body">
                      Mutable state is prone to race conditions and data loss. An
                      event-first model provided a complete audit trail,
                      simplified debugging, and allowed us to replay events to
                      test new personalization logic.
                    </p>
                  </div>
                  <div>
                    <p className="t-eyebrow mb-1.5">Trade-off</p>
                    <p className="t-body">
                      Storage costs increased significantly due to data volume.
                      We mitigated this with aggressive data compaction policies
                      and tiered storage strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Overview */}
          <div>
            <SectionTitle>Technical Overview</SectionTitle>
            <ul className="flex flex-col gap-3">
              {[
                'A high-throughput ingestion layer designed to handle spikes in user activity',
                'A real-time evaluation engine that processes events and applies personalization logic instantly',
                'A data persistence layer optimized for fast reads, writes, and auditability',
                'A delivery mechanism ensuring exactly-once execution for critical personalization workflows',
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
                { k: 'Engagement', v: '2.5x', d: 'Higher engagement' },
                { k: 'Targeting', v: '40%', d: 'Better targeting' },
                { k: 'Automation', v: '~80%', d: 'Manual work' },
                { k: 'Speed', v: '10x', d: 'Experiment speed' },
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

            {/* Engagement chart */}
            <div className="flex flex-col gap-4 rounded-sm border border-rule bg-paper-2 p-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="t-eyebrow mb-1">Performance</p>
                  <p className="font-display text-xl text-ink">Engagement Rate</p>
                </div>
                <span className="t-meta text-ink font-medium bg-ink/10 px-2 py-1 rounded-sm">
                  +150% YoY
                </span>
              </div>
              <div className="relative w-full h-[160px] mt-2 text-ink">
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 300 100"
                >
                  <defs>
                    <linearGradient id="chartGradient2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="0" y2="0" />
                  <line stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="50" y2="50" />
                  <line stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="100" y2="100" />
                  <path d="M0 90 C 30 90, 40 70, 80 70 C 120 70, 140 40, 180 40 C 220 40, 240 20, 280 15 V 100 H 0 Z" fill="url(#chartGradient2)" />
                  <path d="M0 90 C 30 90, 40 70, 80 70 C 120 70, 140 40, 180 40 C 220 40, 240 20, 280 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                  <circle cx="80" cy="70" r="3" stroke="currentColor" strokeWidth="2" style={{ fill: 'var(--color-paper)' }} />
                  <circle cx="180" cy="40" r="3" stroke="currentColor" strokeWidth="2" style={{ fill: 'var(--color-paper)' }} />
                  <circle cx="280" cy="15" r="4" style={{ fill: 'var(--color-accent)' }} />
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
                Built a high-throughput event ingestion pipeline with
                exactly-once delivery semantics, combined with dynamic
                segmentation using hybrid static rules and ML-inference scores
                for real-time personalization.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Event Pipeline', 'Dynamic Segmentation', 'Real-time Evaluation', 'Campaign Delivery'].map(
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
              &ldquo;Building this system reinforced that data consistency is as
              important as speed. While real-time capabilities were the headline
              feature, the strict schema validation and event immutability were
              what made the system maintainable at scale. It taught me that in
              data-intensive systems, the writer (producer) must accept more
              complexity to make the reader&rsquo;s (consumer&rsquo;s) life
              easier.&rdquo;
            </p>
          </div>

          {/* Footer nav */}
          <div className="flex justify-between items-center pt-10 border-t border-rule">
            <Link
              href="/case-study/techmonk"
              className="t-meta text-ink-2 hover:text-accent transition-colors"
            >
              ← Previous Project
            </Link>
            <Link
              href="/"
              className="t-meta text-ink-2 hover:text-accent transition-colors"
            >
              Back to Work →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
