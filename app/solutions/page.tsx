'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { ArrowRight, Bot, Cloud, ShieldCheck, Building2, DatabaseBackup, Network, RefreshCcw, Activity } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    title: 'AI & Automation',
    fullTitle: 'AI & Automation Solutions',
    description: 'Intelligent automation platforms, workflow automation, AI-driven monitoring systems, smart operational technologies, and intelligent data processing.',
    icon: Bot,
    color: '#1e3a6e',
    hoverColor: '#22d3ee',
  },
  {
    title: 'Cloud Infrastructure',
    fullTitle: 'Cloud Infrastructure Solutions',
    description: 'Private and hybrid cloud infrastructure, secure migration services, virtualization platforms, and high availability architectures.',
    icon: Cloud,
    color: '#1e4080',
    hoverColor: '#22d3ee',
  },
  {
    title: 'Cybersecurity & SOC',
    fullTitle: 'Cybersecurity & SOC Solutions',
    description: 'Security Operations Center (SOC), threat detection, endpoint protection, Identity & Access Management (IAM), and compliance governance.',
    icon: ShieldCheck,
    color: '#1a3570',
    hoverColor: '#22d3ee',
  },
  {
    title: 'Smart Building',
    fullTitle: 'Smart Building & Intelligent Systems',
    description: 'Smart building technologies, Building Management Systems (BMS), IoT integration, intelligent monitoring, and facility automation.',
    icon: Building2,
    color: '#1e3a6e',
    hoverColor: '#22d3ee',
  },
  {
    title: 'Data Protection',
    fullTitle: 'Data Protection & Backup Solutions',
    description: 'Backup and recovery solutions, disaster recovery infrastructure, data encryption, secure storage, and critical data protection platforms.',
    icon: DatabaseBackup,
    color: '#1e4080',
    hoverColor: '#22d3ee',
  },
  {
    title: 'Enterprise Networking',
    fullTitle: 'Enterprise Networking Solutions',
    description: 'Enterprise network infrastructure, LAN/WAN solutions, wireless networks, fiber optic infrastructure, and secure connectivity platforms.',
    icon: Network,
    color: '#1a3570',
    hoverColor: '#22d3ee',
  },
  {
    title: 'Digital Transformation',
    fullTitle: 'Digital Transformation Solutions',
    description: 'Enterprise modernization, intelligent systems integration, business process optimization, and scalable technology transformation strategies.',
    icon: RefreshCcw,
    color: '#1e3a6e',
    hoverColor: '#22d3ee',
  },
  {
    title: 'Business Continuity',
    fullTitle: 'Business Continuity Solutions',
    description: 'Operational resilience solutions, infrastructure redundancy, disaster recovery planning, and high availability continuity strategies.',
    icon: Activity,
    color: '#1e4080',
    hoverColor: '#22d3ee',
  },
];

