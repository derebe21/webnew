'use client';

import { useEffect, useState } from 'react';

const SLIDES = [
  '/images/cyber-security-world-bg.jpg',
  '/images/datacenter-server-racks-bg.jpg',
  '/images/integrated-security-surveillance-bg.jpg',
];

const SLIDE_DURATION = 4000;

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020611] font-sans"
    >
      {/* ── CINEMATIC SLIDESHOW BACKGROUND ── */}
      {SLIDES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            active === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url(${src})` }}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-[#020611]/30" />
        </div>
      ))}

      {/* Top & Bottom fade blends to seamlessly connect to the next sections */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020611] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#020611] to-transparent pointer-events-none z-10" />

      {/* ── ALL TEXT REMOVED AS REQUESTED ── */}
    </section>
  );
}
