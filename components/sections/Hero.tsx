'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, Server, Cloud, Globe, Cpu, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/* Animated Visualization Component                                     */
/* ------------------------------------------------------------------ */
function TechVisualization() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 80);
    return () => clearInterval(id);
  }, []);

  const bars = [65, 82, 48, 91, 73, 58, 88, 44, 76, 95, 62, 79];
  const activeBar = tick % bars.length;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer ring glow */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/70 to-slate-950 border border-blue-800/30">

        {/* Animated grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>

        {/* Scanning line */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transition-none"
          style={{ top: `${((tick * 2) % 100)}%`, boxShadow: '0 0 12px rgba(34,211,238,0.5)' }}
        />

        {/* Top HUD bar */}
        <div className="absolute top-0 left-0 right-0 px-4 py-2 flex items-center justify-between bg-blue-950/50 border-b border-blue-800/40 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono text-cyan-400 tracking-widest">ITSEC SECURITY OPS CENTER</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-blue-400">THREAT LEVEL: LOW</span>
            <span className="text-[9px] font-mono text-green-400">● SECURE</span>
          </div>
        </div>

        {/* Main scene area */}
        <div className="absolute inset-0 top-8 flex flex-col gap-3 p-4">

          {/* Data center visual row */}
          <div className="flex gap-2 h-[30%]">
            {/* Server racks */}
            <div className="flex-1 rounded-lg bg-slate-900/80 border border-blue-900/50 p-2 flex flex-col gap-1 overflow-hidden">
              <div className="text-[8px] font-mono text-blue-400 tracking-wider mb-1">DATA CENTER — RACK A</div>
              <div className="flex gap-1 flex-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-0.5">
                    {[...Array(6)].map((_, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm border border-blue-900/50"
                        style={{
                          backgroundColor: `rgba(${(tick + i + j) % 10 === 0 ? '34,211,238' : '30,58,138'},${(tick + i + j) % 10 === 0 ? 0.5 : 0.3})`,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {/* Activity LEDs */}
              <div className="flex gap-1 mt-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 h-1 rounded-sm" style={{
                    backgroundColor: (tick + i * 3) % 7 === 0 ? '#22d3ee' : (tick + i) % 5 === 0 ? '#3b82f6' : '#1e3a8a'
                  }} />
                ))}
              </div>
            </div>

            {/* Network nodes */}
            <div className="w-[40%] rounded-lg bg-slate-900/80 border border-blue-900/50 p-2 relative overflow-hidden">
              <div className="text-[8px] font-mono text-blue-400 tracking-wider mb-1">NETWORK TOPOLOGY</div>
              <svg className="w-full h-full" viewBox="0 0 100 70">
                {/* Connections */}
                {[[50,35,20,20],[50,35,80,20],[50,35,30,60],[50,35,70,60],[50,35,85,40]].map(([x1,y1,x2,y2],i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={`rgba(34,211,238,${0.2 + ((tick * 0.05 + i * 0.2) % 0.4)})`}
                    strokeWidth="0.5"/>
                ))}
                {/* Center node */}
                <circle cx="50" cy="35" r="5" fill="none" stroke="#22d3ee" strokeWidth="1"/>
                <circle cx="50" cy="35" r={2 + (Math.sin(tick * 0.1) + 1) * 1.5} fill="#22d3ee" opacity="0.8"/>
                {/* Outer nodes */}
                {[[20,20],[80,20],[30,60],[70,60],[85,40]].map(([cx,cy],i) => (
                  <circle key={i} cx={cx} cy={cy} r="3"
                    fill={`rgba(59,130,246,${0.4 + ((tick * 0.05 + i * 0.15) % 0.4)})`}
                    stroke="#3b82f6" strokeWidth="0.5"/>
                ))}
                {/* Traveling packets */}
                <circle
                  cx={50 + (20 - 50) * ((tick * 0.05) % 1)}
                  cy={35 + (20 - 35) * ((tick * 0.05) % 1)}
                  r="1.5" fill="#22d3ee" opacity="0.9"/>
                <circle
                  cx={50 + (70 - 50) * ((tick * 0.04 + 0.5) % 1)}
                  cy={35 + (60 - 35) * ((tick * 0.04 + 0.5) % 1)}
                  r="1.5" fill="#60a5fa" opacity="0.9"/>
              </svg>
            </div>
          </div>

          {/* Cybersecurity dashboard */}
          <div className="flex gap-2 h-[22%]">
            {/* Threat bar chart */}
            <div className="flex-1 rounded-lg bg-slate-900/80 border border-blue-900/50 p-2">
              <div className="text-[8px] font-mono text-blue-400 tracking-wider mb-1">THREAT MONITOR</div>
              <div className="flex items-end gap-0.5 h-[calc(100%-16px)]">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm transition-all duration-200"
                    style={{
                      height: `${h + (i === activeBar ? 10 : 0)}%`,
                      backgroundColor: i === activeBar ? '#22d3ee' : i % 3 === 0 ? '#1d4ed8' : '#1e3a8a',
                      boxShadow: i === activeBar ? '0 0 8px rgba(34,211,238,0.6)' : 'none',
                    }}/>
                ))}
              </div>
            </div>

            {/* Status indicators */}
            <div className="w-[38%] rounded-lg bg-slate-900/80 border border-blue-900/50 p-2 flex flex-col justify-between">
              <div className="text-[8px] font-mono text-blue-400 tracking-wider">SYSTEM STATUS</div>
              {[
                { label: 'Firewall', pct: 100, color: '#22d3ee' },
                { label: 'IDS/IPS', pct: 98, color: '#3b82f6' },
                { label: 'VPN', pct: 100, color: '#22d3ee' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <div className="flex justify-between">
                    <span className="text-[7px] font-mono text-slate-400">{item.label}</span>
                    <span className="text-[7px] font-mono" style={{ color: item.color }}>{item.pct}%</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud + AI row */}
          <div className="flex gap-2 h-[22%]">
            {/* Cloud arc */}
            <div className="w-[45%] rounded-lg bg-slate-900/80 border border-blue-900/50 p-2 relative overflow-hidden">
              <div className="text-[8px] font-mono text-blue-400 tracking-wider mb-1">CLOUD INFRA</div>
              <svg className="w-full h-[calc(100%-14px)]" viewBox="0 0 100 40">
                {/* Cloud arc */}
                <path d="M 10 30 Q 10 10 30 10 Q 30 5 45 8 Q 50 0 60 8 Q 80 5 80 20 Q 90 20 90 30 Z"
                  fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
                {/* Nodes in cloud */}
                {[[30,18],[50,14],[65,20]].map(([cx,cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3"
                    fill={`rgba(34,211,238,${0.3 + Math.sin(tick * 0.08 + i) * 0.2})`}
                    stroke="#22d3ee" strokeWidth="0.5"/>
                ))}
                {/* Data rain */}
                {[...Array(5)].map((_, i) => (
                  <line key={i}
                    x1={20 + i * 15} y1={32}
                    x2={20 + i * 15} y2={32 + 4 + (tick * 0.5 + i * 2) % 6}
                    stroke="#22d3ee" strokeWidth="0.5" opacity="0.5"/>
                ))}
              </svg>
            </div>

            {/* AI pulsing brain */}
            <div className="flex-1 rounded-lg bg-slate-900/80 border border-blue-900/50 p-2 relative overflow-hidden">
              <div className="text-[8px] font-mono text-blue-400 tracking-wider mb-1">AI ENGINE</div>
              <svg className="w-full h-[calc(100%-14px)]" viewBox="0 0 100 40">
                {/* Concentric rings */}
                {[14, 20, 26].map((r, i) => (
                  <circle key={i} cx="25" cy="20" r={r}
                    fill="none" stroke="#1d4ed8"
                    strokeWidth="0.5"
                    opacity={0.3 + Math.sin(tick * 0.06 + i * 1.2) * 0.2}/>
                ))}
                <circle cx="25" cy="20" r={4 + Math.sin(tick * 0.1) * 1.5}
                  fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeWidth="0.8"/>
                {/* AI connections to right */}
                {[[55,10],[75,20],[55,30],[90,15],[90,30]].map(([tx,ty], i) => (
                  <g key={i}>
                    <line x1="25" y1="20" x2={tx} y2={ty}
                      stroke={`rgba(59,130,246,${0.2 + (Math.sin(tick * 0.05 + i) + 1) * 0.15})`}
                      strokeWidth="0.5"/>
                    <circle cx={tx} cy={ty} r="2"
                      fill={`rgba(59,130,246,${0.4 + Math.sin(tick * 0.07 + i * 0.5) * 0.3})`}/>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Global connectivity */}
          <div className="flex-1 rounded-lg bg-slate-900/80 border border-blue-900/50 p-2 relative overflow-hidden">
            <div className="text-[8px] font-mono text-blue-400 tracking-wider mb-1">GLOBAL NETWORK COVERAGE</div>
            <svg className="w-full h-[calc(100%-14px)]" viewBox="0 0 300 55">
              {/* World outline simplified */}
              <ellipse cx="150" cy="27" rx="140" ry="24" fill="none" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.5"/>
              {/* Longitude lines */}
              {[60,90,120,150,180,210,240].map((x,i) => (
                <ellipse key={i} cx={x} cy="27" rx="10" ry="24" fill="none" stroke="#1e3a8a" strokeWidth="0.3" opacity="0.3"/>
              ))}
              {/* Latitude lines */}
              {[15,27,38].map((y,i) => (
                <line key={i} x1="10" y1={y} x2="290" y2={y} stroke="#1e3a8a" strokeWidth="0.3" opacity="0.3"/>
              ))}
              {/* City nodes */}
              {[[60,22],[110,18],[155,25],[195,20],[240,18],[275,28],[90,35],[190,32]].map(([cx,cy],i) => (
                <circle key={i} cx={cx} cy={cy} r="2.5"
                  fill={`rgba(34,211,238,${0.5 + Math.sin(tick * 0.08 + i) * 0.3})`}
                  stroke="#22d3ee" strokeWidth="0.4"/>
              ))}
              {/* Arc connections */}
              {[[60,22,155,25],[110,18,240,18],[155,25,275,28],[195,20,60,22]].map(([x1,y1,x2,y2],i) => {
                const mx = (x1+x2)/2, my = Math.min(y1,y2) - 10;
                return (
                  <path key={i} d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                    fill="none" stroke={`rgba(34,211,238,${0.15 + Math.sin(tick*0.05+i)*0.1})`}
                    strokeWidth="0.6"/>
                );
              })}
              {/* Moving packet on arc */}
              {(() => {
                const t = (tick * 0.015) % 1;
                const x1=60,y1=22,x2=155,y2=25,mx=(x1+x2)/2,my=Math.min(y1,y2)-10;
                const px = (1-t)*(1-t)*x1 + 2*(1-t)*t*mx + t*t*x2;
                const py = (1-t)*(1-t)*y1 + 2*(1-t)*t*my + t*t*y2;
                return <circle cx={px} cy={py} r="2" fill="#22d3ee" opacity="0.9"/>;
              })()}
            </svg>
          </div>

        </div>

        {/* Bottom stats bar */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-1.5 flex items-center justify-between bg-blue-950/50 border-t border-blue-800/40">
          {[
            { label: 'Endpoints', val: '12,847' },
            { label: 'Events/s', val: `${(240 + (tick % 60)).toLocaleString()}` },
            { label: 'Threats Blocked', val: '99.97%' },
            { label: 'Uptime', val: '99.999%' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-[8px] font-mono text-slate-500">{s.label}</span>
              <span className="text-[10px] font-mono font-bold text-cyan-400">{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Hero Component                                                  */
/* ------------------------------------------------------------------ */
export function Hero() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background: cinematic dark gradient + subtle grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950" />
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="#38bdf8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* LEFT: Text Content */}
          <div className={`flex flex-col gap-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-700/50 bg-blue-900/20 backdrop-blur-sm w-fit">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">Enterprise ICT Solutions</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-white leading-[1.05] tracking-tight">
                Secure{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">•</span>
                </span>
                {' '}Intelligent{' '}
                <span className="text-cyan-400">•</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                  Future‑Ready ICT
                </span>
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-white/90 leading-[1.05] tracking-tight">
                Solutions
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
              Empowering organizations with enterprise infrastructure, cybersecurity, cloud technologies, and intelligent digital transformation solutions.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, label: 'Cybersecurity' },
                { icon: Server, label: 'Infrastructure' },
                { icon: Cloud, label: 'Cloud' },
                { icon: Cpu, label: 'AI Systems' },
                { icon: Globe, label: 'Connectivity' },
                { icon: Lock, label: 'Zero Trust' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900/30 border border-blue-800/40 text-blue-300 text-xs font-semibold">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => router.push('/contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-base rounded-xl shadow-[0_0_40px_rgba(37,99,235,0.35)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push('/services')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-base rounded-xl border border-white/20 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <div className="flex -space-x-1">
                {['bg-blue-600','bg-cyan-600','bg-blue-800','bg-indigo-600'].map((c,i)=>(
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-slate-950 flex items-center justify-center`}>
                    <span className="text-white text-[8px] font-bold">{['GOV','FIN','HLT','TEL'][i]}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                Trusted by <span className="text-white font-semibold">government, finance, healthcare</span> & telecom sectors
              </p>
            </div>
          </div>

          {/* RIGHT: Animated Tech Visualization */}
          <div className={`hidden lg:block h-[580px] transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <TechVisualization />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] font-mono text-slate-500 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
