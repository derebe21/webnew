'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Cyber particle element types converging into logo
const cyberElements = [
  // FROM TOP
  { id: 'shield-top', from: { x: 0, y: -500 }, icon: '🛡', label: 'FIREWALL', angle: 270 },
  { id: 'lock-top-left', from: { x: -300, y: -400 }, icon: '🔒', label: 'ENCRYPT', angle: 300 },
  { id: 'lock-top-right', from: { x: 300, y: -400 }, icon: '🔐', label: 'VAULT', angle: 240 },
  // FROM BOTTOM
  { id: 'eye-bottom', from: { x: 0, y: 500 }, icon: '👁', label: 'MONITOR', angle: 90 },
  { id: 'chip-bottom-left', from: { x: -300, y: 450 }, icon: '💠', label: 'AI-CORE', angle: 60 },
  { id: 'chip-bottom-right', from: { x: 300, y: 450 }, icon: '⚡', label: 'THREAT', angle: 120 },
  // FROM LEFT
  { id: 'net-left', from: { x: -600, y: 0 }, icon: '🌐', label: 'NETWORK', angle: 0 },
  { id: 'cpu-left', from: { x: -500, y: -200 }, icon: '⬡', label: 'SOC', angle: 330 },
  { id: 'data-left', from: { x: -500, y: 200 }, icon: '◈', label: 'DATA', angle: 30 },
  // FROM RIGHT
  { id: 'cloud-right', from: { x: 600, y: 0 }, icon: '☁', label: 'CLOUD', angle: 180 },
  { id: 'key-right', from: { x: 500, y: -200 }, icon: '🗝', label: 'ACCESS', angle: 210 },
  { id: 'radar-right', from: { x: 500, y: 200 }, icon: '◉', label: 'RADAR', angle: 150 },
];

// Floating binary strings
const binaryStrings = [
  { text: '10110101', x: '8%', delay: 0 },
  { text: '01001110', x: '18%', delay: 0.3 },
  { text: '11010011', x: '78%', delay: 0.6 },
  { text: '00101101', x: '88%', delay: 0.9 },
  { text: '10011010', x: '50%', delay: 1.2 },
];

