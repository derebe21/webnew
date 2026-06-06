import re

hero_path = 'C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx'
with open(hero_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the CyberCanvas to include the 3D Corridor beams and teal/cyan colors
new_canvas = """function CyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let tick = 0;

    // ── DATA STREAMS ──
    const streams = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 2 + 1,
      length: Math.random() * 50 + 20,
      opacity: Math.random() * 0.5 + 0.1
    }));

    // ── NETWORK GRAPH PARTICLES ──
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1
    }));

    // ── 3D CORRIDOR BEAMS ──
    class Beam {
      z = 0; speed = 0; side = 0;
      constructor(side: number) { this.side = side; this.reset(); }
      reset() { this.z = Math.random() * 1000 + 100; this.speed = Math.random() * 4 + 2; }
      update() { this.z -= this.speed; if (this.z < 1) this.reset(); }
      draw() {
        const perspective = 300 / this.z;
        const xOffset = this.side === 1 ? -width * 0.8 : width * 0.8;
        const startX = width/2 + xOffset * perspective;
        const startY = height/2 + (height * 0.5) * perspective;
        const endPerspective = 300 / (this.z + 100);
        const endX = width/2 + xOffset * endPerspective;
        const endY = height/2 + (height * 0.5) * endPerspective;

        ctx.beginPath(); ctx.moveTo(startX, startY); ctx.lineTo(endX, endY);
        ctx.shadowBlur = 15; ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
        ctx.strokeStyle = `rgba(0, 240, 255, ${Math.min(1, perspective * 2)})`;
        ctx.lineWidth = 4 * perspective; ctx.stroke(); ctx.shadowBlur = 0;
      }
    }
    const beams: Beam[] = [];
    for(let i=0; i<4; i++) { beams.push(new Beam(1)); beams.push(new Beam(-1)); }

    // ── HUD RINGS ──
    const drawHUDRings = (cx: number, cy: number, scale: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(tick * 0.005);
      ctx.beginPath(); ctx.arc(0, 0, 100 * scale, 0, Math.PI * 1.5);
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.2)'; ctx.lineWidth = 2; ctx.stroke();
      
      ctx.rotate(-tick * 0.01);
      for(let i=0; i<12; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, 80 * scale, (i/12)*Math.PI*2, (i/12)*Math.PI*2 + 0.2);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)'; ctx.lineWidth = 4; ctx.stroke();
      }
      ctx.restore();
    };

    const animate = () => {
      tick++;

      // 1. Cinematic Deep SOC Background (Teal/Navy palette from image)
      ctx.fillStyle = '#030b14'; // Darker teal-navy
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.8);
      bgGlow.addColorStop(0, 'rgba(4, 25, 45, 0.6)'); // Teal glow
      bgGlow.addColorStop(1, 'rgba(3, 11, 20, 1)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. 3D Corridor Beams
      beams.forEach(b => { b.update(); b.draw(); });

      // 3. Data Streams
      streams.forEach(s => {
        s.y += s.speed;
        if (s.y > height) { s.y = -s.length; s.x = Math.random() * width; }
        const grad = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.length);
        grad.addColorStop(0, `rgba(0, 240, 255, 0)`);
        grad.addColorStop(1, `rgba(0, 240, 255, ${s.opacity})`);
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x, s.y + s.length);
        ctx.strokeStyle = grad; ctx.lineWidth = 2; ctx.stroke();
      });

      // 4. Digital Network Connections
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
      }

      // 5. Holographic HUD Interfaces
      drawHUDRings(width * 0.15, height * 0.7, 1);
      drawHUDRings(width * 0.85, height * 0.2, 0.8);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
}"""

# 2. Update the Logo container to use an inline SVG that looks EXACTLY like the blue shield with a transparent background
new_logo_container = """          {/* CUSTOM INLINE SVG LOGO (TRANSPARENT BACKGROUND) */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(0,120,255,0.8)]">
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Circuit Nodes */}
              <circle cx="50" cy="90" r="6" fill="#1e5cba" />
              <circle cx="150" cy="90" r="6" fill="#1e5cba" />
              <circle cx="115" cy="45" r="6" fill="#1e5cba" />
              <circle cx="85" cy="45" r="6" fill="#1e5cba" />
              <circle cx="70" cy="110" r="6" fill="#1e5cba" />
              <circle cx="130" cy="110" r="6" fill="#1e5cba" />
              <circle cx="145" cy="125" r="6" fill="#1e5cba" />
              <circle cx="95" cy="155" r="6" fill="#1e5cba" />
              
              {/* Circuit Lines */}
              <path d="M 50 90 L 50 65 L 85 45 M 150 90 L 150 65 L 115 45 M 50 95 L 50 110 L 95 155 M 150 95 L 150 110 L 145 125" stroke="#1e5cba" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Main Outer Shield Ring */}
              <path d="M 100 20 L 160 45 L 160 110 C 160 140 100 180 100 180 C 100 180 40 140 40 110 L 40 45 Z" stroke="#1e5cba" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 100 35 L 140 55 L 140 105 C 140 125 100 160 100 160 C 100 160 60 125 60 105 L 60 55 Z" stroke="#1e5cba" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Solid Inner Shield */}
              <path d="M 100 65 L 125 75 L 125 110 C 125 125 100 145 100 145 C 100 145 75 125 75 110 L 75 75 Z" fill="#296dd3" />
              
              {/* Keyhole */}
              <path d="M 100 90 A 5 5 0 1 0 100 100 L 105 115 L 95 115 Z" fill="#020611" />
            </svg>
          </div>"""

# Replace CyberCanvas
pattern_canvas = re.compile(r'function CyberCanvas\(\) \{.*?(?=\n/\* ═══════════════════════════════════════════════════════════)', re.DOTALL)
content = pattern_canvas.sub(new_canvas, content)

# Replace Logo Container
pattern_logo = re.compile(r'\{\/\* LOGO CONTAINER \*\/\}.*?<\/div>', re.DOTALL)
content = pattern_logo.sub(new_logo_container, content)

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Hero.tsx successfully updated with SVG vector logo and teal 3D corridor canvas.")
