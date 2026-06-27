'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { solutionsData } from '@/lib/solutions-data';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(solutionsData[0].id);
  
  const activeSolution = solutionsData.find(s => s.id === activeTab) || solutionsData[0];
  const ActiveIcon = activeSolution.icon;

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navigation />

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
        </div>
        
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.25) 50%)', backgroundSize: '100% 4px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Technology Architecture
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 font-['Montserrat',sans-serif]"
          >
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] mb-6" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive technology solutions designed to modernize, secure, and scale your organizational infrastructure.
          </motion.p>
        </div>
      </section>

      {/* ── INTERACTIVE SOLUTIONS BENTO ───────────────────────── */}
      <section className="py-12 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* LEFT SIDE: Vertical Tabs */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {solutionsData.map((solution) => {
                const Icon = solution.icon;
                const isActive = activeTab === solution.id;
                
                return (
                  <button
                    key={solution.id}
                    onClick={() => setActiveTab(solution.id)}
                    className={`relative flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 border overflow-hidden group ${
                      isActive 
                        ? 'bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700 shadow-lg' 
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1"
                        style={{ backgroundColor: solution.color }}
                      />
                    )}
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div 
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isActive ? 'bg-[#020617]' : 'bg-slate-800 group-hover:bg-slate-700'
                        }`}
                        style={{ color: isActive ? solution.color : '#94A3B8' }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-bold font-['Montserrat',sans-serif] ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                        {solution.title}
                      </span>
                    </div>

                    <ChevronRight 
                      className={`w-5 h-5 transition-transform ${
                        isActive ? 'text-white translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                      style={{ color: isActive ? solution.color : undefined }}
                    />
                  </button>
                );
              })}
            </div>

            {/* RIGHT SIDE: Content Area */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-[#0B1220] border border-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                >
                  {/* Glowing background for active item */}
                  <div 
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-10 pointer-events-none"
                    style={{ backgroundColor: activeSolution.color }}
                  />
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-900 border border-slate-700 shadow-xl"
                      style={{ color: activeSolution.color }}
                    >
                      <ActiveIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black font-['Montserrat',sans-serif] text-white tracking-tight">
                        {activeSolution.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-lg mb-10 relative z-10">
                    {activeSolution.description}
                  </p>

                  {/* SubItems Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {activeSolution.subItems.map((item, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + (idx * 0.1) }}
                        key={idx} 
                        className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mb-4 shadow-lg"
                          style={{ backgroundColor: activeSolution.color, boxShadow: `0 0 10px ${activeSolution.color}` }}
                        />
                        <h3 className="text-lg font-bold text-white mb-2 font-['Montserrat',sans-serif]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Consult Button */}
                  <div className="mt-12 pt-8 border-t border-slate-800 relative z-10 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: activeSolution.color }}
                    >
                      Discuss this Solution
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-slate-300 font-bold transition-all duration-300 hover:bg-slate-800 border border-slate-700 hover:border-slate-500"
                    >
                      Download Solution Brief
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
