'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020611]" />;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020611] font-sans"
    >
      {/* ── BACKGROUND IMAGE (Fully Foreground) ── */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/images/cyber-security-world-bg.jpg')] bg-cover bg-center animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Subtle radial gradient to ensure text readability without hiding the globe */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020611_120%)]" />
      </div>

      {/* Edge Gradients for smooth blending with the next section */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020611] to-transparent z-[1] pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 w-full max-w-5xl mx-auto mt-16">
        
        <div className="flex flex-col items-center justify-center text-center animate-fade-up">
          
          {/* Logo */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 animate-[spin_10s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-cyan-500/50 border-t-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
            <div className="absolute inset-2 rounded-full border border-blue-500/40 border-b-blue-300 animate-[spin_8s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#020611]/50 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-xl">
                <img src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png" alt="ITSEC Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
            </div>
          </div>

          {/* Main Typography */}
          <div className="bg-[#020611]/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              ITSEC Technology
            </h1>
            <p className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-light tracking-wide uppercase tracking-[0.2em] mb-4">
              Empowering Secure Digital Transformation
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
          </div>

        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] font-mono text-cyan-200 tracking-[0.3em] uppercase">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
}
