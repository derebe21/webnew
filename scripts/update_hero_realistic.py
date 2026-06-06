import re

# 1. Update globals.css with new animations
css_path = 'C:/Users/DEREBE/itsec-latest-fresh/app/globals.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

if '@keyframes smoothReveal' not in css_content:
    new_css = """
@keyframes smoothReveal {
  0% { opacity: 0; transform: scale(0.9) translateY(20px); filter: blur(10px); }
  100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
}

@keyframes kenBurns {
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
}

.animate-smooth-reveal {
  animation: smoothReveal 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-ken-burns {
  animation: kenBurns 10s linear infinite alternate;
}
"""
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write(new_css)


# 2. Update Hero.tsx
hero_path = 'C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    hero_content = f.read()

new_hero = """'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   CYBER CANVAS — TRANSPARENT HUD OVERLAY
   ═══════════════════════════════════════════════════════════ */
function CyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let tick = 0;

    // ── COMMON ELEMENTS ──
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      for (let y = 0; y < height; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
    };

    // ── HUD OVERLAYS ──
    const drawHUD = () => {
      // Scan Line
      const scanY = (tick * 3) % (height + 200) - 100;
      ctx.fillStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.fillRect(0, scanY, width, 5);

      // Corner brackets
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
      const drawBracket = (x: number, y: number, mx: number, my: number) => {
        ctx.beginPath(); ctx.moveTo(x+mx*30, y); ctx.lineTo(x, y); ctx.lineTo(x, y+my*30);
        ctx.lineWidth = 2; ctx.stroke();
      };
      drawBracket(width*0.05, height*0.05, 1, 1);
      drawBracket(width*0.95, height*0.05, -1, 1);
      drawBracket(width*0.05, height*0.95, 1, -1);
      drawBracket(width*0.95, height*0.95, -1, -1);
      
      // Floating data blocks
      for(let i=0; i<5; i++) {
        const bx = (width * 0.8) + Math.sin(tick * 0.01 + i) * 50;
        const by = (height * 0.3) + Math.cos(tick * 0.02 + i) * 100;
        ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.fillRect(bx, by, 15, 10);
      }
    };

    // ── GLITCH TRANSITION ──
    const drawGlitch = () => {
      for(let i=0; i<15; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const w = Math.random() * width * 0.8;
        const h = Math.random() * 10;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.3)' : 'rgba(5, 17, 27, 0.5)';
        ctx.fillRect(x, y, w, h);
      }
    };

    // ═══ MAIN ANIMATION LOOP ═══
    const animate = () => {
      tick++;

      // CLEAR CANVAS (Transparent background)
      ctx.clearRect(0, 0, width, height);

      drawGrid();
      drawHUD();

      // Random Glitch
      if (Math.random() < 0.02) {
        drawGlitch();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[2] pointer-events-none" />;
}

/* ═══════════════════════════════════════════════════════════
   MAIN HERO — REALISTIC BACKGROUNDS & SMOOTH REVEAL
   ═══════════════════════════════════════════════════════════ */
const BACKGROUND_IMAGES = [
  // Cybersecurity (Blue/Dark aesthetic)
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  // Datacenter
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
  // Surveillance / Command Center
  "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80",
  // Access Control / Tech
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Cycle background images every 8 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05111b]"
    >
      {/* ── REALISTIC BACKGROUND SLIDESHOW ── */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}

      {/* ── DARK GRADIENT OVERLAY FOR READABILITY ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#05111b]/70 via-[#05111b]/50 to-[#05111b]/90 pointer-events-none" />

      {/* ── CINEMATIC HUD CANVAS ── */}
      <CyberCanvas />

      {/* ── CENTERED LOGO AND HEADLINE WITH SMOOTH REVEAL ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] pointer-events-none animate-smooth-reveal">
          {/* LOGO CONTAINER */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4 flex items-center justify-center filter drop-shadow-[0_0_25px_rgba(0,100,255,0.8)]">
            <img 
              src="/shield-logo.png" 
              alt="ITSEC Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* HEADLINE */}
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            ITSEC <span className="text-cyan-400 font-light">Technology</span>
          </h1>
        </div>
      )}

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono text-slate-500 tracking-[.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce" />
      </div>
    </section>
  );
}
"""

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(new_hero)

print("Globals.css and Hero.tsx successfully updated with realistic background images and smooth logo reveal.")
