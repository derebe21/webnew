import re

hero_path = 'C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_hero = """'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   CINEMATIC 4K SOC CANVAS — LIVE RENDERED ANIMATION
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

    // ── DATA STREAMS ──
    const streams = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 2 + 1,
      length: Math.random() * 50 + 20,
      opacity: Math.random() * 0.5 + 0.1
    }));

    // ── NETWORK GRAPH PARTICLES ──
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1
    }));

    // ── LIGHT SWEEPS ──
    const sweeps = [
      { y: height * 0.3, speed: 5, x: -500 },
      { y: height * 0.7, speed: 8, x: width + 500 }
    ];

    // ── HUD RINGS ──
    const drawHUDRings = (cx: number, cy: number, scale: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      
      // Outer ring
      ctx.rotate(tick * 0.005);
      ctx.beginPath(); ctx.arc(0, 0, 100 * scale, 0, Math.PI * 1.5);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)'; ctx.lineWidth = 2; ctx.stroke();
      
      // Inner dashed ring
      ctx.rotate(-tick * 0.01);
      for(let i=0; i<12; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, 80 * scale, (i/12)*Math.PI*2, (i/12)*Math.PI*2 + 0.2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)'; ctx.lineWidth = 4; ctx.stroke();
      }
      ctx.restore();
    };

    // ── AI THREAT PANELS ──
    const drawAIPanels = () => {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.fillStyle = 'rgba(0, 240, 255, 0.05)';
      ctx.lineWidth = 1;
      
      // Left Panel
      ctx.fillRect(width * 0.05, height * 0.2, 200, 300);
      ctx.strokeRect(width * 0.05, height * 0.2, 200, 300);
      
      // Right Panel
      ctx.fillRect(width * 0.8, height * 0.3, 250, 200);
      ctx.strokeRect(width * 0.8, height * 0.3, 250, 200);

      // Flickering data lines
      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
      for(let i=0; i<8; i++) {
        const lw = Math.sin(tick*0.1 + i)*50 + 80;
        ctx.fillRect(width * 0.05 + 20, height * 0.2 + 40 + (i*20), lw, 4);
      }
      for(let i=0; i<5; i++) {
        const lw = Math.cos(tick*0.05 + i)*80 + 100;
        ctx.fillRect(width * 0.8 + 20, height * 0.3 + 40 + (i*25), lw, 6);
      }
    };

    const animate = () => {
      tick++;

      // 1. Cinematic Deep SOC Background
      ctx.fillStyle = '#020611';
      ctx.fillRect(0, 0, width, height);

      // Radial Glow Center
      const cx = width / 2;
      const cy = height / 2;
      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.8);
      bgGlow.addColorStop(0, 'rgba(0, 40, 80, 0.3)');
      bgGlow.addColorStop(1, 'rgba(2, 6, 17, 1)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Data Streams (Falling Neon Lines)
      streams.forEach(s => {
        s.y += s.speed;
        if (s.y > height) { s.y = -s.length; s.x = Math.random() * width; }
        const grad = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.length);
        grad.addColorStop(0, `rgba(0, 240, 255, 0)`);
        grad.addColorStop(1, `rgba(0, 240, 255, ${s.opacity})`);
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x, s.y + s.length);
        ctx.strokeStyle = grad; ctx.lineWidth = 2; ctx.stroke();
      });

      // 3. Digital Network Connections (Particles & Lines)
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.8)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
      }

      // 4. Holographic HUD Interfaces & AI Panels
      drawAIPanels();
      drawHUDRings(width * 0.15, height * 0.7, 1);
      drawHUDRings(width * 0.85, height * 0.2, 0.8);

      // 5. Smooth Camera Depth & Light Sweeps
      sweeps.forEach((sweep, idx) => {
        sweep.x += sweep.speed;
        if (sweep.x > width + 500 && idx === 0) sweep.x = -500;
        if (sweep.x < -500 && idx === 1) sweep.x = width + 500;

        const sGrad = ctx.createLinearGradient(sweep.x - 200, sweep.y, sweep.x + 200, sweep.y);
        sGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
        sGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.4)');
        sGrad.addColorStop(1, 'rgba(0, 240, 255, 0)');
        
        ctx.fillStyle = sGrad;
        ctx.fillRect(sweep.x - 200, sweep.y - 2, 400, 4);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
}

/* ═══════════════════════════════════════════════════════════
   MAIN HERO — CINEMATIC SOC LAYOUT
   ═══════════════════════════════════════════════════════════ */
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
      {/* ── CINEMATIC LIVE CANVAS BACKGROUND ── */}
      <CyberCanvas />

      {/* ── DARK GRADIENT OVERLAY FOR READABILITY ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#020611]/40 via-transparent to-[#020611]/80 pointer-events-none" />

      {/* ── CENTERED LOGO AND NEW HEADLINE ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] pointer-events-none animate-smooth-reveal px-4">
          
          {/* LOGO CONTAINER */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 flex items-center justify-center filter drop-shadow-[0_0_25px_rgba(0,100,255,0.9)]">
            <img 
              src="/shield-logo.png" 
              alt="INSA Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* NEW HEADLINE */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] text-center max-w-6xl leading-tight">
            Information Network <br className="hidden md:block" />
            <span className="text-cyan-400 font-light">Security Administration</span>
          </h1>

          {/* NEW SLOGAN */}
          <p className="mt-6 text-lg md:text-2xl text-cyan-100 font-medium tracking-widest uppercase drop-shadow-md">
            Securing Ethiopia's Digital Future
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

print("Hero.tsx successfully updated with the cinematic SOC canvas and INSA text.")
