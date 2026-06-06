'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   HERO COMPONENT (VIDEO BACKGROUND)
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
      {/* ── VIDEO BACKGROUND ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── GRADIENT OVERLAYS ── */}
      {/* Top gradient for smooth navigation integration */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020611] to-transparent z-[1] pointer-events-none" />
      {/* Bottom gradient to blend into next section */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#020611] via-[#020611]/40 to-transparent pointer-events-none" />

      {/* ── CENTERED HERO CONTENT ── */}
      {mounted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] px-4">
          <div className="animate-fade-up flex flex-col items-center justify-center mb-8 mt-12">
            {/* The user requested all text be removed previously, so we leave this empty */}
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
