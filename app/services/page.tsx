'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, ShieldCheck, Network, Server, Cloud, Phone, Camera, Building2, Lightbulb, Zap, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    title: 'Cybersecurity Services',
    description: 'Professional-grade security operations and policy enforcement to safeguard your digital assets.',
    icon: ShieldCheck,
    slug: 'cybersecurity',
  },
  {
    title: 'Network Infrastructure Services',
    description: 'End-to-end ICT infrastructure design and deployment for maximum efficiency, security, and reliability.',
    icon: Network,
    slug: 'digital-infrastructure',
  },
  {
    title: 'Data Center Services',
    description: 'Installation and configuration of high-availability data center facilities and virtualization platforms.',
    icon: Server,
    slug: 'data-center-solutions',
  },
  {
    title: 'Cloud & Virtualization Services',
    description: 'Cloud-ready platforms and virtualization solutions for scalability and resource optimization.',
    icon: Cloud,
    slug: 'cloud-virtualization',
  },
  {
    title: 'Unified Communications Services',
    description: 'Integrated voice, video, messaging, and collaboration tools for seamless connectivity.',
    icon: Phone,
    slug: 'unified-communications',
  },
  {
    title: 'Integrated Security System Services',
    description: 'Physical and digital security integration for comprehensive site and facility protection.',
    icon: Camera,
    slug: 'integrated-security',
  },
  {
    title: 'Smart Systems & Automation Services',
    description: 'Intelligent building automation, IoT integration, and smart environment solutions.',
    icon: Building2,
    slug: 'smart-systems',
  },
  {
    title: 'Technology Advisory & Consultancy Services',
    description: 'Strategic ICT consultancy to align technology investments with your business goals.',
    icon: Lightbulb,
    slug: 'technology-advisory',
  },
  {
    title: 'Critical Power & Electrical Services',
    description: 'UPS, generator systems, and precision electrical engineering for critical facilities.',
    icon: Zap,
    slug: 'engineering-critical',
  },
  {
    title: 'Support & Maintenance Services',
    description: 'Ongoing technical support, SLA-backed maintenance, and proactive infrastructure monitoring.',
    icon: Wrench,
    slug: 'support-maintenance',
  },
];

const TOTAL = services.length;
const SLICE_ANGLE = 360 / TOTAL;
const OUTER_R = 270;
const INNER_R = 88;
const LABEL_R = 190;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeSlice(cx: number, cy: number, outerR: number, innerR: number, startAngle: number, endAngle: number) {
  const o1 = polarToCartesian(cx, cy, outerR, startAngle);
  const o2 = polarToCartesian(cx, cy, outerR, endAngle);
  const i1 = polarToCartesian(cx, cy, innerR, endAngle);
  const i2 = polarToCartesian(cx, cy, innerR, startAngle);
  return `M ${o1.x} ${o1.y} A ${outerR} ${outerR} 0 0 1 ${o2.x} ${o2.y} L ${i1.x} ${i1.y} A ${innerR} ${innerR} 0 0 0 ${i2.x} ${i2.y} Z`;
}

const sliceColors = ['#1d4ed8', '#1e40af'];
const sliceActiveColor = '#1d4ed8';

