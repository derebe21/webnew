'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Shield, Database, Lock, Globe, Server, ScanFace } from 'lucide-react';

const SCENE_DURATION = 3000; // Increased to 3 seconds so users can appreciate the bright images
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
      {/* ── BACKGROUNDS FOR SCENES (BROUGHT TO FOREGROUND, NO HEAVY DIMMING) ── */}
      
      {/* Scene 1: Particle Background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeScene === 0 ? 'opacity-100 z-0' : 'opacity-0 -z-10'
        }`}
      >
        <div className="absolute inset-0 bg-[#020611]" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlc8bgysp/image/upload/v1715694200/particles_vz1j4x.png')] bg-cover bg-center opacity-70 mix-blend-screen animate-pulse" />
      </div>

      {/* Scene 2: Digital Globe */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeScene === 1 || activeScene === 4 ? 'opacity-100 z-0' : 'opacity-0 -z-10'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[url('/images/cyber-security-world-bg.jpg')] bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
            activeScene === 1 ? 'scale-105' : 'scale-100'
          }`} 
        />
        {/* Very light overlay just to ensure white text is readable, no heavy gradients */}
        <div className="absolute inset-0 bg-[#020611]/20" />
      </div>

      {/* Scene 3: Data Center */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeScene === 2 || activeScene === 4 ? 'opacity-100 z-0' : 'opacity-0 -z-10'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[url('/images/datacenter-server-racks-bg.jpg')] bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
            activeScene === 2 ? 'scale-105' : 'scale-100'
          }`}
          style={{ clipPath: activeScene === 4 ? 'polygon(33% 0, 66% 0, 66% 100%, 33% 100%)' : 'none' }}
        />
        <div className="absolute inset-0 bg-[#020611]/10" />
      </div>

      {/* Scene 4: Integrated Security */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeScene === 3 || activeScene === 4 ? 'opacity-100 z-0' : 'opacity-0 -z-10'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[url('/images/integrated-security-surveillance-bg.jpg')] bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
            activeScene === 3 ? 'scale-105' : 'scale-100'
          }`}
          style={{ clipPath: activeScene === 4 ? 'polygon(66% 0, 100% 0, 100% 100%, 66% 100%)' : 'none' }}
        />
        <div className="absolute inset-0 bg-[#020611]/10" />
      </div>

      {/* Edge Gradients for smooth blending with the rest of the page */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020611] to-transparent z-[1] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020611] to-transparent z-[1] pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 w-full max-w-7xl mx-auto">
        
        {/* SCENE 1 */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${activeScene === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 animate-[spin_10s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border border-cyan-500/50 border-t-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
            <div className="absolute inset-2 rounded-full border border-blue-500/40 border-b-blue-300 animate-[spin_8s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
              <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-blue-600/60 to-cyan-500/40 border border-cyan-300 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.6)] backdrop-blur-xl">
                <img src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png" alt="ITSEC Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,1)]" />
              </div>
            </div>
          </div>
          <div className="bg-[#020611]/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              ITSEC Technology
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 font-medium tracking-wide uppercase tracking-[0.2em] animate-pulse drop-shadow-md">
              Empowering Secure Digital Transformation
            </p>
          </div>
        </div>

        {/* SCENE 2: Cybersecurity */}
        <div className={`absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 transition-all duration-1000 ${activeScene === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div className="bg-[#020611]/50 backdrop-blur-lg p-10 rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-cyan-500/30 rounded-xl border border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <Globe className="w-10 h-10 text-cyan-300" />
              </div>
              <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Cybersecurity <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Solutions</span>
            </h2>
            <div className="flex flex-col gap-4 text-cyan-50 font-mono text-sm tracking-wider uppercase bg-black/30 p-4 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-3"><Shield className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" /> Digital Shield Protection Active</div>
              <div className="flex items-center gap-3"><ScanFace className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" /> Threat Detection Scans: <span className="text-green-400 font-bold animate-pulse">Running</span></div>
            </div>
          </div>
        </div>

        {/* SCENE 3: Data Center */}
        <div className={`absolute right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 transition-all duration-1000 ${activeScene === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
          <div className="bg-[#020611]/50 backdrop-blur-lg p-10 rounded-3xl border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-24 bg-gradient-to-l from-blue-400 to-transparent" />
              <div className="p-4 bg-blue-600/30 rounded-xl border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                <Server className="w-10 h-10 text-blue-300" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white text-right mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Data Center <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">Solutions</span>
            </h2>
            <div className="flex flex-col gap-4 text-blue-50 font-mono text-sm tracking-wider uppercase bg-black/30 p-4 rounded-xl border border-blue-500/20 items-end text-right">
              <div className="flex items-center gap-3">Cloud Infrastructure Synced <Database className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" /></div>
              <div className="flex items-center gap-3">Server Rack Efficiency: <span className="text-green-400 font-bold">99.99%</span> <Server className="w-5 h-5 text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]" /></div>
            </div>
          </div>
        </div>

        {/* SCENE 4: Integrated Security */}
        <div className={`absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 transition-all duration-1000 ${activeScene === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div className="bg-[#020611]/50 backdrop-blur-lg p-10 rounded-3xl border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.15)] max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-indigo-600/30 rounded-xl border border-indigo-400/50 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                <Lock className="w-10 h-10 text-indigo-300" />
              </div>
              <div className="h-px w-24 bg-gradient-to-r from-indigo-400 to-transparent" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Integrated <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">Security</span>
            </h2>
            <div className="flex flex-col gap-4 text-indigo-50 font-mono text-sm tracking-wider uppercase bg-black/30 p-4 rounded-xl border border-indigo-500/20">
              <div className="flex items-center gap-3"><ScanFace className="w-5 h-5 text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]" /> Biometric Access Authorized</div>
              <div className="flex items-center gap-3"><Lock className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" /> CCTV Surveillance: <span className="text-green-400 font-bold animate-pulse">Live</span></div>
            </div>
          </div>
        </div>

        {/* SCENE 5: Final Frame */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${activeScene === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
          
          {/* A slight dark tint just for the final frame to ensure text pops */}
          <div className="absolute inset-0 bg-[#020611]/40 backdrop-blur-sm" />
          
          <div className="relative z-10 flex flex-col items-center text-center bg-[#020611]/60 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 mb-10 bg-white/5 py-3 px-8 rounded-full border border-white/10">
              <img src="https://res.cloudinary.com/dlc8bgysp/image/upload/v1767612094/logo_fn47rb.png" alt="ITSEC Logo" className="w-8 h-8 object-contain" />
              <h2 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">ITSEC Technology</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              <div className="flex items-center gap-3 px-6 py-4 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-50 font-medium shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <Globe className="w-6 h-6 text-cyan-300" /> Cybersecurity
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-blue-500/20 border border-blue-400/40 rounded-full text-blue-50 font-medium shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Server className="w-6 h-6 text-blue-300" /> Data Center
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-indigo-500/20 border border-indigo-400/40 rounded-full text-indigo-50 font-medium shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <Lock className="w-6 h-6 text-indigo-300" /> Security Systems
              </div>
            </div>

            <h3 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Technology.</span>
            </h3>
            <h3 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              Securing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">Business.</span>
            </h3>
          </div>
        </div>

      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#020611] z-20">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 transition-all duration-[3000ms] ease-linear shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          style={{ width: `${((activeScene + 1) / TOTAL_SCENES) * 100}%` }}
        />
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity bg-[#020611]/50 backdrop-blur-md px-4 py-3 rounded-full border border-white/10 cursor-pointer">
        <span className="text-[10px] font-mono text-cyan-200 tracking-[0.3em] uppercase">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
}
