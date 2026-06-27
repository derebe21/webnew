'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/services' },
  { label: 'Products',  href: '/products' },
  { label: 'Insights',  href: '/insights' },
  { label: 'Contact',   href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#020617]/95 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-[#020617]/80 to-transparent border-b border-white/5'
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

      {/* Navigation Scanlines Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
          backgroundSize: '100% 4px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* ── LOGO ──────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0 relative z-20">
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <div className="absolute inset-0 rounded-xl bg-cyan-400/5 group-hover:bg-cyan-400/20 transition-colors" />
              <img
                src="/images/secnet-logo-shield.png"
                alt="ITSEC Technology"
                className="relative w-6 h-6 md:w-7 md:h-7 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-sm md:text-base text-blue-400 tracking-[0.18em] whitespace-nowrap"
                    style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                ITSEC TECHNOLOGY
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ───────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  isActive(link.href)
                    ? 'text-white bg-blue-600/15 border border-blue-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-cyan-400" />
                )}
              </Link>
            ))}
          </div>

          {/* ── CTA BUTTON + MOBILE TOGGLE ─────────── */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors border border-white/10"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ─────────────────────────────── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#020617]/98 backdrop-blur-2xl border-t border-cyan-500/10 shadow-2xl animate-fade-down">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-600/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-bold tracking-wide transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-white bg-blue-600/20 border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.label}
                {isActive(link.href) && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
              </Link>
            ))}


          </div>
        </div>
      )}
    </nav>
  );
}
