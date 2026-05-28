'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, Server, Cloud, Globe, Cpu, Lock, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

/* ═══════════════════════════════════════════════════════════════════════
   SCENE NAMES (cycles every 4 seconds)
═══════════════════════════════════════════════════════════════════════ */
const SCENES = [
  'Enterprise City & Digital Network',
  'Data Center — Rack Systems',
  'Cybersecurity SOC & HUD',
  'Cloud Infrastructure & Secure Data',
  'Smart Building & Intelligent Systems',
  'Global Enterprise Connectivity',
];

/* ═══════════════════════════════════════════════════════════════════════
   RIGHT PANEL — 6-SCENE ANIMATED VISUALIZATION
═══════════════════════════════════════════════════════════════════════ */
function TechVisualization() {
  const [tick, setTick] = useState(0);
  const [scene, setScene] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Tick every 80ms for smooth animation
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 80);
    return () => clearInterval(id);
  }, []);

  // Scene rotation every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setScene(s => (s + 1) % SCENES.length);
        setFadeIn(true);
      }, 400);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const bars = [65, 82, 48, 91, 73, 58, 88, 44, 76, 95, 62, 79, 55, 87];
  const activeBar = tick % bars.length;

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#060E1A]/95 border border-cyan-900/30 backdrop-blur-xl shadow-[0_0_80px_rgba(6,182,212,0.08)]">

        {/* Animated grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tgrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#06B6D4" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tgrid)"/>
        </svg>

        {/* Scanning sweep */}
        <div
          className="absolute left-0 right-0 h-[1px] pointer-events-none"
          style={{
            top: `${(tick * 1.2) % 100}%`,
            background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)',
            boxShadow: '0 0 12px rgba(6,182,212,0.4)',
          }}
        />

        {/* TOP HUD */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-900/30 bg-[#040A14]/70">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"/>
            </span>
            <span className="text-[9px] font-mono text-cyan-400 tracking-widest">ITSEC · ENTERPRISE SOC · LIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[8px] font-mono text-blue-400">THREAT: MINIMAL</span>
            <span className="text-[8px] font-mono text-emerald-400">● ALL SYSTEMS SECURE</span>
          </div>
        </div>

        {/* Scene label */}
        <div
          className="absolute top-9 left-0 right-0 flex justify-center transition-opacity duration-400"
          style={{ opacity: fadeIn ? 1 : 0 }}
        >
          <span className="text-[8px] font-mono tracking-[0.2em] text-cyan-500/80 uppercase">
            SCENE {scene + 1} / {SCENES.length} — {SCENES[scene]}
          </span>
        </div>

        {/* ── MAIN VISUALIZATION AREA ── */}
        <div
          className="absolute left-0 right-0 bottom-8 flex flex-col gap-2 p-3 transition-opacity duration-400"
          style={{ top: '48px', opacity: fadeIn ? 1 : 0 }}
        >
          {/* ROW 1: DATA CENTER RACKS */}
          <div className="flex gap-2" style={{ height: '30%' }}>
            {/* Server Racks */}
            <div className="flex-1 rounded-xl bg-blue-950/20 border border-blue-900/30 p-2 flex flex-col">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest mb-1.5">
                DATACENTER — RACK A4 · {scene === 1 ? 'ACTIVE VIEW' : 'MONITORING'}
              </span>
              <div className="flex gap-0.5 flex-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-0.5">
                    {[...Array(8)].map((_, j) => (
                      <div key={j} className="flex-1 rounded-[1px]"
                        style={{
                          backgroundColor:
                            (tick + i * 3 + j) % 13 === 0 ? 'rgba(6,182,212,0.8)' :
                            (tick + i + j) % 7 === 0 ? 'rgba(37,99,235,0.6)' :
                            (tick + i * 2 + j) % 5 === 0 ? 'rgba(16,185,129,0.5)' :
                            'rgba(30,58,138,0.35)'
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {/* LED strip */}
              <div className="flex gap-0.5 mt-1.5">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex-1 h-[2px] rounded-full"
                    style={{
                      backgroundColor:
                        (tick + i * 4) % 9 === 0 ? '#06B6D4' :
                        (tick + i) % 6 === 0 ? '#2563EB' :
                        (tick + i * 2) % 8 === 0 ? '#10B981' :
                        '#1e3a8a'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Network Topology */}
            <div className="w-[38%] rounded-xl bg-blue-950/20 border border-blue-900/30 p-2">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">NETWORK TOPOLOGY</span>
              <svg className="w-full mt-1" style={{ height: 'calc(100% - 14px)' }} viewBox="0 0 100 65">
                {[[50,32,18,15],[50,32,82,15],[50,32,28,58],[50,32,72,58],[50,32,90,35],[50,32,14,42]].map(([x1,y1,x2,y2],i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={`rgba(6,182,212,${0.15 + Math.sin(tick*0.05+i)*0.12})`} strokeWidth="0.6"/>
                ))}
                <circle cx="50" cy="32" r="7" fill="none" stroke="#06B6D4" strokeWidth="0.8"/>
                <circle cx="50" cy="32" r={2.5 + Math.sin(tick*0.08)*1.5} fill="#06B6D4" opacity="0.9"/>
                {[[18,15],[82,15],[28,58],[72,58],[90,35],[14,42]].map(([cx,cy],i) => (
                  <circle key={i} cx={cx} cy={cy} r="3.5"
                    fill={`rgba(37,99,235,${0.3+Math.sin(tick*0.06+i*0.4)*0.2})`} stroke="#2563EB" strokeWidth="0.5"/>
                ))}
                {(() => { const t=(tick*0.012)%1; return <circle cx={50+(18-50)*t} cy={32+(15-32)*t} r="2.2" fill="#06B6D4" opacity="0.95"/>; })()}
                {(() => { const t=((tick*0.01)+0.5)%1; return <circle cx={50+(72-50)*t} cy={32+(58-32)*t} r="2.2" fill="#60A5FA" opacity="0.95"/>; })()}
                {(() => { const t=((tick*0.008)+0.3)%1; return <circle cx={50+(90-50)*t} cy={32+(35-32)*t} r="1.8" fill="#10B981" opacity="0.85"/>; })()}
              </svg>
            </div>
          </div>

          {/* ROW 2: THREAT MONITOR + SYSTEM STATUS */}
          <div className="flex gap-2" style={{ height: '22%' }}>
            <div className="flex-1 rounded-xl bg-blue-950/20 border border-blue-900/30 p-2">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">THREAT MONITOR — REALTIME</span>
              <div className="flex items-end gap-0.5 mt-1" style={{ height: 'calc(100% - 14px)' }}>
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-[2px] transition-all duration-150"
                    style={{
                      height: `${h + (i === activeBar ? 15 : 0)}%`,
                      backgroundColor: i === activeBar ? '#06B6D4' : i % 4 === 0 ? '#2563EB' : '#1e3a8a',
                      boxShadow: i === activeBar ? '0 0 10px rgba(6,182,212,0.8)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="w-[38%] rounded-xl bg-blue-950/20 border border-blue-900/30 p-2 flex flex-col justify-between">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">SYSTEM STATUS</span>
              {[
                ['Firewall','#06B6D4',100],
                ['IDS / IPS','#2563EB',98],
                ['Encryption','#10B981',100],
                ['Zero Trust','#06B6D4',97],
              ].map(([label, color, pct], i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <div className="flex justify-between">
                    <span className="text-[7px] font-mono text-slate-400">{label as string}</span>
                    <span className="text-[7px] font-mono font-bold" style={{ color: color as string }}>{pct}%</span>
                  </div>
                  <div className="h-[2px] bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-300" style={{ width: `${pct}%`, backgroundColor: color as string }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3: CLOUD + AI ENGINE */}
          <div className="flex gap-2" style={{ height: '22%' }}>
            <div className="w-[50%] rounded-xl bg-blue-950/20 border border-blue-900/30 p-2">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">CLOUD INFRASTRUCTURE</span>
              <svg className="w-full mt-1" style={{ height: 'calc(100% - 14px)' }} viewBox="0 0 100 38">
                <path d="M 10 30 Q 10 10 26 10 Q 26 2 42 7 Q 50 1 58 7 Q 76 2 76 16 Q 88 16 88 26 Z"
                  fill="none" stroke="#2563EB" strokeWidth="0.8" opacity="0.5"/>
                {[[28,16],[50,11],[66,17]].map(([cx,cy],i) => (
                  <circle key={i} cx={cx} cy={cy} r="3.5"
                    fill={`rgba(6,182,212,${0.3+Math.sin(tick*0.07+i)*0.2})`} stroke="#06B6D4" strokeWidth="0.5"/>
                ))}
                {[16,30,44,58,74].map((x,i) => (
                  <line key={i} x1={x} y1={29} x2={x} y2={29+3+((tick*0.35+i*2.5)%5)}
                    stroke="#06B6D4" strokeWidth="0.7" opacity="0.6"/>
                ))}
                {/* Secure transmission pulses */}
                {[24,45,66].map((x,i) => (
                  <circle key={i} cx={x} cy={26} r={2+Math.sin(tick*0.1+i*1.5)*1}
                    fill="none" stroke={`rgba(16,185,129,${0.3+Math.sin(tick*0.08+i)*0.2})`} strokeWidth="0.5"/>
                ))}
              </svg>
            </div>
            <div className="flex-1 rounded-xl bg-blue-950/20 border border-blue-900/30 p-2">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">AI INTELLIGENCE ENGINE</span>
              <svg className="w-full mt-1" style={{ height: 'calc(100% - 14px)' }} viewBox="0 0 100 38">
                {[10,16,22].map((r,i) => (
                  <circle key={i} cx="22" cy="19" r={r} fill="none" stroke="#1D4ED8"
                    strokeWidth="0.5" opacity={0.2+Math.sin(tick*0.05+i*1.2)*0.12}/>
                ))}
                <circle cx="22" cy="19" r={4+Math.sin(tick*0.09)*1.5}
                  fill="rgba(6,182,212,0.12)" stroke="#06B6D4" strokeWidth="0.8"/>
                {[[55,7],[78,19],[55,31],[92,12],[92,28],[70,4]].map(([tx,ty],i) => (
                  <g key={i}>
                    <line x1="22" y1="19" x2={tx} y2={ty}
                      stroke={`rgba(37,99,235,${0.15+Math.sin(tick*0.04+i)*0.12})`} strokeWidth="0.5"/>
                    <circle cx={tx} cy={ty} r={2.5+Math.sin(tick*0.07+i*0.5)*0.5}
                      fill={`rgba(37,99,235,${0.4+Math.sin(tick*0.06+i*0.5)*0.25})`}/>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* ROW 4: GLOBAL NETWORK MAP */}
          <div className="flex-1 rounded-xl bg-blue-950/20 border border-blue-900/30 p-2">
            <span className="text-[7px] font-mono text-blue-400 tracking-widest mb-0.5 block">
              GLOBAL ENTERPRISE NETWORK — LIVE COVERAGE
            </span>
            <svg className="w-full" style={{ height: 'calc(100% - 14px)' }} viewBox="0 0 300 52">
              <ellipse cx="150" cy="26" rx="138" ry="22" fill="none" stroke="#1E3A8A" strokeWidth="0.4" opacity="0.5"/>
              {[60,90,120,150,180,210,240].map((x,i) => (
                <ellipse key={i} cx={x} cy="26" rx="9" ry="22" fill="none" stroke="#1E3A8A" strokeWidth="0.3" opacity="0.2"/>
              ))}
              {[15,26,36].map((y,i) => (
                <line key={i} x1="12" y1={y} x2="288" y2={y} stroke="#1E3A8A" strokeWidth="0.3" opacity="0.2"/>
              ))}
              {/* City nodes */}
              {[[55,20,'ADD'],[108,16,'DXB'],[154,24,'LND'],[196,18,'NYC'],[242,16,'SNG'],[276,28,'TYO'],[88,34,'NBI'],[192,31,'JHB']].map(([cx,cy,city],i) => (
                <g key={i}>
                  <circle cx={cx as number} cy={cy as number} r={3+Math.sin(tick*0.06+i)*0.6}
                    fill={`rgba(6,182,212,${0.4+Math.sin(tick*0.07+i)*0.25})`} stroke="#06B6D4" strokeWidth="0.4"/>
                  <circle cx={cx as number} cy={cy as number} r={6+Math.sin(tick*0.06+i)*0.6}
                    fill="none" stroke="rgba(6,182,212,0.12)" strokeWidth="0.4"/>
                  <text x={(cx as number)+5} y={(cy as number)-3} fontSize="4" fill="#94A3B8" fontFamily="monospace">{city}</text>
                </g>
              ))}
              {/* Arc connections */}
              {[[55,20,154,24],[108,16,242,16],[154,24,276,28],[196,18,55,20],[88,34,196,18]].map(([x1,y1,x2,y2],i) => {
                const mx=(x1+x2)/2, my=Math.min(y1,y2)-10;
                return <path key={i} d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`}
                  fill="none" stroke={`rgba(6,182,212,${0.1+Math.sin(tick*0.04+i)*0.08})`} strokeWidth="0.5"/>;
              })}
              {/* Moving data packets */}
              {[
                { x1:55,y1:20,x2:154,y2:24,speed:0.012,offset:0,color:'#06B6D4' },
                { x1:108,y1:16,x2:242,y2:16,speed:0.009,offset:0.4,color:'#60A5FA' },
                { x1:154,y1:24,x2:276,y2:28,speed:0.011,offset:0.7,color:'#10B981' },
              ].map(({ x1,y1,x2,y2,speed,offset,color },pi) => {
                const t=((tick*speed)+offset)%1;
                const mx=(x1+x2)/2, my=Math.min(y1,y2)-10;
                const px=(1-t)*(1-t)*x1+2*(1-t)*t*mx+t*t*x2;
                const py=(1-t)*(1-t)*y1+2*(1-t)*t*my+t*t*y2;
                return <circle key={pi} cx={px} cy={py} r="2.5" fill={color} opacity="0.95"/>;
              })}
            </svg>
          </div>
        </div>

        {/* BOTTOM STATS STRIP */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-1.5 flex items-center justify-between border-t border-cyan-900/30 bg-[#040A14]/70">
          {[
            ['Endpoints', '12,847'],
            ['Events/s', `${230+(tick%60)}`],
            ['Threats Blocked', '99.97%'],
            ['Uptime', '99.999%'],
            ['Regions', '28'],
          ].map(([l,v],i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-slate-500">{l}</span>
              <span className="text-[9px] font-mono font-bold text-cyan-400">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scene indicator dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SCENES.map((_, i) => (
          <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === scene ? 'w-6 bg-cyan-400' : 'w-1.5 bg-slate-700'}`} />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN HERO COMPONENT
═══════════════════════════════════════════════════════════════════════ */
export function Hero() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1220 0%, #0F172A 50%, #020617 100%)' }}>

      {/* ── BACKGROUND LAYERS ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hdots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="#06B6D4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hdots)"/>
        </svg>

        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-blue-700/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-cyan-600/6 rounded-full blur-[140px]" />
        <div className="absolute top-2/3 left-1/2 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />

        {/* Horizontal glow lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-28 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

          {/* ── LEFT: HERO TEXT ─────────────────────────────── */}
          <div className={`flex flex-col gap-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Live enterprise badge */}
            <div className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-cyan-700/40 bg-cyan-950/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"/>
              </span>
              <span className="text-[10px] font-bold text-cyan-400 tracking-[0.18em] uppercase font-['Inter',sans-serif]">
                Enterprise ICT &amp; Cybersecurity Solutions
              </span>
            </div>

            {/* Main headline */}
            <div className="flex flex-col gap-1">
              <h1 className="text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.05] tracking-tight font-['Montserrat',sans-serif]">
                <span className="text-white">Secure </span>
                <span className="text-[#06B6D4]">•</span>
                <span className="text-white"> Intelligent </span>
                <span className="text-[#06B6D4]">•</span>
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.05] tracking-tight font-['Montserrat',sans-serif]">
                <span style={{ background: 'linear-gradient(90deg, #FFFFFF 0%, #BAE6FD 50%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Future‑Ready
                </span>
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.05] tracking-tight text-slate-100 font-['Montserrat',sans-serif]">
                ICT Solutions
              </h1>
            </div>

            {/* Accent divider */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#06B6D4]" />
              <div className="h-px flex-1 max-w-sm bg-gradient-to-r from-cyan-500/40 to-transparent" />
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-xl font-['Inter',sans-serif]">
              Empowering organizations with enterprise infrastructure, cybersecurity, cloud technologies, and intelligent digital transformation solutions.
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Shield, label: 'Cybersecurity' },
                { icon: Server, label: 'Infrastructure' },
                { icon: Cloud, label: 'Cloud' },
                { icon: Cpu, label: 'AI Systems' },
                { icon: Globe, label: 'Connectivity' },
                { icon: Lock, label: 'Zero Trust' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-800/40 bg-blue-950/40 text-blue-200 text-xs font-semibold backdrop-blur-sm font-['Inter',sans-serif]">
                  <Icon className="w-3.5 h-3.5 text-[#06B6D4]" />{label}
                </span>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                id="hero-cta-primary"
                onClick={() => router.push('/contact')}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold text-[15px] rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 font-['Inter',sans-serif]"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.4)'
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.4)')}
              >
                Request Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                id="hero-cta-secondary"
                onClick={() => router.push('/services')}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-[15px] rounded-xl border border-white/15 hover:border-[#06B6D4]/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 font-['Inter',sans-serif]"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-4 pt-3 border-t border-white/8">
              <div className="flex -space-x-1.5">
                {[
                  ['#1D4ED8','GOV'],
                  ['#0E7490','FIN'],
                  ['#1E40AF','HLT'],
                  ['#312E81','TEL'],
                ].map(([bg, label], i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B1220] flex items-center justify-center"
                    style={{ backgroundColor: bg as string }}>
                    <span className="text-white text-[7px] font-bold">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 leading-snug font-['Inter',sans-serif]">
                Trusted by <span className="text-white font-semibold">government, finance,</span><br/>
                <span className="text-white font-semibold">healthcare</span> &amp; telecom sectors
              </p>
            </div>
          </div>

          {/* ── RIGHT: ANIMATED TECH VISUALIZATION ─────────── */}
          <div className={`hidden lg:block h-[640px] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TechVisualization />
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono text-slate-500 tracking-[0.3em]">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce" />
      </div>
    </section>
  );
}
