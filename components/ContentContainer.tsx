import { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ContentContainer({ children, className = '' }: ContentContainerProps) {
  return (
    <div className={`max-w-3xl mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}

