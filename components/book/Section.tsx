import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

/**
 * The one sanctioned section wrapper. Provides the canonical horizontal
 * page padding (the reading measure inside the framed column) and the
 * canonical vertical rhythm. Do not set bespoke section padding elsewhere.
 * See DESIGN_GUIDE.md.
 */
export default function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-6 md:px-10 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
