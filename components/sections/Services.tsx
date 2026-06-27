'use client';

import { servicesStore } from '@/lib/data-store';
import { Card, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { type Service } from '@/lib/services-data';
import { motion } from 'framer-motion';

import { useState, useRef, useEffect } from 'react';

interface ServicesProps {
  variant?: 'grid' | 'scroll';
}

export function Services({ variant = 'grid' }: ServicesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [servicesData, setServicesData] = useState<Service[]>([]);

  useEffect(() => {
    // Show all 10 services for the home page grid
    setServicesData(servicesStore.getAll());
  }, [variant]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = index * scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  // Auto-rotation logic
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (variant !== 'scroll' || isHovered) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const nextIndex = (activeIndex + 1) % servicesData.length;
        scrollTo(nextIndex);
      }
    }, 4000); // Auto-rotate every 4 seconds

    return () => clearInterval(interval);
  }, [variant, isHovered, activeIndex, servicesData.length]);

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#020617] text-white overflow-hidden transition-colors duration-500"
    >
      {/* ── BACKGROUND VISUAL EFFECTS ───────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Network Image Background */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
        />
        {/* Strong Dark Overlay to maintain deep background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/95 via-[#0B1220]/60 to-[#0B1220]/95" />
        {/* Cinematic Scanlines Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
            backgroundSize: '100% 4px',
          }}
        />
        {/* Tech Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]"><defs>
          <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0 0 40" fill="none" stroke="#06B6D4" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#services-grid)"/>
        </svg>
        {/* Soft glowing ambient gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>
      {/* Futuristic HUD Corners */}
      <div className="absolute top-8 left-8 z-[1] w-12 h-12 border-t-[1.5px] border-l-[1.5px] border-cyan-500/20" />
      <div className="absolute top-8 right-8 z-[1] w-12 h-12 border-t-[1.5px] border-r-[1.5px] border-cyan-500/20" />
      <div className="absolute bottom-8 left-8 z-[1] w-12 h-12 border-b-[1.5px] border-l-[1.5px] border-cyan-500/20" />
      <div className="absolute bottom-8 right-8 z-[1] w-12 h-12 border-b-[1.5px] border-r-[1.5px] border-cyan-500/20" />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SERVICES</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
      </motion.div>

      <div className="max-w-[100vw]">
        {/* Infinite 3D Auto-Slider Ribbon */}
        <div
          className="relative flex overflow-hidden group/slider"
        >
          {/* Subtle Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

          {variant === 'grid' ? (
            /* Static Grid Container (Home Page) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4 md:px-6 w-full max-w-[90rem] mx-auto">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="w-full"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: (index % 5) * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Link href={`/services/${service.slug}`} className="block group h-full">
                      <Card
                        className="relative h-full border border-slate-800/80 hover:border-cyan-500/40 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 bg-gradient-to-b from-slate-900/80 to-[#020617]/90 backdrop-blur-md flex flex-col group-hover:-translate-y-1.5 p-6 overflow-hidden"
                      >
                        {/* Card Scanlines Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-0" />
                        {/* HUD Corners */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />



                        {/* Image Logo / Cover Area */}
                        {service.logoImage ? (
                          <div className="relative w-[calc(100%+3rem)] h-40 -mx-6 -mt-6 mb-5 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                            <img src={service.logoImage} alt="" className="w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 to-transparent pointer-events-none" />
                          </div>
                        ) : (
                          <div className="relative z-10 w-14 h-14 rounded-lg bg-slate-900 border border-itsec-primary/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 overflow-hidden">
                            {Icon && <Icon className="w-6 h-6 text-itsec-primary group-hover:text-cyan-400 transition-colors" />}
                          </div>
                        )}

                        {/* Text Content Area */}
                        <div className="relative z-10 flex-grow flex flex-col">
                          <CardTitle className="text-lg font-bold tracking-tight text-white group-hover:text-itsec-primary transition-colors mb-2 line-clamp-2" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                            {service.title}
                          </CardTitle>
                          
                          {/* Learn More Link */}
                          <div className="flex items-center gap-1.5 text-sm font-bold transition-all mt-auto group-hover:gap-2"
                            style={{ color: '#22d3ee' }}>
                            <span className="group-hover:underline underline-offset-2">Learn More</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* Native Scrolling Container (Services Page) */
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex gap-12 py-12 px-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {servicesData.map((service, index) => {
                return (
                  <motion.div 
                    key={index} 
                    className="w-[85vw] md:w-[60vw] lg:w-[480px] flex-shrink-0 snap-center"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Link href={`/services/${service.slug}`} className="block group h-full">
                      <Card
                        className="relative h-full overflow-hidden border border-slate-800 hover:border-cyan-500/40 shadow-2xl transition-all duration-700 bg-gradient-to-b from-slate-900/80 via-[#020617]/90 to-slate-950/90 backdrop-blur-xl flex flex-col group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]"
                      >
                        {/* HUD Corners */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                        

                        {/* Specific Image Area */}
                        {service.bannerImage && (
                          <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                            <img
                              src={service.bannerImage}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-950/30 transition-colors duration-700 group-hover:bg-slate-950/10" />
                          </div>
                        )}

                        {/* Text Content Area - With Bullets */}
                        <div className="relative flex-grow flex flex-col p-8 bg-gradient-to-b from-slate-900/95 to-slate-950/95 z-10 min-h-[260px]">
                          {/* Card Scanlines Overlay */}
                          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-0" />
                          
                          <div className="relative z-10">
                          <CardTitle className="text-2xl font-black tracking-tight text-white group-hover:text-itsec-primary transition-colors mb-6 text-center line-clamp-2" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                            {service.title}
                          </CardTitle>

                          <ul className="space-y-4 flex-grow flex flex-col justify-center">
                            {service.features.slice(0, 3).map((feature: string, fIndex: number) => (
                              <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-itsec-primary mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                                <span className="leading-relaxed text-left font-medium">{feature.split(':')[0]}</span>
                              </li>
                            ))}
                          </ul>
                          </div>
                        </div>

                        {/* Explore Domain Button */}
                        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 transition-all py-5 px-8 flex items-center justify-center text-white font-black uppercase tracking-widest text-[16px] gap-3 group/btn cursor-pointer">
                          <span className="relative z-10">Explore Service</span>
                          <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-2" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pagination Bullets for visual feedback (Only on Scroll Variant) */}
        {variant === 'scroll' && (
          <div className="flex justify-center gap-3 mt-12 flex-wrap px-4">
            {servicesData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${i === activeIndex
                  ? 'w-10 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]'
                  : 'w-2.5 bg-slate-700 hover:bg-blue-400/50'
                  }`}
                aria-label={`Scroll to ${servicesData[i].title}`}
              />
            ))}
          </div>
        )}
      </div>


    </section>
  );
}
