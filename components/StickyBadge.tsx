'use client';

import { useState, useEffect } from 'react';

export default function StickyBadge() {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShow(scrollPercent > 10);
      // Fade out after 30% scroll
      if (scrollPercent > 80) {
        setOpacity(Math.max(0, 1 - (scrollPercent - 30) / 20));
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show || opacity < 0.1) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 transition-opacity duration-300"
      style={{ opacity }}
    >
      <a
        href="mailto:dipdhameliya2001@gmail.com"
        className="flex items-center gap-2 px-4 py-3 rounded-full font-medium text-sm transition-all duration-140 shadow-lg"
        style={{ 
          backgroundColor: '#4F46E5',
          color: 'white'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#4338CA';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#4F46E5';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <span 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: '#10B981' }}
        ></span>
        <span>Let's Talk</span>
      </a>
    </div>
  );
}
