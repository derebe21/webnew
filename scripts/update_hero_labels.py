import re

hero_path = 'C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_hero = """'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ShieldAlert, Server, Video, Lock, Network } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   MAIN HERO — AI GENERATED CINEMATIC SOC WITH LABELS
   ═══════════════════════════════════════════════════════════ */

const SLIDES = [
  { image: "/soc-bg-1.png", label: "Cybersecurity Solution", icon: ShieldAlert },
  { image: "/soc-bg-2.png", label: "Datacenter Solution", icon: Server },
  { image: "/soc-bg-3.png", label: "Surveillance System", icon: Video },
  { image: "/soc-bg-4.png", label: "Access Control", icon: Lock },
  { image: "/soc-bg-5.png", label: "Digital Infrastructure", icon: Network }
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Crossfade slideshow every 6 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const SlideIcon = SLIDES[currentSlide].icon;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030b14]"
    >
      {/* ── CUSTOM AI GENERATED SOC BACKGROUNDS ── */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          {/* Ken Burns Slow Zoom Effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns filter brightness-[0.6]"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}

      {/* ── DARK GRADIENT OVERLAY FOR READABILITY ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030b14]/70 via-transparent to-[#030b14]/90 pointer-events-none" />

      {/* ── CENTERED LOGO AND HEADLINE ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] pointer-events-none px-4">
          
          {/* STATIC HERO CONTENT */}
          <div className="animate-smooth-reveal flex flex-col items-center justify-center mb-12">
            {/* LOGO CONTAINER (Reverted to use the user's exact image file) */}
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

          {/* DYNAMIC SLIDE LABEL */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-[#0a192f]/60 backdrop-blur-md border border-cyan-500/30 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <SlideIcon className="w-5 h-5 text-cyan-400" />
            <span 
              key={SLIDES[currentSlide].label} // Forces re-render animation on change
              className="text-sm md:text-lg text-white tracking-widest uppercase font-semibold animate-fade-in-up"
            >
              {SLIDES[currentSlide].label}
            </span>
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
"""

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(new_hero)

# Ensure the animate-fade-in-up keyframe exists in globals.css
css_path = 'C:/Users/DEREBE/itsec-latest-fresh/app/globals.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

if 'animate-fade-in-up' not in css_content:
    new_css = """
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
"""
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write(new_css)

print("Hero.tsx successfully updated with slide labels and reverted logo.")
