'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Server, Cloud, Cpu, Globe, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function Hero() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 font-sans">
      {/* Background styling: clean blue enterprise background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-900" />
        
        {/* Subtle glow elements - Not excessive */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none opacity-50" />
        
        {/* Very subtle grid pattern for a clean modern look */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* LEFT SIDE: Text Content */}
          <div className={`flex flex-col gap-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-blue-800/50 bg-blue-950/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-cyan-400 tracking-[0.15em] uppercase">Enterprise ICT Solutions Provider</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                Secure <span className="text-cyan-400">•</span> Intelligent <span className="text-cyan-400">•</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-300">
                Future-Ready ICT
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white/90">
                Solutions
              </h1>
            </div>

            {/* Subtle Divider */}
            <div className="h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />

            {/* Professional Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl font-medium">
              Empowering organizations with enterprise infrastructure, cybersecurity, cloud technologies, and intelligent digital transformation solutions.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                { icon: Shield, label: 'Cybersecurity' },
                { icon: Server, label: 'Infrastructure' },
                { icon: Cloud, label: 'Cloud' },
                { icon: Cpu, label: 'AI Systems' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-200 text-sm font-medium backdrop-blur-sm">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => router.push('/contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base rounded-lg transition-all duration-300"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push('/services')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold text-base rounded-lg transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
            
            {/* Positioning text */}
            <p className="text-sm text-slate-400 mt-2">
              Trusted by government, finance, healthcare & telecom sectors globally.
            </p>
          </div>

          {/* RIGHT SIDE: Professional Technology Image & Abstract Visualization */}
          <div className={`hidden lg:flex relative h-[600px] w-full items-center justify-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Outer clean frame */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
              
              {/* The actual image: using a clean, abstract, professional cybersecurity/infrastructure image */}
              <img 
                src="/images/cyber-risk-logo-new.png" 
                alt="Enterprise Technology & Cybersecurity Visualization" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen mix-blend-lighten"
              />
              
              {/* Overlay gradients for seamless blending into the dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/40" />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
              
              {/* Minimal geometric accents (clean cloud/digital graphics) */}
              <div className="absolute top-8 right-8 flex items-center gap-3 bg-slate-950/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5">
                <Shield className="w-5 h-5 text-cyan-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Security Status</span>
                  <span className="text-xs text-white font-bold">Optimal Protection</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 flex items-center gap-3 bg-slate-950/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5">
                <Cloud className="w-5 h-5 text-blue-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Infrastructure</span>
                  <span className="text-xs text-white font-bold">Cloud Synced</span>
                </div>
              </div>
              
              {/* Subtle digital network dots overlaid */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
                <circle cx="200" cy="150" r="100" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="2 4" />
                <circle cx="200" cy="150" r="140" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
                <circle cx="200" cy="150" r="180" fill="none" stroke="#1e40af" strokeWidth="0.5" />
                
                <path d="M200 50 L200 250 M100 150 L300 150" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
                
                <circle cx="200" cy="50" r="3" fill="#22d3ee" />
                <circle cx="200" cy="250" r="3" fill="#22d3ee" />
                <circle cx="100" cy="150" r="3" fill="#3b82f6" />
                <circle cx="300" cy="150" r="3" fill="#3b82f6" />
              </svg>
            </div>
            
            {/* Floating accent elements around the image frame */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
