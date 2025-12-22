'use client';

import Link from 'next/link';
import GridBackground from '@/components/GridBackground';
import Navigation from '@/components/Navigation';
import ContentContainer from '@/components/ContentContainer';
import ScrollProgress from '@/components/ScrollProgress';
import StickyBadge from '@/components/StickyBadge';

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <ScrollProgress />
      <GridBackground />
      <Navigation />
      <StickyBadge />
      
      <main className="relative z-10">
        {/* Hero - Premium Feel */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <ContentContainer>
            <div className="max-w-[640px] space-y-6">
              {/* Availability Badge */}
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                style={{ 
                  backgroundColor: 'rgba(79, 70, 229, 0.08)',
                  color: '#4F46E5'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#4F46E5' }}></span>
                Available for founding engineer roles
              </div>
              
              <h1 
                className="text-4xl md:text-[52px] font-semibold leading-[1.1]"
                style={{ 
                  letterSpacing: '-0.02em',
                  color: '#0B0D12'
                }}
              >
                Most teams don't fail because of code.
          </h1>
              
              <p 
                className="text-lg md:text-xl leading-relaxed max-w-[600px]"
                style={{ 
                  color: '#5F6368',
                  lineHeight: '1.6'
                }}
              >
                They fail because the wrong product gets shipped.
                <br />
                I help early teams fix and build systems that last.
              </p>
              
              <div className="pt-2">
                <a 
                  href="#tension"
                  className="inline-flex items-center gap-2 text-sm transition-colors duration-140"
                  style={{ color: '#5F6368' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0B0D12'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5F6368'}
                >
                  See how
                  <span className="text-xs">↓</span>
                </a>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Tension Section - Quote/Insight Style */}
        <section id="tension" className="pb-24">
          <ContentContainer>
            <div className="max-w-[640px] space-y-4">
              <p 
                className="text-xs uppercase tracking-wider"
                style={{ color: '#8A8F98' }}
              >
                Here's the pattern I keep seeing
              </p>
              
              <div 
                className="space-y-3 pl-4 border-l-2"
                style={{ 
                  borderColor: 'rgba(79, 70, 229, 0.2)',
                  fontSize: '17px',
                  lineHeight: '1.6',
                  color: '#5F6368'
                }}
              >
                <p>Early teams move fast.</p>
                <p>They ship features.</p>
                <p>They write a lot of code.</p>
                <p className="pt-2">But decisions get deferred, systems grow fragile, and the product drifts away from real user problems.</p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Your Role - Position as the Fix */}
        <section>
          <ContentContainer>
            <div className="max-w-[640px] py-20 space-y-4 border-t"  style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}>
              <h2 
                className="text-2xl md:text-[32px] font-semibold tracking-tight"
                style={{ color: '#0B0D12' }}
              >
                This is where I step in
              </h2>
              
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#5F6368', lineHeight: '1.6' }}
              >
                I work as a product-focused founding engineer.
                That means I don't just implement tickets, I help decide what should exist, what shouldn't, and how it needs to scale before it hurts.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Proof - Case Studies as Chapters */}
        <section className="py-20">
          <ContentContainer>
            <div className="max-w-[720px] space-y-16">
              <div>
                <p 
                  className="text-xs uppercase tracking-wider mb-2"
                  style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
                >
                  What this looks like in the real world
                </p>
              </div>

              {/* Case Study 1 - Expanded, Narrative */}
              <div className="space-y-6">
                <div>
                  <h3 
                    className="text-xl md:text-[22px] font-semibold mb-2"
                    style={{ color: '#0B0D12' }}
                  >
                    Full-Stack Customer Engagement Platform
                  </h3>
                  <p 
                    className="text-sm italic"
                    style={{ color: '#8A8F98' }}
                  >
                    From fragmented workflows to a unified, real-time engagement system.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider mb-3"
                      style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
                    >
                      The problem
                    </p>
                    <ul className="space-y-2.5 text-sm leading-relaxed" style={{ color: '#5F6368', lineHeight: '1.6' }}>
                      <li className="flex items-start gap-2.5">
                        <span style={{ color: '#8A8F98'}}>•</span>
                        <span>Teams couldn't personalize in real time without manual ops</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span style={{ color: '#8A8F98'}}>•</span>
                        <span>Batch systems caused delays and brittle workflows</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span style={{ color: '#8A8F98'}}>•</span>
                        <span>The product couldn't scale with user behavior</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider mb-3"
                      style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
                    >
                      What I built
                    </p>
                    <ul className="space-y-2.5 text-sm leading-relaxed" style={{ color: '#5F6368', lineHeight: '1.6' }}>
                      <li className="flex items-start gap-2.5">
                        <span style={{ color: '#8A8F98'}}>•</span>
                        <span>Event-driven engagement platform handling real-time user activity</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span style={{ color: '#8A8F98'}}>•</span>
                        <span>Automated workflows replacing manual intervention</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span style={{ color: '#8A8F98'}}>•</span>
                        <span>Systems designed for throughput, latency, and reliability</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider mb-3"
                      style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
                    >
                      Outcome
                    </p>
                    <div 
                      className="inline-block px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'rgba(79, 70, 229, 0.05)' }}
                    >
                      <p className="text-sm" style={{ color: '#5F6368' }}>
                        ~80% workflow automation
                        <span className="mx-2" style={{ color: '#8A8F98' }}>•</span>
                        Meaningful lift in engagement efficiency
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    href="/case-study/techmonk"
                    className="inline-flex items-center gap-2 text-sm transition-all duration-140 group"
                    style={{ color: '#4F46E5' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#4338CA';
                      const arrow = e.currentTarget.querySelector('span');
                      if (arrow) arrow.style.transform = 'translateX(6px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4F46E5';
                      const arrow = e.currentTarget.querySelector('span');
                      if (arrow) arrow.style.transform = 'translateX(0)';
                    }}
                  >
                    Read the full breakdown
                    <span className="text-xs transition-transform duration-140">→</span>
                  </Link>
                </div>
              </div>

              {/* Case Study 2 - Collapsed Teaser */}
              <div className="pt-12 border-t" style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}>
                <Link 
                  href="/case-study/personalization-engine"
                  className="flex items-start justify-between gap-4 p-4 -m-4 rounded-lg transition-all duration-140 group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.02)';
                    const arrow = e.currentTarget.querySelector('span');
                    if (arrow) arrow.style.transform = 'translateX(6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    const arrow = e.currentTarget.querySelector('span');
                    if (arrow) arrow.style.transform = 'translateX(0)';
                  }}
                >
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-semibold mb-1"
                      style={{ color: '#0B0D12' }}
                    >
                      One-to-One Personalization Engine
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: '#8A8F98' }}
                    >
                      Real-time recommendations powered by behavioral data, not batch jobs.
                    </p>
                  </div>
                  <span 
                    className="text-sm transition-transform duration-140"
                    style={{ color: '#8A8F98' }}
                  >
                    Open →
                  </span>
                </Link>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* How I Make Decisions */}
        <section>
          <ContentContainer>
            <div className="max-w-[640px] space-y-12 py-20 border-t"  style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}>
              <div>
                <h2 
                  className="text-2xl md:text-[32px] font-semibold tracking-tight"
                  style={{ color: '#0B0D12' }}
                >
                  How I make decisions
                </h2>
              </div>

              <div className="space-y-10">
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <span 
                      className="text-base font-normal"
                      style={{ color: '#8A8F98' }}
                    >
                      01
                    </span>
                    <div>
                      <h3 
                        className="text-base font-semibold mb-2"
                        style={{ color: '#0B0D12' }}
                      >
                        I own outcomes
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#5F6368', lineHeight: '1.6' }}
                      >
                        If a feature doesn't move the product forward, it doesn't ship.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <span 
                      className="text-base font-normal"
                      style={{ color: '#8A8F98' }}
                    >
                      02
                    </span>
                    <div>
                      <h3 
                        className="text-base font-semibold mb-2"
                        style={{ color: '#0B0D12' }}
                      >
                        Simple systems age better
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#5F6368', lineHeight: '1.6' }}
                      >
                        I design for year-3, not demo day.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <span 
                      className="text-base font-normal"
                      style={{ color: '#8A8F98' }}
                    >
                      03
                    </span>
                    <div>
                      <h3 
                        className="text-base font-semibold mb-2"
                        style={{ color: '#0B0D12' }}
                      >
                        Reliability is a feature
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: '#5F6368', lineHeight: '1.6' }}
                      >
                        If it breaks under real users, it's unfinished.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Trust Section - Quiet Authority */}
        <section className="py-20">
          <ContentContainer>
            <div className="max-w-[720px] space-y-8">
              <div>
                <h2 
                  className="text-2xl md:text-[32px] font-semibold tracking-tight"
                  style={{ color: '#0B0D12' }}
                >
                  What teams trust me with in production
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12 pt-4">
                <div className="space-y-2">
                  <h3 
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
                  >
                    User-facing decisions
                  </h3>
                  <p 
                    className="text-xs leading-relaxed"
                    style={{ color: '#5F6368', lineHeight: '1.5' }}
                  >
                    Performance, DX, and what users actually experience
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
                  >
                    System behavior at scale
                  </h3>
                  <p 
                    className="text-xs leading-relaxed"
                    style={{ color: '#5F6368', lineHeight: '1.5' }}
                  >
                    APIs, data modeling, and how systems respond under load
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
                  >
                    Production reliability
                  </h3>
                  <p 
                    className="text-xs leading-relaxed"
                    style={{ color: '#5F6368', lineHeight: '1.5' }}
                  >
                    Deployments, observability, and keeping things running
          </p>
        </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        <footer className="border-t" style={{ borderColor: 'rgba(0,0,0,0.06)', backgroundColor: '#F4F5F7' }}>
          <ContentContainer>
            <div className="py-16 md:py-20">
              <div className="flex flex-wrap gap-12 items-center justify-between">
                <div className="text-left">
                  <div className="space-y-1">
                    <div className="text-[16px] font-semibold" style={{ color: '#0B0D12' }}>Dip Dhameliya.</div>
                    <div className="text-[13px]" style={{ color: '#6B7280' }}>Product-focused Founding Engineer</div>
                  </div>
                  <p className="mt-4 text-[14px]" style={{ color: '#5F6368', lineHeight: '1.6', maxWidth: 300 }}>
                    I help early teams ship the right product, &nbsp; not just more code.
                  </p>
                </div>
                <div className="text-left">
                  <div className="flex flex-col gap-2">
                    {/* <Link href="/" className="nav-link" style={{ color: '#374151' }}>Work</Link> */}
                    <Link href="/about" className="nav-link" style={{ color: '#374151' }}>About</Link>
                    <a href="mailto:dipdhameliya2001@gmail.com" className="nav-link" style={{ color: '#374151' }}>Contact</a>
                  </div>
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Book+a+15-min+intro+with+Dip&details=Please+add+your+preferred+time.+Invitee:+dipdhameliya2001%40gmail.com&add=dipdhameliya2001%40gmail.com&location=Google+Meet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-medium"
                    style={{ color: '#4F46E5' }}
                  >
                    Book a 15-min intro →
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <div className="text-xs" style={{ color: '#8A8F98' }}>© 2025 · Built with 💖 by Dip</div>
              </div>
            </div>
          </ContentContainer>
        </footer>
      </main>
    </div>
  );
}
