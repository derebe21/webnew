'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Shield, Server, Lock } from 'lucide-react';

const SLIDES = [
  '/images/CS.png',
  '/images/datacenter-server-racks-bg.jpg',
  '/images/integrated-security-surveillance-bg.jpg',
];

const SLIDE_DURATION = 4000;

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020611]" />;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020611] font-sans"
    >
      {/* ── KEN BURNS CINEMATIC SLIDESHOW ── */}
      {SLIDES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            active === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              transform: active === index ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 6000ms ease-out',
            }}
          />
          {/* Slight overlay for text readability */}
          <div className="absolute inset-0 bg-[#020611]/40" />
        </div>
      ))}

      {/* Top & Bottom fade blends */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020611] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#020611] to-transparent pointer-events-none z-10" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 w-full max-w-5xl mx-auto mt-16">
        <div className="flex flex-col items-center text-center">

          {/* Spinning Logo */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 animate-[spin_10s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-cyan-500/50 border-t-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
            <div className="absolute inset-2 rounded-full border border-blue-500/40 border-b-blue-300 animate-[spin_8s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#020611]/50 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-xl">
                <img
                  src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png"
                  alt="ITSEC Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Glass Card with text content */}
          <div className="bg-[#020611]/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              ITSEC Technology
            </h1>

            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium tracking-[0.2em] uppercase mb-8">
              Empowering Secure Digital Transformation
            </p>

            {/* Feature icons row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-8">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-cyan-50 font-medium text-sm tracking-widest uppercase">Cybersecurity</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-blue-50 font-medium text-sm tracking-widest uppercase">Data Center</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md">
                  <Lock className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-indigo-50 font-medium text-sm tracking-widest uppercase">Security Systems</span>
              </div>
            </div>

            <div className="h-px w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-10" />
          </div>

        </div>
      </div>

      {/* ── SLIDE PROGRESS DOTS ── */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === index
                ? 'w-10 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] font-mono text-cyan-200 tracking-[0.3em] uppercase bg-[#020611]/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          Scroll to explore
        </span>
        <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce drop-shadow-[0_0_10px_rgba(34,211,238,1)]" />
      </div>
    </section>
  );
}
