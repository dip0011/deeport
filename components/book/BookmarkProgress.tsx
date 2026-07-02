'use client';

import { useEffect, useState } from 'react';

/**
 * A thin oxblood ribbon pinned to the top-right, like a bookmark
 * sliding down the page as you read.
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
    <div
      className="fixed top-0 right-5 md:right-8 z-40 pointer-events-none"
      aria-hidden="true"
    >
      {/* ribbon */}
      <div
        className="w-2 md:w-2.5 bg-accent shadow-[0_2px_6px_rgba(30,27,22,0.2)] transition-[height] duration-150 ease-out"
        style={{ height: `calc(3.5rem + ${progress * 0.42}vh)` }}
      >
        {/* notched tail */}
        <div
          className="w-full bg-accent"
          style={{
            height: '10px',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 60%, 0 100%)',
          }}
        />
      </div>
    </div>
  );
}