// Circuit line paths for SVG
const circuitPaths = [
  "M 0 300 L 200 300 L 200 250 L 350 250",
  "M 800 200 L 600 200 L 600 260 L 450 260",
  "M 400 0 L 400 150 L 380 180",
  "M 400 600 L 400 450 L 420 420",
  "M 0 500 L 150 500 L 150 350 L 370 290",
  "M 800 500 L 650 500 L 650 350 L 430 290",
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    setMounted(true);
    
    let t2: NodeJS.Timeout, t3: NodeJS.Timeout, t4: NodeJS.Timeout, t5: NodeJS.Timeout, t6: NodeJS.Timeout, tLoop: NodeJS.Timeout;

    const runSequence = () => {
      setPhase(1);
      t2 = setTimeout(() => setPhase(2), 3000);
      t3 = setTimeout(() => setPhase(3), 5000);
      t4 = setTimeout(() => setPhase(4), 8000);
      t5 = setTimeout(() => setPhase(5), 11000);
      t6 = setTimeout(() => setPhase(6), 14000);
      tLoop = setTimeout(runSequence, 20000); // 6 seconds on phase 6 before restarting
    };

    runSequence();
    
    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(tLoop);
    };
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#020611]" />;

  const showLogo = phase >= 1;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] font-sans"
    >
      {/* ── CYBERSECURITY VIDEO BACKGROUND ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-65"
        style={{ filter: 'brightness(0.85) saturate(1.8) hue-rotate(5deg) contrast(1.1)' }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Lighter overlay - keeps text readable without killing the video */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#050e28]/50 via-[#020d1f]/30 to-[#050e28]/50" />

      {/* ── CINEMATIC BACKGROUNDS ── */}
      <div className="absolute inset-0 z-[2] bg-grid-animated opacity-[0.08] pointer-events-none mix-blend-overlay" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.1] z-[3]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Dynamic Background Transitions */}
      <AnimatePresence>
        {phase === 3 && (
          <motion.div
            key="bg-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center animate-ken-burns z-[4]"
            style={{ backgroundImage: `url(/images/hero-cybersecurity.jpg)`, filter: 'brightness(0.9) saturate(1.5) contrast(1.1)' }}
          />
        )}
        {phase === 4 && (
          <motion.div
            key="bg-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center animate-ken-burns z-[4]"
            style={{ backgroundImage: `url(/images/hero-datacenter.jpg)`, filter: 'brightness(0.85) saturate(1.4) contrast(1.05)' }}
          />
        )}
        {phase === 5 && (
          <motion.div
            key="bg-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center animate-ken-burns z-[4]"
            style={{ backgroundImage: `url(/images/hero-surveillance.jpg)`, filter: 'brightness(0.85) saturate(1.4) contrast(1.05)' }}
          />
        )}

        {/* ── PHASE 6 CYBERSECURITY BACKGROUND ── */}
        {phase === 6 && (
          <motion.div
            key="bg-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            {/* Rich Blue Gradient Background - brighter than default */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#040d2a] via-[#061535] to-[#020c20]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(6,182,212,0.12)_0%,rgba(37,99,235,0.08)_40%,transparent_70%)]" />

            {/* Animated Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="phase6-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#06B6D4" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#phase6-grid)" />
            </svg>

            {/* Circuit Lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              {circuitPaths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="rgba(6,182,212,0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.6, 0.3] }}
                  transition={{ duration: 2, delay: i * 0.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 3 }}
                />
              ))}
              {/* Circuit nodes */}
              {[
                [200, 300], [350, 250], [600, 200], [450, 260],
                [400, 150], [400, 450], [150, 350], [650, 350]
              ].map(([cx, cy], i) => (
                <motion.circle
                  key={`node-${i}`}
                  cx={cx} cy={cy} r="4"
                  fill="rgba(6,182,212,0.8)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.6] }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.15, repeat: Infinity, repeatDelay: 4 }}
                />
              ))}
            </svg>

            {/* Binary rain columns */}
            {binaryStrings.map((b, i) => (
              <motion.div
                key={`bin-${i}`}
                className="absolute font-mono text-[10px] text-cyan-400/40 tracking-widest select-none"
                style={{ left: b.x, top: 0 }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: ['0%', '110%'], opacity: [0, 0.5, 0] }}
                transition={{ duration: 6, delay: b.delay, repeat: Infinity, ease: 'linear' }}
              >
                {Array.from({ length: 20 }).map((_, j) => (
                  <div key={j} style={{ opacity: 1 - j * 0.05 }}>
                    {Math.random() > 0.5 ? '1' : '0'}
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Ambient radial glows */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle overlay to ensure text readability */}
      <div className={`absolute inset-0 z-[1] transition-opacity duration-1000 ${phase === 6 ? 'opacity-0' : 'opacity-100'} bg-gradient-to-r from-[#020611]/80 via-[#020611]/50 to-transparent`} />

      {/* ── PHASE 6: CYBER CONVERGENCE PARTICLES ── */}
      {phase === 6 && (
        <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
          {cyberElements.map((el, i) => (
            <motion.div
              key={el.id}
              className="absolute top-1/2 left-1/2"
              style={{ originX: '50%', originY: '50%' }}
              initial={{ x: el.from.x, y: el.from.y, opacity: 0, scale: 0.4 }}
              animate={{
                x: [el.from.x, el.from.x * 0.6, el.from.x * 0.2, 0],
                y: [el.from.y, el.from.y * 0.6, el.from.y * 0.2, 0],
                opacity: [0, 0.9, 0.9, 0],
                scale: [0.4, 0.8, 1, 0.3],
              }}
              transition={{
                duration: 3.5,
                delay: i * 0.18,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                {/* Glow ring */}
                <div className="absolute inset-0 w-12 h-12 rounded-full bg-cyan-500/20 blur-md -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                {/* Icon container */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900/80 to-cyan-900/60 border border-cyan-500/50 flex items-center justify-center text-lg backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <span className="text-sm">{el.icon}</span>
                </div>
                <span className="text-[8px] text-cyan-400 font-mono tracking-widest opacity-80">{el.label}</span>
                {/* Trailing line toward center */}
                <motion.div
                  className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-cyan-400/60 to-transparent origin-left"
                  style={{ width: '60px', rotate: `${el.angle}deg`, translateX: '-50%', translateY: '-50%' }}
                  animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}

          {/* Floating scan ring expanding from center */}
          {[0, 0.8, 1.6].map((delay, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
              initial={{ width: 100, height: 100, opacity: 0.8 }}
              animate={{ width: 700, height: 700, opacity: 0 }}
              transition={{ duration: 3.5, delay, repeat: Infinity, ease: 'easeOut' }}
              style={{ marginLeft: -350, marginTop: -350 }}
            />
          ))}

          {/* Corner hex decorators */}
          {[
            { top: '10%', left: '5%' }, { top: '10%', right: '5%', left: 'auto' },
            { bottom: '10%', left: '5%' }, { bottom: '10%', right: '5%', left: 'auto' }
          ].map((pos, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute text-cyan-500/30 text-4xl font-mono select-none"
              style={pos as React.CSSProperties}
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            >
              ⬡
            </motion.div>
          ))}

          {/* Data stream lines from edges */}
          {[
            { start: '0% 20%', end: '50% 35%', color: 'cyan' },
            { start: '100% 20%', end: '50% 35%', color: 'blue' },
            { start: '0% 80%', end: '50% 35%', color: 'cyan' },
            { start: '100% 80%', end: '50% 35%', color: 'blue' },
          ].map((line, i) => (
            <svg
              key={`stream-${i}`}
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: 'none' }}
            >
              <motion.line
                x1={line.start.split(' ')[0]}
                y1={line.start.split(' ')[1]}
                x2={line.end.split(' ')[0]}
                y2={line.end.split(' ')[1]}
                stroke={line.color === 'cyan' ? 'rgba(6,182,212,0.25)' : 'rgba(37,99,235,0.25)'}
                strokeWidth="1"
                strokeDasharray="8 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, repeatDelay: 1 }}
              />
            </svg>
          ))}
        </div>
      )}

      {/* ── ANIMATED LOGO ── */}
      {showLogo && (
        <motion.div
          className="absolute z-40"
          initial={{ top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 1 }}
          animate={{ 
            top: phase === 1 ? '38%' : phase >= 3 && phase <= 5 ? '15%' : '35%', 
            left: phase >= 3 && phase <= 5 ? '15%' : '50%', 
            x: '-50%', y: '-50%', 
            scale: phase === 1 ? 0.8 : phase >= 3 && phase <= 5 ? 0.4 : 1.2 
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            {/* Soft Blue Pulse (Active in Phase 6) */}
            <motion.div
              className="absolute inset-0 bg-blue-500/40 rounded-full blur-3xl z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 6 ? [0.2, 0.6, 0.2] : 0, scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Extra glow ring in phase 6 */}
            {phase === 6 && (
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-cyan-500/20"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            )}

            {/* Top Left Quadrant */}
            <motion.img 
              src="/images/secnet-logo-shield.png" alt="Logo"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10"
              style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }}
              initial={{ x: -150, y: -150, opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0, type: "spring", bounce: 0.3 }}
            />
            {/* Top Right Quadrant */}
            <motion.img 
              src="/images/secnet-logo-shield.png" alt="Logo"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10"
              style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' }}
              initial={{ x: 150, y: -150, opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.1, type: "spring", bounce: 0.3 }}
            />
            {/* Bottom Left Quadrant */}
            <motion.img 
              src="/images/secnet-logo-shield.png" alt="Logo"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10"
              style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }}
              initial={{ x: -150, y: 150, opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.3 }}
            />
            {/* Bottom Right Quadrant */}
            <motion.img 
              src="/images/secnet-logo-shield.png" alt="Logo"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10"
              style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}
              initial={{ x: 150, y: 150, opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.3 }}
            />
          </div>
        </motion.div>
      )}

      {/* ── SCENE TEXT ORCHESTRATION ── */}
      <AnimatePresence mode="wait">
        
        {/* Phase 1: Text Reveal with Light Sweep */}
        {phase === 1 && (
          <motion.div 
            key="text-1"
            className="absolute top-[55%] inset-x-0 flex flex-col items-center z-30"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', transition: { duration: 0.5 } }}
            transition={{ duration: 1.5 }}
          >
            <div className="relative overflow-hidden px-8 py-4 flex flex-col items-center">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-cyan-500 tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] text-center">
                ITSEC TECHNOLOGY
              </h1>
              {/* Sweeping Light Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] mix-blend-overlay pointer-events-none w-1/2"
                initial={{ left: '-100%' }}
                animate={{ left: '200%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}

        {/* Phase 2: Text Merges into Logo */}
        {phase === 2 && (
          <motion.div
            key="text-2"
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30 w-full pointer-events-none"
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 0, scale: 0.2, y: -20 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="px-8 py-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-cyan-500 tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] text-center">
                ITSEC TECHNOLOGY
              </h1>
            </div>
          </motion.div>
        )}

        {/* Phase 3: Cybersecurity */}
        {phase === 3 && (
          <motion.div
            key="text-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-4 right-4 md:left-24 md:right-auto -translate-y-1/2 md:max-w-2xl text-center md:text-left z-30"
          >
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Cybersecurity Solutions
            </h2>
          </motion.div>
        )}

        {/* Phase 4: Data Center */}
        {phase === 4 && (
          <motion.div
            key="text-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-4 right-4 md:left-24 md:right-auto -translate-y-1/2 md:max-w-2xl text-center md:text-left z-30"
          >
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Data Center Solutions
            </h2>
          </motion.div>
        )}

        {/* Phase 5: Integrated Security */}
        {phase === 5 && (
          <motion.div
            key="text-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-4 right-4 md:left-24 md:right-auto -translate-y-1/2 md:max-w-2xl text-center md:text-left z-30"
          >
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Integrated Security Systems
            </h2>
          </motion.div>
        )}

        {/* Phase 6: Final Closing */}
        {phase === 6 && (
          <motion.div
            key="text-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-[55%] inset-x-0 flex flex-col items-center z-20 text-center px-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-cyan-500 tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mb-4">
              ITSEC TECHNOLOGY
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl text-cyan-400 font-light tracking-[0.2em] uppercase mb-10 drop-shadow-md">
              Secure. Transform. Empower.
            </p>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 sm:px-10 py-4 bg-cyan-500/10 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-full text-cyan-300 uppercase tracking-widest text-sm sm:text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] backdrop-blur-md pointer-events-auto cursor-pointer"
            >
              Explore Our Solutions &rarr;
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Top & Bottom fade blends */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#020611] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#020611] to-transparent pointer-events-none z-10" />
    </section>
  );
}
