'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, Server, Cloud, Globe, Cpu, Lock, ChevronDown, Activity, Terminal, Zap, Radar } from 'lucide-react';
import Link from 'next/link';

/* ═══════════════════════════════════════════════════════════
   HTML5 CANVAS TECH VISUALIZER (CINEMATIC SIMULATOR)
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

    // Particle system for the faint floating dust/grid nodes
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(200, 220, 255, ${this.opacity})`;
        ctx.beginPath();
        // Rectangular/square particles for a more HUD/data feel
        ctx.rect(this.x, this.y, this.size * 2, this.size);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(150, Math.floor((width * height) / 8000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let tick = 0;

    const animate = () => {
      tick++;
      
      // Clear with a hazy, low-contrast grayish-blue background
      ctx.fillStyle = '#0f1218'; // very dark slate/gray base
      ctx.fillRect(0, 0, width, height);

      // Create a hazy overlay effect (fog/glare from the center)
      const gradient = ctx.createRadialGradient(width/2, height*0.3, 0, width/2, height*0.3, width);
      gradient.addColorStop(0, 'rgba(100, 130, 150, 0.25)'); // Center bright haze
      gradient.addColorStop(0.5, 'rgba(40, 50, 70, 0.15)'); // Mid haze
      gradient.addColorStop(1, 'rgba(10, 15, 20, 0.8)'); // Outer dark
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // --- Draw HUD Elements ---
      ctx.lineWidth = 1;

      // Glowing accent lines (like the bright diagonal/horizontal streaks in the image)
      const drawStreak = (x1: number, y1: number, x2: number, y2: number, opacity: number, thickness: number) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(200, 230, 255, ${opacity})`;
        ctx.lineWidth = thickness;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(200, 230, 255, 0.5)';
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      };

      // Faint background structural lines
      ctx.strokeStyle = 'rgba(150, 180, 220, 0.08)';
      ctx.beginPath();
      // Horizontal
      ctx.moveTo(0, height * 0.35); ctx.lineTo(width, height * 0.35);
      ctx.moveTo(0, height * 0.8); ctx.lineTo(width, height * 0.8);
      // Vertical
      ctx.moveTo(width * 0.45, height * 0.35); ctx.lineTo(width * 0.45, height * 0.8);
      ctx.stroke();

      // Stronger glowing diagonal frame lines at the bottom corners
      drawStreak(0, height * 0.7, width * 0.2, height, 0.3, 2);
      drawStreak(width * 0.8, height, width, height * 0.7, 0.3, 2);

      // Horizontal central data line with markers
      drawStreak(width * 0.3, height * 0.6, width * 0.7, height * 0.6, 0.2, 1);
      
      // Draw three hollow circles on the right side of the data line
      ctx.strokeStyle = 'rgba(180, 210, 255, 0.5)';
      ctx.lineWidth = 1.5;
      const circleSpacing = 25;
      const circleStartX = width * 0.6;
      for(let i=0; i<3; i++) {
        ctx.beginPath();
        ctx.arc(circleStartX + (i * circleSpacing), height * 0.6, 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw three blinking square blocks on the left side of the data line
      for(let i=0; i<3; i++) {
         // Staggered blinking effect
         const blink = Math.sin(tick * 0.05 + i) > 0 ? 0.6 : 0.1;
         ctx.fillStyle = `rgba(180, 220, 255, ${blink})`;
         ctx.fillRect(width * 0.4 + (i * 25), height * 0.6 - 5, 15, 10);
      }

      // Add some faint tech text
      ctx.fillStyle = 'rgba(150, 180, 220, 0.4)';
      ctx.font = '9px monospace';
      ctx.fillText('LOC.SYS // OVERRIDE', width * 0.4, height * 0.6 + 20);
      ctx.fillText('SECURE STREAM', width * 0.45, height * 0.35 - 5);

      // Draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" style={{ filter: 'contrast(1.2) brightness(1.1)' }} />;
}
/* ═══════════════════════════════════════════════════════════
   RIGHT PANEL — ANIMATED ENTERPRISE VISUALIZATION HUD
   ═══════════════════════════════════════════════════════════ */
