'use client';

import Link from 'next/link';
import GridBackground from '@/components/GridBackground';
import Navigation from '@/components/Navigation';
import ContentContainer from '@/components/ContentContainer';
import CaseStudyScrollMarker from '@/components/CaseStudyScrollMarker';
import { useState } from 'react';

export default function PersonalizationEngineCaseStudy() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-white">
      <GridBackground />
      <Navigation />
      <CaseStudyScrollMarker />
      
      <main className="relative z-10">
        <ContentContainer>
          <div className="pt-12 pb-20 flex flex-col gap-16">
            {/* Hero Section */}
            <section className="mt-12 md:mt-20 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-[#8A8F98] text-xs font-medium uppercase tracking-wider">
                <span className="text-sm mb-1">📁</span>
                Case Study
              </div>
              <h1 className="text-[38px] md:text-[56px] font-semibold leading-[1.15] tracking-tight text-[#0B0D12]">
                One-to-One<br />
                Personalization Engine
              </h1>
              <p className="text-lg md:text-xl text-[#5F6368] font-normal leading-relaxed max-w-[600px]" style={{ opacity: 0.7 }}>
                A real-time personalization engine designed to deliver one-to-one customer experiences by reacting instantly to behavioral signals instead of relying on static segmentation.
              </p>
              
              {/* Meta Data - Whisper context */}
              <div className="flex flex-wrap gap-3 pt-6 mt-2">
                <div className="bg-transparent border border-[rgba(0,0,0,0.06)] px-3 py-1.5 rounded-full text-xs text-[#8A8F98] flex items-center gap-1.5">
                  <span className="text-xs">👤</span>
                  Lead Engineer
                </div>
                <div className="bg-transparent border border-[rgba(0,0,0,0.06)] px-3 py-1.5 rounded-full text-xs text-[#8A8F98] flex items-center gap-1.5">
                  <span className="text-xs">⏱️</span>
                  12 Months
                </div>
                <div className="bg-transparent border border-[rgba(0,0,0,0.06)] px-3 py-1.5 rounded-full text-xs text-[#8A8F98] flex items-center gap-1.5">
                  <span className="text-xs">⚙️</span>
                  Next, Node, MongoDB, Shopify, AWS
                </div>
              </div>
              
              {/* Hero Image Placeholder */}
              <div className="mt-8 w-full aspect-video rounded-xl bg-black/5 border border-black/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/5 opacity-80 z-10"></div>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="bg-black/10 backdrop-blur-sm border border-black/10 p-4 rounded-full">
                    <span className="text-xl italic">Personalization Engine</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Context & Problem - Pause moment */}
            <section className="py-8">
              <div className="border-l-2 pl-6" style={{ borderColor: 'rgba(79, 70, 229, 0.2)' }}>
                <p className="text-[17px] text-[#0B0D12] font-normal leading-relaxed mb-4">
                  The existing personalization system relied on batch processing and predefined segments. Users often received generic campaigns hours after relevant actions, reducing engagement and impact.
                </p>
                <div className="text-base text-[#5F6368] font-normal leading-relaxed mb-4">
                  Key challenges included:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Delayed personalization caused by batch workflows</li>
                    <li>Static segmentation that failed to capture real intent</li>
                    <li>Difficulty experimenting quickly without affecting system stability</li>
                  </ul>
                </div>
                <p className="text-base text-[#5F6368] font-normal leading-relaxed">
                  To drive meaningful engagement, the product needed to evaluate user behavior as it happened and trigger personalized actions instantly.
                </p>
              </div>
            </section>

            {/* My Role - Scannable checklist */}
            <section className="py-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px bg-black/10 w-8"></div>
                <h2 className="text-[#0B0D12] text-2xl font-semibold leading-tight tracking-tight">My Role</h2>
              </div>
              <div className="pl-0 md:pl-11 text-[#5F6368] text-base font-normal" style={{ lineHeight: '1.7' }}>
                <p className="mb-8">
                  As the lead backend engineer with strong product ownership, I designed and implemented the personalization engine from the ground up.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#8A8F98] mt-0.2">—</span>
                    <span>Defining behavior-based personalization logic with product stakeholders</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#8A8F98] mt-0.2">—</span>
                    <span>Designing a scalable, event-first data model</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#8A8F98] mt-0.2">—</span>
                    <span>Building high-throughput ingestion and processing pipelines</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#8A8F98] mt-0.2">—</span>
                    <span>Ensuring data consistency, reliability, and zero-downtime deployments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#8A8F98] mt-0.2">—</span>
                    <span>Supporting rapid experimentation without compromising production stability</span>
                  </div>
                </div>
                <p className="mt-8">
                  The focus was always on enabling product teams to move faster while maintaining trust in the system.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.05)' }}></div>
            </section>

            {/* Key Decisions - Thinking, not features */}
            <section className="py-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px bg-black/10 w-8"></div>
                <h2 className="text-[#0B0D12] text-2xl font-semibold leading-tight tracking-tight">Strategic Decisions</h2>
              </div>
              <div className="pl-0 md:pl-11 flex flex-col gap-10">
                {/* Decision 1: Behavior-based Triggers */}
                <div>
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium mb-3">DECISION 01</div>
                    <h2 className="text-xl font-semibold text-[#0B0D12] mb-3">Behavior-Based Triggers over Time-Based Jobs</h2>
                    <p className="text-[15px] text-[#5F6368] leading-relaxed">
                      Replaced time-based batch jobs with real-time event listeners. This shift allowed the system to react instantly to user actions, such as abandoning a cart or viewing a pricing page, rather than waiting for a nightly sync.
                    </p>
                  </div>
                      
                      {/* Architecture Diagram - Reduced size, reduced opacity */}
                      <div className="w-full h-28 bg-transparent mb-8 flex items-center justify-center relative overflow-hidden" style={{ opacity: 0.5 }}>
                        <div className="absolute inset-0 flex items-center justify-center gap-6">
                          <div className="w-10 h-10 rounded border border-black/30 flex items-center justify-center">
                            <span className="block w-2 h-2 bg-black rounded-full"></span>
                          </div>
                          <div className="h-px w-6 bg-gradient-to-r from-transparent via-black to-transparent"></div>
                          <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                            <span className="block w-3 h-3 bg-black rounded-full"></span>
                          </div>
                          <div className="h-px w-6 bg-gradient-to-r from-transparent via-black to-transparent"></div>
                          <div className="w-10 h-10 rounded border border-black/30 flex items-center justify-center">
                            <span className="block w-2 h-2 bg-black rounded-full"></span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Typographic clarity */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">WHY</div>
                          <p className="text-[15px] text-[#5F6368] leading-relaxed">
                            Batch processing introduced an unacceptable lag between user intent and system reaction. Real-time triggers closed this gap, enabling high-context interventions at the exact moment of relevance.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">TRADE-OFF</div>
                          <p className="text-[15px] text-[#5F6368] leading-relaxed">
                            Required a shift to a more complex, always-on infrastructure compared to simpler cron jobs, increasing operational overhead.
                          </p>
                        </div>
                      </div>
                </div>

                {/* Decision 2: Event-first Data Model */}
                <div>
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium mb-3">DECISION 02</div>
                    <h2 className="text-xl font-semibold text-[#0B0D12] mb-3">Event-First Data Model</h2>
                    <p className="text-[15px] text-[#5F6368] leading-relaxed">
                      Designed the database schema around immutable events rather than mutable user state. Every interaction was stored as a discrete event, allowing us to reconstruct user state at any point in time.
                    </p>
                  </div>
                      
                      {/* Comparison Visual - Reduced opacity */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="bg-transparent border border-black/10 rounded p-3 flex flex-col items-center justify-center gap-2" style={{ opacity: 0.5 }}>
                          <span className="text-[10px] uppercase tracking-wider text-black/50 font-bold">State-based</span>
                          <div className="flex flex-col gap-1 py-2">
                            <div className="w-12 h-8 rounded border border-black/20 bg-black/5 flex items-center justify-center text-[8px] text-black/50">User</div>
                            <div className="text-[8px] text-black/40">Mutable</div>
                          </div>
                          <p className="text-[10px] text-center text-black/50">Traditional</p>
                        </div>
                        <div className="bg-transparent border border-black rounded p-3 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-2 h-2 bg-black rounded-bl"></div>
                          <span className="text-[10px] uppercase tracking-wider text-black font-bold">Event-based</span>
                          <div className="flex flex-col gap-1 py-2">
                            <div className="w-12 h-8 rounded border-2 border-black bg-white flex items-center justify-center text-[8px] text-black">Event</div>
                            <div className="text-[8px] text-black/40">Immutable</div>
                          </div>
                          <p className="text-[10px] text-center text-black/70">Our Approach</p>
                        </div>
                      </div>
                      
                      {/* Typographic clarity */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">WHY</div>
                          <p className="text-[15px] text-[#5F6368] leading-relaxed">
                            Mutable state is prone to race conditions and data loss. An event-first model provided a complete audit trail, simplified debugging, and allowed us to replay events to test new personalization logic.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">TRADE-OFF</div>
                          <p className="text-[15px] text-[#5F6368] leading-relaxed">
                            Storage costs increased significantly due to data volume. We mitigated this with aggressive data compaction policies and tiered storage strategies.
                          </p>
                        </div>
                      </div>
                </div>
              </div>
            </section>

            {/* Technical Overview */}
            <section className="py-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px bg-black/10 w-8"></div>
                <h2 className="text-[#0B0D12] text-2xl font-semibold leading-tight tracking-tight">Technical Overview</h2>
              </div>
              <div className="pl-0 md:pl-11">
                <ul className="space-y-3 text-[#5F6368] text-[15px] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
                    <span>A high-throughput ingestion layer designed to handle spikes in user activity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
                    <span>A real-time evaluation engine that processes events and applies personalization logic instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
                    <span>A data persistence layer optimized for fast reads, writes, and auditability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
                    <span>A delivery mechanism ensuring exactly-once execution for critical personalization workflows</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Impact Section - Turn metrics into relief */}
            <section className="py-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px bg-black/10 w-8"></div>
                <h2 className="text-[#0B0D12] text-2xl font-semibold leading-tight tracking-tight">Impact</h2>
              </div>
              
              {/* Stats Grid - Labels first, number second, explanation last */}
              <div className="pl-0 md:pl-11 grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">ENGAGEMENT</div>
                  <p className="text-[#0B0D12] text-4xl font-semibold tracking-tight">2.5x</p>
                  <p className="text-[#5F6368] text-sm font-normal">Higher engagement</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">TARGETING</div>
                  <p className="text-[#0B0D12] text-4xl font-semibold tracking-tight">40%</p>
                  <p className="text-[#5F6368] text-sm font-normal">Better targeting</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">AUTOMATION</div>
                  <p className="text-[#0B0D12] text-4xl font-semibold tracking-tight">~80%</p>
                  <p className="text-[#5F6368] text-sm font-normal">Manual work</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs uppercase tracking-wider text-[#8A8F98] font-medium">SPEED</div>
                  <p className="text-[#0B0D12] text-4xl font-semibold tracking-tight">10x</p>
                  <p className="text-[#5F6368] text-sm font-normal">Experiment speed</p>
                </div>
              </div>

              {/* Conversion Chart */}
              <div className="pl-0 md:pl-11">
                <div className="flex flex-col gap-4 rounded-xl border border-black/10 bg-black/5 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-black/50 text-xs font-bold uppercase tracking-widest mb-1">Performance</p>
                      <p className="text-black text-xl font-medium">Engagement Rate</p>
                    </div>
                    <div className="flex items-center gap-1 bg-black/10 px-2 py-1 rounded">
                      <span className="text-black text-xs font-bold">+150% YoY</span>
                    </div>
                  </div>
                  <div className="relative w-full h-[160px] mt-4">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                      <defs>
                        <linearGradient id="chartGradient2" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#000000" stopOpacity="0.1"></stop>
                          <stop offset="100%" stopColor="#000000" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line stroke="black" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="0" y2="0"></line>
                      <line stroke="black" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="50" y2="50"></line>
                      <line stroke="black" strokeDasharray="4 4" strokeOpacity="0.05" x1="0" x2="300" y1="100" y2="100"></line>
                      {/* Chart Area */}
                      <path d="M0 90 C 30 90, 40 70, 80 70 C 120 70, 140 40, 180 40 C 220 40, 240 20, 280 15 V 100 H 0 Z" fill="url(#chartGradient2)"></path>
                      {/* Chart Line */}
                      <path d="M0 90 C 30 90, 40 70, 80 70 C 120 70, 140 40, 180 40 C 220 40, 240 20, 280 15" fill="none" stroke="black" strokeLinecap="round" strokeWidth="2"></path>
                      {/* Data Points */}
                      <circle cx="80" cy="70" fill="white" r="3" stroke="black" strokeWidth="2"></circle>
                      <circle cx="180" cy="40" fill="white" r="3" stroke="black" strokeWidth="2"></circle>
                      <circle cx="280" cy="15" fill="black" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex justify-between mt-2 pt-4 border-t border-black/5">
                    <span className="text-[10px] font-medium text-black/30 uppercase">Q1 Start</span>
                    <span className="text-[10px] font-medium text-black/30 uppercase">Current</span>
                  </div>
                  <span className="italic py-1 text-xs text-black/30">*Representative trend, not an exact analytics export</span>
                </div>
              </div>

              {/* Architecture Description */}
              <div className="pl-0 md:pl-11 mt-6">
                <h3 className="text-black text-lg font-bold mb-3">The Architecture</h3>
                <p className="text-black/60 text-sm leading-relaxed mb-4">
                  Built a high-throughput event ingestion pipeline with exactly-once delivery semantics, combined with dynamic segmentation using hybrid static rules and ML-inference scores for real-time personalization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded border border-black/10 bg-black/5 text-xs text-black/70">Event Pipeline</span>
                  <span className="px-3 py-1 rounded border border-black/10 bg-black/5 text-xs text-black/70">Dynamic Segmentation</span>
                  <span className="px-3 py-1 rounded border border-black/10 bg-black/5 text-xs text-black/70">Real-time Evaluation</span>
                  <span className="px-3 py-1 rounded border border-black/10 bg-black/5 text-xs text-black/70">Campaign Delivery</span>
                </div>
              </div>
            </section>

            {/* Reflection - Personal and honest */}
            <section className="py-12 mt-8">
              <div className="md:pl-11 border-l-2 p-6" style={{ borderColor: 'rgba(79, 70, 229, 0.2)', backgroundColor: '#F3F4F6' }}>
                <p className="text-[15px] text-[#5F6368] font-normal leading-relaxed italic">
                  "Building this system reinforced that data consistency is as important as speed. While real-time capabilities were the headline feature, the strict schema validation and event immutability were what made the system maintainable at scale. It taught me that in data-intensive systems, the writer (producer) must accept more complexity to make the reader's (consumer's) life easier."
                </p>
              </div>
            </section>

            {/* Footer Navigation */}
            <div className="flex justify-between items-center pt-12 border-t border-black/10 mt-12">
              <Link href="/case-study/techmonk" className="flex items-center gap-2 text-black/60 hover:text-black transition-colors">
                <span>←</span>
                Previous Project
              </Link>
              <Link href="/" className="flex items-center gap-2 text-black/60 hover:text-black transition-colors">
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
