import { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  /** 'reading' ~ comfortable prose measure; 'wide' for case-study layouts */
  size?: 'reading' | 'wide';
}

export default function ContentContainer({
  children,
  className = '',
  size = 'reading',
}: ContentContainerProps) {
  const max = size === 'wide' ? 'max-w-3xl' : 'max-w-[680px]';
  return (
    <div className={`${max} mx-auto px-6 md:px-8 ${className}`}>{children}</div>
  );
}
