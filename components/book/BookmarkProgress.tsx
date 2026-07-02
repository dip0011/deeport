'use client';

import { useEffect, useState } from 'react';

/**
 * Reading progress. On large screens it is a bookmark ribbon that hangs
 * in the right page margin. On mobile/tablet (where the page fills the
 * viewport and there is no margin) it becomes a thin top progress line,
 * so it never overlaps the text.
 */
export default function BookmarkProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(winHeight > 0 ? (scrollPx / winHeight) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      {/* Mobile / tablet: thin top progress line */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Desktop: bookmark ribbon in the right page margin */}
      <div
        className="hidden lg:block fixed top-0 right-8 xl:right-12 z-40 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-2.5 bg-accent shadow-[0_3px_8px_rgba(30,27,22,0.22)] transition-[height] duration-150 ease-out"
          style={{ height: `calc(4rem + ${progress * 0.4}vh)` }}
        >
          <div
            className="w-full bg-accent"
            style={{
              height: '11px',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 55%, 0 100%)',
            }}
          />
        </div>
      </div>
    </>
  );
}
