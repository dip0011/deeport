'use client';

import { useEffect, useRef, useState } from 'react';

const stages = [
  { name: 'Discovery', depth: 100 },
  { name: 'Product', depth: 100 },
  { name: 'UI', depth: 82 },
  { name: 'Frontend', depth: 100 },
  { name: 'Backend', depth: 100 },
  { name: 'Architecture', depth: 100 },
  { name: 'Infrastructure', depth: 92 },
  { name: 'AI', depth: 92 },
  { name: 'Deployment', depth: 100 },
  { name: 'Monitoring', depth: 92 },
  { name: 'Iteration', depth: 100 },
];

export default function LifecycleOwnership() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full my-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-2xl font-bold text-black">What I own end to end</h3>
        <span className="text-xs mt-1" style={{ color: '#8A8F98' }}>
          Ownership across the whole product lifecycle
        </span>
      </div>

      <div ref={ref} className="max-w-[560px] mx-auto space-y-3.5">
        {stages.map((stage, i) => (
          <div key={stage.name} className="flex items-center gap-4">
            <span
              className="text-sm w-28 md:w-32 flex-shrink-0 text-right"
              style={{ color: '#5F6368' }}
            >
              {stage.name}
            </span>
            <div
              className="relative h-1.5 flex-1 rounded-full overflow-hidden"
              style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)' }}
            >
              <div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  width: visible ? `${stage.depth}%` : '0%',
                  backgroundColor: '#4F46E5',
                  transition: `width 900ms cubic-bezier(0.2, 0, 0, 1) ${i * 55}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p
        className="text-center text-sm mt-8 max-w-[560px] mx-auto"
        style={{ color: '#8A8F98', lineHeight: '1.6' }}
      >
        Give me the idea, the design, the backend, the frontend, the AI, the
        infra, and the deploy. I will own it.
      </p>
    </div>
  );
}