function TechVisualization() {
  const [tick, setTick] = useState(0);
  const [scene, setScene] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Tick timer for micro-animations
  useEffect(() => {
    const t = setInterval(() => setTick(v => v + 1), 60);
    return () => clearInterval(t);
  }, []);

  // Autoplay scene switcher (cycles every 5s unless manually overridden)
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setScene(s => (s + 1) % SCENES.length);
        setVisible(true);
      }, 300);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  // Manual scene switcher
  const handleSelectScene = (index: number) => {
    stopAutoplay();
    setVisible(false);
    setTimeout(() => {
      setScene(index);
      setVisible(true);
      startAutoplay(); // Resume autoplay from the selected scene
    }, 2500); // 2.5s lock on manual selection, then resumes auto
  };

  // Mouse coordinate tracking relative to the container
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      setMousePos({ x, y });
    }
  };

  const bars = [62, 84, 47, 93, 71, 56, 89, 43, 78, 96, 60, 81, 54, 88, 65, 75, 45, 90];
  const activeBar = tick % bars.length;

  const s = (f: number, o = 0) => Math.sin(tick * f + o);
  const op = (base: number, f: number, o = 0) => Math.max(0, Math.min(1, base + s(f, o) * 0.2));

  return (
    <div className="relative w-full h-full" ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Outer Card with Glassmorphism Border */}
      <div 
        className="absolute inset-0 rounded-[2rem] overflow-hidden border border-cyan-500/20 shadow-[0_0_80px_rgba(6,182,212,0.1)] transition-all duration-500 bg-gradient-to-b from-[#020617] via-[#090d1f] to-[#020617] backdrop-blur-md"
        style={{
          boxShadow: isHovered ? '0 0 100px rgba(6, 182, 212, 0.15), inset 0 0 20px rgba(6, 182, 212, 0.05)' : '0 0 80px rgba(6,182,212,0.08)'
        }}
      >
        {/* Floating tech grid backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="visual-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#06B6D4" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#visual-grid)" />
          </svg>
        </div>

        {/* Dynamic Scanning Line */}
        <div 
          className="absolute left-0 right-0 h-px pointer-events-none z-10"
          style={{ 
            top: `${(tick * 0.8) % 100}%`, 
            background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), transparent)', 
            boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)' 
          }}
        />

        {/* Mouse coordinates display HUD */}
        {isHovered && (
          <div className="absolute right-4 top-14 z-20 font-mono text-[9px] text-cyan-400 bg-slate-950/80 px-2.5 py-1 rounded border border-cyan-500/30 transition-all duration-300">
            
          </div>
        )}

        {/* ── TOP HUD HEADER ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/10 bg-slate-950/70 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-75"/>
              <span className="relative rounded-full h-2.5 w-2.5 bg-cyan-400"/>
            </span>
            <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] font-bold"></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-mono text-blue-400 tracking-wider"></span>
            <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              
            </span>
          </div>
        </div>

        {/* Interactive manual scene tabs */}
        <div className="flex items-center justify-between px-6 py-2 bg-slate-900/40 border-b border-cyan-500/5 relative z-10 overflow-x-auto gap-2 no-scrollbar">
          {SCENES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleSelectScene(idx)}
              className={`text-[8px] font-mono uppercase tracking-widest px-2.5 py-1 rounded transition-all whitespace-nowrap ${
                idx === scene 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                  : 'text-slate-500 hover:text-slate-300 border border-transparent'
              }`}
            >
              {s.short}
            </button>
          ))}
        </div>

        {/* Active Scene Label */}
        <div className="absolute top-24 left-6 right-6 flex items-center justify-between z-10">
          <span 
            className="text-[9px] font-mono tracking-[0.25em] text-cyan-500/80 uppercase font-semibold transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            
          </span>
          <span className="text-[9px] font-mono text-slate-500"></span>
        </div>

        {/* ── MAIN VIZ WRAPPER ── */}
        <div 
          className="absolute left-6 right-6 bottom-16 flex flex-col gap-4"
          style={{ top: '120px', opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
        >
          {/* ROW 1: NETWORK TOPOLOGY (40% HEIGHT) */}
          <div className="h-[38%] rounded-2xl border border-blue-500/10 p-4 bg-[#050b18]/60 relative overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[8px] font-mono text-blue-400 tracking-widest uppercase flex items-center gap-1.5">
                <Radar className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              </span>
              <span className="text-[8px] font-mono text-cyan-400 animate-pulse"></span>
            </div>
            
            <svg className="w-full flex-1 mt-1" viewBox="0 0 100 50">
              {/* Grid background inside sub-panel */}
              <defs>
                <pattern id="topology-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.5" fill="#1e3a8a" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topology-grid)" />

              {/* Connecting lines */}
              {([[50,25,15,10],[50,25,85,10],[50,25,25,40],[50,25,75,40],[50,25,90,25],[50,25,10,25]] as number[][]).map(([x1,y1,x2,y2],i)=>(
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={`rgba(6,182,212,${op(0.15, 0.05, i)})`} strokeWidth="0.7" strokeDasharray={i % 2 === 0 ? "2,2" : undefined} />
              ))}

              {/* Glowing active wave */}
              <circle cx="50" cy="25" r={5 + s(0.08) * 4} fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" />
              
              {/* Central master node */}
              <circle cx="50" cy="25" r="5" fill="#06B6D4" opacity="0.2" />
              <circle cx="50" cy="25" r="2.5" fill="#06B6D4" />

              {/* Perimeter nodes */}
              {([[15,10],[85,10],[25,40],[75,40],[90,25],[10,25]] as number[][]).map(([cx,cy],i)=>(
                <g key={i}>
                  <circle cx={cx} cy={cy} r="3" fill="#020617" stroke="#2563EB" strokeWidth="0.8" />
                  <circle cx={cx} cy={cy} r="1.2" fill={i % 3 === 0 ? '#10B981' : '#2563EB'} className="animate-pulse" />
                </g>
              ))}

              {/* Data stream packet particles drifting along lines */}
              {[
                { t: (tick * 0.008) % 1, x2: 15, y2: 10, c: '#06B6D4' },
                { t: (tick * 0.01 + 0.3) % 1, x2: 75, y2: 40, c: '#10B981' },
                { t: (tick * 0.007 + 0.6) % 1, x2: 90, y2: 25, c: '#60A5FA' }
              ].map(({ t, x2, y2, c }, i) => (
                <circle key={i} cx={50 + (x2 - 50) * t} cy={25 + (y2 - 25) * t} r="1.6" fill={c} style={{ filter: 'drop-shadow(0 0 3px ' + c + ')' }} />
              ))}
            </svg>
          </div>

          {/* ROW 2: THREAT REAL-TIME MONITOR & SYSTEMS STATUS (30% HEIGHT) */}
          <div className="h-[28%] flex gap-4">
            <div className="flex-1 rounded-2xl border border-blue-500/10 p-4 bg-[#050b18]/60 flex flex-col">
              <span className="text-[8px] font-mono text-blue-400 tracking-widest uppercase mb-1">
              </span>
              <div className="flex items-end gap-1 flex-1 mt-1">
                {bars.map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 rounded-t-[2px] transition-all duration-200"
                    style={{
                      height: `${Math.max(10, h + (i === activeBar ? 18 : Math.sin(tick * 0.15 + i) * 12))}%`,
                      background: i === activeBar 
                        ? 'linear-gradient(to top, #2563eb, #06b6d4)' 
                        : i % 3 === 0 ? 'linear-gradient(to top, #1e3a8a, #3b82f6)' : 'linear-gradient(to top, #0f172a, #1e3a8a)',
                      boxShadow: i === activeBar ? '0 0 12px rgba(6,182,212,0.8)' : 'none'
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="w-[42%] rounded-2xl border border-blue-500/10 p-4 bg-[#050b18]/60 flex flex-col justify-between">
              <span className="text-[8px] font-mono text-blue-400 tracking-widest uppercase mb-1">
              </span>
              {[
                { label: '', pct: 100, color: '#06B6D4' },
                { label: '', pct: 98, color: '#2563EB' },
                { label: '', pct: 100, color: '#10B981' },
                { label: '', pct: 96, color: '#6366F1' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="flex justify-between items-center text-[7px] font-mono">
                    <span className="text-slate-400 font-medium">{item.label}</span>
                    <span className="font-bold" style={{ color: item.color }}>{item.pct}%</span>
                  </div>
                  <div className="h-1 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ 
                        width: `${item.pct}%`, 
                        backgroundColor: item.color,
                        boxShadow: `0 0 6px ${item.color}80` 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3: GLOBAL DISTRIBUTION NETWORK PROJECTION (32% HEIGHT) */}
          <div className="flex-1 rounded-2xl border border-blue-500/10 p-4 bg-[#050b18]/60 relative overflow-hidden flex flex-col">
            <span className="text-[8px] font-mono text-blue-400 tracking-widest uppercase mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            </span>
            <svg className="w-full flex-1 mt-1" viewBox="0 0 300 50">
              {/* Globe Wireframe Outline */}
              <ellipse cx="150" cy="25" rx="142" ry="22" fill="none" stroke="#111c44" strokeWidth="0.6" />
              {[50, 85, 120, 150, 180, 215, 250].map((x, i) => (
                <ellipse key={i} cx={x} cy="25" rx="12" ry="22" fill="none" stroke="#111c44" strokeWidth="0.4" opacity="0.3" />
              ))}
              {[12, 25, 38].map((y, i) => (
                <line key={i} x1="8" y1={y} x2="292" y2={y} stroke="#111c44" strokeWidth="0.4" opacity="0.3" />
              ))}

              {/* Geographic Nodes */}
              {[
                { x: 55, y: 18, name: '' }, // Addis Ababa
                { x: 108, y: 15, name: '' }, // Dubai
                { x: 154, y: 22, name: '' }, // London
                { x: 196, y: 16, name: '' }, // New York
                { x: 242, y: 15, name: '' }, // Singapore
                { x: 276, y: 28, name: '' }, // Tokyo
                { x: 88, y: 32, name: '' }, // Nairobi
                { x: 192, y: 29, name: '' }, // Johannesburg
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy={node.y} r={2.5 + s(0.08, i) * 0.5} fill="#06B6D4" opacity={op(0.4, 0.05, i)} />
                  <circle cx={node.x} cy={node.y} r={5 + s(0.08, i) * 0.5} fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.4" />
                  <text x={node.x + 4} y={node.y + 1.5} fontSize="3.5" fill="#64748b" fontFamily="monospace" fontWeight="bold">{node.name}</text>
                </g>
              ))}

              {/* Connected Data Arcs */}
              {[
                [55, 18, 154, 22],
                [108, 15, 242, 15],
                [154, 22, 276, 28],
                [196, 16, 55, 18],
                [88, 32, 192, 29]
              ].map(([x1, y1, x2, y2], i) => {
                const mx = (x1 + x2) / 2;
                const my = Math.min(y1, y2) - 8;
                return (
                  <path 
                    key={i} 
                    d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`} 
                    fill="none" 
                    stroke={`rgba(6,182,212,${op(0.15, 0.04, i)})`} 
                    strokeWidth="0.6" 
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* ── BOTTOM STATISTICS HUD ── */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between border-t border-cyan-500/10 bg-slate-950/70 backdrop-blur-md relative z-10">
          {[
            { label: '', val: '' },
            { label: '', val: '' },
            { label: '', val: '' },
            { label: '', val: '' },
            { label: '', val: '' }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-[7px] font-mono text-slate-500 tracking-wider font-semibold">{stat.label}</span>
              <span className="text-[10px] font-mono font-bold text-cyan-400 mt-0.5">{stat.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Slide Dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {SCENES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSelectScene(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === scene ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
            title={`View ${SCENES[i].label}`}
          />
        ))}
      </div>
    </div>
  );
}

const SCENES = [
  { id: 1, label: '', short: '' },
  { id: 2, label: '', short: '' },
  { id: 3, label: '', short: '' },
  { id: 4, label: '', short: '' },
  { id: 5, label: '', short: '' },
  { id: 6, label: '', short: '' },
];

/* ═══════════════════════════════════════════════════════════
   MAIN HERO
   ═══════════════════════════════════════════════════════════ */
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">

      {/* ── CINEMATIC CANVAS TECH VISUALIZER BACKGROUND ─────────── */}
      <TechCanvasBackground />
      
      {/* Layered dark overlays for text readability and cinematic depth */}
      {/* Left-side dark gradient to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-transparent pointer-events-none" />
      {/* Bottom dark gradient to blend into the next section */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />

      {/* ── BACKGROUND GLOWS ───────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/10 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px] opacity-70" />
        <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[150px] opacity-50" />
        
        {/* Edge lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-32 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center w-full">

          {/* ── LEFT SIDE (INFO COLUMN) ──────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* ── PREMIUM COMPANY BRAND & LOGO ── */}
            <div 
              className={`flex items-center gap-3.5 w-fit px-4 py-2.5 rounded-2xl border border-cyan-500/25 bg-slate-900/40 backdrop-blur-md shadow-[0_4px_30px_rgba(6,182,212,0.1)] transition-all duration-1000 transform ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
              }`}
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-500/25 border border-cyan-400/30">
                <div className="absolute inset-0 rounded-xl bg-cyan-400/10 animate-pulse" />
                
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm md:text-base text-white tracking-[0.2em]" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                  
                </span>
                <span className="text-[9px] font-bold text-cyan-400/90 tracking-[0.35em] uppercase">
                  
                </span>
              </div>
            </div>

            {/* Live badge */}
            <div 
              className={`flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-cyan-500/35 bg-slate-900/30 backdrop-blur-md transition-all duration-1000 delay-100 transform ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-70"/>
                <span className="relative rounded-full h-2 w-2 bg-cyan-400"/>
              </span>
              <span className="text-[10px] font-bold text-cyan-400 tracking-[.18em] uppercase">
                
              </span>
            </div>

            {/* Headline with staggered entry animation */}
            <div className={`flex flex-col gap-1 transition-all duration-1000 delay-200 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="font-black leading-[1.05] tracking-tight"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4.2rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                <span className="text-white"></span>
                <span className="text-cyan-400"></span>
                <span className="text-white"></span>
                <span className="text-cyan-400"></span>
              </h1>
              <h1 className="font-black leading-[1.05] tracking-tight"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4.2rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)',background:'linear-gradient(90deg,#fff 0%,#BAE6FD 50%,#06B6D4 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                
              </h1>
              <h1 className="font-black leading-[1.05] tracking-tight text-slate-100"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4.2rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                
              </h1>
            </div>

            {/* Divider */}
            <div className={`flex items-center gap-3 transition-all duration-1000 delay-300 transform ${
              mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50 origin-left'
            }`}>
              <div className="h-px w-12 bg-cyan-400"/>
              <div className="h-px max-w-sm flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
            </div>

            {/* Subheadline */}
            <p className={`text-[#CBD5E1] leading-relaxed max-w-xl transition-all duration-1000 delay-400 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
               style={{fontSize:'clamp(.95rem,1.5vw,1.1rem)',fontFamily:'var(--font-inter,Inter,sans-serif)'}}>
              
            </p>

            {/* Feature tags */}
            <div className={`flex flex-wrap gap-2.5 transition-all duration-1000 delay-500 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {[
                {icon:Shield,label:''},
                {icon:Server,label:''},
                {icon:Cloud,label:''},
                {icon:Cpu,label:''},
                {icon:Globe,label:''},
                {icon:Lock,label:''},
              ].map(({icon:Icon,label},idx)=>(
                <span key={idx} className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-blue-200 text-xs font-semibold border border-blue-500/25 bg-blue-950/20 backdrop-blur-sm">
                  <Icon className="w-3.5 h-3.5 text-cyan-400"/>
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-2 transition-all duration-1000 delay-600 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Primary */}
              <Link href="/contact"
                    className="group flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      fontSize:'15px',
                      fontFamily:'var(--font-inter,Inter,sans-serif)',
                      background:'linear-gradient(135deg,#2563EB 0%,#0284C7 100%)',
                      boxShadow:'0 8px 32px rgba(37,99,235,.4)'
                    }}
                    id="hero-cta-primary">
                
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>

              {/* Secondary */}
              <Link href="/services"
                    className="group flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/10 bg-white/5 backdrop-blur-md"
                    style={{
                      fontSize:'15px',
                      fontFamily:'var(--font-inter,Inter,sans-serif)'
                    }}
                    id="hero-cta-secondary">
                
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"/>
              </Link>
            </div>

            {/* Trust strip */}
            <div className={`flex items-center gap-4 pt-3 border-t border-white/5 transition-all duration-1000 delay-700 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex -space-x-1.5">
                {([['#1D4ED8',''],['#0E7490',''],['#1E40AF',''],['#312E81','']] as [string,string][]).map(([bg,label],i)=>(
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                       style={{backgroundColor:bg,borderColor:'#020617'}}>
                    <span className="text-white text-[7px] font-bold"></span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                <span className="text-white font-semibold"></span><br/>
                <span className="text-white font-semibold"></span>
              </p>
            </div>
          </div>

          {/* ── RIGHT SIDE (VISUALIZATION COLUMN) ─────── */}
          <div className="lg:col-span-5 hidden lg:block h-[620px]">
            <div className={`w-full h-full transition-all duration-1000 delay-500 transform ${
              mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <TechVisualization/>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-35">
        <span className="text-[9px] font-mono text-slate-500 tracking-[.3em]"></span>
        <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce"/>
      </div>
    </section>
  );
}
