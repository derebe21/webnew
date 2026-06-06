'use client';

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

    // Highly visible, ultra-slow enterprise network nodes
    const nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.05, // Extremely slow, international standard smooth motion
      vy: (Math.random() - 0.5) * 0.05,
      size: Math.random() * 2 + 1
    }));

    let time = 0;

    const animate = () => {
      time += 0.001; // Ultra slow time progression for cinematic feel

      // 1. Cinematic Dark Background
      ctx.fillStyle = 'rgb(var(--insa-ink))'; // Deepest navy, highly professional
      ctx.fillRect(0, 0, width, height);

      // 2. Slow Sweeping Gradients (Highly visible enterprise data center vibe)
      const cx = width / 2 + Math.sin(time) * (width * 0.3);
      const cy = height / 2 + Math.cos(time * 0.5) * (height * 0.3);
      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.9);
      bgGlow.addColorStop(0, 'rgba(12, 60, 120, 0.7)'); // Bright, highly visible premium glow
      bgGlow.addColorStop(1, 'rgba(1, 4, 9, 1)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Digital Infrastructure Network (Bright, clear, visible connections)
      ctx.lineWidth = 1.5;
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
        ctx.fillStyle = 'rgba(var(--insa-primary), 0.9)'; // High visibility neon blue
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 200) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            // Smooth, thick, bright connections
            ctx.strokeStyle = `rgba(0, 190, 255, ${0.15 * (1 - dist / 200)})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-100" />;
}
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(var(--insa-ink))]"
    >
      {/* ── CINEMATIC ENTERPRISE CANVAS BACKGROUND ── */}
      <EnterpriseCanvas />

      {/* ── DARK OVERLAY FOR TEXT READABILITY ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[rgb(var(--insa-ink))]/70 via-transparent to-[rgb(var(--insa-ink))]/90 pointer-events-none" />

      {/* ── CENTERED HERO CONTENT ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] px-4">
          
          <div className="animate-smooth-reveal flex flex-col items-center justify-center mb-8 mt-12">
                        {/* LOGO CONTAINER */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(var(--insa-primary),0.6)]">
              {/* Using inline SVG so the logo is ALWAYS perfectly visible and never broken */}
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
                <path d="M 100 90 A 5 5 0 1 0 100 100 L 105 115 L 95 115 Z" fill="rgb(var(--insa-ink))" />
              </svg>
            </div>
            
            {/* MAIN HEADLINE */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(var(--insa-primary),0.5)] text-center max-w-6xl leading-tight">
              ITSEC <span className="text-insa-primary font-light">Technology</span>
            </h1>

            {/* NEW SLOGAN (Teal Color) */}
            <h2 className="mt-6 text-xl md:text-3xl text-insa-primary font-bold tracking-[0.2em] uppercase drop-shadow-md text-center">
              Secure Enterprise ICT
            </h2>

            {/* CTA BUTTON */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button className="group relative flex items-center gap-3 px-8 py-4 bg-insa-primary hover:bg-insa-dark text-white font-semibold text-xl rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(var(--insa-primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--insa-primary),0.6)] hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-insa-primary to-insa-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        <span className="text-[9px] font-mono text-insa-primary tracking-[.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-insa-primary animate-bounce" />
      </div>
    </section>
  );
}
