'use client';

import { useState, useEffect } from 'react';
import { ClipboardCheck, Wrench, Headphones, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export function Process() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Consultation & Planning',
      description:
        'We conduct a deep-dive security assessment and strategic consultation to understand your unique operational environment, threat landscape, and compliance requirements. Together we craft a custom, risk-aware ICT roadmap.',
      number: '01',
      color: 'blue',
      accent: '#2563EB',
      glow: 'rgba(37,99,235,0.25)',
      border: 'border-blue-500/25 hover:border-blue-400/50',
      iconBg: 'from-blue-600/20 to-blue-500/5',
      badge: 'Discovery Phase',
      highlights: ['Threat Assessment', 'Requirements Analysis', 'Technology Roadmap'],
    },
    {
      icon: Wrench,
      title: 'Design & Deployment',
      description:
        'Our certified engineers architect, build, and deploy your solution with zero-trust principles, precision engineering, and minimal operational disruption — meeting international standards at every milestone.',
      number: '02',
      color: 'cyan',
      accent: '#06B6D4',
      glow: 'rgba(6,182,212,0.25)',
      border: 'border-cyan-500/25 hover:border-cyan-400/50',
      iconBg: 'from-cyan-600/20 to-cyan-500/5',
      badge: 'Execution Phase',
      highlights: ['Zero-Trust Architecture', 'Certified Engineers', 'ISO Compliance'],
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description:
        'We deliver 24/7 intelligent monitoring, proactive threat hunting, and continuous system optimization — ensuring your infrastructure remains resilient, up-to-date, and secure against evolving cyber threats.',
      number: '03',
      color: 'indigo',
      accent: '#6366F1',
      glow: 'rgba(99,102,241,0.25)',
      border: 'border-indigo-500/25 hover:border-indigo-400/50',
      iconBg: 'from-indigo-600/20 to-indigo-500/5',
      badge: 'Operations Phase',
      highlights: ['24/7 SOC Monitoring', 'Threat Intelligence', 'SLA Guarantee'],
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-[#020617] text-white overflow-hidden"
    >
      {/* Background Visual Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]"><defs>
          <pattern id="process-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#process-grid)"/>
        </svg>
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[130px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[120px]" />
        {/* Edge lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Pulsing Badge */}
          <div className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md mx-auto mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-70"/>
              <span className="relative rounded-full h-2 w-2 bg-cyan-400"/>
            </span>
            <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">
              How It Works
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-6"
              style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
            Our Proven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Process
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)] mb-6" />
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            From initial discovery to ongoing security operations — a systematic, enterprise-grade methodology that delivers results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">

          {/* Connector Lines (desktop only) */}
          <div className="hidden md:flex absolute top-[4.5rem] left-[33%] right-[33%] items-center justify-center pointer-events-none z-10">
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-indigo-500/40 relative">
              <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-cyan-400/60" />
            </div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl border transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-gradient-to-b from-slate-900/70 to-slate-950/70 backdrop-blur-md shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] ${step.border}`}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
              />

              {/* Corner ambient glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: step.glow }}
              />

              <div className="p-8 flex flex-col gap-6">
                {/* Step Badge + Number */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border"
                        style={{ color: step.accent, borderColor: `${step.accent}40`, backgroundColor: `${step.accent}10` }}>
                    {step.badge}
                  </span>
                  <span className="text-5xl font-black opacity-5 select-none"
                        style={{ color: step.accent, fontFamily: 'monospace' }}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.iconBg} flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                  style={{ borderColor: `${step.accent}30` }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.accent }} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-400 transition-colors"
                      style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  {step.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: step.accent }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className={`mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-slate-800/60 bg-gradient-to-r from-slate-900/60 to-slate-950/60 backdrop-blur-md transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-400 tracking-widest uppercase">Ready to Start?</span>
            </div>
            <p className="text-lg font-black text-white" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
              Begin Your Security Transformation Today
            </p>
            <p className="text-sm text-slate-400">Our team of certified experts is standing by to assess your environment.</p>
          </div>
          <a
            href="/contact"
            className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,.4)',
              fontFamily: 'var(--font-inter,Inter,sans-serif)'
            }}
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
