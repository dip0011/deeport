import GridBackground from '@/components/GridBackground';
import Navigation from '@/components/Navigation';
import ContentContainer from '@/components/ContentContainer';

export default function About() {
  return (
    <div className="relative min-h-screen bg-white">
      <GridBackground />
      <Navigation />
      
      <main className="relative z-10">
        <ContentContainer>
          <div className="pt-20 pb-20 flex flex-col items-center">
            <div className="relative mb-10">
              <div
                className="relative w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-full"
                style={{
                  boxShadow:
                    '0 12px 30px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(0,0,0,0.06)',
                }}
              >
                <div className="w-full h-full bg-black/10 flex items-center justify-center text-4xl font-bold text-black/20">
                  D
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-black tracking-tighter text-5xl md:text-7xl font-bold leading-tight px-4 text-center pb-6">
              I&rsquo;m <span className="text-black">Dip</span>.
            </h1>

            {/* Subheadline */}
            <div className="flex items-center gap-2 mb-8 px-4 text-center">
              <span
                className="h-[2px] w-10 rounded-full"
                style={{ backgroundColor: 'rgba(79, 70, 229, 0.2)' }}
              ></span>
              <h2 className="text-black/80 text-lg md:text-xl font-medium tracking-wide">
                Founding-level Full Stack & Product Engineer
              </h2>
              <span
                className="h-[2px] w-10 rounded-full"
                style={{ backgroundColor: 'rgba(79, 70, 229, 0.2)' }}
              ></span>
            </div>

            <div className="w-full mb-10 px-4">
              <p
                className="text-black/90 text-lg md:text-xl font-normal leading-relaxed max-w-[720px] mx-auto text-center"
              >
                I enjoy owning problems from{' '}
                <span
                  className="font-medium"
                  style={{
                    borderBottom: '2px solid rgba(79,70,229,0.5)',
                    color: '#0B0D12',
                  }}
                >
                  idea to production
                </span>
                . I&rsquo;m comfortable operating under ambiguity and care deeply about building
                systems that last.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-4 mb-12">
              <div className="flex items-center gap-3">
                <span className="text-xl text-black/70">⚒️</span>
                <span className="text-sm font-medium text-black uppercase tracking-widest">System</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-black/70">💡</span>
                <span className="text-sm font-medium text-black uppercase tracking-widest">Decisions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-black/70">🎢</span>
                <span className="text-sm font-medium text-black uppercase tracking-widest">Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-black/70">🗄️</span>
                <span className="text-sm font-medium text-black uppercase tracking-widest">Scale</span>
              </div>
            </div>

            <div className="w-full my-12 px-4">
              <div className="flex flex-col items-center mb-2">
                <h3 className="text-2xl font-bold text-black">How I Work</h3>
                <span className="text-xs mt-1" style={{ color: '#8A8F98' }}>
                  Principles that guide how I build products
                </span>
              </div>
              <div className="max-w-[720px] mx-auto">
                <div className="space-y-4">
                  <div className="pt-4">
                    <div className="flex items-start gap-4">
                      <span className="text-base font-medium" style={{ color: '#8A8F98', paddingTop: '0.1em' }}>
                        01
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: '#0B0D12' }}>
                          I stay close to users
                        </h3>
                        <p className="text-sm mt-1" style={{ color: '#5F6368' }}>
                          Feedback loops are my fuel.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}></div>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-start gap-4">
                      <span className="text-base font-medium" style={{ color: '#8A8F98', paddingTop: '0.1em'  }}>
                        02
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: '#0B0D12' }}>
                          I ship early, iterate fast
                        </h3>
                        <p className="text-sm mt-1" style={{ color: '#5F6368' }}>
                          Perfect is the enemy of shipped.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}></div>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-start gap-4">
                      <span className="text-base font-medium" style={{ color: '#8A8F98', paddingTop: '0.1em'  }}>
                        03
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: '#0B0D12' }}>
                          I make trade-offs explicit
                        </h3>
                        <p className="text-sm mt-1" style={{ color: '#5F6368' }}>
                          Tech debt vs. speed is a choice.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}></div>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-start gap-4">
                      <span className="text-base font-medium" style={{ color: '#8A8F98', paddingTop: '0.1em'  }}>
                        04
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: '#0B0D12' }}>
                          I own production issues
                        </h3>
                        <p className="text-sm mt-1" style={{ color: '#5F6368' }}>
                          You won&rsquo;t have to wake me up.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}></div>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-start gap-4">
                      <span className="text-base font-medium" style={{ color: '#8A8F98', paddingTop: '0.1em'  }}>
                        05
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: '#0B0D12' }}>
                          I care about business impact
                        </h3>
                        <p className="text-sm mt-1" style={{ color: '#5F6368' }}>
                          Code is a means to an end.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center px-4 py-6 w-full">
              <span className="text-xs mb-2" style={{ color: '#8A8F98' }}>
                If this resonates, let&rsquo;s talk.
              </span>
              <a
                href="mailto:dipdhameliya2001@gmail.com"
                className="group flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#FAFAFA',
                  boxShadow: '0 8px 24px rgba(79,70,229,0.25)',
                }}
              >
                <span className="text-sm font-bold leading-normal tracking-wide mr-2">Get in touch</span>
                <span className="text-base transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </ContentContainer>
      </main>
    </div>
  );
}

