'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; // Increased to 30deg for more depth
    const y = (clientY / innerHeight - 0.5) * -30;
    setMousePosition({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden perspective-1000 bg-slate-950"
    >
      {/* Static Background */}
      <div className="absolute inset-0 z-0 flex">
        <div className="relative min-w-full h-full overflow-hidden">
          <img
            src="/images/data-center-main.jpg"
            alt="ITSEC Technology Data Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/40 z-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-slate-950/60 z-15" />
        </div>
      </div>

      {/* Main Content Layer */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-[90vh] justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="relative h-[600px] w-full mt-12 flex flex-col justify-center">
          <div
            className="absolute inset-0 flex flex-col items-center text-center opacity-100"
            style={{
              transformStyle: 'preserve-3d',
              zIndex: 20
            }}
          >
            {/* Title Layer */}
            <div style={{ transform: 'translateZ(100px)' }} className="relative flex flex-col items-center">
              <h1 className="relative text-[74px] pt-[150px] font-[900] tracking-[0.1em] text-white leading-none uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] italic">
                ITSEC TECHNOLOGY
              </h1>
            </div>

            {/* Description Layer */}
            <div
              className="mt-12 max-w-3xl mx-auto relative"
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="p-1 px-4 border-l-4 border-blue-600 bg-white/5 backdrop-blur-md rounded-r-xl">
                <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-medium tracking-wide py-4">
                  Empowering modern businesses with robust digital infrastructure, elite security, and professional electrical engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons with High Depth */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 w-full max-w-lg mx-auto"
          style={{ transform: 'translateZ(150px)' }}
        >
          <Button
            size="lg"
            onClick={() => window.location.href = '/services/data-center'}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black h-18 px-14 rounded-full shadow-[0_20px_40px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95 text-xl"
          >
            Get Started
            <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 border-2 font-black h-18 px-14 rounded-full backdrop-blur-xl transition-all hover:scale-105 text-xl"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
