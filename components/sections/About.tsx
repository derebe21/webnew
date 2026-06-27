'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Shield, Target, Eye, Cpu, Users, Award, Zap, Compass, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export function About({ showOnlyAboutUs = false }: { showOnlyAboutUs?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Optional left exit when scrolling past
  const blockX = useTransform(scrollYProgress, [0, 0.7, 1], ['0px', '0px', '-150px']);
  const blockOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  // Professional Core Values with standard definitions
  const values = [
    {
      title: 'Integrity & Transparency',
      desc: 'We maintain absolute confidentiality, trust, and ethical transparency in every deployment, serving as a reliable partner for national security and enterprise assets.',
      icon: Shield,
      color: 'text-itsec-primary',
      bg: 'from-blue-600/10 to-blue-500/5',
      glow: 'rgba(var(--itsec-primary),0.15)',
      border: 'border-blue-500/20 hover:border-blue-400/40'
    },
    {
      title: 'Continuous Innovation',
      desc: 'We aggressively research and integrate cutting-edge artificial intelligence, machine learning algorithms, and next-generation zero-trust architecture to keep you ahead of evolving threats.',
      icon: Cpu,
      color: 'text-itsec-primary',
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
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 bg-[#020617] text-white overflow-hidden">
      {/* ── BACKGROUND VISUAL EFFECTS ───────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Cinematic Scanlines Overlay */}
        <div 
            className="absolute inset-0 pointer-events-none opacity-[0.1] z-0"
            style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
            backgroundSize: '100% 4px',
            }}
        />

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

      {/* Futuristic HUD Corners */}
      <div className="absolute top-8 left-8 z-0 w-12 h-12 border-t-[1.5px] border-l-[1.5px] border-cyan-500/20" />
      <div className="absolute bottom-8 right-8 z-0 w-12 h-12 border-b-[1.5px] border-r-[1.5px] border-cyan-500/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ── 1. MAIN ABOUT SECTION (CENTERED HIGH-TECH PRESENTATION) ── */}
        <motion.div 
          style={{ x: blockX, opacity: blockOpacity }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative p-8 md:p-12 rounded-[2.5rem] border border-slate-800 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-950/90 backdrop-blur-xl shadow-2xl flex flex-col gap-6 text-left hover:border-blue-500/20 transition-all duration-300"
          >
            {/* Subtle glow effect behind card */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-2xl rounded-[2.5rem] pointer-events-none" />

            {/* Main Headline */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">ITSEC Technology</span>
              </h2>
            </motion.div>

            {/* First Paragraph (Intro) */}
            {!showOnlyAboutUs && (
              <motion.p 
                className="text-base md:text-lg text-slate-300 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              >
                <strong>ITSEC Technology</strong> is a leading provider of ICT, cybersecurity, and intelligent infrastructure solutions. We help organizations design, implement, and manage secure, scalable, and future-ready technology environments across government, enterprise, financial, healthcare, and telecommunications sectors.
              </motion.p>
            )}

            {!showOnlyAboutUs && (
              <>
                {/* Standards Line (Zoom/Fade) */}
                <motion.p 
                  className="text-base md:text-lg text-slate-300 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
                >
                  Aligned with internationally recognized frameworks including <strong>ISO, NIST, and CIS</strong>, we deliver resilient digital infrastructures that enhance security, operational efficiency, and business continuity.
                </motion.p>

                {/* Final Paragraph (Expertise) */}
                <motion.p 
                  className="text-base md:text-lg text-slate-300 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.65, ease: 'easeOut' }}
                >
                  Our certified professionals combine <strong>deep technical expertise with industry best practices</strong> to support digital transformation and protect critical business assets.
                </motion.p>
              </>
            )}

            {showOnlyAboutUs && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                className="flex flex-col gap-6"
              >
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                  ITSEC Technology is a leading provider of ICT, cybersecurity, and intelligent infrastructure solutions. We help organizations design, implement, and manage secure, scalable, and future-ready technology environments.
                </p>

                <Link href="/about" className="inline-flex items-center gap-2 text-base font-bold text-cyan-500 hover:text-cyan-300 transition-colors group w-fit">
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* ── 2. MISSION & VISION (GLOWING GLASSMORPHIC CARDS) ── */}
        {!showOnlyAboutUs && (
          <>
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          
          {/* Mission Card */}
          <div className="group relative rounded-[2rem] overflow-hidden border border-slate-800 hover:border-blue-500/40 bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 backdrop-blur-xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-itsec-primary/10 transition-colors duration-500" />
            <div className="flex flex-col items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-500/5 text-itsec-primary border border-itsec-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <Target className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                  Our Mission
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                  To empower governments, financial institutions, and global enterprises with resilient digital infrastructure, advanced cybersecurity, and optimized cloud solutions that safeguard critical assets and ensure seamless business continuity.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative rounded-[2rem] overflow-hidden border border-slate-800 hover:border-cyan-500/40 bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 backdrop-blur-xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-itsec-primary/5 blur-2xl rounded-full group-hover:bg-itsec-primary/10 transition-colors duration-500" />
            <div className="flex flex-col items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-cyan-500/5 text-itsec-primary border border-itsec-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg">
                <Eye className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                  Our Vision
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                  To be a globally trusted leader in secure digital transformation, empowering organizations through innovative technology, resilient infrastructure, and world-class cybersecurity solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. CORE VALUES (PREMIUM GRID WITH COMPREHENSIVE DESCRIPTIONS) ── */}
        <div className="pt-10 flex flex-col gap-12">
          
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-3">
            <div className="h-0.5 w-12 bg-itsec-primary mb-2" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
              Our Core Principles
            </h3>
            <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Guiding every action we take and every system we build.
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
                  <h4 className="text-lg font-bold text-white tracking-tight leading-tight group-hover:text-itsec-primary transition-colors">
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
        </>
        )}

        {/* ── 4. COMPANY HISTORY & STATS ── */}
        {!showOnlyAboutUs && (
          <div className="pt-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-6" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                  Our <span className="text-cyan-400">Track Record</span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Established with a vision to secure Ethiopia's digital future, ITSEC Technology has quickly grown into a trusted partner for enterprise ICT and cybersecurity solutions.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  We combine local expertise with global partnerships to deliver infrastructure that performs flawlessly under pressure.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">1+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Projects Delivered</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-4xl font-black text-blue-500 mb-2">5</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Enterprise Clients</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-4xl font-black text-emerald-400 mb-2">1+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Active</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-4xl font-black text-rose-400 mb-2">1+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 5. OUR EXPERTS ── */}
        {!showOnlyAboutUs && (
          <div className="pt-24 border-t border-slate-800">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-black mb-4" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                Our <span className="text-cyan-400">Experts</span>
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Certified professionals dedicated to engineering secure, resilient technology solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Expert 1 */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center hover:border-cyan-500/30 transition-all">
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full mb-6 border-2 border-cyan-500/20 group-hover:border-cyan-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-transparent" />
                  <Users className="w-10 h-10 text-slate-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Derebe Sinamaw</h4>
                <p className="text-sm text-cyan-400 mb-3">Chief Technology Officer</p>
                <p className="text-xs text-slate-500 leading-relaxed">CISSP, CISM certified with 10 years leading enterprise ICT infrastructure deployments.</p>
              </div>

              {/* Expert 2 */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center hover:border-blue-500/30 transition-all">
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full mb-6 border-2 border-blue-500/20 group-hover:border-blue-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                  <Users className="w-10 h-10 text-slate-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Merikat Meharu</h4>
                <p className="text-sm text-blue-400 mb-3">Head of Cybersecurity</p>
                <p className="text-xs text-slate-500 leading-relaxed">Specializes in Zero-Trust architecture and ISO 27001 compliance for financial institutions.</p>
              </div>

              {/* Expert 3 */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center hover:border-indigo-500/30 transition-all">
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full mb-6 border-2 border-indigo-500/20 group-hover:border-indigo-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent" />
                  <Users className="w-10 h-10 text-slate-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Temesgen Wasse</h4>
                <p className="text-sm text-indigo-400 mb-3">Solutions Architect</p>
                <p className="text-xs text-slate-500 leading-relaxed">Expert in multi-cloud strategies, virtualization, and enterprise data center design.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