const TOTAL = solutions.length;
const SLICE_ANGLE = 360 / TOTAL;
const OUTER_R = 280;
const INNER_R = 90;
const ICON_R = 195;
const TEXT_R = 230;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeSlice(cx: number, cy: number, outerR: number, innerR: number, startAngle: number, endAngle: number) {
  const o1 = polarToCartesian(cx, cy, outerR, startAngle);
  const o2 = polarToCartesian(cx, cy, outerR, endAngle);
  const i1 = polarToCartesian(cx, cy, innerR, endAngle);
  const i2 = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${o1.x} ${o1.y} A ${outerR} ${outerR} 0 ${largeArc} 1 ${o2.x} ${o2.y} L ${i1.x} ${i1.y} A ${innerR} ${innerR} 0 ${largeArc} 0 ${i2.x} ${i2.y} Z`;
}

export default function SolutionsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cx = 300;
  const cy = 300;

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
          <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-to-tr from-cyan-900/20 via-blue-900/10 to-transparent rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic mb-6">
            Intelligent Enterprise<br />
            <span className="text-cyan-400">Technology Solutions</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Delivering secure, scalable, and future-ready technology solutions that empower organizations through cybersecurity, cloud infrastructure, intelligent automation, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              Request Consultation
            </Link>
            <Link href="#circle" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl font-black uppercase tracking-widest transition-all border border-white/20">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Circle Section */}
      <section id="circle" className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Our <span className="text-cyan-400">Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Hover over each segment to explore our enterprise technology solutions</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

            {/* SVG Circle */}
            <div className="w-full max-w-[600px] shrink-0">
              <svg viewBox="0 0 600 600" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {solutions.map((_, i) => (
                    <radialGradient key={i} id={`grad${i}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={activeIndex === i ? '#0e7490' : '#1d4ed8'} stopOpacity="1" />
                      <stop offset="100%" stopColor={activeIndex === i ? '#155e75' : '#1e3a8a'} stopOpacity="1" />
                    </radialGradient>
                  ))}
                  <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </radialGradient>
                </defs>

                {/* Outer dark ring */}
                <circle cx={cx} cy={cy} r={OUTER_R + 8} fill="#0f172a" />

                {/* Slices */}
                {solutions.map((sol, i) => {
                  const startAngle = i * SLICE_ANGLE - 90 + 90;
                  const endAngle = startAngle + SLICE_ANGLE;
                  const midAngle = startAngle + SLICE_ANGLE / 2;
                  const iconPos = polarToCartesian(cx, cy, ICON_R - 30, midAngle);
                  const isActive = activeIndex === i;

                  return (
                    <g
                      key={i}
                      onMouseEnter={() => setActiveIndex(i)}
                      onMouseLeave={() => setActiveIndex(null)}
                      onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                      style={{ cursor: 'pointer' }}
                    >
                      <path
                        d={describeSlice(cx, cy, OUTER_R, INNER_R, startAngle, endAngle)}
                        fill={`url(#grad${i})`}
                        stroke="#0f172a"
                        strokeWidth="3"
                        style={{
                          transition: 'all 0.3s ease',
                          transform: isActive ? `translate(${(Math.cos(((midAngle - 90) * Math.PI) / 180) * 8)}px, ${(Math.sin(((midAngle - 90) * Math.PI) / 180) * 8)}px)` : 'translate(0,0)',
                          transformOrigin: `${cx}px ${cy}px`,
                          filter: isActive ? 'brightness(1.4)' : 'brightness(1)',
                        }}
                      />
                      {/* Small icon inside slice */}
                      <g transform={`translate(${iconPos.x - 16}, ${iconPos.y - 16})`} style={{ pointerEvents: 'none' }}>
                        <circle cx="16" cy="16" r="20" fill="rgba(255,255,255,0.12)" />
                      </g>
                      {/* Title text along arc */}
                      <text
                        x={polarToCartesian(cx, cy, TEXT_R - 60, midAngle).x}
                        y={polarToCartesian(cx, cy, TEXT_R - 60, midAngle).y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={isActive ? '#22d3ee' : 'white'}
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        style={{ pointerEvents: 'none', transition: 'fill 0.3s ease' }}
                      >
                        {sol.title.split(' ').slice(0, 2).join(' ')}
                      </text>
                      <text
                        x={polarToCartesian(cx, cy, TEXT_R - 60, midAngle).x}
                        y={polarToCartesian(cx, cy, TEXT_R - 60, midAngle).y + 14}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={isActive ? '#22d3ee' : '#93c5fd'}
                        fontSize="10"
                        fontFamily="sans-serif"
                        style={{ pointerEvents: 'none', transition: 'fill 0.3s ease' }}
                      >
                        {sol.title.split(' ').slice(2).join(' ')}
                      </text>
                    </g>
                  );
                })}

                {/* Center Circle */}
                <circle cx={cx} cy={cy} r={INNER_R - 4} fill="url(#centerGrad)" />
                <circle cx={cx} cy={cy} r={INNER_R - 14} fill="#1e293b" />
                {/* Shield icon in center */}
                <g transform={`translate(${cx - 24}, ${cy - 28})`}>
                  <path d="M24 2L4 10v12c0 11.1 8.6 21.5 20 24 11.4-2.5 20-12.9 20-24V10L24 2z" fill="#22d3ee" opacity="0.9" />
                  <path d="M24 10l-12 5v7c0 6.6 5.1 12.8 12 14.4 6.9-1.6 12-7.8 12-14.4v-7L24 10z" fill="#0e7490" />
                  <path d="M20 22l3 3 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
                <text x={cx} y={cy + 36} textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif" fontWeight="bold">ITSEC</text>
              </svg>
            </div>

            {/* Info Panel */}
            <div className="w-full lg:max-w-md">
              {activeIndex !== null ? (
                <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-blue-900/50 border border-cyan-500/30 flex items-center justify-center mb-6">
                    {(() => {
                      const Icon = solutions[activeIndex].icon;
                      return <Icon className="w-8 h-8 text-cyan-400 stroke-[1.5]" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                    {solutions[activeIndex].fullTitle}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {solutions[activeIndex].description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 text-sm"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-900/20 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-400 uppercase tracking-tight mb-3">
                    Select a Solution
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Hover over any segment of the circle to explore ITSEC Technology enterprise solutions.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {solutions.map((sol, i) => {
                      const Icon = sol.icon;
                      return (
                        <button
                          key={i}
                          onMouseEnter={() => setActiveIndex(i)}
                          onMouseLeave={() => setActiveIndex(null)}
                          onClick={() => setActiveIndex(i)}
                          className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/30 transition-all text-left group"
                        >
                          <Icon className="w-4 h-4 text-cyan-400 shrink-0 stroke-[1.5]" />
                          <span className="text-xs text-slate-400 group-hover:text-white transition-colors font-medium">{sol.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-6">
            Ready to Transform Your<br />
            <span className="text-cyan-400">Enterprise Infrastructure?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
            Contact ITSEC Technology for secure, intelligent, and scalable enterprise technology solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl">
              Contact Us
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-xl font-black uppercase tracking-widest transition-all border-2 border-white/20">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
