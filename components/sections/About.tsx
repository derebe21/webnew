'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Target, Eye, Cpu, Users, Award, Zap, Compass } from 'lucide-react';

export function About({ showOnlyAboutUs = false }: { showOnlyAboutUs?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Professional Core Values with standard definitions
  const values = [
    {
      title: 'Integrity & Transparency',
      desc: 'We maintain absolute confidentiality, trust, and ethical transparency in every deployment, serving as a reliable partner for national security and enterprise assets.',
      icon: Shield,
      color: 'text-blue-400',
      bg: 'from-blue-600/10 to-blue-500/5',
      glow: 'rgba(37,99,235,0.15)',
      border: 'border-blue-500/20 hover:border-blue-400/40'
    },
    {
      title: 'Continuous Innovation',
      desc: 'We aggressively research and integrate cutting-edge artificial intelligence, machine learning algorithms, and next-generation zero-trust architecture to keep you ahead of evolving threats.',
      icon: Cpu,
      color: 'text-cyan-400',
      bg: 'from-cyan-600/10 to-cyan-500/5',
      glow: 'rgba(6,182,212,0.15)',
      border: 'border-cyan-500/20 hover:border-cyan-400/40'
    },
    {
      title: 'Customer Satisfaction',
      desc: 'We deliver tailored, high-performance IT and security architectures customized to specific enterprise workloads, ensuring seamless user experience and maximum return on investment.',
      icon: Users,
      color: 'text-indigo-400',
      bg: 'from-indigo-600/10 to-indigo-500/5',
      glow: 'rgba(99,102,241,0.15)',
      border: 'border-indigo-500/20 hover:border-indigo-400/40'
    },
    {
      title: 'Reliability & Quality',
      desc: 'Uncompromising engineering standards are woven into the fabric of everything we build, guaranteeing uptime, extreme speed, and military-grade network security.',
      icon: Zap,
      color: 'text-emerald-400',
      bg: 'from-emerald-600/10 to-emerald-500/5',
      glow: 'rgba(16,185,129,0.15)',
      border: 'border-emerald-500/20 hover:border-emerald-400/40'
    },
    {
      title: 'Empowering Partnerships',
      desc: 'We collaborate closely with government, commercial, and financial agencies to build long-term relationships that foster digital literacy and sovereign technology growth.',
      icon: Compass,
      color: 'text-amber-400',
      bg: 'from-amber-600/10 to-amber-500/5',
      glow: 'rgba(245,158,11,0.15)',
      border: 'border-amber-500/20 hover:border-amber-400/40'
    },
    {
      title: 'Global Compliance',
      desc: 'All our solutions strictly adhere to international quality benchmarks and regulatory frameworks, including ISO/IEC 27001, NIST, GDPR, and CIS critical controls.',
      icon: Award,
      color: 'text-rose-400',
      bg: 'from-rose-600/10 to-rose-500/5',
      glow: 'rgba(244,63,94,0.15)',
      border: 'border-rose-500/20 hover:border-rose-400/40'
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#020617] text-white overflow-hidden">
      
      {/* ── BACKGROUND VISUAL EFFECTS ───────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]"><defs>
          <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#about-grid)"/>
        </svg>
        {/* Soft glowing ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ── 1. MAIN ABOUT SECTION (CENTERED HIGH-TECH PRESENTATION IN A PREMIUM LONG BOX) ── */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-[2.5rem] border border-slate-800 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-950/90 backdrop-blur-xl shadow-2xl flex flex-col gap-6 text-left hover:border-blue-500/20 transition-all duration-300">
            {/* Subtle glow effect behind card */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-2xl rounded-[2.5rem] pointer-events-none" />

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">ITSEC Technology</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
              ITSEC Technology is a premier provider of advanced ICT, comprehensive cybersecurity frameworks, and integrated intelligent systems. We operate at the intersection of robust digital defense and innovative engineering, helping government offices, major financial institutions, healthcare operators, telecommunication entities, and commercial enterprises thrive.
            </p>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              By aligning our methodologies with global frameworks like ISO, NIST, and CIS, we build and support resilient infrastructure architectures that protect sovereign assets and empower private sector growth. Our engineering teams possess the elite training and global credentials required to implement intelligent systems that stay ahead of complex cybersecurity threats.
            </p>
          </div>
        </div>

        {/* ── 2. MISSION & VISION (GLOWING GLASSMORPHIC CARDS) ── */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          
          {/* Mission Card */}
          <div className="group relative rounded-[2rem] overflow-hidden border border-slate-800 hover:border-blue-500/40 bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 backdrop-blur-xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-blue-500/10 transition-colors duration-500" />
            <div className="flex flex-col items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-500/5 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <Target className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white tracking-tight" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                  Our Mission
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-medium">
                  To equip governments, financial hubs, and global enterprises with highly resilient digital foundations, impenetrable cybersecurity architecture, and seamless cloud optimization. We dedicate our expert knowledge to safeguarding assets and enabling frictionless operational continuity.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative rounded-[2rem] overflow-hidden border border-slate-800 hover:border-cyan-500/40 bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 backdrop-blur-xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 blur-2xl rounded-full group-hover:bg-cyan-500/10 transition-colors duration-500" />
            <div className="flex flex-col items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-cyan-500/5 text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg">
                <Eye className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white tracking-tight" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                  Our Vision
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-medium">
                  To serve as a globally recognized beacon of intelligent digital transformation and zero-trust cybersecurity solutions, pioneering sovereign technological self-reliance, smart infrastructural integration, and automated defense mechanisms that empower future generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. CORE VALUES (PREMIUM GRID WITH COMPREHENSIVE DESCRIPTIONS) ── */}
        <div className="pt-10 flex flex-col gap-12">
          
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-3">
            <div className="h-0.5 w-12 bg-cyan-500 mb-2" />
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
              Our Core Principles
            </h3>
            <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              The fundamental standards and uncompromising values that guide every action we take and every system we build.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className={`group relative rounded-2xl border transition-all duration-300 p-6 md:p-8 flex flex-col gap-5 overflow-hidden bg-gradient-to-b from-slate-900/70 to-slate-950/70 backdrop-blur-md shadow-lg ${val.border}`}
                style={{
                  boxShadow: `0 4px 30px -10px rgba(0,0,0,0.3)`
                }}
              >
                {/* Micro Ambient Hover Glow on Card Corner */}
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: val.glow }}
                />

                {/* Glowing Icon Frame */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border bg-gradient-to-br ${val.bg} ${val.color}`}
                     style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <val.icon className="w-7 h-7" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg font-bold text-white tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
