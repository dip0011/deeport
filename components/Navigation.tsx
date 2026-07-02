'use client';

import Link from 'next/link';

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-[2px]" style={{ backgroundColor: 'color-mix(in srgb, var(--color-paper) 82%, transparent)' }}>
      <div className="px-6 md:px-10">
        <div className="flex items-center justify-between py-3.5 border-b border-rule">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full border border-accent text-accent font-display text-[11px] font-semibold"
              aria-hidden="true"
            >
              DD
            </span>
            <span className="hidden sm:inline font-display text-[15px] text-ink group-hover:text-accent transition-colors">
              Dip Dhameliya
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="t-meta text-ink-2 hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