export default function ServicesPage() {
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
            Enterprise ICT<br />
            <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            ITSEC Technology delivers professional enterprise ICT services — from cybersecurity and network infrastructure to cloud solutions, smart systems, and critical power management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              Request Consultation
            </Link>
            <Link href="#overview" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl font-black uppercase tracking-widest transition-all border border-white/20">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Circle Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-blue-400 mx-auto mb-6 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Our <span className="text-blue-400">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Hover over any segment to explore or click to view full details
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

            {/* SVG Pie Circle */}
            <div className="w-full max-w-[580px] shrink-0">
              <svg viewBox="0 0 600 600" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                <circle cx={cx} cy={cy} r={OUTER_R + 10} fill="#0f172a" />

                {services.map((svc, i) => {
                  const startAngle = i * SLICE_ANGLE;
                  const endAngle = startAngle + SLICE_ANGLE;
                  const midAngle = startAngle + SLICE_ANGLE / 2;
                  const isActive = activeIndex === i;
                  const fillColor = isActive ? sliceActiveColor : sliceColors[i % 2];

                  const pushRad = ((midAngle - 90) * Math.PI) / 180;
                  const pushX = isActive ? Math.cos(pushRad) * 10 : 0;
                  const pushY = isActive ? Math.sin(pushRad) * 10 : 0;

                  const iconPos = polarToCartesian(cx, cy, LABEL_R - 40, midAngle);
                  const textPos1 = polarToCartesian(cx, cy, LABEL_R - 2, midAngle);
                  const textPos2 = polarToCartesian(cx, cy, LABEL_R + 13, midAngle);

                  const words = svc.title.replace(' Services', '').split(' ');
                  const line1 = words.slice(0, 2).join(' ');
                  const line2 = words.slice(2).join(' ');

                  return (
                    <Link href={`/services/${svc.slug}`} key={i}>
                    <g
                      style={{ cursor: 'pointer', transform: `translate(${pushX}px, ${pushY}px)`, transition: 'transform 0.3s ease' }}
                      onMouseEnter={() => setActiveIndex(i)}
                      onMouseLeave={() => setActiveIndex(null)}
                      onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    >
                      <path
                        d={describeSlice(cx, cy, OUTER_R, INNER_R, startAngle, endAngle)}
                        fill={fillColor}
                        stroke="#0f172a"
                        strokeWidth="2.5"
                        style={{ transition: 'fill 0.3s ease' }}
                      />
                      <circle
                        cx={iconPos.x}
                        cy={iconPos.y}
                        r="16"
                        fill="rgba(255,255,255,0.1)"
                        stroke={isActive ? '#3b82f6' : 'rgba(255,255,255,0.15)'}
                        strokeWidth="1"
                        style={{ transition: 'stroke 0.3s ease' }}
                      />
                      <text
                        x={textPos1.x}
                        y={textPos1.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={isActive ? '#3b82f6' : 'white'}
                        fontSize="10"
                        fontWeight="700"
                        fontFamily="sans-serif"
                        style={{ pointerEvents: 'none', transition: 'fill 0.3s ease' }}
                      >
                        {line1}
                      </text>
                      {line2 && (
                        <text
                          x={textPos2.x}
                          y={textPos2.y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={isActive ? '#67e8f9' : '#93c5fd'}
                          fontSize="9"
                          fontFamily="sans-serif"
                          style={{ pointerEvents: 'none', transition: 'fill 0.3s ease' }}
                        >
                          {line2}
                        </text>
                      )}
                    </g>
                    </Link>
                  );
                })}

                {/* Center */}
                <circle cx={cx} cy={cy} r={INNER_R - 3} fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <circle cx={cx} cy={cy} r={INNER_R - 16} fill="#0f172a" />
                <g transform={`translate(${cx - 22}, ${cy - 26})`}>
                  <path d="M22 2L4 9v11c0 10.2 7.8 19.7 18 22 10.2-2.3 18-11.8 18-22V9L22 2z" fill="#3b82f6" opacity="0.85" />
                  <path d="M22 9L10 14v6c0 6 4.6 11.7 12 13.2C29.4 31.7 34 26 34 20v-6L22 9z" fill="#0e7490" />
                  <path d="M17 21l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
                <text x={cx} y={cy + 36} textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">ITSEC</text>
              </svg>
            </div>

            {/* Info Panel */}
            <div className="w-full lg:max-w-[420px]">
              {activeIndex !== null ? (
                <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className="w-16 h-16 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mb-6">
                    {(() => {
                      const Icon = services[activeIndex].icon;
                      return <Icon className="w-8 h-8 text-blue-400 stroke-[1.5]" />;
                    })()}
                  </div>
                  <div className="w-10 h-0.5 bg-blue-400 mb-5 rounded-full" />
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {services[activeIndex].description}
                  </p>
                  <Link
                    href={`/services/${services[activeIndex].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 text-sm shadow-lg"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-900/20 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-400 uppercase tracking-tight mb-3">Select a Service</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    Hover over any segment to explore ITSEC Technology enterprise services.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((svc, i) => {
                      const Icon = svc.icon;
                      return (
                        <Link key={i} href={`/services/${svc.slug}`}>
                          <button
                            onMouseEnter={() => setActiveIndex(i)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className="w-full flex items-center gap-2 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/30 transition-all text-left group"
                          >
                            <Icon className="w-4 h-4 text-blue-400 shrink-0 stroke-[1.5]" />
                            <span className="text-xs text-slate-400 group-hover:text-white transition-colors font-medium leading-tight">
                              {svc.title.replace(' Services', '')}
                            </span>
                          </button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview List */}
      <section id="overview" className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-blue-400 mx-auto mb-6 rounded-full" />
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
              Services <span className="text-blue-400">Overview</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link href={`/services/${svc.slug}`} key={i} className="flex items-start gap-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 border border-blue-800/50 flex items-center justify-center shrink-0 group-hover:border-blue-500/40 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">{svc.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{svc.description}</p>
                  </div>
                </Link>
              );
            })}
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
            Ready to Get Started?<br />
            <span className="text-blue-400">Let's Talk.</span>
          </h2>
          <p className="text-lg text-slate-300 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
            Contact ITSEC Technology for professional, scalable, and secure enterprise ICT services tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl">
              Contact Us
            </Link>
            <Link href="/solutions" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white rounded-xl font-black uppercase tracking-widest transition-all border-2 border-white/20">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-20 bg-[#020617] border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
            Industries <span className="text-blue-400">We Serve</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Delivering highly specialized, compliant, and resilient infrastructure across mission-critical sectors.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                  <Building2 className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">Government</h3>
                <p className="text-xs text-slate-500 text-center">Sovereign infrastructure &amp; national security deployments.</p>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                  <ShieldCheck className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">Financial</h3>
                <p className="text-xs text-slate-500 text-center">Zero-Trust architectures for banks and fintech.</p>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-indigo-400/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                  <Network className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">Telecom</h3>
                <p className="text-xs text-slate-500 text-center">High-availability networking and data center ops.</p>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                  <Server className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">Enterprise</h3>
                <p className="text-xs text-slate-500 text-center">Scalable cloud and digital transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
