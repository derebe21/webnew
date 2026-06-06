'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, ChevronDown } from 'lucide-react';
import Link from 'next/link';

/* ═══════════════════════════════════════════════════════════
   CINEMATIC CYBERSECURITY CANVAS — INSA DESIGN STYLE
   Large centered glowing shield, datacenter racks on sides,
   horizontal light streaks, atmospheric haze, scan lines
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

    // ── Floating particles ──
    class Particle {
      x = 0; y = 0; size = 0; speed = 0; opacity = 0; drift = 0;
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.3;
        this.speed = Math.random() * 0.3 + 0.05;
        this.opacity = Math.random() * 0.4 + 0.05;
        this.drift = (Math.random() - 0.5) * 0.2;
      }
      update() {
        this.y -= this.speed;
        this.x += this.drift;
        if (this.y < -5) { this.y = height + 5; this.x = Math.random() * width; }
      }
      draw() {
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ── Falling data characters ──
    class DataColumn {
      x = 0; y = 0; speed = 0; chars: string[] = []; opacity = 0;
      constructor() { this.init(); }
      init() {
        this.x = Math.random() * width;
        this.y = -Math.random() * height * 0.5;
        this.speed = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.12 + 0.03;
        const len = Math.floor(Math.random() * 12) + 4;
        this.chars = Array.from({ length: len }, () =>
          String.fromCharCode(Math.random() > 0.5 ? 48 + Math.floor(Math.random() * 10) : 65 + Math.floor(Math.random() * 26))
        );
      }
      update() { this.y += this.speed; if (this.y > height + 200) this.init(); }
      draw() {
        ctx.font = '11px monospace';
        this.chars.forEach((c, i) => {
          const a = (1 - i / this.chars.length) * this.opacity;
          ctx.fillStyle = `rgba(59, 130, 246, ${a})`;
          ctx.fillText(c, this.x, this.y - i * 15);
        });
      }
    }

    const particles: Particle[] = Array.from({ length: 100 }, () => new Particle());
    const dataCols: DataColumn[] = Array.from({ length: 20 }, () => new DataColumn());

    let tick = 0;

    // ── Draw datacenter server racks on both sides ──
    const drawDatacenterRacks = () => {
      const rackAlpha = 0.12;

      // Left racks
      for (let r = 0; r < 5; r++) {
        const rx = 15 + r * 48;
        const ry = height * 0.15;
        const rw = 38;
        const rh = height * 0.7;

        // Rack frame
        ctx.strokeStyle = `rgba(30, 64, 175, ${rackAlpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(rx, ry, rw, rh);

        // Top bar
        ctx.fillStyle = `rgba(30, 64, 175, ${rackAlpha * 0.5})`;
        ctx.fillRect(rx, ry, rw, 8);

        // Server slots with LEDs
        const slotCount = 12;
        for (let s = 0; s < slotCount; s++) {
          const slotH = (rh - 20) / slotCount - 3;
          const sy = ry + 12 + s * (slotH + 3);
          ctx.strokeStyle = `rgba(30, 64, 175, ${rackAlpha * 0.6})`;
          ctx.strokeRect(rx + 3, sy, rw - 6, slotH);

          // LED indicators
          const led1On = Math.sin(tick * 0.08 + r * 1.3 + s * 0.5) > 0.2;
          const led2On = Math.sin(tick * 0.06 + r * 2.1 + s * 0.9) > 0;
          ctx.fillStyle = led1On ? `rgba(34, 197, 94, ${rackAlpha * 2.5})` : `rgba(30, 64, 175, ${rackAlpha * 0.3})`;
          ctx.fillRect(rx + 6, sy + 2, 2, 2);
          ctx.fillStyle = led2On ? `rgba(59, 130, 246, ${rackAlpha * 2})` : `rgba(30, 64, 175, ${rackAlpha * 0.3})`;
          ctx.fillRect(rx + 10, sy + 2, 2, 2);

          // Subtle horizontal lines inside slot
          ctx.strokeStyle = `rgba(30, 64, 175, ${rackAlpha * 0.3})`;
          ctx.beginPath();
          ctx.moveTo(rx + 15, sy + slotH / 2);
          ctx.lineTo(rx + rw - 6, sy + slotH / 2);
          ctx.stroke();
        }
      }

      // Right racks (mirrored)
      for (let r = 0; r < 5; r++) {
        const rx = width - 53 - r * 48;
        const ry = height * 0.15;
        const rw = 38;
        const rh = height * 0.7;

        ctx.strokeStyle = `rgba(30, 64, 175, ${rackAlpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(rx, ry, rw, rh);
        ctx.fillStyle = `rgba(30, 64, 175, ${rackAlpha * 0.5})`;
        ctx.fillRect(rx, ry, rw, 8);

        const slotCount = 12;
        for (let s = 0; s < slotCount; s++) {
          const slotH = (rh - 20) / slotCount - 3;
          const sy = ry + 12 + s * (slotH + 3);
          ctx.strokeStyle = `rgba(30, 64, 175, ${rackAlpha * 0.6})`;
          ctx.strokeRect(rx + 3, sy, rw - 6, slotH);

          const led1On = Math.sin(tick * 0.07 + r * 1.7 + s * 0.6) > 0.1;
          const led2On = Math.sin(tick * 0.05 + r * 2.3 + s * 1.1) > 0;
          ctx.fillStyle = led1On ? `rgba(34, 197, 94, ${rackAlpha * 2.5})` : `rgba(30, 64, 175, ${rackAlpha * 0.3})`;
          ctx.fillRect(rx + rw - 8, sy + 2, 2, 2);
          ctx.fillStyle = led2On ? `rgba(59, 130, 246, ${rackAlpha * 2})` : `rgba(30, 64, 175, ${rackAlpha * 0.3})`;
          ctx.fillRect(rx + rw - 12, sy + 2, 2, 2);
        }
      }

      // Floor perspective lines
      ctx.strokeStyle = `rgba(30, 64, 175, ${rackAlpha * 0.4})`;
      ctx.lineWidth = 1;
      const floorY = height * 0.85;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(width / 2, floorY);
        const angle = (i / 8) * Math.PI - Math.PI / 2;
        ctx.lineTo(width / 2 + Math.cos(angle) * width, height);
        ctx.stroke();
      }
    };

    // ── Draw the ITSEC Shield Logo (large, centered, glowing) ──
    const drawShieldLogo = () => {
      const cx = width / 2;
      const cy = height / 2 - 15;
      const scale = Math.min(width, height) / 650;
      const glowPulse = 0.7 + Math.sin(tick * 0.02) * 0.3;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      // ── Large outer glow rings ──
      for (let r = 5; r >= 1; r--) {
        ctx.beginPath();
        ctx.arc(0, 0, 130 + r * 30, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.03 * r * glowPulse})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Rotating dashed energy ring
      ctx.save();
      ctx.rotate(tick * 0.003);
      ctx.beginPath();
      ctx.arc(0, 0, 170, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * glowPulse})`;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([15, 20]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Counter-rotating ring
      ctx.save();
      ctx.rotate(-tick * 0.002);
      ctx.beginPath();
      ctx.arc(0, 0, 195, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * glowPulse})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 25]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // ── Outer shield shape ──
      ctx.beginPath();
      ctx.moveTo(0, -115);
      ctx.bezierCurveTo(70, -110, 105, -70, 105, -25);
      ctx.bezierCurveTo(105, 45, 65, 90, 0, 120);
      ctx.bezierCurveTo(-65, 90, -105, 45, -105, -25);
      ctx.bezierCurveTo(-105, -70, -70, -110, 0, -115);
      ctx.closePath();

      // Shield glow
      ctx.shadowBlur = 40;
      ctx.shadowColor = `rgba(56, 189, 248, ${0.5 * glowPulse})`;
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.7 * glowPulse})`;
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Shield fill
      ctx.fillStyle = `rgba(15, 23, 42, 0.6)`;
      ctx.fill();

      // ── Inner shield ──
      ctx.beginPath();
      ctx.moveTo(0, -75);
      ctx.bezierCurveTo(42, -72, 68, -48, 68, -15);
      ctx.bezierCurveTo(68, 30, 42, 60, 0, 80);
      ctx.bezierCurveTo(-42, 60, -68, 30, -68, -15);
      ctx.bezierCurveTo(-68, -48, -42, -72, 0, -75);
      ctx.closePath();
      ctx.fillStyle = `rgba(37, 99, 235, ${0.2 * glowPulse})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(96, 165, 250, ${0.5 * glowPulse})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // ── Keyhole ──
      ctx.beginPath();
      ctx.arc(0, -18, 18, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(10, 15, 30, 0.85)';
      ctx.fill();
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.6 * glowPulse})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Keyhole slot
      ctx.beginPath();
      ctx.moveTo(-10, -8);
      ctx.lineTo(-7, 35);
      ctx.lineTo(7, 35);
      ctx.lineTo(10, -8);
      ctx.closePath();
      ctx.fillStyle = 'rgba(10, 15, 30, 0.85)';
      ctx.fill();
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.6 * glowPulse})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Keyhole inner glow
      ctx.beginPath();
      ctx.arc(0, -18, 8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${0.15 * glowPulse})`;
      ctx.fill();

      // ── Circuit board nodes around shield ──
      const nodes = [
        { x: 0, y: -125 },
        { x: 85, y: -85 },
        { x: 110, y: -10 },
        { x: 80, y: 70 },
        { x: 0, y: 130 },
        { x: -80, y: 70 },
        { x: -110, y: -10 },
        { x: -85, y: -85 },
      ];

      // Circuit trace lines connecting nodes
      ctx.strokeStyle = `rgba(37, 99, 235, ${0.4 * glowPulse})`;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < nodes.length; i++) {
        const next = nodes[(i + 1) % nodes.length];
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        const mx = (nodes[i].x + next.x) / 2;
        ctx.lineTo(mx, nodes[i].y);
        ctx.lineTo(mx, next.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
      }

      // Draw the nodes
      nodes.forEach((n, i) => {
        const pulse = Math.sin(tick * 0.04 + i * 0.9) * 0.3 + 0.7;
        // Outer ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 23, 42, 0.8)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.6 * pulse * glowPulse})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Inner dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.8 * pulse * glowPulse})`;
        ctx.fill();
      });

      // ── Traveling data pulse along circuit ──
      const progress = (tick * 0.015) % nodes.length;
      const fromI = Math.floor(progress);
      const toI = (fromI + 1) % nodes.length;
      const t = progress - fromI;
      const px = nodes[fromI].x + (nodes[toI].x - nodes[fromI].x) * t;
      const py = nodes[fromI].y + (nodes[toI].y - nodes[fromI].y) * t;
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, 0.9)`;
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();
    };

    // ── Horizontal light streaks / lens flares ──
    const drawLightStreaks = () => {
      const cy = height * 0.48;

      // Main horizontal streak
      const streakGrad = ctx.createLinearGradient(0, cy, width, cy);
      streakGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      streakGrad.addColorStop(0.3, 'rgba(56, 189, 248, 0.03)');
      streakGrad.addColorStop(0.5, `rgba(56, 189, 248, ${0.08 + Math.sin(tick * 0.015) * 0.03})`);
      streakGrad.addColorStop(0.7, 'rgba(56, 189, 248, 0.03)');
      streakGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = streakGrad;
      ctx.fillRect(0, cy - 1, width, 3);

      // Secondary thin streaks
      for (let i = 0; i < 3; i++) {
        const sy = cy + (i - 1) * 40;
        const alpha = 0.02 + Math.sin(tick * 0.01 + i) * 0.01;
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.fillRect(0, sy, width, 1);
      }

      // Central lens flare glow
      const flareCx = width / 2;
      const flareCy = cy;
      const flareGrad = ctx.createRadialGradient(flareCx, flareCy, 0, flareCx, flareCy, 200);
      flareGrad.addColorStop(0, `rgba(56, 189, 248, ${0.06 + Math.sin(tick * 0.02) * 0.02})`);
      flareGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = flareGrad;
      ctx.fillRect(flareCx - 200, flareCy - 200, 400, 400);
    };

    // ── Horizontal scan line ──
    const drawScanLine = () => {
      const scanY = (tick * 1.2) % (height + 80) - 40;
      const grad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
      grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 20, width, 40);
    };

    // ── Faint grid ──
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(30, 64, 175, 0.03)';
      ctx.lineWidth = 1;
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }
      for (let x = 0; x < width; x += 50) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
    };

    // ── HUD text overlays ──
    const drawHUDText = () => {
      ctx.font = '9px monospace';
      ctx.fillStyle = `rgba(56, 189, 248, 0.15)`;

      // Top left
      ctx.fillText('SYS.STATUS: ONLINE', 20, 25);
      ctx.fillText(`THREAT.LEVEL: LOW`, 20, 38);
      ctx.fillText(`UPTIME: ${Math.floor(tick / 60)}m ${tick % 60}s`, 20, 51);

      // Top right
      ctx.textAlign = 'right';
      ctx.fillText('ENCRYPTION: AES-256', width - 20, 25);
      ctx.fillText('FIREWALL: ACTIVE', width - 20, 38);
      ctx.fillText('SOC.MONITOR: ARMED', width - 20, 51);
      ctx.textAlign = 'left';

      // Bottom left
      ctx.fillText('NET.TRAFFIC: NORMAL', 20, height - 30);

      // Bottom right
      ctx.textAlign = 'right';
      ctx.fillText('CYBER.DEFENSE.GRID: OPERATIONAL', width - 20, height - 30);
      ctx.textAlign = 'left';
    };

    // ═══ MAIN ANIMATION LOOP ═══
    const animate = () => {
      tick++;

      // Dark base
      ctx.fillStyle = '#070b16';
      ctx.fillRect(0, 0, width, height);

      // Central atmospheric glow
      const cx = width / 2;
      const cy = height / 2;
      const atmo = ctx.createRadialGradient(cx, cy - 20, 0, cx, cy - 20, Math.max(width, height) * 0.55);
      atmo.addColorStop(0, 'rgba(30, 58, 138, 0.15)');
      atmo.addColorStop(0.3, 'rgba(15, 23, 42, 0.08)');
      atmo.addColorStop(1, 'rgba(7, 11, 22, 0)');
      ctx.fillStyle = atmo;
      ctx.fillRect(0, 0, width, height);

      // Layers
      drawGrid();
      drawDatacenterRacks();
      drawLightStreaks();
      drawScanLine();

      // Data columns
      dataCols.forEach(d => { d.update(); d.draw(); });

      // Particles
      particles.forEach(p => { p.update(); p.draw(); });

      // Central shield logo
      drawShieldLogo();

      // HUD text
      drawHUDText();

      // Vignette overlays
      const topV = ctx.createLinearGradient(0, 0, 0, height * 0.2);
      topV.addColorStop(0, 'rgba(7, 11, 22, 0.7)');
      topV.addColorStop(1, 'rgba(7, 11, 22, 0)');
      ctx.fillStyle = topV;
      ctx.fillRect(0, 0, width, height * 0.2);

      const botV = ctx.createLinearGradient(0, height * 0.8, 0, height);
      botV.addColorStop(0, 'rgba(7, 11, 22, 0)');
      botV.addColorStop(1, 'rgba(7, 11, 22, 0.85)');
      ctx.fillStyle = botV;
      ctx.fillRect(0, height * 0.8, width, height * 0.2);

      // Side vignettes for depth
      const leftV = ctx.createLinearGradient(0, 0, width * 0.15, 0);
      leftV.addColorStop(0, 'rgba(7, 11, 22, 0.5)');
      leftV.addColorStop(1, 'rgba(7, 11, 22, 0)');
      ctx.fillStyle = leftV;
      ctx.fillRect(0, 0, width * 0.15, height);

      const rightV = ctx.createLinearGradient(width * 0.85, 0, width, 0);
      rightV.addColorStop(0, 'rgba(7, 11, 22, 0)');
      rightV.addColorStop(1, 'rgba(7, 11, 22, 0.5)');
      ctx.fillStyle = rightV;
      ctx.fillRect(width * 0.85, 0, width * 0.15, height);

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
   MAIN HERO — CENTERED LAYOUT (INSA-STYLE)
   ═══════════════════════════════════════════════════════════ */
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#070b16' }}
    >
      {/* ── CINEMATIC CANVAS ── */}
      <CyberCanvas />

      {/* ── Semi-transparent overlay for text readability ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#070b16]/30 via-transparent to-[#070b16]/60 pointer-events-none" />

      {/* ── CENTERED CONTENT ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-5">

        {/* Tagline badge */}
        <div
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-sky-400/25 bg-slate-900/50 backdrop-blur-lg transition-all duration-1000 transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          <Shield className="w-4 h-4 text-sky-400" />
          <span
            className="text-[11px] font-semibold text-sky-300 tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
          >
            Securing Ethiopia&apos;s Digital Future
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`font-black leading-[1.08] tracking-tight text-white transition-all duration-1000 delay-200 transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
          }}
        >
          ITSEC Technology
        </h1>

        {/* Sub Headline */}
        <h2
          className={`font-semibold leading-snug transition-all duration-1000 delay-300 transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.35rem)',
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
            color: '#94A3B8',
          }}
        >
          Secure • Intelligent • Future-Ready ICT Solutions
        </h2>

        {/* CTA Buttons — matching INSA style */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 pt-6 transition-all duration-1000 delay-500 transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Primary (filled blue) */}
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2.5 px-10 py-4 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.5)]"
            style={{
              fontSize: '15px',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,0.35)',
            }}
            id="hero-cta-primary"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Secondary (outlined white) */}
          <Link
            href="/services"
            className="group flex items-center justify-center gap-2.5 px-10 py-4 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30"
            style={{
              fontSize: '15px',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
            id="hero-cta-secondary"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
          </Link>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono text-slate-500 tracking-[.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce" />
      </div>
    </section>
  );
}
