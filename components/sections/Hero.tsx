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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020611] font-sans"
    >
      {/* ── BACKGROUND IMAGE (Right-Aligned) ── */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div 
          className="w-full md:w-2/3 h-full bg-[url('/images/cyber-security-world-bg.jpg')] bg-cover bg-[center_right] animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Gradient mask to blend the image into the dark left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020611] via-[#020611]/80 to-transparent md:w-3/4" />
      </div>

      {/* Edge Gradients for smooth blending with the next section */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020611] to-transparent z-[1] pointer-events-none" />

      {/* ── FOREGROUND CONTENT (Left-Aligned) ── */}
      <div className="relative z-10 px-6 md:px-16 w-full max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left animate-fade-up md:w-1/2">
          
          {/* Logo element */}
          <div className="flex items-center gap-4 mb-8 bg-[#020611]/60 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <div className="relative w-8 h-8 md:w-10 md:h-10 animate-[spin_10s_linear_infinite]">
              <div className="absolute inset-0 rounded-full border border-cyan-500/50 border-t-cyan-300" />
              <div className="absolute inset-1 rounded-full border border-blue-500/40 border-b-blue-300 animate-[spin_8s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
                <img src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png" alt="ITSEC Logo" className="w-5 h-5 object-contain" />
              </div>
            </div>
            <span className="text-cyan-50 font-bold tracking-[0.2em] uppercase text-sm md:text-base">ITSEC Technology</span>
          </div>

          {/* Main Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-tight">
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Secure Digital</span> <br />
            Transformation
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-100/80 font-light max-w-lg mb-10 leading-relaxed">
            Enterprise-grade cybersecurity, data center solutions, and integrated security systems designed to protect and accelerate your business on a global scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#020611] font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:-translate-y-1">
              Explore Solutions
            </button>
            <button className="px-8 py-4 bg-[#020611]/50 backdrop-blur-md border border-cyan-500/50 hover:border-cyan-400 text-cyan-100 font-bold rounded-full transition-all duration-300 hover:bg-cyan-500/10">
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-10 left-6 md:left-16 z-20 flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer animate-fade-up">
        <div className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center bg-[#020611]/50 backdrop-blur-md">
          <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
        </div>
        <span className="text-[10px] font-mono text-cyan-200 tracking-[0.3em] uppercase">Scroll down</span>
      </div>
    </section>
  );
}
