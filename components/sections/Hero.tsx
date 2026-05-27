'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, Server, Cloud, Globe, Cpu, Lock, Play, Pause } from 'lucide-react';
import { useRouter } from 'next/navigation';

/* ------------------------------------------------------------------ */
/* Animated Right-Panel Visualization                                   */
/* ------------------------------------------------------------------ */
function TechVisualization() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 100);
    return () => clearInterval(id);
  }, []);

  const bars = [65, 82, 48, 91, 73, 58, 88, 44, 76, 95, 62, 79];
  const activeBar = tick % bars.length;

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-950/80 border border-cyan-900/40 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.08)]">

        {/* Animated grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tgrid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#38bdf8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tgrid)"/>
        </svg>

        {/* Scanning sweep line */}
        <div
          className="absolute left-0 right-0 h-[1px] pointer-events-none"
          style={{
            top: `${(tick * 1.5) % 100}%`,
            background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)',
            boxShadow: '0 0 10px rgba(34,211,238,0.4)',
          }}
        />

        {/* TOP HUD bar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-cyan-900/30 bg-slate-950/60">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[9px] font-mono text-cyan-400 tracking-widest">SOC — SECURITY OPS CENTER</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[8px] font-mono text-blue-400">THREAT: MINIMAL</span>
            <span className="text-[8px] font-mono text-green-400">● SECURE</span>
          </div>
        </div>

        <div className="absolute inset-0 top-7 bottom-6 flex flex-col gap-2 p-2.5">

          {/* Row 1: Data Center Racks + Network Graph */}
          <div className="flex gap-2" style={{ height: '28%' }}>
            {/* Server Racks */}
            <div className="flex-1 rounded-lg bg-blue-950/30 border border-blue-900/40 p-1.5 flex flex-col">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest mb-1">DATACENTER — RACK A4</span>
              <div className="flex gap-0.5 flex-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-0.5">
                    {[...Array(7)].map((_, j) => (
                      <div key={j} className="flex-1 rounded-[2px]"
                        style={{ backgroundColor: (tick + i * 2 + j) % 11 === 0 ? 'rgba(34,211,238,0.6)' : (tick + i + j) % 7 === 0 ? 'rgba(59,130,246,0.5)' : 'rgba(30,58,138,0.4)' }} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex-1 h-[3px] rounded-full"
                    style={{ backgroundColor: (tick + i * 3) % 8 === 0 ? '#22d3ee' : (tick + i) % 5 === 0 ? '#3b82f6' : '#1e3a8a' }} />
                ))}
              </div>
            </div>

            {/* Network Topology */}
            <div className="w-[42%] rounded-lg bg-blue-950/30 border border-blue-900/40 p-1.5">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">NETWORK TOPOLOGY</span>
              <svg className="w-full h-[calc(100%-12px)] mt-0.5" viewBox="0 0 100 65">
                {[[50,32,18,15],[50,32,82,15],[50,32,28,58],[50,32,72,58],[50,32,88,38]].map(([x1,y1,x2,y2],i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={`rgba(34,211,238,${0.15 + Math.sin(tick*0.06+i)*0.12})`} strokeWidth="0.6"/>
                ))}
                <circle cx="50" cy="32" r="6" fill="none" stroke="#22d3ee" strokeWidth="0.8"/>
                <circle cx="50" cy="32" r={2.5 + Math.sin(tick*0.1)*1.2} fill="#22d3ee" opacity="0.9"/>
                {[[18,15],[82,15],[28,58],[72,58],[88,38]].map(([cx,cy],i) => (
                  <circle key={i} cx={cx} cy={cy} r="3.5"
                    fill={`rgba(59,130,246,${0.3+Math.sin(tick*0.06+i*0.4)*0.2})`} stroke="#3b82f6" strokeWidth="0.5"/>
                ))}
                {/* Packet 1 */}
                {(() => { const t=(tick*0.012)%1; return <circle cx={50+(18-50)*t} cy={32+(15-32)*t} r="2" fill="#22d3ee" opacity="0.95"/>; })()}
                {/* Packet 2 */}
                {(() => { const t=((tick*0.01)+0.5)%1; return <circle cx={50+(72-50)*t} cy={32+(58-32)*t} r="2" fill="#60a5fa" opacity="0.95"/>; })()}
              </svg>
            </div>
          </div>

          {/* Row 2: Threat Monitor + System Status */}
          <div className="flex gap-2" style={{ height: '22%' }}>
            <div className="flex-1 rounded-lg bg-blue-950/30 border border-blue-900/40 p-1.5">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">THREAT MONITOR</span>
              <div className="flex items-end gap-0.5 mt-1" style={{ height: 'calc(100% - 14px)' }}>
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-[2px] transition-all duration-150"
                    style={{
                      height: `${h + (i === activeBar ? 12 : 0)}%`,
                      backgroundColor: i === activeBar ? '#22d3ee' : i % 4 === 0 ? '#2563eb' : '#1e3a8a',
                      boxShadow: i === activeBar ? '0 0 8px rgba(34,211,238,0.7)' : 'none',
                    }}/>
                ))}
              </div>
            </div>

            <div className="w-[40%] rounded-lg bg-blue-950/30 border border-blue-900/40 p-1.5 flex flex-col justify-between">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">SYSTEM STATUS</span>
              {[['Firewall','#22d3ee',100],['IDS/IPS','#3b82f6',98],['Encryption','#22d3ee',100]].map(([label,color,pct],i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <div className="flex justify-between">
                    <span className="text-[7px] font-mono text-slate-400">{label as string}</span>
                    <span className="text-[7px] font-mono font-bold" style={{color: color as string}}>{pct}%</span>
                  </div>
                  <div className="h-[3px] bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{width:`${pct}%`, backgroundColor: color as string}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Cloud + AI Engine */}
          <div className="flex gap-2" style={{ height: '22%' }}>
            <div className="w-[48%] rounded-lg bg-blue-950/30 border border-blue-900/40 p-1.5">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">CLOUD INFRASTRUCTURE</span>
              <svg className="w-full mt-0.5" style={{height:'calc(100% - 14px)'}} viewBox="0 0 100 38">
                <path d="M 12 30 Q 12 12 28 12 Q 28 4 44 8 Q 50 2 58 8 Q 76 4 76 18 Q 88 18 88 28 Z"
                  fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
                {[[30,18],[50,13],[66,19]].map(([cx,cy],i) => (
                  <circle key={i} cx={cx} cy={cy} r="3"
                    fill={`rgba(34,211,238,${0.3+Math.sin(tick*0.08+i)*0.2})`} stroke="#22d3ee" strokeWidth="0.5"/>
                ))}
                {[20,34,48,62,76].map((x,i) => (
                  <line key={i} x1={x} y1={30} x2={x} y2={30+3+((tick*0.4+i*2.5)%5)}
                    stroke="#22d3ee" strokeWidth="0.6" opacity="0.5"/>
                ))}
              </svg>
            </div>

            <div className="flex-1 rounded-lg bg-blue-950/30 border border-blue-900/40 p-1.5">
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">AI ENGINE</span>
              <svg className="w-full mt-0.5" style={{height:'calc(100% - 14px)'}} viewBox="0 0 100 38">
                {[12,18,24].map((r,i) => (
                  <circle key={i} cx="24" cy="19" r={r} fill="none" stroke="#1d4ed8"
                    strokeWidth="0.5" opacity={0.25+Math.sin(tick*0.06+i*1.2)*0.15}/>
                ))}
                <circle cx="24" cy="19" r={4+Math.sin(tick*0.1)*1.5}
                  fill="rgba(34,211,238,0.12)" stroke="#22d3ee" strokeWidth="0.8"/>
                {[[55,8],[78,19],[55,30],[90,12],[90,28]].map(([tx,ty],i) => (
                  <g key={i}>
                    <line x1="24" y1="19" x2={tx} y2={ty}
                      stroke={`rgba(59,130,246,${0.15+Math.sin(tick*0.05+i)*0.12})`} strokeWidth="0.5"/>
                    <circle cx={tx} cy={ty} r="2.5"
                      fill={`rgba(59,130,246,${0.35+Math.sin(tick*0.07+i*0.5)*0.25})`}/>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Row 4: Global Network */}
          <div className="flex-1 rounded-lg bg-blue-950/30 border border-blue-900/40 p-1.5">
            <span className="text-[7px] font-mono text-blue-400 tracking-widest mb-0.5 block">GLOBAL NETWORK COVERAGE</span>
            <svg className="w-full" style={{height:'calc(100% - 14px)'}} viewBox="0 0 300 52">
              <ellipse cx="150" cy="26" rx="138" ry="22" fill="none" stroke="#1e3a8a" strokeWidth="0.4" opacity="0.5"/>
              {[60,90,120,150,180,210,240].map((x,i) => (
                <ellipse key={i} cx={x} cy="26" rx="9" ry="22" fill="none" stroke="#1e3a8a" strokeWidth="0.3" opacity="0.25"/>
              ))}
              {[15,26,36].map((y,i) => (
                <line key={i} x1="12" y1={y} x2="288" y2={y} stroke="#1e3a8a" strokeWidth="0.3" opacity="0.25"/>
              ))}
              {[[55,20],[108,16],[154,24],[196,18],[242,16],[276,28],[88,34],[192,31]].map(([cx,cy],i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r={3+Math.sin(tick*0.06+i)*0.5}
                    fill={`rgba(34,211,238,${0.4+Math.sin(tick*0.08+i)*0.25})`} stroke="#22d3ee" strokeWidth="0.4"/>
                  <circle cx={cx} cy={cy} r={6+Math.sin(tick*0.06+i)*0.5}
                    fill="none" stroke="rgba(34,211,238,0.15)" strokeWidth="0.4"/>
                </g>
              ))}
              {[[55,20,154,24],[108,16,242,16],[154,24,276,28],[196,18,55,20]].map(([x1,y1,x2,y2],i) => {
                const mx=(x1+x2)/2, my=Math.min(y1,y2)-10;
                return <path key={i} d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`}
                  fill="none" stroke={`rgba(34,211,238,${0.12+Math.sin(tick*0.04+i)*0.08})`} strokeWidth="0.5"/>;
              })}
              {/* Moving packet */}
              {(() => {
                const t=(tick*0.013)%1;
                const x1=55,y1=20,x2=154,y2=24,mx=(x1+x2)/2,my=Math.min(y1,y2)-10;
                const px=(1-t)*(1-t)*x1+2*(1-t)*t*mx+t*t*x2;
                const py=(1-t)*(1-t)*y1+2*(1-t)*t*my+t*t*y2;
                return <circle cx={px} cy={py} r="2.5" fill="#22d3ee" opacity="0.95"/>;
              })()}
              {(() => {
                const t=((tick*0.009)+0.4)%1;
                const x1=108,y1=16,x2=242,y2=16,mx=(x1+x2)/2,my=Math.min(y1,y2)-12;
                const px=(1-t)*(1-t)*x1+2*(1-t)*t*mx+t*t*x2;
                const py=(1-t)*(1-t)*y1+2*(1-t)*t*my+t*t*y2;
                return <circle cx={px} cy={py} r="2.5" fill="#60a5fa" opacity="0.95"/>;
              })()}
            </svg>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-1 flex items-center justify-between border-t border-cyan-900/30 bg-slate-950/60">
          {[['Endpoints','12,847'],['Events/s',`${228+(tick%50)}`],['Blocked','99.97%'],['Uptime','99.999%']].map(([l,v],i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-[7px] font-mono text-slate-500">{l}</span>
              <span className="text-[9px] font-mono font-bold text-cyan-400">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Hero                                                            */
/* ------------------------------------------------------------------ */
export function Hero() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  useEffect(() => { setMounted(true); }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoPlaying) { videoRef.current.pause(); setVideoPlaying(false); }
    else { videoRef.current.play(); setVideoPlaying(true); }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">

      {/* ── CINEMATIC BACKGROUND VIDEO ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="/images/data-center-main.jpg"
        >
          {/* Multiple Pexels sources for enterprise/tech footage */}
          <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4"/>
          <source src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4" type="video/mp4"/>
        </video>

        {/* Dark cinematic overlay layers */}
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />

        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hdots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="#38bdf8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hdots)"/>
        </svg>

        {/* Ambient glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[120px] pointer-events-none" />

        {/* Top/Bottom edge lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">

          {/* LEFT: Hero Text */}
          <div className={`flex flex-col gap-7 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Live badge */}
            <div className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-cyan-700/40 bg-cyan-950/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"/>
              </span>
              <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">Enterprise ICT & Cybersecurity Solutions</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black leading-[1.06] tracking-tight">
                <span className="text-white">Secure </span>
                <span className="text-cyan-400">•</span>
                <span className="text-white"> Intelligent </span>
                <span className="text-cyan-400">•</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black leading-[1.06] tracking-tight mt-1">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                  Future‑Ready ICT
                </span>
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black leading-[1.06] tracking-tight mt-1">
                <span className="text-slate-200">Solutions</span>
              </h1>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-500" />
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-cyan-500/40 to-transparent" />
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
              Empowering organizations with enterprise infrastructure, cybersecurity, cloud technologies, and intelligent digital transformation solutions.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Shield, label: 'Cybersecurity' },
                { icon: Server, label: 'Infrastructure' },
                { icon: Cloud, label: 'Cloud' },
                { icon: Cpu, label: 'AI Systems' },
                { icon: Globe, label: 'Connectivity' },
                { icon: Lock, label: 'Zero Trust' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/50 border border-blue-800/40 text-blue-200 text-xs font-semibold backdrop-blur-sm">
                  <Icon className="w-3 h-3 text-cyan-400" />{label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <button
                id="hero-cta-primary"
                onClick={() => router.push('/contact')}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-[15px] rounded-xl shadow-[0_8px_32px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.55)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Request Consultation
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => router.push('/services')}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-[15px] rounded-xl border border-white/20 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="w-4.5 h-4.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <div className="flex -space-x-1.5">
                {[
                  ['bg-blue-700','GOV'],
                  ['bg-cyan-700','FIN'],
                  ['bg-blue-800','HLT'],
                  ['bg-indigo-700','TEL'],
                ].map(([bg, label], i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-slate-950 flex items-center justify-center`}>
                    <span className="text-white text-[7px] font-bold">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Trusted by <span className="text-white font-semibold">government, finance,</span><br/>
                <span className="text-white font-semibold">healthcare</span> &amp; telecom sectors
              </p>
            </div>
          </div>

          {/* RIGHT: Animated Tech Panel */}
          <div className={`hidden lg:block h-[600px] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <TechVisualization />
          </div>
        </div>
      </div>

      {/* ── VIDEO PLAY/PAUSE CONTROL ───────────────────────────────── */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-12 right-6 z-20 flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all text-white/60 hover:text-white text-[10px] font-mono"
        title={videoPlaying ? 'Pause video' : 'Play video'}
      >
        {videoPlaying
          ? <><Pause className="w-3 h-3"/> PAUSE</>
          : <><Play className="w-3 h-3"/> PLAY</>
        }
      </button>

      {/* ── SCROLL INDICATOR ──────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[9px] font-mono text-slate-500 tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
