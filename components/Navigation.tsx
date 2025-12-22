'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="top-0 z-50 w-full px-4">
      <div className="max-w-4xl mx-auto py-3">
        <div
          className="flex items-center justify-between rounded-full border backdrop-blur-md shadow-sm md:px-6 md:py-4 px-3 py-2"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderColor: 'rgba(0, 0, 0, 0.08)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          }}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm"
              style={{
                backgroundColor: '#0B0D12',
                color: '#FAFAFA',
                boxShadow:
                  'inset 0 0 0 1px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              D
            </div>
            <div className="hidden sm:flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className="font-semibold text-base tracking-tight"
                  style={{ color: '#0B0D12' }}
                >
                  Dip D.
                </span>
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  title="Available for founding engineer roles"
                  style={{ backgroundColor: '#22C55E' }}
                />
              </div>
              <span
                className="text-[12px]"
                style={{ color: '#8A8F98', fontWeight: 500 }}
              >
                Product Engineer
              </span>
            </div>
          </Link>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="mailto:dipdhameliya2001@gmail.com"
              className="px-3 py-1.5 rounded-full text-xs font-medium border"
              style={{
                borderColor: 'rgba(0,0,0,0.1)',
                color: '#0B0D12',
                backgroundColor: 'rgba(255,255,255,0.6)',
              }}
            >
              Contact
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={open ? 'true' : 'false'}
              onClick={() => setOpen((v) => !v)}
              className="h-8 w-8 rounded-full flex items-center justify-center border"
              style={{ borderColor: 'rgba(0,0,0,0.1)' }}
            >
              <div className="flex flex-col items-center justify-center gap-[3px]">
                <span className="block w-4 h-[1px]" style={{ backgroundColor: '#0B0D12' }} />
                <span className="block w-4 h-[1px]" style={{ backgroundColor: '#0B0D12' }} />
                <span className="block w-4 h-[1px]" style={{ backgroundColor: '#0B0D12' }} />
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              style={{}}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0B0D12')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = '')
              }
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              style={{}}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0B0D12')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = '')
              }
            >
              About
            </Link>
            <a
              href="mailto:dipdhameliya2001@gmail.com"
              className="text-sm font-medium"
              style={{ color: '#5F6368', letterSpacing: '0.02em', fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0B0D12')}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {open && (
          <div
            className="md:hidden mt-2 rounded-2xl p-4 border backdrop-blur-md shadow-sm"
            style={{
              backgroundColor: 'rgba(250,250,250,0.8)',
              borderColor: 'rgba(0,0,0,0.08)',
            }}
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium"
                style={{ color: '#0B0D12' }}
                onClick={() => setOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium"
                style={{ color: '#0B0D12' }}
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
