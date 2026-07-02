'use client';

import Link from 'next/link';
import { useState } from 'react';
import GridBackground from '@/components/GridBackground';
import Navigation from '@/components/Navigation';
import ContentContainer from '@/components/ContentContainer';
import CaseStudyScrollMarker from '@/components/CaseStudyScrollMarker';
import AINativeFlow from '@/components/AINativeFlow';
import SystemDiagram, {
  DiagramNode,
  DiagramEdge,
} from '@/components/SystemDiagram';

interface System {
  id: string;
  name: string;
  tagline: string;
  description: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

const systems: System[] = [
  {
    id: 'engagement',
    name: 'Customer Engagement Platform',
    tagline: 'One system, many channels',
    description:
      'User activity flows through a single gateway, then fans out to the workflow engine and personalization layer before it reaches a channel. Keeping one entry point kept behavior consistent as the product grew.',
    nodes: [
      { id: 'user', label: 'User', x: 55, y: 110 },
      { id: 'gw', label: 'Event Gateway', x: 165, y: 110, accent: true },
      { id: 'wf', label: 'Workflow Engine', x: 285, y: 60 },
      { id: 'pers', label: 'Personalization', x: 285, y: 160 },
      { id: 'ch', label: 'Channels', x: 365, y: 110 },
    ],
    edges: [
      { from: 'user', to: 'gw' },
      { from: 'gw', to: 'wf' },
      { from: 'gw', to: 'pers' },
      { from: 'wf', to: 'ch' },
      { from: 'pers', to: 'ch' },
    ],
  },
  {
    id: 'pipeline',
    name: 'Event Pipeline',
    tagline: 'Absorb spikes, never drop',
    description:
      'Producers write to a queue that soaks up traffic spikes. A processor reads at its own pace and writes to storage and downstream consumers. Slow consumers never slow down the producers.',
    nodes: [
      { id: 'prod', label: 'Producers', x: 55, y: 110 },
      { id: 'queue', label: 'Queue', x: 165, y: 110, accent: true },
      { id: 'proc', label: 'Processor', x: 270, y: 110 },
      { id: 'store', label: 'Store', x: 360, y: 60 },
      { id: 'cons', label: 'Consumers', x: 360, y: 160 },
    ],
    edges: [
      { from: 'prod', to: 'queue' },
      { from: 'queue', to: 'proc' },
      { from: 'proc', to: 'store' },
      { from: 'proc', to: 'cons' },
    ],
  },
  {
    id: 'notifications',
    name: 'Notification Service',
    tagline: 'One trigger, every channel',
    description:
      'A trigger drops onto a queue, a dispatcher picks it up and routes it to the right channel. Adding a new channel means adding one consumer, not touching the callers.',
    nodes: [
      { id: 'trig', label: 'Trigger', x: 55, y: 110 },
      { id: 'q', label: 'Queue', x: 160, y: 110, accent: true },
      { id: 'disp', label: 'Dispatcher', x: 260, y: 110 },
      { id: 'email', label: 'Email', x: 360, y: 50 },
      { id: 'push', label: 'Push', x: 360, y: 110 },
      { id: 'sms', label: 'SMS', x: 360, y: 170 },
    ],
    edges: [
      { from: 'trig', to: 'q' },
      { from: 'q', to: 'disp' },
      { from: 'disp', to: 'email' },
      { from: 'disp', to: 'push' },
      { from: 'disp', to: 'sms' },
    ],
  },
  {
    id: 'workflow',
    name: 'Workflow Engine',
    tagline: 'Rules in, actions out',
    description:
      'An event is matched against rules, the matching rule fires actions, and the outcome feeds back in so the next run is smarter. Workflows became something the team could change without a deploy.',
    nodes: [
      { id: 'ev', label: 'Event', x: 55, y: 95 },
      { id: 'rules', label: 'Rules', x: 165, y: 95, accent: true },
      { id: 'act', label: 'Actions', x: 280, y: 95 },
      { id: 'out', label: 'Outcome', x: 365, y: 95 },
      { id: 'iter', label: 'Iterate', x: 210, y: 175 },
    ],
    edges: [
      { from: 'ev', to: 'rules' },
      { from: 'rules', to: 'act' },
      { from: 'act', to: 'out' },
      { from: 'out', to: 'iter', dashed: true },
      { from: 'iter', to: 'ev', dashed: true },
    ],
  },
  {
    id: 'personalization',
    name: 'Personalization Engine',
    tagline: 'React to behavior, not the clock',
    description:
      'Behavioral events land in a feature store, a scoring step reads them in real time, and the decision routes straight to the channel. No nightly batch, no stale segments.',
    nodes: [
      { id: 'beh', label: 'Behavior', x: 55, y: 110 },
      { id: 'feat', label: 'Feature store', x: 165, y: 110 },
      { id: 'score', label: 'Scoring', x: 275, y: 110, accent: true },
      { id: 'dec', label: 'Decision', x: 365, y: 60 },
      { id: 'ch', label: 'Channel', x: 365, y: 160 },
    ],
    edges: [
      { from: 'beh', to: 'feat' },
      { from: 'feat', to: 'score' },
      { from: 'score', to: 'dec' },
      { from: 'score', to: 'ch' },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics',
    tagline: 'From raw events to answers',
    description:
      'Events are ingested, aggregated, and served to dashboards. The aggregation layer is where raw noise turns into something a team can actually decide on.',
    nodes: [
      { id: 'ev', label: 'Events', x: 55, y: 110 },
      { id: 'ing', label: 'Ingestion', x: 165, y: 110 },
      { id: 'agg', label: 'Aggregation', x: 275, y: 110, accent: true },
      { id: 'dash', label: 'Dashboards', x: 365, y: 110 },
    ],
    edges: [
      { from: 'ev', to: 'ing' },
      { from: 'ing', to: 'agg' },
      { from: 'agg', to: 'dash' },
    ],
  },
  {
    id: 'queue',
    name: 'Queue System (SQS)',
    tagline: 'Scale workers, isolate failures',
    description:
      'A producer writes once, and workers scale out to drain the queue in parallel. Messages that keep failing move to a dead-letter queue instead of blocking everything behind them.',
    nodes: [
      { id: 'prod', label: 'Producer', x: 55, y: 110 },
      { id: 'sqs', label: 'SQS', x: 170, y: 110, accent: true },
      { id: 'w1', label: 'Worker', x: 305, y: 55 },
      { id: 'w2', label: 'Worker', x: 305, y: 110 },
      { id: 'w3', label: 'Worker', x: 305, y: 165 },
      { id: 'dlq', label: 'DLQ', x: 170, y: 185 },
    ],
    edges: [
      { from: 'prod', to: 'sqs' },
      { from: 'sqs', to: 'w1' },
      { from: 'sqs', to: 'w2' },
      { from: 'sqs', to: 'w3' },
      { from: 'sqs', to: 'dlq', dashed: true },
    ],
  },
  {
    id: 'redis',
    name: 'Redis Layer',
    tagline: 'The hot path in front of the database',
    description:
      'Redis sits between the app and the database as a cache, a rate limiter, and a pub/sub bus. It takes the load off the database on the paths that get hit the hardest.',
    nodes: [
      {
        id: 'roles',
        label: 'Cache · Rate limit · Pub/Sub',
        x: 200,
        y: 50,
      },
      { id: 'app', label: 'App', x: 70, y: 125 },
      { id: 'redis', label: 'Redis', x: 200, y: 125, accent: true },
      { id: 'db', label: 'Database', x: 340, y: 125 },
    ],
    edges: [
      { from: 'app', to: 'redis' },
      { from: 'redis', to: 'db' },
      { from: 'redis', to: 'roles', dashed: true },
    ],
  },
  {
    id: 'aws',
    name: 'AWS Topology',
    tagline: 'How it runs in production',
    description:
      'Traffic comes through a CDN and load balancer into containerized services, which talk to managed databases, queues, and cache. Managed pieces mean fewer things to babysit at 2am.',
    nodes: [
      { id: 'client', label: 'Client', x: 50, y: 110 },
      { id: 'cf', label: 'CloudFront', x: 150, y: 110 },
      { id: 'alb', label: 'ALB', x: 250, y: 110, accent: true },
      { id: 'ecs', label: 'ECS', x: 350, y: 55 },
      { id: 'data', label: 'RDS / DocDB', x: 350, y: 110 },
      { id: 'infra', label: 'SQS / Redis', x: 350, y: 165 },
    ],
    edges: [
      { from: 'client', to: 'cf' },
      { from: 'cf', to: 'alb' },
      { from: 'alb', to: 'ecs' },
      { from: 'ecs', to: 'data' },
      { from: 'ecs', to: 'infra' },
    ],
  },
];

const aiExplorations = [
  {
    name: 'AI support agent',
    body: 'Answers common product questions from the docs and past tickets, and hands off cleanly when it is unsure.',
  },
  {
    name: 'Internal ops copilot',
    body: 'A chat layer over internal data so the team can ask questions instead of writing one-off queries.',
  },
  {
    name: 'Shopify data copilot',
    body: 'Turns plain-language questions about store data into the queries and summaries a merchant actually wants.',
  },
];

export default function ArchitecturePage() {
  const [selected, setSelected] = useState(systems[0].id);
  const active = systems.find((s) => s.id === selected) ?? systems[0];

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
                <span className="text-sm mb-1">🧩</span>
                Systems
              </div>
              <h1 className="text-[34px] md:text-[52px] font-semibold leading-[1.15] tracking-tight text-[#0B0D12]">
                How I design systems
                <br />
                that scale
              </h1>
              <p className="text-lg md:text-xl text-[#5F6368] font-normal leading-relaxed max-w-[600px]">
                These are the shapes I keep reaching for in production. Pick
                one to see the structure and the reason it holds up under real
                traffic.
              </p>
            </section>

            {/* Interactive gallery */}
            <section className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-2">
                {systems.map((s) => {
                  const isActive = s.id === selected;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelected(s.id)}
                      className="px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-140"
                      style={{
                        borderColor: isActive
                          ? '#4F46E5'
                          : 'rgba(0,0,0,0.08)',
                        color: isActive ? '#4F46E5' : '#5F6368',
                        backgroundColor: isActive
                          ? 'rgba(79,70,229,0.05)'
                          : 'transparent',
                      }}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-xl border border-black/10 bg-black/[0.02] p-6 md:p-8">
                <div className="flex flex-col gap-1 mb-6">
                  <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">
                    {active.tagline}
                  </div>
                  <h2 className="text-xl font-semibold text-[#0B0D12]">
                    {active.name}
                  </h2>
                </div>

                <div className="max-w-[520px] mx-auto py-2">
                  <SystemDiagram nodes={active.nodes} edges={active.edges} />
                </div>

                <p className="text-[15px] text-[#5F6368] leading-relaxed mt-6 max-w-[600px]">
                  {active.description}
                </p>
              </div>

              <p className="text-xs text-black/30 italic">
                Diagrams are simplified on purpose. They show the shape of the
                system, not every box in production.
              </p>
            </section>

            {/* Built with AI */}
            <section className="flex flex-col gap-8 border-t pt-16" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
              <div className="flex flex-col gap-4 max-w-[640px]">
                <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">
                  Built with AI
                </div>
                <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-[#0B0D12]">
                  Shipping faster with AI in the loop
                </h2>
                <p className="text-base md:text-lg text-[#5F6368] leading-relaxed">
                  AI runs through the whole build for me, from thinking out
                  architecture to writing code to keeping quality high.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-black/[0.02] p-6 md:p-8">
                <AINativeFlow bare />
              </div>

              {/* Headline AI build */}
              <div className="rounded-xl border border-black/10 p-6 md:p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#8A8F98] text-xs font-medium uppercase tracking-wider">
                  <span className="text-sm">🤖</span>
                  In use internally
                </div>
                <h3 className="text-xl font-semibold text-[#0B0D12]">
                  PR Code Review Agent
                </h3>
                <p className="text-[15px] text-[#5F6368] leading-relaxed max-w-[620px]">
                  When a pull request goes up, an agent reviews the diff
                  automatically and leaves inline comments on the code. It
                  catches the obvious issues before a human looks, so reviews
                  start from a higher baseline and nothing slips through on a
                  busy day.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Auto review on PR', 'Inline comments', 'Faster reviews', 'Consistent baseline'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded border border-black/10 bg-black/5 text-xs text-black/70"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Explorations */}
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">
                  Also building
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {aiExplorations.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-xl border border-black/10 p-5 flex flex-col gap-2"
                    >
                      <h4 className="text-base font-semibold text-[#0B0D12]">
                        {p.name}
                      </h4>
                      <p className="text-sm text-[#5F6368] leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer navigation */}
            <div className="flex justify-between items-center pt-12 border-t border-black/10 mt-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-black/60 hover:text-black transition-colors"
              >
                <span>←</span>
                Back to Work
              </Link>
              <Link
                href="/decisions"
                className="flex items-center gap-2 text-black/60 hover:text-black transition-colors"
              >
                How I decide
                <span>→</span>
              </Link>
            </div>
          </div>
        </ContentContainer>
      </main>
    </div>
  );
}
