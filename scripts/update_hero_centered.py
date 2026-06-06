import re

new_content = """'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import Link from 'next/link';

/* ═══════════════════════════════════════════════════════════
   HTML5 CANVAS TECH VISUALIZER (CYBERSECURITY & DATACENTER)
   ═══════════════════════════════════════════════════════════ */
function TechCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Node system for background digital grid and packets
    class Packet {
      x: number;
      y: number;
      speed: number;
      horizontal: boolean;
      
      constructor() {
        this.horizontal = Math.random() > 0.5;
        this.x = this.horizontal ? 0 : Math.random() * width;
        this.y = this.horizontal ? Math.random() * height : height;
        this.speed = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);
      }
      
      update() {
        if (this.horizontal) {
          this.x += this.speed;
          if (this.x > width || this.x < 0) this.x = this.speed > 0 ? 0 : width;
        } else {
          this.y -= Math.abs(this.speed);
          if (this.y < 0) this.y = height;
        }
      }
    }

    const packets: Packet[] = Array.from({ length: 40 }, () => new Packet());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let tick = 0;

    const animate = () => {
      tick++;
      
      // Deep INSA-style dark teal background
      ctx.fillStyle = '#081420'; 
      ctx.fillRect(0, 0, width, height);

      // Subtle radial gradients for depth
      const cx = width / 2;
      const cy = height / 2;
      
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, height * 0.8);
      glow.addColorStop(0, 'rgba(16, 185, 129, 0.1)'); // emerald glow behind logo
      glow.addColorStop(0.4, 'rgba(6, 182, 212, 0.05)'); // cyan mid
      glow.addColorStop(1, 'rgba(8, 20, 32, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // ── DRAW HUD GRIDS & BRACKETS ──
      ctx.lineWidth = 1;
      
      // Background Grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.03)';
      const gridSize = 50;
      ctx.beginPath();
      for(let x=0; x<width; x+=gridSize) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
      for(let y=0; y<height; y+=gridSize) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
      ctx.stroke();

      // Corner Brackets (Datacenter screen feel)
      const bw = 80;
      const bh = 80;
      const m = 40; // margin
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      // Top Left
      ctx.moveTo(m, m + bh); ctx.lineTo(m, m); ctx.lineTo(m + bw, m);
      // Top Right
      ctx.moveTo(width - m - bw, m); ctx.lineTo(width - m, m); ctx.lineTo(width - m, m + bh);
      // Bottom Left
      ctx.moveTo(m, height - m - bh); ctx.lineTo(m, height - m); ctx.lineTo(m + bw, height - m);
      // Bottom Right
      ctx.moveTo(width - m - bw, height - m); ctx.lineTo(width - m, height - m); ctx.lineTo(width - m, height - m - bh);
      ctx.stroke();

      // Digital lines sweeping
      const sweepY = (tick * 2) % height;
      ctx.fillStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.fillRect(0, sweepY, width, 10);
      ctx.fillRect(0, sweepY + 15, width, 2);

      // ── DRAW DATA PACKETS ──
      packets.forEach(p => {
        p.update();
        ctx.fillStyle = 'rgba(16, 185, 129, 0.8)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#10B981';
        if (p.horizontal) {
          ctx.fillRect(p.x, p.y, 15, 2);
        } else {
          ctx.fillRect(p.x, p.y, 2, 15);
        }
        ctx.shadowBlur = 0;
      });

      // Digital coordinates/numbers
      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.font = '10px monospace';
      ctx.fillText(`SYS.STATUS: ONLINE // ${tick}`, m + 10, m + 20);
      ctx.fillText(`LOC: ${Math.floor(width/2)}x${Math.floor(height/2)}`, width - m - 120, height - m - 10);

      // Expanding radar circles behind the logo
      ctx.beginPath();
      ctx.arc(cx, cy, (tick * 0.5) % 300 + 100, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(6, 182, 212, ${1 - ((tick * 0.5) % 300) / 300})`;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" style={{ filter: 'contrast(1.1)' }} />;
}

/* ═══════════════════════════════════════════════════════════
   MAIN HERO
   ═══════════════════════════════════════════════════════════ */
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#081420]">

      {/* ── CINEMATIC CANVAS TECH VISUALIZER BACKGROUND ─────────── */}
      <TechCanvasBackground />
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-[#081420]/40 pointer-events-none" />

      {/* ── MAIN CONTENT (CENTERED INSA-STYLE LAYOUT) ─────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center mt-12">
        
        {/* SHIELD LOGO (Replacing Globe) */}
        <div className={`relative w-48 h-48 sm:w-64 sm:h-64 mb-6 transition-all duration-1000 transform ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          {/* Subtle pulse behind logo */}
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse" />
          <img 
            src="/shield-logo.jpg" 
            alt="ITSEC Shield Logo" 
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)] mix-blend-screen"
            style={{ filter: 'brightness(1.2)' }}
          />
        </div>

        {/* Top Tagline */}
        <div className={`flex items-center gap-2 mb-4 text-slate-300 transition-all duration-1000 delay-100 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Settings className="w-4 h-4 text-cyan-400 animate-[spin_4s_linear_infinite]" />
          <span className="text-sm sm:text-base font-medium tracking-wide">Securing the Digital Future</span>
        </div>

        {/* Main Headline (Replacing INSA text) */}
        <h1 className={`font-black text-white leading-[1.1] tracking-tight mb-4 transition-all duration-1000 delay-200 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
            style={{fontSize:'clamp(2.5rem, 5vw, 4.5rem)', fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
          ITSEC Technology
        </h1>

        {/* Subheadline */}
        <p className={`text-cyan-50 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-10 transition-all duration-1000 delay-300 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Secure <span className="text-cyan-400 mx-2">•</span> Intelligent <span className="text-cyan-400 mx-2">•</span> Future-Ready ICT Solutions
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Primary Blue Button */}
          <Link href="/contact"
                className="group flex items-center justify-center gap-2.5 px-8 py-3.5 text-white font-bold rounded-lg transition-all duration-300 bg-[#345cce] hover:bg-[#28469e] hover:-translate-y-0.5 shadow-lg shadow-[#345cce]/25"
                style={{
                  fontSize:'15px',
                  fontFamily:'var(--font-inter,Inter,sans-serif)'
                }}>
            Request Consultation
          </Link>

          {/* Secondary Outline Button */}
          <Link href="/services"
                className="group flex items-center justify-center gap-2.5 px-8 py-3.5 text-white font-bold rounded-lg transition-all duration-300 bg-white/5 border border-white/80 hover:bg-white/10 hover:-translate-y-0.5 backdrop-blur-sm"
                style={{
                  fontSize:'15px',
                  fontFamily:'var(--font-inter,Inter,sans-serif)'
                }}>
            Explore Services
          </Link>
        </div>

      </div>

    </section>
  );
}
"""

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Hero.tsx successfully fully centered and updated with the logo and new background.")
