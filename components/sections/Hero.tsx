'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, Server, Cloud, Globe, Cpu, Lock, ChevronDown } from 'lucide-react';
import Link from 'next/link';

/* ═══════════════════════════════════════════════════════════
   6-SCENE LABELS
═══════════════════════════════════════════════════════════ */
const SCENES = [
  { id: 1, label: 'Enterprise City & Digital Network' },
  { id: 2, label: 'Data Center — Rack Systems' },
  { id: 3, label: 'Cybersecurity SOC & HUD' },
  { id: 4, label: 'Cloud Infrastructure & Secure Data' },
  { id: 5, label: 'Smart Building & Intelligent Systems' },
  { id: 6, label: 'Global Enterprise Connectivity' },
];

/* ═══════════════════════════════════════════════════════════
   RIGHT PANEL — ANIMATED ENTERPRISE VISUALIZATION
═══════════════════════════════════════════════════════════ */
function TechVisualization() {
  const [tick, setTick] = useState(0);
  const [scene, setScene] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setTick(v => v + 1), 80);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setScene(s => (s + 1) % SCENES.length); setVisible(true); }, 400);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const bars   = [62,84,47,93,71,56,89,43,78,96,60,81,54,88];
  const active = tick % bars.length;

  /* helpers */
  const s  = (f: number, o = 0) => Math.sin(tick * f + o);
  const op = (base: number, f: number, o = 0) => Math.max(0, Math.min(1, base + s(f, o) * 0.15));

  return (
    <div className="relative w-full h-full">
      {/* outer card */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-cyan-900/25 shadow-[0_0_80px_rgba(6,182,212,0.07)]"
           style={{ background: 'linear-gradient(160deg,#04080F 0%,#060E1A 60%,#050B16 100%)' }}>

        {/* grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]"><defs>
          <pattern id="pg" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0L0 0 0 32" fill="none" stroke="#06B6D4" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#pg)"/>
        </svg>

        {/* scan line */}
        <div className="absolute left-0 right-0 h-px pointer-events-none"
             style={{ top:`${(tick*1.1)%100}%`, background:'linear-gradient(90deg,transparent,rgba(6,182,212,.45),transparent)', boxShadow:'0 0 12px rgba(6,182,212,.35)' }}/>

        {/* ── TOP HUD ── */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-900/25" style={{background:'rgba(4,8,15,.75)'}}>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-60"/>
              <span className="relative rounded-full h-2 w-2 bg-cyan-400"/>
            </span>
            <span className="text-[9px] font-mono text-cyan-400 tracking-widest">ITSEC · ENTERPRISE SOC · LIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[8px] font-mono text-blue-400">THREAT: MINIMAL</span>
            <span className="text-[8px] font-mono text-emerald-400">● ALL SYSTEMS SECURE</span>
          </div>
        </div>

        {/* scene label */}
        <div className="absolute top-9 left-0 right-0 flex justify-center"
             style={{ opacity: visible ? 1 : 0, transition:'opacity .4s ease' }}>
          <span className="text-[8px] font-mono tracking-[.18em] text-cyan-500/70 uppercase">
            SCENE {SCENES[scene].id}/6 — {SCENES[scene].label}
          </span>
        </div>

        {/* ── MAIN VIZ ── */}
        <div className="absolute left-0 right-0 bottom-8 flex flex-col gap-2 p-3"
             style={{ top:'46px', opacity: visible?1:0, transition:'opacity .4s ease' }}>

          {/* ROW 1 — DATACENTER RACKS + TOPOLOGY  30% */}
          <div className="flex gap-2" style={{height:'30%'}}>
            {/* racks */}
            <div className="flex-1 rounded-xl border border-blue-900/25 p-2 flex flex-col"
                 style={{background:'rgba(6,18,52,.3)'}}>
              <span className="text-[7px] font-mono text-blue-400 tracking-widest mb-1.5">DATACENTER — RACK A4</span>
              <div className="flex gap-0.5 flex-1">
                {[...Array(13)].map((_,i)=>(
                  <div key={i} className="flex-1 flex flex-col gap-0.5">
                    {[...Array(8)].map((_,j)=>(
                      <div key={j} className="flex-1 rounded-[1px]"
                           style={{backgroundColor:
                             (tick+i*3+j)%13===0?'rgba(6,182,212,.85)':
                             (tick+i+j)%7===0?'rgba(37,99,235,.65)':
                             (tick+i*2+j)%5===0?'rgba(16,185,129,.45)':
                             'rgba(30,58,138,.35)'}}/>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex gap-0.5 mt-1.5">
                {[...Array(13)].map((_,i)=>(
                  <div key={i} className="flex-1 h-[2px] rounded-full"
                       style={{backgroundColor:(tick+i*4)%9===0?'#06B6D4':(tick+i)%6===0?'#2563EB':'#1e3a8a'}}/>
                ))}
              </div>
            </div>

            {/* network topology */}
            <div className="w-[37%] rounded-xl border border-blue-900/25 p-2"
                 style={{background:'rgba(6,18,52,.3)'}}>
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">NETWORK TOPOLOGY</span>
              <svg className="w-full mt-1" style={{height:'calc(100% - 14px)'}} viewBox="0 0 100 65">
                {([[50,32,18,14],[50,32,82,14],[50,32,26,56],[50,32,74,56],[50,32,91,34],[50,32,12,40]] as number[][]).map(([x1,y1,x2,y2],i)=>(
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={`rgba(6,182,212,${op(.12,.05,i)})`} strokeWidth=".6"/>
                ))}
                <circle cx="50" cy="32" r="7" fill="none" stroke="#06B6D4" strokeWidth=".8"/>
                <circle cx="50" cy="32" r={2.5+s(.08)*1.5} fill="#06B6D4" opacity=".9"/>
                {([[18,14],[82,14],[26,56],[74,56],[91,34],[12,40]] as number[][]).map(([cx,cy],i)=>(
                  <circle key={i} cx={cx} cy={cy} r="3.5"
                    fill={`rgba(37,99,235,${op(.3,.06,i*.4)})`} stroke="#2563EB" strokeWidth=".5"/>
                ))}
                {[{t:tick*.012%1,c:'#06B6D4',x2:18,y2:14},{t:(tick*.01+.5)%1,c:'#60A5FA',x2:74,y2:56},{t:(tick*.008+.3)%1,c:'#10B981',x2:91,y2:34}].map(({t,c,x2,y2},i)=>(
                  <circle key={i} cx={50+(x2-50)*t} cy={32+(y2-32)*t} r="2.2" fill={c} opacity=".95"/>
                ))}
              </svg>
            </div>
          </div>

          {/* ROW 2 — THREAT BAR + STATUS  22% */}
          <div className="flex gap-2" style={{height:'22%'}}>
            <div className="flex-1 rounded-xl border border-blue-900/25 p-2"
                 style={{background:'rgba(6,18,52,.3)'}}>
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">THREAT MONITOR — REALTIME</span>
              <div className="flex items-end gap-0.5 mt-1" style={{height:'calc(100% - 14px)'}}>
                {bars.map((h,i)=>(
                  <div key={i} className="flex-1 rounded-t-[2px] transition-all duration-150"
                       style={{
                         height:`${h+(i===active?15:0)}%`,
                         backgroundColor:i===active?'#06B6D4':i%4===0?'#2563EB':'#1e3a8a',
                         boxShadow:i===active?'0 0 10px rgba(6,182,212,.8)':'none'
                       }}/>
                ))}
              </div>
            </div>
            <div className="w-[38%] rounded-xl border border-blue-900/25 p-2 flex flex-col justify-between"
                 style={{background:'rgba(6,18,52,.3)'}}>
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">SYSTEM STATUS</span>
              {([['Firewall','#06B6D4',100],['IDS / IPS','#2563EB',98],['Encryption','#10B981',100],['Zero Trust','#06B6D4',97]] as [string,string,number][]).map(([label,color,pct],i)=>(
                <div key={i} className="flex flex-col gap-0.5">
                  <div className="flex justify-between">
                    <span className="text-[7px] font-mono text-slate-400">{label}</span>
                    <span className="text-[7px] font-mono font-bold" style={{color}}>{pct}%</span>
                  </div>
                  <div className="h-[2px] bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{width:`${pct}%`,backgroundColor:color}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3 — CLOUD + AI ENGINE  22% */}
          <div className="flex gap-2" style={{height:'22%'}}>
            {/* cloud */}
            <div className="w-[50%] rounded-xl border border-blue-900/25 p-2"
                 style={{background:'rgba(6,18,52,.3)'}}>
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">CLOUD INFRASTRUCTURE</span>
              <svg className="w-full mt-1" style={{height:'calc(100% - 14px)'}} viewBox="0 0 100 38">
                <path d="M10 30Q10 10 26 10Q26 2 42 7Q50 1 58 7Q76 2 76 16Q88 16 88 26Z"
                  fill="none" stroke="#2563EB" strokeWidth=".8" opacity=".45"/>
                {([[28,16],[50,11],[66,17]] as number[][]).map(([cx,cy],i)=>(
                  <circle key={i} cx={cx} cy={cy} r="3.5"
                    fill={`rgba(6,182,212,${op(.3,.07,i)})`} stroke="#06B6D4" strokeWidth=".5"/>
                ))}
                {[16,30,44,58,74].map((x,i)=>(
                  <line key={i} x1={x} y1={29} x2={x} y2={29+3+((tick*.35+i*2.5)%5)}
                    stroke="#06B6D4" strokeWidth=".7" opacity=".55"/>
                ))}
                {[24,45,66].map((x,i)=>(
                  <circle key={i} cx={x} cy={26} r={2+s(.1,i*1.5)*1}
                    fill="none" stroke={`rgba(16,185,129,${op(.3,.08,i)})`} strokeWidth=".5"/>
                ))}
              </svg>
            </div>
            {/* AI */}
            <div className="flex-1 rounded-xl border border-blue-900/25 p-2"
                 style={{background:'rgba(6,18,52,.3)'}}>
              <span className="text-[7px] font-mono text-blue-400 tracking-widest">AI INTELLIGENCE ENGINE</span>
              <svg className="w-full mt-1" style={{height:'calc(100% - 14px)'}} viewBox="0 0 100 38">
                {[10,16,22].map((r,i)=>(
                  <circle key={i} cx="22" cy="19" r={r} fill="none" stroke="#1D4ED8"
                    strokeWidth=".5" opacity={op(.2,.05,i*1.2)}/>
                ))}
                <circle cx="22" cy="19" r={4+s(.09)*1.5}
                  fill="rgba(6,182,212,.1)" stroke="#06B6D4" strokeWidth=".8"/>
                {([[55,7],[78,19],[55,31],[92,12],[92,28],[70,4]] as number[][]).map(([tx,ty],i)=>(
                  <g key={i}>
                    <line x1="22" y1="19" x2={tx} y2={ty}
                      stroke={`rgba(37,99,235,${op(.15,.04,i)})`} strokeWidth=".5"/>
                    <circle cx={tx} cy={ty} r={2.5+s(.07,i*.5)*.5}
                      fill={`rgba(37,99,235,${op(.4,.06,i*.5)})`}/>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* ROW 4 — GLOBAL MAP  flex-1 */}
          <div className="flex-1 rounded-xl border border-blue-900/25 p-2"
               style={{background:'rgba(6,18,52,.3)'}}>
            <span className="text-[7px] font-mono text-blue-400 tracking-widest mb-0.5 block">GLOBAL ENTERPRISE NETWORK — LIVE COVERAGE</span>
            <svg className="w-full" style={{height:'calc(100% - 14px)'}} viewBox="0 0 300 52">
              <ellipse cx="150" cy="26" rx="138" ry="22" fill="none" stroke="#1E3A8A" strokeWidth=".4" opacity=".45"/>
              {[60,90,120,150,180,210,240].map((x,i)=>(
                <ellipse key={i} cx={x} cy="26" rx="9" ry="22" fill="none" stroke="#1E3A8A" strokeWidth=".3" opacity=".18"/>
              ))}
              {[15,26,36].map((y,i)=>(
                <line key={i} x1="12" y1={y} x2="288" y2={y} stroke="#1E3A8A" strokeWidth=".3" opacity=".18"/>
              ))}
              {([[55,20,'ADD'],[108,16,'DXB'],[154,24,'LDN'],[196,18,'NYC'],[242,16,'SNG'],[276,28,'TYO'],[88,34,'NBI'],[192,31,'JHB']] as [number,number,string][]).map(([cx,cy,city],i)=>(
                <g key={i}>
                  <circle cx={cx} cy={cy} r={3+s(.06,i)*.6} fill={`rgba(6,182,212,${op(.4,.07,i)})`} stroke="#06B6D4" strokeWidth=".4"/>
                  <circle cx={cx} cy={cy} r={6+s(.06,i)*.6} fill="none" stroke="rgba(6,182,212,.1)" strokeWidth=".4"/>
                  <text x={cx+5} y={cy-3} fontSize="4" fill="#94A3B8" fontFamily="monospace">{city}</text>
                </g>
              ))}
              {([[55,20,154,24],[108,16,242,16],[154,24,276,28],[196,18,55,20],[88,34,196,18]] as number[][]).map(([x1,y1,x2,y2],i)=>{
                const mx=(x1+x2)/2,my=Math.min(y1,y2)-10;
                return <path key={i} d={`M${x1} ${y1}Q${mx} ${my}${x2} ${y2}`}
                  fill="none" stroke={`rgba(6,182,212,${op(.1,.04,i)})`} strokeWidth=".5"/>;
              })}
              {([{x1:55,y1:20,x2:154,y2:24,sp:.012,off:0,c:'#06B6D4'},{x1:108,y1:16,x2:242,y2:16,sp:.009,off:.4,c:'#60A5FA'},{x1:154,y1:24,x2:276,y2:28,sp:.011,off:.7,c:'#10B981'}]).map(({x1,y1,x2,y2,sp,off,c},pi)=>{
                const t=(tick*sp+off)%1;
                const mx=(x1+x2)/2,my=Math.min(y1,y2)-10;
                const px=(1-t)*(1-t)*x1+2*(1-t)*t*mx+t*t*x2;
                const py=(1-t)*(1-t)*y1+2*(1-t)*t*my+t*t*y2;
                return <circle key={pi} cx={px} cy={py} r="2.5" fill={c} opacity=".95"/>;
              })}
            </svg>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-1.5 flex items-center justify-between border-t border-cyan-900/25"
             style={{background:'rgba(4,8,15,.75)'}}>
          {([['Endpoints','12,847'],['Events/s',`${230+(tick%60)}`],['Threats Blocked','99.97%'],['Uptime','99.999%'],['Regions','28']] as [string,string][]).map(([l,v],i)=>(
            <div key={i} className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-slate-500">{l}</span>
              <span className="text-[9px] font-mono font-bold text-cyan-400">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scene dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SCENES.map((_,i)=>(
          <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i===scene?'w-6 bg-cyan-400':'w-1.5 bg-slate-700'}`}/>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════════════════════ */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1220]">

      {/* ── CINEMATIC VIDEO BACKGROUND ───────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video ref={videoRef} autoPlay muted loop playsInline
               className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
               poster="/images/data-center-main.jpg">
          {/* Enterprise dark tech footage from Pexels — data center + network */}
          <source src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4" type="video/mp4"/>
          <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4"/>
        </video>
        {/* Layered dark overlays for text readability */}
        {/* Left-side dark gradient to ensure text readability */}
        <div className="absolute inset-0" style={{background:'linear-gradient(90deg, rgba(11,18,32,0.95) 0%, rgba(11,18,32,0.80) 40%, rgba(11,18,32,0.20) 100%)'}}/>
        {/* Bottom dark gradient to blend into the next section */}
        <div className="absolute inset-0" style={{background:'linear-gradient(180deg, transparent 60%, rgba(2,6,23,0.95) 100%)'}}/>
      </div>

      {/* ── BACKGROUND EFFECTS ───────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]"><defs>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="#06B6D4"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
        {/* ambient glows */}
        <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] rounded-full" style={{background:'rgba(37,99,235,.07)',filter:'blur(120px)'}}/>
        <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] rounded-full" style={{background:'rgba(6,182,212,.05)',filter:'blur(140px)'}}/>
        {/* edge lines */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(6,182,212,.18),transparent)'}}/>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(37,99,235,.14),transparent)'}}/>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-28 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

          {/* ── LEFT SIDE ──────────────────────────────── */}
          <div className={`flex flex-col gap-8 transition-all duration-1000 ${mounted?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>

            {/* Live badge */}
            <div className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border"
                 style={{borderColor:'rgba(6,182,212,.35)',background:'rgba(8,47,73,.25)',backdropFilter:'blur(8px)'}}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-70"/>
                <span className="relative rounded-full h-2 w-2 bg-cyan-400"/>
              </span>
              <span className="text-[10px] font-bold text-cyan-400 tracking-[.18em] uppercase" style={{fontFamily:'var(--font-inter,Inter,sans-serif)'}}>
                Enterprise ICT &amp; Cybersecurity Solutions
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-1">
              <h1 className="font-black leading-[1.05] tracking-tight"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                <span className="text-white">Secure </span>
                <span className="text-cyan-400">•</span>
                <span className="text-white"> Intelligent </span>
                <span className="text-cyan-400">•</span>
              </h1>
              <h1 className="font-black leading-[1.05] tracking-tight"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)',background:'linear-gradient(90deg,#fff 0%,#BAE6FD 50%,#06B6D4 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                Future‑Ready
              </h1>
              <h1 className="font-black leading-[1.05] tracking-tight text-slate-100"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                ICT Solutions
              </h1>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-cyan-400"/>
              <div className="h-px max-w-sm flex-1" style={{background:'linear-gradient(90deg,rgba(6,182,212,.4),transparent)'}}/>
            </div>

            {/* Subheadline */}
            <p className="text-[#CBD5E1] leading-relaxed max-w-xl"
               style={{fontSize:'clamp(.95rem,1.5vw,1.1rem)',fontFamily:'var(--font-inter,Inter,sans-serif)'}}>
              Empowering organizations with enterprise infrastructure, cybersecurity, cloud technologies, and intelligent digital transformation solutions.
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              {[
                {icon:Shield,label:'Cybersecurity'},
                {icon:Server,label:'Infrastructure'},
                {icon:Cloud,label:'Cloud'},
                {icon:Cpu,label:'AI Systems'},
                {icon:Globe,label:'Connectivity'},
                {icon:Lock,label:'Zero Trust'},
              ].map(({icon:Icon,label})=>(
                <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-blue-200 text-xs font-semibold"
                      style={{border:'1px solid rgba(37,99,235,.35)',background:'rgba(30,58,138,.3)',backdropFilter:'blur(4px)',fontFamily:'var(--font-inter,Inter,sans-serif)'}}>
                  <Icon className="w-3.5 h-3.5 text-cyan-400"/>{label}
                </span>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Primary */}
              <Link href="/contact"
                    className="group flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      fontSize:'15px',
                      fontFamily:'var(--font-inter,Inter,sans-serif)',
                      background:'linear-gradient(135deg,#2563EB 0%,#0284C7 100%)',
                      boxShadow:'0 8px 32px rgba(37,99,235,.4)'
                    }}
                    id="hero-cta-primary">
                Request Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>

              {/* Secondary */}
              <Link href="/services"
                    className="group flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      fontSize:'15px',
                      fontFamily:'var(--font-inter,Inter,sans-serif)',
                      background:'rgba(255,255,255,.05)',
                      border:'1px solid rgba(255,255,255,.15)',
                      backdropFilter:'blur(8px)'
                    }}
                    id="hero-cta-secondary">
                Explore Services
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"/>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-4 pt-3" style={{borderTop:'1px solid rgba(255,255,255,.07)'}}>
              <div className="flex -space-x-1.5">
                {([['#1D4ED8','GOV'],['#0E7490','FIN'],['#1E40AF','HLT'],['#312E81','TEL']] as [string,string][]).map(([bg,label],i)=>(
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                       style={{backgroundColor:bg,borderColor:'#0B1220'}}>
                    <span className="text-white text-[7px] font-bold">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 leading-snug" style={{fontFamily:'var(--font-inter,Inter,sans-serif)'}}>
                Trusted by <span className="text-white font-semibold">government, finance,</span><br/>
                <span className="text-white font-semibold">healthcare</span> &amp; telecom sectors
              </p>
            </div>
          </div>

          {/* ── RIGHT SIDE — ANIMATED VISUALIZATION ─────── */}
          <div className={`hidden lg:block h-[650px] transition-all duration-1000 delay-300 ${mounted?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
            <TechVisualization/>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-35">
        <span className="text-[9px] font-mono text-slate-500 tracking-[.3em]">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce"/>
      </div>
    </section>
  );
}
