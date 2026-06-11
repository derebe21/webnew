'use client';

import { useEffect, useState } from 'react';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020611]" />;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020611]"
    >
      {/* ── CLEAN FULL-SCREEN VIDEO — NO TEXT OVERLAY ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/cyber-security-world-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020611] to-transparent pointer-events-none z-10" />
    </section>
  );
}
