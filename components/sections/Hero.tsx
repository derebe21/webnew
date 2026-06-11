'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Shield } from 'lucide-react';

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
      {/* ── CLEAN ANIMATED GRID BACKGROUND (No Images) ── */}
      <div className="absolute inset-0 z-0 bg-[#020611]">
        <div className="absolute inset-0 bg-grid-animated opacity-20" />
        {/* Subtle radial gradient to make the center glow slightly */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_60%)]" />
      </div>

      {/* Top & Bottom fades into site */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#020611] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#020611] to-transparent z-10 pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 mt-16 w-full max-w-5xl mx-auto">

        {/* Shield icon */}
        <div className="mb-8">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#0a1628]/80 border border-cyan-500/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.3)] mx-auto">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,1)]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] leading-none">
          ITSEC Technology
        </h1>

        {/* Cyan subtitle */}
        <p className="text-sm md:text-xl text-cyan-400 font-semibold tracking-[0.35em] uppercase mb-6 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]">
          Empowering Secure Digital Transformation
        </p>

        {/* Divider line */}
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8" />

        {/* Cybersecurity label badge */}
        <div className="flex items-center gap-3 px-6 py-3 bg-[#0a1628]/70 border border-cyan-500/30 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <Shield className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-50 font-semibold text-sm tracking-[0.25em] uppercase">Cybersecurity Operations</span>
        </div>

      </div>

    </section>
  );
}
