'use client';

import { useEffect, useState } from 'react';

const SLIDES = [
  '/images/cyber-security-world-bg.jpg',
  '/images/datacenter-server-racks-bg.jpg',
  '/images/integrated-security-surveillance-bg.jpg',
];

const SLIDE_DURATION = 4000; // 4 seconds per image

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020611]" />;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020611]"
    >
      {/* ── KEN BURNS CINEMATIC SLIDESHOW ── */}
      {SLIDES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            active === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              transform: active === index ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 6000ms ease-out',
            }}
          />
        </div>
      ))}

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#020611] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020611] to-transparent pointer-events-none z-10" />

      {/* ── SLIDE PROGRESS DOTS ── */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === index
                ? 'w-10 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
