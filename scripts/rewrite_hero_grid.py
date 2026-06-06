import re

globals_path = 'C:/Users/DEREBE/itsec-latest-fresh/app/globals.css'
with open(globals_path, 'r', encoding='utf-8') as f:
    globals_css = f.read()

# Add the grid animation keyframes to globals.css
grid_keyframes = """
@keyframes itsecPageGrid {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 44px 44px, 44px 44px; }
}
.bg-grid-animated {
    background-image: linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: itsecPageGrid 20s linear infinite;
}
"""
if '.bg-grid-animated' not in globals_css:
    with open(globals_path, 'a', encoding='utf-8') as f:
        f.write(grid_keyframes)

# Completely rewrite Hero.tsx to use the new grid layout
hero_content = """'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Shield, ArrowRight } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   MAIN HERO — ITSEC PREMIUM GRID LAYOUT
   ═══════════════════════════════════════════════════════════ */

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-itsec-ink"
    >
      {/* ── PREMIUM ANIMATED GRID BACKGROUND ── */}
      <div className="absolute inset-0 z-0 bg-grid-animated opacity-40 pointer-events-none" />

      {/* ── SWEEPING GRADIENT OVERLAY (ITSEC BRANDED) ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-itsec-ink/95 via-itsec-ink/80 to-itsec-primary/30 pointer-events-none" />

      {/* ── CENTERED HERO CONTENT ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] px-4">
          
          <div className="animate-smooth-reveal flex flex-col items-center justify-center mb-8 mt-12">
            {/* INLINE SVG LOGO (Always Visible) */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(var(--itsec-primary),0.6)]">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="90" r="6" fill="#1e5cba" />
                <circle cx="150" cy="90" r="6" fill="#1e5cba" />
                <circle cx="115" cy="45" r="6" fill="#1e5cba" />
                <circle cx="85" cy="45" r="6" fill="#1e5cba" />
                <circle cx="70" cy="110" r="6" fill="#1e5cba" />
                <circle cx="130" cy="110" r="6" fill="#1e5cba" />
                <circle cx="145" cy="125" r="6" fill="#1e5cba" />
                <circle cx="95" cy="155" r="6" fill="#1e5cba" />
                <path d="M 50 90 L 50 65 L 85 45 M 150 90 L 150 65 L 115 45 M 50 95 L 50 110 L 95 155 M 150 95 L 150 110 L 145 125" stroke="#1e5cba" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 100 20 L 160 45 L 160 110 C 160 140 100 180 100 180 C 100 180 40 140 40 110 L 40 45 Z" stroke="#1e5cba" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 100 35 L 140 55 L 140 105 C 140 125 100 160 100 160 C 100 160 60 125 60 105 L 60 55 Z" stroke="#1e5cba" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 100 65 L 125 75 L 125 110 C 125 125 100 145 100 145 C 100 145 75 125 75 110 L 75 75 Z" fill="#296dd3" />
                <path d="M 100 90 A 5 5 0 1 0 100 100 L 105 115 L 95 115 Z" fill="#010409" />
              </svg>
            </div>
            
            {/* MAIN HEADLINE */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(var(--itsec-primary),0.5)] text-center max-w-6xl leading-tight">
              ITSEC <span className="text-itsec-primary font-light">Technology</span>
            </h1>

            {/* SLOGAN */}
            <h2 className="mt-6 text-xl md:text-3xl text-itsec-primary font-bold tracking-[0.2em] uppercase drop-shadow-md text-center">
              Secure Enterprise ICT
            </h2>

            {/* CTA BUTTON */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button className="group relative flex items-center gap-3 px-8 py-4 bg-itsec-primary hover:bg-itsec-dark text-white font-semibold text-xl rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(var(--itsec-primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--itsec-primary),0.6)] hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-itsec-primary to-itsec-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Shield className="w-6 h-6 relative z-10" />
                <span className="relative z-10 tracking-wide">Get a Quote</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

          </div>
          
        </div>
      )}

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono text-itsec-primary tracking-[.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-itsec-primary animate-bounce" />
      </div>
    </section>
  );
}
"""

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(hero_content)

print("Hero.tsx rewritten and grid animation added to globals.css")
