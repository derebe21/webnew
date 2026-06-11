'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Shield, Server, Lock } from 'lucide-react';

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
      {/* ── ACTUAL LOCAL VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/cyber-security-world-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#020611]/45" />
      </div>

      {/* Edge Gradients */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020611] to-transparent z-[1] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020611] to-transparent z-[1] pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 w-full max-w-5xl mx-auto mt-16">

        <div className="flex flex-col items-center text-center">

          {/* Spinning Logo Ring */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 animate-[spin_10s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-cyan-500/60 border-t-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.6)]" />
            <div className="absolute inset-2 rounded-full border border-blue-500/40 border-b-blue-300 animate-[spin_8s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#020611]/60 border border-cyan-400/60 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] backdrop-blur-xl">
                <img
                  src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png"
                  alt="ITSEC Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>

          {/* Glass Content Card */}
          <div className="bg-[#020611]/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              ITSEC Technology
            </h1>

            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium tracking-[0.15em] uppercase mb-10">
              Empowering Secure Digital Transformation
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400/40 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  <Shield className="w-7 h-7 text-cyan-400" />
                </div>
                <span className="text-cyan-100 font-semibold text-sm tracking-widest uppercase">Cybersecurity</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden md:block" />
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-400/40 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <Server className="w-7 h-7 text-blue-400" />
                </div>
                <span className="text-blue-100 font-semibold text-sm tracking-widest uppercase">Data Center</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden md:block" />
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-400/40 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  <Lock className="w-7 h-7 text-indigo-400" />
                </div>
                <span className="text-indigo-100 font-semibold text-sm tracking-widest uppercase">Security Systems</span>
              </div>
            </div>

            <div className="h-px w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-10" />
          </div>

        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] font-mono text-cyan-200 tracking-[0.3em] uppercase bg-[#020611]/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          Scroll to explore
        </span>
        <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce drop-shadow-[0_0_10px_rgba(34,211,238,1)]" />
      </div>
    </section>
  );
}
