import re

hero_path = 'C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx'

new_hero_content = """'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Shield, ArrowRight } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   MAIN HERO — ENTERPRISE CINEMATIC CANVAS & CTA
   ═══════════════════════════════════════════════════════════ */

function EnterpriseCanvas() {
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

    // Subtle, slow-moving network nodes
    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15, // Extremely slow, smooth motion
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.5 + 0.5
    }));

    let time = 0;

    const animate = () => {
      time += 0.002; // Slow time progression

      // 1. Cinematic Dark Background
      ctx.fillStyle = '#020611'; // Deep enterprise navy
      ctx.fillRect(0, 0, width, height);

      // 2. Slow Sweeping Gradients (Cloud/Data Center vibe)
      const cx = width / 2 + Math.sin(time) * (width * 0.2);
      const cy = height / 2 + Math.cos(time * 0.8) * (height * 0.2);
      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.8);
      bgGlow.addColorStop(0, 'rgba(10, 45, 90, 0.5)'); // Deep cinematic blue glow
      bgGlow.addColorStop(1, 'rgba(2, 6, 17, 1)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Digital Infrastructure Network
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.x += p.vx; p.y += p.vy;
        
        // Wrap around seamlessly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 200, 255, 0.4)';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 180) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            // Smooth, subtle connections
            ctx.strokeStyle = `rgba(0, 180, 255, ${0.08 * (1 - dist / 180)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-90" />;
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020611]"
    >
      {/* ── CINEMATIC ENTERPRISE CANVAS BACKGROUND ── */}
      <EnterpriseCanvas />

      {/* ── DARK OVERLAY FOR TEXT READABILITY ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#020611]/70 via-transparent to-[#020611]/90 pointer-events-none" />

      {/* ── CENTERED HERO CONTENT ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] px-4">
          
          <div className="animate-smooth-reveal flex flex-col items-center justify-center mb-8 mt-12">
            {/* LOGO CONTAINER */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(0,120,255,0.6)]">
              <img 
                src="/shield-logo.png" 
                alt="ITSEC Technology Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* MAIN HEADLINE */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,200,255,0.5)] text-center max-w-6xl leading-tight">
              ITSEC <span className="text-blue-500 font-light">Technology</span>
            </h1>

            {/* NEW SLOGAN (Teal Color matching screenshot) */}
            <h2 className="mt-6 text-xl md:text-3xl text-[#14aeb4] font-bold tracking-[0.2em] uppercase drop-shadow-md text-center">
              Secure Enterprise ICT
            </h2>

            {/* CTA BUTTON */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button className="group relative flex items-center gap-3 px-8 py-4 bg-[#1b75d6] hover:bg-[#145cb0] text-white font-semibold text-xl rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(27,117,214,0.4)] hover:shadow-[0_0_30px_rgba(27,117,214,0.6)] hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1b75d6] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        <span className="text-[9px] font-mono text-blue-500 tracking-[.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-blue-500 animate-bounce" />
      </div>
    </section>
  );
}
"""

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(new_hero_content)

print("Hero.tsx successfully updated with EnterpriseCanvas, Teal Slogan, and Get a Quote CTA.")
