'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Shield, Server, Lock } from 'lucide-react';

const SCENES = [
  {
    image: '/images/cyber-security-world-bg.jpg',
    title: 'Cybersecurity',
    subtitle: 'Global Protection',
    icon: <Shield className="w-8 h-8 text-cyan-400" />
  },
  {
    image: '/images/datacenter-server-racks-bg.jpg',
    title: 'Data Center',
    subtitle: 'Enterprise Infrastructure',
    icon: <Server className="w-8 h-8 text-blue-400" />
  },
  {
    image: '/images/integrated-security-surveillance-bg.jpg',
    title: 'Security Systems',
    subtitle: 'Integrated Surveillance',
    icon: <Lock className="w-8 h-8 text-indigo-400" />
  }
];

const SCENE_DURATION = 4000; // 4 seconds per scene

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % SCENES.length);
    }, SCENE_DURATION);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020611]" />;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020611] font-sans"
    >
      {/* ── VIDEO ANIMATION BACKGROUNDS ── */}
      {SCENES.map((scene, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeScene === index ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          {/* Ken Burns effect: slow zoom while active */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform ease-out"
            style={{ 
              backgroundImage: `url(${scene.image})`,
              transform: activeScene === index ? 'scale(1.1)' : 'scale(1)',
              transitionDuration: '10s' 
            }} 
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#020611]/30 backdrop-blur-[2px]" />
        </div>
      ))}

      {/* Edge Gradients */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020611] to-transparent z-[1] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020611] to-transparent z-[1] pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 w-full max-w-5xl mx-auto mt-16">
        
        <div className="flex flex-col items-center text-center">
          
          {/* Logo element */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 animate-[spin_10s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-cyan-500/50 border-t-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
            <div className="absolute inset-2 rounded-full border border-blue-500/40 border-b-blue-300 animate-[spin_8s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#020611]/50 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-xl">
                <img src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png" alt="ITSEC Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
            </div>
          </div>

          {/* Main Typography wrapped in a glass container */}
          <div className="bg-[#020611]/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl transition-all duration-500">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              ITSEC Technology
            </h1>
            
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium tracking-[0.2em] uppercase mb-8">
              Empowering Secure Digital Transformation
            </p>

            {/* Dynamic Animated Sub-content based on current scene */}
            <div className="flex flex-col items-center justify-center h-24">
              {SCENES.map((scene, index) => (
                <div 
                  key={`content-${index}`}
                  className={`absolute flex items-center gap-4 transition-all duration-700 ${
                    activeScene === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md">
                    {scene.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-2xl">{scene.title}</div>
                    <div className="text-cyan-100/70 text-sm tracking-wider uppercase">{scene.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-8" />
          </div>

        </div>
      </div>

      {/* ── PROGRESS BAR FOR VIDEO LOOP ── */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#020611] z-20">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 transition-all duration-[4000ms] ease-linear shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          style={{ width: `${((activeScene + 1) / SCENES.length) * 100}%` }}
        />
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] font-mono text-cyan-200 tracking-[0.3em] uppercase bg-[#020611]/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce drop-shadow-[0_0_10px_rgba(34,211,238,1)]" />
      </div>
    </section>
  );
}
