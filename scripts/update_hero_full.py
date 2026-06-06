import re

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update text content
content = content.replace('className="font-black text-sm md:text-base text-white tracking-[0.2em]" style={{fontFamily:\'var(--font-montserrat,Montserrat,sans-serif)\'}}>\n                  \n                </span>', 'className="font-black text-sm md:text-base text-white tracking-[0.2em]" style={{fontFamily:\'var(--font-montserrat,Montserrat,sans-serif)\'}}>\n                  ITSEC Technology\n                </span>')

content = content.replace('''<span className="text-white"></span>
                <span className="text-cyan-400"></span>
                <span className="text-white"></span>
                <span className="text-cyan-400"></span>''', '''<span className="text-white">Secure</span>
                <span className="text-cyan-400"> • </span>
                <span className="text-white">Intelligent</span>
                <span className="text-cyan-400"> • </span>''')

content = content.replace('''<h1 className="font-black leading-[1.05] tracking-tight"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4.2rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)',background:'linear-gradient(90deg,#fff 0%,#BAE6FD 50%,#06B6D4 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                
              </h1>''', '''<h1 className="font-black leading-[1.05] tracking-tight"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4.2rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)',background:'linear-gradient(90deg,#fff 0%,#BAE6FD 50%,#06B6D4 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                Future-Ready
              </h1>''')

content = content.replace('''<h1 className="font-black leading-[1.05] tracking-tight text-slate-100"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4.2rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                
              </h1>''', '''<h1 className="font-black leading-[1.05] tracking-tight text-slate-100"
                  style={{fontSize:'clamp(2.4rem,4.5vw,4.2rem)',fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
                ICT Solutions
              </h1>''')

content = content.replace('''<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>''', '''Request Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>''')

content = content.replace('''<ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"/>
              </Link>''', '''Explore Services
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"/>
              </Link>''')


# 2. Update the Canvas Background to include the rotating globe, shield effects, blue neon, data flow
new_canvas = """function TechCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Node system for global data flow and neon connections
    class Node {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      
      constructor() {
        this.x = (Math.random() - 0.5) * width * 1.5;
        this.y = (Math.random() - 0.5) * height * 1.5;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = (Math.random() - 0.5) * 2;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;
        if (this.z < 0) this.z = 1000;
        if (this.z > 1000) this.z = 0;
      }
    }

    const nodes: Node[] = Array.from({ length: 60 }, () => new Node());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let tick = 0;

    const animate = () => {
      tick++;
      
      // Enterprise Dark Theme Background
      ctx.fillStyle = '#020617'; // deeply dark slate
      ctx.fillRect(0, 0, width, height);

      // Central Haze/Glow
      const cx = width * 0.75; // Globe center X (right side)
      const cy = height * 0.5; // Globe center Y
      
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, height);
      glow.addColorStop(0, 'rgba(6, 182, 212, 0.15)');
      glow.addColorStop(0.3, 'rgba(37, 99, 235, 0.05)');
      glow.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // ── DRAW DIGITAL GLOBE ──
      ctx.lineWidth = 1;
      const globeRadius = Math.min(width, height) * 0.35;
      
      // Globe rotation
      const rotX = tick * 0.002;
      const rotY = tick * 0.005;

      ctx.save();
      ctx.translate(cx, cy);
      
      // Globe base shield/aura
      ctx.beginPath();
      ctx.arc(0, 0, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.stroke();
      ctx.fillStyle = 'rgba(2, 6, 23, 0.5)';
      ctx.fill();

      // Latitude and Longitude lines
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.2)'; // Blue neon
      for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        const angle = (i / 12) * Math.PI * 2 + rotY;
        const rx = globeRadius * Math.cos(angle);
        ctx.ellipse(0, 0, Math.abs(rx), globeRadius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        const yOffset = (i / 8 - 0.5) * globeRadius * 2;
        const r = Math.sqrt(globeRadius * globeRadius - yOffset * yOffset);
        ctx.ellipse(0, yOffset, r, Math.abs(r * Math.sin(rotX)), 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Cybersecurity Shield around globe
      ctx.beginPath();
      const shieldScale = 1.1 + Math.sin(tick * 0.05) * 0.02;
      for(let i=0; i<6; i++) {
         const sa = (i / 6) * Math.PI * 2 + (tick * 0.01);
         const ex = Math.cos(sa) * globeRadius * shieldScale;
         const ey = Math.sin(sa) * globeRadius * shieldScale;
         if (i === 0) ctx.moveTo(ex, ey);
         else ctx.lineTo(ex, ey);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
      ctx.stroke();
      ctx.restore();

      // ── DRAW DATA FLOW NODES & NEON CONNECTIONS ──
      ctx.save();
      ctx.translate(width/2, height/2);
      
      nodes.forEach(node => {
        node.update();
        const scale = 1000 / (1000 - node.z);
        const px = node.x * scale;
        const py = node.y * scale;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(px, py, scale * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${Math.min(1, scale * 0.5)})`;
        ctx.fill();
        
        // Connect nearby nodes
        nodes.forEach(n2 => {
          const d = Math.hypot(node.x - n2.x, node.y - n2.y, node.z - n2.z);
          if (d < 150) {
            const scale2 = 1000 / (1000 - n2.z);
            const px2 = n2.x * scale2;
            const py2 = n2.y * scale2;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px2, py2);
            ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - d/150) * 0.3 * scale})`;
            ctx.stroke();
          }
        });
      });
      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" style={{ filter: 'contrast(1.2)' }} />;
}"""

pattern = re.compile(r'function TechCanvasBackground\(\) \{.*?(?=\n/\* ═══════════════════════════════════════════════════════════)', re.DOTALL)
content = pattern.sub(new_canvas, content)

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Hero.tsx successfully updated with full page cinematic video background and text.")
