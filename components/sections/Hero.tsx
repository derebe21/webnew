'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ShieldAlert, Server, Video, Lock, Network } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   MAIN HERO — AI GENERATED CINEMATIC SOC WITH LABELS
   ═══════════════════════════════════════════════════════════ */

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030b14]"
    >
      {/* ── CINEMATIC BACKGROUND VIDEO ── */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover filter brightness-[0.4]"
        >
          {/* We point to a local video file. The user must place hero-background.mp4 in the public folder */}
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ── DARK GRADIENT OVERLAY FOR READABILITY ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030b14]/70 via-transparent to-[#030b14]/90 pointer-events-none" />

      {/* ── CENTERED LOGO AND HEADLINE ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] pointer-events-none px-4">
          
          {/* STATIC HERO CONTENT */}
          <div className="animate-smooth-reveal flex flex-col items-center justify-center mb-12">
            {/* LOGO CONTAINER */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(0,120,255,0.8)]">
              <img 
                src="/shield-logo.png" 
                alt="ITSEC Technology Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* MAIN HEADLINE */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] text-center max-w-6xl leading-tight">
              ITSEC <span className="text-cyan-400 font-light">Technology</span>
            </h1>

            {/* SLOGAN */}
            <p className="mt-6 text-lg md:text-2xl text-cyan-100 font-medium tracking-widest uppercase drop-shadow-md text-center">
              Secure &bull; Intelligent &bull; Future-Ready ICT Solutions
            </p>
          </div>
          
        </div>
      )}

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono text-cyan-500 tracking-[.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyan-500 animate-bounce" />
      </div>
    </section>
  );
}
