'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Shield, Database, Lock, Globe, Server, ScanFace } from 'lucide-react';
import Image from 'next/image';

const SCENE_DURATION = 2000; // 2 seconds per scene
const TOTAL_SCENES = 5;

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % TOTAL_SCENES);
    }, SCENE_DURATION);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020611]" />;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020611] font-sans"
    >
      {/* ── BACKGROUNDS FOR SCENES ── */}
      
      {/* Scene 1: Particle Background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeScene === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#020611] to-[#020611]" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlc8bgysp/image/upload/v1715694200/particles_vz1j4x.png')] bg-cover bg-center opacity-30 mix-blend-screen animate-pulse" />
      </div>

      {/* Scene 2: Digital Globe */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeScene === 1 || activeScene === 4 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[url('/images/cyber-security-world-bg.jpg')] bg-cover bg-center transition-transform duration-[4000ms] ease-out ${
            activeScene === 1 ? 'scale-110' : 'scale-100'
          }`} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020611] via-[#020611]/80 to-transparent" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
      </div>

      {/* Scene 3: Data Center */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeScene === 2 || activeScene === 4 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[url('/images/datacenter-server-racks-bg.jpg')] bg-cover bg-center transition-transform duration-[4000ms] ease-out ${
            activeScene === 2 ? 'scale-110' : 'scale-100'
          }`}
          style={{ clipPath: activeScene === 4 ? 'polygon(33% 0, 66% 0, 66% 100%, 33% 100%)' : 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020611] via-[#020611]/80 to-transparent" />
      </div>

      {/* Scene 4: Integrated Security */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeScene === 3 || activeScene === 4 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[url('/images/integrated-security-surveillance-bg.jpg')] bg-cover bg-center transition-transform duration-[4000ms] ease-out ${
            activeScene === 3 ? 'scale-110' : 'scale-100'
          }`}
          style={{ clipPath: activeScene === 4 ? 'polygon(66% 0, 100% 0, 100% 100%, 66% 100%)' : 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020611] via-[#020611]/80 to-transparent" />
      </div>

      {/* Global Overlays */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020611] to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#020611] via-[#020611]/40 to-transparent pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] px-4 w-full max-w-7xl mx-auto">
        
        {/* SCENE 1 */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${activeScene === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 animate-[spin_10s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-t-cyan-400" />
            <div className="absolute inset-2 rounded-full border border-blue-500/20 border-b-blue-400 animate-[spin_8s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
              <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-blue-600/40 to-cyan-500/20 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.3)] backdrop-blur-md">
                <img src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png" alt="ITSEC Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            ITSEC Technology
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100/90 font-light tracking-wide text-center uppercase tracking-[0.2em] animate-pulse">
            Empowering Secure Digital Transformation
          </p>
        </div>

        {/* SCENE 2: Cybersecurity */}
        <div className={`absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 transition-all duration-1000 ${activeScene === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-cyan-500/20 rounded-xl border border-cyan-400/30 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <Globe className="w-10 h-10 text-cyan-400" />
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Cybersecurity <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
          </h2>
          <div className="flex flex-col gap-4 text-cyan-100/80 font-mono text-sm tracking-wider uppercase">
            <div className="flex items-center gap-3"><Shield className="w-4 h-4 text-cyan-400" /> Digital Shield Protection Active</div>
            <div className="flex items-center gap-3"><ScanFace className="w-4 h-4 text-blue-400" /> Threat Detection Scans: <span className="text-green-400 animate-pulse">Running</span></div>
          </div>
        </div>

        {/* SCENE 3: Data Center */}
        <div className={`absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 transition-all duration-1000 ${activeScene === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600/20 rounded-xl border border-blue-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <Server className="w-10 h-10 text-blue-400" />
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Data Center <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Solutions</span>
          </h2>
          <div className="flex flex-col gap-4 text-blue-100/80 font-mono text-sm tracking-wider uppercase">
            <div className="flex items-center gap-3"><Database className="w-4 h-4 text-blue-400" /> Cloud Infrastructure Synced</div>
            <div className="flex items-center gap-3"><Server className="w-4 h-4 text-indigo-400" /> Server Rack Efficiency: <span className="text-green-400">99.99%</span></div>
          </div>
        </div>

        {/* SCENE 4: Integrated Security */}
        <div className={`absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 transition-all duration-1000 ${activeScene === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-indigo-600/20 rounded-xl border border-indigo-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <Lock className="w-10 h-10 text-indigo-400" />
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Integrated <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Security Systems</span>
          </h2>
          <div className="flex flex-col gap-4 text-indigo-100/80 font-mono text-sm tracking-wider uppercase">
            <div className="flex items-center gap-3"><ScanFace className="w-4 h-4 text-indigo-400" /> Biometric Access Authorized</div>
            <div className="flex items-center gap-3"><Lock className="w-4 h-4 text-purple-400" /> CCTV Surveillance: <span className="text-green-400 animate-pulse">Live</span></div>
          </div>
        </div>

        {/* SCENE 5: Final Frame */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${activeScene === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
          
          <div className="absolute inset-0 bg-[#020611]/60 backdrop-blur-sm" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-8">
              <img src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png" alt="ITSEC Logo" className="w-10 h-10 object-contain" />
              <h2 className="text-3xl font-bold text-white tracking-widest uppercase">ITSEC Technology</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              <div className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-cyan-200">
                <Globe className="w-5 h-5" /> Cybersecurity
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-200">
                <Server className="w-5 h-5" /> Data Center
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-200">
                <Lock className="w-5 h-5" /> Security Systems
              </div>
            </div>

            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Technology.</span>
            </h3>
            <h3 className="text-4xl md:text-6xl font-bold text-white">
              Securing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Business.</span>
            </h3>
          </div>
        </div>

      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-20">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-[2000ms] ease-linear"
          style={{ width: \`\${((activeScene + 1) / TOTAL_SCENES) * 100}%\` }}
        />
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-white tracking-[0.3em] uppercase rotate-90 mb-4">Scroll</span>
        <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
}
