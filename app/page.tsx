'use client';

import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Products } from '@/components/sections/Products';
import { News } from '@/components/sections/News';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Monitor, Lock, Bell, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About showOnlyAboutUs />
      <Services variant="grid" />
      <Products />
      <News />

      {/* ── ITSEC PORTAL TEASER ─────────────────────────────── */}
      <section id="portal" className="relative py-24 md:py-32 bg-[#020617] overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/8 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />

        {/* HUD corners */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-[1.5px] border-l-[1.5px] border-cyan-500/20" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-[1.5px] border-r-[1.5px] border-cyan-500/20" />

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.25) 50%)', backgroundSize: '100% 4px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Client Portal
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 font-['Montserrat',sans-serif] drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              ITSEC <span className="text-[#06B6D4]">PORTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] mb-6" />
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif]">
              ITSEC Portal is a secure centralized platform designed to provide clients with service requests, support management, system alerts, operational reporting, and infrastructure visibility from a single interface.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              { icon: Monitor, title: 'Live Monitoring', desc: 'Real-time dashboards for your infrastructure health and uptime.', color: 'text-cyan-400', border: 'hover:border-cyan-500/40', glow: 'bg-cyan-500/5' },
              { icon: Lock, title: 'Secure Access', desc: 'Multi-factor authentication and role-based access control.', color: 'text-blue-400', border: 'hover:border-blue-500/40', glow: 'bg-blue-500/5' },
              { icon: Bell, title: 'Smart Alerts', desc: 'Instant notifications for threats, incidents, and system events.', color: 'text-violet-400', border: 'hover:border-violet-500/40', glow: 'bg-violet-500/5' },
              { icon: BarChart3, title: 'Analytics', desc: 'Comprehensive reporting and performance analytics for your teams.', color: 'text-emerald-400', border: 'hover:border-emerald-500/40', glow: 'bg-emerald-500/5' },
            ].map(({ icon: Icon, title, desc, color, border, glow }) => (
              <div
                key={title}
                className={`group relative p-6 rounded-2xl bg-[#0F172A]/80 backdrop-blur-xl border border-[#1E293B] ${border} transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
              >
                <div className={`absolute inset-0 ${glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className={`w-12 h-12 rounded-xl bg-[#020617] border border-[#1E293B] flex items-center justify-center mb-5 ${color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-base mb-2 font-['Montserrat',sans-serif]">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-['Inter',sans-serif]">{desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      <Footer />
    </div>
  );
}
