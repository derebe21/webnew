'use client';

import { servicesStore } from '@/lib/data-store';
import { Card, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { type Service } from '@/lib/services-data';

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
      className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic mb-6">
          OUR <span className="text-primary">SERVICES</span>
        </h2>
        <div className="w-24 h-1.5 bg-slate-900 dark:bg-white mx-auto rounded-full" />
      </div>

      <div className="max-w-[100vw]">
        {/* Infinite 3D Auto-Slider Ribbon */}
        <div
          className="relative flex overflow-hidden group/slider"
        >
          {/* Subtle Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />

          {variant === 'grid' ? (
            /* Static Grid Container (Home Page) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4 md:px-6 w-full max-w-[90rem] mx-auto">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="w-full">
                    <Link href={`/services/${service.slug}`} className="block group h-full">
                      <Card
                        className="h-full border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900/80 backdrop-blur-sm flex flex-col group-hover:-translate-y-1 p-6"
                      >
                        {/* Icon Area */}
                        <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                          {Icon && <Icon className="w-6 h-6 text-blue-600 dark:text-cyan-400" />}
                        </div>

                        {/* Text Content Area */}
                        <div className="flex-grow flex flex-col">
                          <CardTitle className="text-lg font-bold tracking-tight text-slate-900 dark:text-white mb-2 line-clamp-2">
                            {service.title}
                          </CardTitle>
                          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-grow">
                            {service.description}
                          </p>
                          
                          {/* Learn More Link */}
                          <div className="flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-cyan-400 group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors mt-auto">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
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
                  <div key={index} className="w-[85vw] md:w-[60vw] lg:w-[480px] flex-shrink-0 snap-center">
                    <Link href={`/services/${service.slug}`} className="block group h-full">
                      <Card
                        className={`h-full overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex flex-col group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)]`}
                      >
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
                        <div className="flex-grow flex flex-col p-8 bg-white dark:bg-slate-900/90 z-10 min-h-[260px]">
                          <CardTitle className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-6 text-center line-clamp-2">
                            {service.title}
                          </CardTitle>

                          <ul className="space-y-4 flex-grow flex flex-col justify-center">
                            {service.features.slice(0, 3).map((feature: string, fIndex: number) => (
                              <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                <span className="leading-relaxed text-left font-medium">{feature.split(':')[0]}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Explore Domain Button */}
                        <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-400 transition-all py-5 px-8 flex items-center justify-center text-white font-black uppercase tracking-widest text-[16px] gap-3 group/btn cursor-pointer">
                          <span className="relative z-10">Explore Service</span>
                          <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-2" />
                        </div>
                      </Card>
                    </Link>
                  </div>
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
                  : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-blue-400/50'
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
