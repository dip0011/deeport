import ContentContainer from '@/components/ContentContainer';

const steps = [
  { label: 'Idea' },
  { label: 'PRD' },
  { label: 'Architecture' },
  { label: 'Claude', accent: true },
  { label: 'Cursor', accent: true },
  { label: 'Code review' },
  { label: 'Testing' },
  { label: 'Deployment' },
  { label: 'Monitoring' },
  { label: 'Iteration' },
];

function FlowSteps() {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2">
          <span
            className="px-3 py-1.5 rounded-full text-xs font-medium border"
            style={{
              borderColor: step.accent
                ? 'rgba(79, 70, 229, 0.3)'
                : 'rgba(0, 0, 0, 0.08)',
              color: step.accent ? '#4F46E5' : '#5F6368',
              backgroundColor: step.accent
                ? 'rgba(79, 70, 229, 0.05)'
                : 'transparent',
            }}
          >
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <span className="text-xs" style={{ color: '#C4C7CC' }}>
              &rarr;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

interface AINativeFlowProps {
  showFraming?: boolean;
  bare?: boolean;
  className?: string;
}

export default function AINativeFlow({
  showFraming = true,
  bare = false,
  className = '',
}: AINativeFlowProps) {
  if (bare) {
    return <FlowSteps />;
  }

  return (
    <section className={`py-20 ${className}`}>
      <ContentContainer>
        <div
          className="max-w-[720px] space-y-10 border-t pt-20"
          style={{ borderColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          {showFraming && (
            <div className="space-y-4">
              <p
                className="text-xs uppercase tracking-wider"
                style={{ color: '#8A8F98', letterSpacing: '0.12em' }}
              >
                How I build now
              </p>
              <h2
                className="text-2xl md:text-[32px] font-semibold tracking-tight"
                style={{ color: '#0B0D12' }}
              >
                AI-native, from idea to production
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#5F6368', lineHeight: '1.6' }}
              >
                AI is not a bolt-on for me. It runs through the whole build.
                I use it to think through architecture, move faster on the
                code, and keep quality high with reviews and tests. The result
                is a small team shipping like a much bigger one.
              </p>
            </div>
          )}

          <FlowSteps />
        </div>
      </ContentContainer>
    </section>
  );
}
