'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Shield, ArrowRight } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   TIMELINE CANVAS ENGINE (1:19 Duration Loop)
   ═══════════════════════════════════════════════════════════ */
function TimelineCanvas() {
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

    // Timeline Configuration
    const DURATION = 79000; // 79 seconds
    let startTime = performance.now();

    // Elements State
    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 1.5 + 0.5,
      baseAlpha: Math.random() * 0.5 + 0.2
    }));

    const streaks = Array.from({ length: 10 }, () => ({
      x: -Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 15 + 10,
      length: Math.random() * 200 + 100,
      alpha: Math.random() * 0.5 + 0.2
    }));

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) % DURATION;
      const sec = elapsed / 1000;

      // Reset canvas
      ctx.fillStyle = '#020611'; // Deep cinematic navy
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // ── GLOBAL STATE VARS BY TIME ──
      let particleSpeedMultiplier = 1;
      let particleFlowToCenter = false;
      let neonGlowIntensity = 1;
      let hudOpacity = 0;
      let depthOpacity = 0;
      let streakOpacity = 0;
      let socPulse = 0;
      let reflectionPos = 0;
      let dataBarsOpacity = 0;

      // 0:00 - 0:05 | HUD fades in, slow particles
      if (sec < 5) {
        hudOpacity = sec / 5; // fade in
        particleSpeedMultiplier = 0.5;
      }
      // 0:05 - 0:10 | Depth increases, glowing lines
      else if (sec < 10) {
        hudOpacity = 1;
        depthOpacity = (sec - 5) / 5;
        neonGlowIntensity = 1.2;
      }
      // 0:10 - 0:15 | Light streaks L->R, HUD flickers
      else if (sec < 15) {
        hudOpacity = Math.random() > 0.95 ? 0.5 : 1; // Flicker
        depthOpacity = 1;
        streakOpacity = (sec - 10) / 2; // Fade in streaks
      }
      // 0:15 - 0:20 | Data center, holographic lines pulse
      else if (sec < 20) {
        hudOpacity = 1;
        depthOpacity = 1;
        streakOpacity = 1;
        socPulse = Math.sin((sec - 15) * Math.PI) * 0.5 + 0.5; // Pulse
      }
      // 0:20 - 0:25 | Continuous monitoring, SOC
      else if (sec < 25) {
        hudOpacity = 1;
        depthOpacity = 1;
        streakOpacity = 0.5;
        socPulse = 1; // Constant active scan
      }
      // 0:25 - 0:30 | Digital overlays move subtly, light reflections
      else if (sec < 30) {
        hudOpacity = 1;
        depthOpacity = 1;
        reflectionPos = (sec - 25) / 5; // 0 to 1
      }
      // 0:30 - 0:40 | Floating particles, neon edges glow brighter
      else if (sec < 40) {
        hudOpacity = 1;
        depthOpacity = 1;
        neonGlowIntensity = 2.0 + Math.sin(sec * 4) * 0.5;
      }
      // 0:40 - 0:50 | Panels animate, Data visualization
      else if (sec < 50) {
        hudOpacity = 1;
        depthOpacity = 1;
        dataBarsOpacity = Math.min((sec - 40) / 2, 1);
      }
      // 0:50 - 1:00 | Blue light streaks create depth, HUD shift
      else if (sec < 60) {
        hudOpacity = 1;
        depthOpacity = 1 + Math.sin(sec * 2) * 0.2;
        streakOpacity = 1.5; // High intensity streaks
        particleSpeedMultiplier = 2.0;
      }
      // 1:00 - 1:10 | Particles flow toward center, rhythm pulse
      else if (sec < 70) {
        hudOpacity = 1;
        depthOpacity = 1;
        particleFlowToCenter = true;
        socPulse = Math.pow(Math.sin(sec * Math.PI * 2), 2); // Heartbeat pulse
      }
      // 1:10 - 1:19 | Final loop, seamless return
      else {
        hudOpacity = 1 - (sec - 75) / 4; // Fade out HUD slightly at very end
        if (hudOpacity < 0) hudOpacity = 0;
        depthOpacity = 1 - (sec - 75) / 4;
        if (depthOpacity < 0) depthOpacity = 0;
        streakOpacity = 1 - (sec - 75) / 4;
        if (streakOpacity < 0) streakOpacity = 0;
      }

      // ── DRAWING LOGIC ──

      // 1. Data Visualization Bars (0:40 - 0:50 primarily)
      if (dataBarsOpacity > 0) {
        ctx.fillStyle = `rgba(20, 174, 180, ${dataBarsOpacity * 0.1})`;
        for (let i = 0; i < 20; i++) {
          const barHeight = (Math.sin(sec * 3 + i) * 0.5 + 0.5) * 200;
          ctx.fillRect(width - 150 + i * 8, height - barHeight - 50, 4, barHeight);
        }
      }

      // 2. Data Center Depth / Glowing Panels
      if (depthOpacity > 0) {
        ctx.strokeStyle = `rgba(27, 117, 214, ${depthOpacity * 0.1 * neonGlowIntensity})`;
        ctx.lineWidth = 1;
        for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.moveTo(0, height * 0.5 + i * 50);
          ctx.lineTo(width, height * 0.5 + i * 50 + Math.sin(sec + i) * 100);
          ctx.stroke();
        }
      }

      // 3. SOC Pulse / Holographic Lines
      if (socPulse > 0) {
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(width, height) * socPulse, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(20, 174, 180, ${0.1 * (1 - socPulse)})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 4. HUD Elements
      if (hudOpacity > 0) {
        ctx.save();
        ctx.translate(cx, cy);
        // Shift position subtly during 0:50-1:00
        if (sec >= 50 && sec < 60) {
          ctx.rotate(Math.sin(sec) * 0.05);
          ctx.scale(1 + Math.sin(sec * 2) * 0.02, 1 + Math.cos(sec * 2) * 0.02);
        } else {
          ctx.rotate(sec * 0.2); // Slow default rotation
        }

        ctx.strokeStyle = `rgba(20, 174, 180, ${0.3 * hudOpacity})`;
        ctx.lineWidth = 1.5;
        
        ctx.beginPath();
        ctx.arc(0, 0, 300, 0, Math.PI * 2 * hudOpacity);
        ctx.stroke();

        ctx.setLineDash([10, 20]);
        ctx.beginPath();
        ctx.arc(0, 0, 320, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 5. Light Reflections (0:25 - 0:30)
      if (reflectionPos > 0 && reflectionPos < 1) {
        const grad = ctx.createLinearGradient(
          reflectionPos * width - 200, 0, 
          reflectionPos * width, height
        );
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0.05)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // 6. Streaks (0:10+)
      if (streakOpacity > 0) {
        ctx.strokeStyle = `rgba(20, 174, 180, ${0.6 * streakOpacity})`;
        ctx.lineWidth = 2;
        streaks.forEach(s => {
          s.x += s.speed;
          if (s.x > width) {
            s.x = -s.length;
            s.y = Math.random() * height;
          }
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x + s.length, s.y);
          ctx.stroke();
        });
      }

      // 7. Particles (Data Flow)
      ctx.fillStyle = `rgba(27, 117, 214, ${0.8 * neonGlowIntensity})`;
      particles.forEach(p => {
        if (particleFlowToCenter) {
          // Flow toward center
          const dx = cx - p.x;
          const dy = cy - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 10) {
            p.x += (dx / dist) * 5;
            p.y += (dy / dist) * 5;
          }
        } else {
          // Normal drift
          p.x += p.vx * particleSpeedMultiplier;
          p.y += p.vy * particleSpeedMultiplier;
          
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80" />;
}

/* ═══════════════════════════════════════════════════════════
   HERO COMPONENT
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
      {/* ── TIMELINE CANVAS (80 Sec Loop) ── */}
      <TimelineCanvas />

      {/* ── GRADIENT OVERLAY ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#020611] via-transparent to-transparent pointer-events-none" />

      {/* ── CENTERED HERO CONTENT ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] px-4">
          
          <div className="animate-fade-up flex flex-col items-center justify-center mb-8 mt-12">
            
            
            {/* MAIN HEADLINE */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(20,174,180,0.5)] text-center max-w-6xl leading-tight">
              ITSEC <span className="text-[#14aeb4] font-light">Technology</span>
            </h1>

            {/* NEW REQUIRED SLOGAN */}
            <h2 className="mt-6 text-xl md:text-2xl text-[#14aeb4] font-bold tracking-[0.1em] uppercase drop-shadow-md text-center">
              Secure • Intelligent • Future-Ready ICT Solutions
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
        <span className="text-[9px] font-mono text-[#14aeb4] tracking-[.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#14aeb4] animate-bounce" />
      </div>
    </section>
  );
}
