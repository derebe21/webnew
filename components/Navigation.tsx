'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Technology', href: '/technology' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 bg-blue-900 shadow-[0_20px_50px_rgba(29,78,216,0.3)] border-b border-white/10`}
    >
      {/* Premium Nexus Overlay - Subtle */}


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 md:space-x-3 group"
          >
            <img
              src="https://res.cloudinary.com/dlc8bgysp/image/upload/e_make_transparent/v1767612094/logo_fn47rb.png"
              alt="ITSEC TECHNOLOGY Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-105 transition-transform brightness-0 invert"
            />
            <span className="font-black text-sm md:text-xl text-white tracking-widest whitespace-nowrap">
              ITSEC TECHNOLOGY
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isActive(link.href)
                  ? 'text-white font-bold'
                  : 'text-blue-100 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            ))}

          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Backdrop */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl animate-fade-down overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 opacity-90" />
          </div>

          <div className="relative z-10 px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-6 py-4 text-lg font-black uppercase tracking-widest rounded-xl transition-all ${isActive(link.href)
                  ? 'text-slate-950 bg-white shadow-xl translate-x-2'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
