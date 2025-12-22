'use client';

import { useEffect, useState } from 'react';

export default function CaseStudyScrollMarker() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-0.5 bg-[rgba(0,0,0,0.05)] z-40">
      <div 
        className="absolute top-0 right-0 w-full bg-[#4F46E5] transition-all duration-140 ease-out"
        style={{ height: `${scrollProgress}%` }}
      />
      <div 
        className="absolute right-0 w-2 h-2 rounded-full bg-[#4F46E5] transition-all duration-140 ease-out -translate-y-1 translate-x-1/2"
        style={{ top: `${scrollProgress}%` }}
      />
    </div>
  );
}


