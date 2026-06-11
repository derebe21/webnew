'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Shield, Server, Lock } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020611]" />;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020611] font-sans"
    >
      {/* ── GLOBE VIDEO-STYLE BACKGROUND (Ken Burns slow zoom) ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: `url('/images/cyber-security-world-bg.jpg')` }}
        />
        {/* Dark overlay so text pops */}
        <div className="absolute inset-0 bg-[#020611]/50" />
      </div>

      {/* Top & bottom fades */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#020611] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#020611] to-transparent z-10 pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 mt-16 w-full max-w-5xl mx-auto">

        {/* Cybersecurity shield/lock icon above title */}
        <div className="mb-6 relative flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#0a1628]/80 border border-cyan-500/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] leading-none">
          ITSEC Technology
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-xl text-cyan-400 font-semibold tracking-[0.35em] uppercase mb-10 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]">
          Empowering Secure Digital Transformation
        </p>

        {/* Feature icons row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-2">
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-[#0a1628]/70 rounded-2xl border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <Shield className="w-7 h-7 text-cyan-400" />
            </div>
            <span className="text-white/80 font-semibold text-xs tracking-[0.25em] uppercase">Cybersecurity</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-[#0a1628]/70 rounded-2xl border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <Server className="w-7 h-7 text-blue-400" />
            </div>
            <span className="text-white/80 font-semibold text-xs tracking-[0.25em] uppercase">Data Center</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-[#0a1628]/70 rounded-2xl border border-indigo-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)]">
              <Lock className="w-7 h-7 text-indigo-400" />
            </div>
            <span className="text-white/80 font-semibold text-xs tracking-[0.25em] uppercase">Security Systems</span>
          </div>
        </div>

      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] font-mono text-cyan-300 tracking-[0.35em] uppercase">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce drop-shadow-[0_0_10px_rgba(34,211,238,1)]" />
      </div>
    </section>
  );
}
