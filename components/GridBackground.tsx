'use client';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 grid-background-3d w-full h-full"></div>
    </div>
  );
}

