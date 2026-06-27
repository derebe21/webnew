'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Shield, ArrowRight, MessageCircle, Globe, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/lib/services-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home',     href: '/' },
    { label: 'About',   href: '/about' },
    { label: 'Services',href: '/services' },
    { label: 'Solutions',href: '/solutions' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook,  href: 'https://facebook.com/ITSECTECHNOLOGY',        label: 'Facebook',    color: '#1877F2' },
    { icon: Twitter,   href: 'https://x.com/ITSECTECHNOLOGY',               label: 'X (Twitter)', color: '#1DA1F2' },
    { icon: Linkedin,  href: 'https://linkedin.com/company/itsectechnology', label: 'LinkedIn',    color: '#0A66C2' },
    { icon: Instagram, href: 'https://instagram.com/ITSECTECHNOLOGY',        label: 'Instagram',   color: '#E1306C' },
  ];

  const certBadges = [
    { label: 'ISO 27001', href: 'https://www.iso.org/isoiec-27001-information-security.html' },
    { label: 'NIST', href: 'https://www.nist.gov/cyberframework' },
    { label: 'GDPR', href: 'https://gdpr.eu/' },
    { label: 'CIS Controls', href: 'https://www.cisecurity.org/controls' },
    { label: 'Zero-Trust', href: 'https://www.ncsc.gov.uk/collection/zero-trust-architecture' }
  ];

  return (
    <footer className="relative bg-[#020617] text-slate-300 overflow-hidden">

      {/* ── BACKGROUND EFFECTS ─────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* World map bg image */}
        <img
          src="/images/footer-world-map.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.04]"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        {/* Tech grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]"><defs>
          <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)"/>
        </svg>

        {/* Ambient glows */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-blue-600/6 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[250px] rounded-full bg-cyan-600/5 blur-[100px]" />
      </div>

      {/* ── COMPLIANCE BANNER ─────────────────────── */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 text-cyan-500" />
              Certified &amp; Compliant
            </div>
            {certBadges.map((badge) => (
              <a key={badge.label}
                 href={badge.href}
                 target="_blank"
                 rel="noopener noreferrer"
                className="px-3 py-1.5 text-[10px] font-bold rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 tracking-wider uppercase hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-slate-800/80 transition-all cursor-pointer">
                {badge.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ──────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* ── BRAND COLUMN (4 cols) ─────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-cyan-500/25 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors" />
                <img
                  src="https://res.cloudinary.com/dlc8bgysp/image/upload/e_make_transparent/v1767612094/logo_fn47rb.png"
                  alt="ITSEC Technology Logo"
                  className="relative w-8 h-8 object-contain brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white tracking-widest leading-none"
                      style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                  ITSEC TECHNOLOGY
                </span>
                <span className="text-[9px] font-bold text-cyan-400/80 tracking-[0.3em] uppercase mt-0.5">
                  Secure Enterprise ICT
                </span>
              </div>
            </Link>

            {/* Brand description */}
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              ITSEC Technology PLC delivers world-class cybersecurity, digital infrastructure, and intelligent ICT solutions. Empowering governments, enterprises, and financial institutions to thrive securely in the digital age.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
                  style={{
                    '--brand-color': social.color,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = social.color + '70';
                    (e.currentTarget as HTMLElement).style.backgroundColor = social.color + '18';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '';
                    (e.currentTarget as HTMLElement).style.backgroundColor = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  <social.icon
                    className="w-4 h-4 transition-all duration-300 group-hover:scale-110"
                    style={{ color: social.color }}
                  />
                </a>
              ))}
            </div>

            {/* Live status chip */}
            <div className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-green-500/20 bg-green-950/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-green-400 opacity-70"/>
                <span className="relative rounded-full h-2 w-2 bg-green-400"/>
              </span>
              <span className="text-[10px] font-bold text-green-400 tracking-[0.15em] uppercase">
                Systems Operational · 99.999% Uptime
              </span>
            </div>
          </div>

          {/* ── SERVICES COLUMN (3 cols) ──────────── */}
          <div className="lg:col-span-3">
            <h3 className="font-black text-white mb-6 uppercase tracking-[0.15em] text-xs flex items-center gap-2">
              <span className="w-3 h-px bg-cyan-500 inline-block"/>
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {servicesData.slice(0, 10).map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-cyan-400 flex-shrink-0 transition-colors" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── QUICK LINKS COLUMN (2 cols) ──────── */}
          <div className="lg:col-span-2">
            <h3 className="font-black text-white mb-6 uppercase tracking-[0.15em] text-xs flex items-center gap-2">
              <span className="w-3 h-px bg-cyan-500 inline-block"/>
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-cyan-400 flex-shrink-0 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT COLUMN (3 cols) ───────────── */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h3 className="font-black text-white mb-1 uppercase tracking-[0.15em] text-xs flex items-center gap-2">
              <span className="w-3 h-px bg-cyan-500 inline-block"/>
              Contact Us
            </h3>

            {/* Location */}
            <a href="https://maps.google.com/?q=Kirkos+Church+Addis+Ababa+Ethiopia"
               target="_blank" rel="noopener noreferrer"
               className="group flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
              <span>Kirkos Church, Addis Ababa,<br/>Ethiopia</span>
            </a>

            {/* Emails */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                <Mail className="w-3 h-3" /> Email
              </div>
              {[
                'info@itsectechnology.com',
                'support@itsectechnology.com',
                'sales@itsectechnology.com',
              ].map((email) => (
                <a key={email} href={`mailto:${email}`}
                   className="text-xs text-slate-400 hover:text-cyan-400 transition-colors truncate">
                  {email}
                </a>
              ))}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                <Phone className="w-3 h-3" /> Phone
              </div>
              <a href="tel:+251911407439" className="text-xs text-slate-400 hover:text-white transition-colors">+251 911 407 439</a>
              <a href="tel:+251955190019" className="text-xs text-slate-400 hover:text-white transition-colors">+251 955 190 019</a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/251911407439"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-3 rounded-xl border border-green-500/25 bg-green-950/20 hover:bg-green-950/40 hover:border-green-400/40 transition-all duration-300 w-fit"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-green-400">WhatsApp Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-green-400 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* ── BOTTOM BAR ────────────────────────────── */}
        <div className="border-t border-white/5 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-xs text-slate-600 text-center md:text-left">
              © {currentYear}{' '}
              <span className="text-slate-400 font-semibold">ITSEC Technology PLC</span>
              . All rights reserved. Designed for enterprise security.
            </p>

            <div className="flex items-center gap-1.5 text-[10px] text-slate-600">
              <Globe className="w-3 h-3" />
              <span>Addis Ababa, Ethiopia</span>
              <span className="mx-2 w-px h-3 bg-slate-800"/>
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <span className="mx-2 w-px h-3 bg-slate-800"/>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
