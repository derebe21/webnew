import re

hero_path = 'C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_hero = """'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   MAIN HERO — AI GENERATED CINEMATIC SOC
   ═══════════════════════════════════════════════════════════ */

const BACKGROUND_IMAGES = [
  "/soc-bg-1.png",
  "/soc-bg-2.png"
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Crossfade slideshow every 6 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030b14]"
    >
      {/* ── CUSTOM AI GENERATED SOC BACKGROUNDS ── */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
            index === currentImage ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          {/* Ken Burns Slow Zoom Effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns filter brightness-75"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}

      {/* ── DARK GRADIENT OVERLAY FOR READABILITY ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030b14]/70 via-transparent to-[#030b14]/90 pointer-events-none" />

      {/* ── CENTERED LOGO AND HEADLINE ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] pointer-events-none animate-smooth-reveal px-4">
          
          {/* CUSTOM INLINE SVG LOGO (TRANSPARENT BACKGROUND) */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(0,120,255,0.8)]">
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Circuit Nodes */}
              <circle cx="50" cy="90" r="6" fill="#1e5cba" />
              <circle cx="150" cy="90" r="6" fill="#1e5cba" />
              <circle cx="115" cy="45" r="6" fill="#1e5cba" />
              <circle cx="85" cy="45" r="6" fill="#1e5cba" />
              <circle cx="70" cy="110" r="6" fill="#1e5cba" />
              <circle cx="130" cy="110" r="6" fill="#1e5cba" />
              <circle cx="145" cy="125" r="6" fill="#1e5cba" />
              <circle cx="95" cy="155" r="6" fill="#1e5cba" />
              
              {/* Circuit Lines */}
              <path d="M 50 90 L 50 65 L 85 45 M 150 90 L 150 65 L 115 45 M 50 95 L 50 110 L 95 155 M 150 95 L 150 110 L 145 125" stroke="#1e5cba" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Main Outer Shield Ring */}
              <path d="M 100 20 L 160 45 L 160 110 C 160 140 100 180 100 180 C 100 180 40 140 40 110 L 40 45 Z" stroke="#1e5cba" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 100 35 L 140 55 L 140 105 C 140 125 100 160 100 160 C 100 160 60 125 60 105 L 60 55 Z" stroke="#1e5cba" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Solid Inner Shield */}
              <path d="M 100 65 L 125 75 L 125 110 C 125 125 100 145 100 145 C 100 145 75 125 75 110 L 75 75 Z" fill="#296dd3" />
              
              {/* Keyhole */}
              <path d="M 100 90 A 5 5 0 1 0 100 100 L 105 115 L 95 115 Z" fill="#020611" />
            </svg>
          </div>
          
          {/* NEW HEADLINE */}
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] text-center max-w-6xl leading-tight">
            ITSEC <span className="text-cyan-400 font-light">Technology</span>
          </h1>

          {/* NEW SLOGAN */}
          <p className="mt-6 text-lg md:text-2xl text-cyan-100 font-medium tracking-widest uppercase drop-shadow-md text-center">
            Secure &bull; Intelligent &bull; Future-Ready ICT Solutions
          </p>
          
        </div>
      )}

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono text-cyan-500 tracking-[.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyan-500 animate-bounce" />
      </div>
    </section>
  );
}
"""

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(new_hero)

print("Hero.tsx successfully updated to use AI generated images.")
