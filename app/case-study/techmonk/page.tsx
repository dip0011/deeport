'use client';

import Link from 'next/link';
import PaperBackground from '@/components/book/PaperBackground';
import Navigation from '@/components/Navigation';
import ContentContainer from '@/components/ContentContainer';
import BookmarkProgress from '@/components/book/BookmarkProgress';
import { useState } from 'react';

export default function TechmonkCaseStudy() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PaperBackground />
      <Navigation />
      <BookmarkProgress />
      
      <main className="relative z-10">
        <ContentContainer>
          <div className="pt-12 pb-20 flex flex-col gap-16">
            {/* Hero Section */}
            <section className="mt-12 md:mt-20 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-ink-muted text-xs font-medium uppercase tracking-wider">
                <span className="text-sm mb-1">📁</span>
                Project
              </div>
              <h1 className="text-[38px] md:text-[56px] font-display font-semibold leading-[1.15] tracking-tight text-ink">
                Full-Stack Customer<br />
                Engagement Platform
              </h1>
              <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed max-w-[600px]" style={{ opacity: 0.7 }}>
                A full-stack customer engagement platform designed to unify marketing and sales workflows while enabling real-time, behavior-driven personalization across channels.
              </p>
              
              {/* Meta Data - Whisper context */}
              <div className="flex flex-wrap gap-3 pt-6 mt-2">
                <div className="bg-transparent border border-rule px-3 py-1.5 rounded-full text-xs text-ink-muted flex items-center gap-1.5">
                  <span className="text-xs">👤</span>
                  Founding Engineer
                </div>
                <div className="bg-transparent border border-rule px-3 py-1.5 rounded-full text-xs text-ink-muted flex items-center gap-1.5">
                  <span className="text-xs">⏱️</span>
                  18 Months
                </div>
                <div className="bg-transparent border border-rule px-3 py-1.5 rounded-full text-xs text-ink-muted flex items-center gap-1.5">
                  <span className="text-xs">⚙️</span>
                  Next, Node, MongoDB, Redis, AWS
                </div>
              </div>
              
              {/* Hero Image Placeholder */}
              <div className="mt-8 w-full aspect-video rounded-xl bg-paper-2 border border-rule overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-ink/10 to-ink/5 opacity-80 z-10"></div>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="bg-ink/10 backdrop-blur-sm border border-rule p-4 rounded-full">
                    <span className="text-xl italic">Engagement Platform</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Context & Problem - Pause moment */}
            <section className="py-8">
              <div className="border-l-2 pl-6" style={{ borderColor: 'rgba(122, 46, 46, 0.35)' }}>
                <p className="text-[17px] text-ink font-normal leading-relaxed mb-4">
                  Marketing and sales teams were operating through fragmented tools and manual workflows. Personalization existed in theory, but execution relied heavily on batch processing and human intervention.
                </p>
                <div className="text-base text-ink-2 font-normal leading-relaxed mb-4">
                  As usage grew, teams faced three compounding problems:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Personalization lagged behind real user behavior</li>
                    <li>Manual workflows consumed operational bandwidth</li>
                    <li>Existing systems could not scale reliably under peak traffic</li>
                  </ul>
                </div>
                <p className="text-base text-ink-2 font-normal leading-relaxed">
                  The product needed to move from campaign-based execution to real-time customer engagement, without increasing operational complexity.
                </p>
              </div>
            </section>

            {/* My Role - Scannable checklist */}
            <section className="py-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px bg-ink/10 w-8"></div>
                <h2 className="text-ink font-display text-2xl font-semibold leading-tight tracking-tight">My Role</h2>
              </div>
              <div className="pl-0 md:pl-11 text-ink-2 text-base font-normal" style={{ lineHeight: '1.7' }}>
                <p className="mb-8">
                  As a founding-level product-focused full stack engineer, I owned the problem end to end, from product discovery to production reliability.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-ink-muted mt-0.2">•</span>
                    <span>Working directly with founders to translate business goals into system capabilities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ink-muted mt-0.2">•</span>
                    <span>Defining how personalization should behave at the product level, not just the technical level</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ink-muted mt-0.2">•</span>
                    <span>Designing the system architecture to support real-time decision-making</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ink-muted mt-0.2">•</span>
                    <span>Building and shipping the core platform across backend, frontend, and infrastructure</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-ink-muted mt-0.2">•</span>
                    <span>Owning production readiness, observability, and scaling strategy</span>
                  </div>
                </div>
                <p className="mt-8">
                  My role was not limited to implementation, I was responsible for what we built, why we built it, and how it would scale under real usage.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(30,27,22,0.14)' }}></div>
            </section>

            {/* Key Decisions with Accordion - Thinking, not features */}
            <section className="py-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px bg-ink/10 w-8"></div>
                <h2 className="text-ink font-display text-2xl font-semibold leading-tight tracking-tight">Strategic Decisions</h2>
              </div>
              <div className="pl-0 md:pl-11 flex flex-col gap-10">
                {/* Decision 1: Event-Driven */}
                <div>
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wider text-ink-muted font-medium mb-3">DECISION 01</div>
                    <h2 className="font-display text-xl font-semibold text-ink mb-3">Event-Driven Engagement over Batch Workflows</h2>
                    <p className="text-[15px] text-ink-2 leading-relaxed">
                      Batch-based workflows introduced delays between user actions and system responses. This created stale personalization and limited experimentation velocity.
                    </p>
                  </div>
                      
                      {/* Architecture Diagram - Reduced size, reduced opacity */}
                      <div className="w-full h-28 bg-transparent mb-8 flex items-center justify-center relative overflow-hidden" style={{ opacity: 0.5 }}>
                        <div className="absolute inset-0 flex items-center justify-center gap-8">
                          <div className="w-8 h-8 rounded border border-rule-strong flex items-center justify-center">
                            <span className="block w-2 h-2 bg-ink rounded-full"></span>
                          </div>
                          <div className="h-px w-8 bg-gradient-to-r from-transparent via-ink to-transparent"></div>
                          <div className="w-8 h-8 rounded border border-ink flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                            <span className="block w-2 h-2 bg-ink rounded-full"></span>
                          </div>
                          <div className="h-px w-8 bg-gradient-to-r from-transparent via-ink to-transparent"></div>
                          <div className="w-8 h-8 rounded border border-rule-strong flex items-center justify-center">
                            <span className="block w-2 h-2 bg-ink rounded-full"></span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Accordion Content - Typographic clarity */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-ink-muted font-medium">WHY</div>
                          <p className="text-[15px] text-ink-2 leading-relaxed">
                            We transitioned to an event-driven architecture where user actions triggered real-time workflows. This allowed the product to respond immediately to user intent and unlock meaningful personalization at scale.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-ink-muted font-medium">TRADE-OFF</div>
                          <p className="text-[15px] text-ink-2 leading-relaxed">
                            Increased system complexity in exchange for significantly better responsiveness and flexibility.
                          </p>
                        </div>
                      </div>
                </div>

                {/* Decision 2: Workflow Automation */}
                <div>
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wider text-ink-muted font-medium mb-3">DECISION 02</div>
                    <h2 className="font-display text-xl font-semibold text-ink mb-3">Workflow Automation as a Product Capability</h2>
                    <p className="text-[15px] text-ink-2 leading-relaxed">
                      Manual intervention was a core bottleneck. Rather than treating automation as an operational concern, we designed it as a first-class product feature.
                    </p>
                  </div>
                      
                      {/* Comparison Visual - Reduced opacity */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="bg-transparent border border-rule rounded p-3 flex flex-col items-center justify-center gap-2"  style={{ opacity: 0.5 }}>
                          <span className="text-[10px] uppercase tracking-wider text-ink-muted font-bold">Manual</span>
                          <div className="flex -space-x-2 overflow-hidden py-2">
                             <span className="text-2xl">📝</span>
                          </div>
                          <p className="text-[10px] text-center text-ink-muted">Operational</p>
                        </div>
                        <div className="bg-transparent border border-ink rounded p-3 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-2 h-2 bg-ink rounded-bl"></div>
                          <span className="text-[10px] uppercase tracking-wider text-ink font-bold">Automated</span>
                          <span className="text-2xl py-2 text-ink">⚡</span>
                          <p className="text-[10px] text-center text-ink-2">Product Feature</p>
                        </div>
                      </div>
                      
                      {/* Typographic clarity */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-ink-muted font-medium">WHY</div>
                          <p className="text-[15px] text-ink-2 leading-relaxed">
                            Workflows were modeled as configurable, event-triggered systems rather than static sequences. This reduced manual effort while increasing consistency and reliability.
                          </p>
                        </div>
                      </div>
                </div>
              </div>
            </section>

            {/* Technical Overview */}
            <section className="py-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px bg-ink/10 w-8"></div>
                <h2 className="text-ink font-display text-2xl font-semibold leading-tight tracking-tight">Technical Overview</h2>
              </div>
              <div className="pl-0 md:pl-11">
                <ul className="space-y-3 text-ink-2 text-[15px] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-2 flex-shrink-0"></span>
                    <span>Event-driven backend handling real-time user activity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-2 flex-shrink-0"></span>
                    <span>Scalable APIs supporting personalization logic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-2 flex-shrink-0"></span>
                    <span>Frontend interfaces for managing workflows and engagement logic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-2 flex-shrink-0"></span>
                    <span>Infrastructure designed for throughput, low latency, and fault tolerance</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Impact Section - Turn metrics into relief */}
            <section className="py-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px bg-ink/10 w-8"></div>
                <h2 className="text-ink font-display text-2xl font-semibold leading-tight tracking-tight">Impact</h2>
              </div>
              
              {/* Stats Grid - Labels first, number second, explanation last */}
              <div className="pl-0 md:pl-11 grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <div className="text-xs uppercase tracking-wider text-ink-muted font-medium">EFFICIENCY</div>
                  <p className="text-ink font-display text-4xl font-semibold tracking-tight">~80%</p>
                  <p className="text-ink-2 text-sm font-normal">Reduction in manual workflow operations</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs uppercase tracking-wider text-ink-muted font-medium">SCALE</div>
                  <p className="text-ink font-display text-4xl font-semibold tracking-tight">Millions</p>
                  <p className="text-ink-2 text-sm font-normal">Events handled reliably per day</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs uppercase tracking-wider text-ink-muted font-medium">SPEED</div>
                  <p className="text-ink font-display text-4xl font-semibold tracking-tight">Real-time</p>
                  <p className="text-ink-2 text-sm font-normal">Personalization cycles tied to behavior</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs uppercase tracking-wider text-ink-muted font-medium">ENGAGEMENT</div>
                  <p className="text-ink font-display text-4xl font-semibold tracking-tight">Improved</p>
                  <p className="text-ink-2 text-sm font-normal">Efficiency across marketing and sales</p>
                </div>
              </div>

              {/* Conversion Chart */}
              <div className="pl-0 md:pl-11">
                <div className="flex flex-col gap-4 rounded-xl border border-rule bg-paper-2 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-ink-muted text-xs font-bold uppercase tracking-widest mb-1">Performance</p>
                      <p className="text-ink text-xl font-medium">Conversion Velocity</p>
                    </div>
                    <div className="flex items-center gap-1 bg-ink/10 px-2 py-1 rounded">
                      <span className="text-ink text-xs font-bold">+5.2% MoM</span>
                    </div>
                  </div>
                  <div className="relative w-full h-[160px] mt-4">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#1E1B16" stopOpacity="0.1"></stop>
                          <stop offset="100%" stopColor="#1E1B16" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line stroke="#1E1B16" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="0" y2="0"></line>
                      <line stroke="#1E1B16" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="50" y2="50"></line>
                      <line stroke="#1E1B16" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="100" y2="100"></line>
                      {/* Chart Area */}
                      <path d="M0 80 C 40 80, 50 60, 100 60 C 150 60, 180 30, 220 30 C 260 30, 280 10, 300 5 V 100 H 0 Z" fill="url(#chartGradient)"></path>
                      {/* Chart Line */}
                      <path d="M0 80 C 40 80, 50 60, 100 60 C 150 60, 180 30, 220 30 C 260 30, 280 10, 300 5" fill="none" stroke="#1E1B16" strokeLinecap="round" strokeWidth="2"></path>
                      {/* Data Points */}
                      <circle cx="100" cy="60" fill="white" r="3" stroke="#1E1B16" strokeWidth="2"></circle>
                      <circle cx="220" cy="30" fill="white" r="3" stroke="#1E1B16" strokeWidth="2"></circle>
                      <circle cx="300" cy="5" fill="#7A2E2E" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex justify-between mt-2 pt-4 border-t border-rule">
                    <span className="text-[10px] font-medium text-ink-muted uppercase">Q1 Start</span>
                    <span className="text-[10px] font-medium text-ink-muted uppercase">Current</span>
                  </div>
                  <span className="italic py-1 text-xs text-ink-muted">*Representative trend, not an exact analytics export</span>
                </div>
              </div>

              {/* Architecture Description */}
              <div className="pl-0 md:pl-11 mt-6">
                <h3 className="text-ink font-display text-lg font-bold mb-3">The Architecture</h3>
                <p className="text-ink-2 text-sm leading-relaxed mb-4">
                  Achieved by migrating a monolithic codebase to a microservices architecture, utilizing an event-driven design to handle peak loads efficiently without manual intervention.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded border border-rule bg-paper-2 text-xs text-ink-2">Event-driven</span>
                  <span className="px-3 py-1 rounded border border-rule bg-paper-2 text-xs text-ink-2">Asynchronous</span>
                  <span className="px-3 py-1 rounded border border-rule bg-paper-2 text-xs text-ink-2">Scalable</span>
                  <span className="px-3 py-1 rounded border border-rule bg-paper-2 text-xs text-ink-2">Fault-tolerant</span>
                  <span className="px-3 py-1 rounded border border-rule bg-paper-2 text-xs text-ink-2">Observable</span>
                </div>
              </div>
            </section>

            {/* Reflection - Personal and honest */}
            <section className="py-12 mt-8">
              <div className="md:pl-11 border-l-2 p-6" style={{ borderColor: 'rgba(122, 46, 46, 0.35)', backgroundColor: '#ECE3D4' }}>
                <p className="text-[15px] text-ink-2 font-normal leading-relaxed italic">
                  "Building this platform reinforced an important lesson: real-time systems are product decisions, not just technical ones. Choosing event-driven architecture early introduced complexity, but it became the foundation that allowed the product to scale without slowing teams down. The ability to react to users instantly proved to be a long-term competitive advantage as usage grew."
                </p>
              </div>
            </section>

            {/* Footer Navigation */}
            <div className="flex justify-between items-center pt-12 border-t border-rule mt-12">
              <Link href="/" className="flex items-center gap-2 text-ink-2 hover:text-accent transition-colors">
                <span>←</span>
                Back to Work
              </Link>
              <Link href="/case-study/personalization-engine" className="flex items-center gap-2 text-ink-2 hover:text-accent transition-colors">
                Next Project
                <span>→</span>
              </Link>
            </div>
          </div>
        </ContentContainer>
      </main>
    </div>
  );
}
