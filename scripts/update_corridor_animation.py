import re

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

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

    // ── Grid & HUD Elements ──
    const drawBackgroundGrid = () => {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }
    };

    const drawHUDElements = () => {
      // Draw techy circles top right
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
      ctx.lineWidth = 1.5;
      
      const drawCircleGroup = (cx: number, cy: number, r: number) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(cx, cy, r - 3, 0, Math.PI * (1.5 + Math.sin(tick * 0.05) * 0.5));
        ctx.stroke();
      };

      drawCircleGroup(width * 0.65, height * 0.2, 15);
      drawCircleGroup(width * 0.65 + 40, height * 0.2, 15);
      drawCircleGroup(width * 0.65 + 80, height * 0.2, 15);
      
      // Connecting line
      ctx.beginPath();
      ctx.moveTo(width * 0.5, height * 0.2);
      ctx.lineTo(width * 0.65 - 20, height * 0.2);
      ctx.stroke();

      // Random small text blocks
      ctx.fillStyle = 'rgba(0, 240, 255, 0.3)';
      ctx.font = '8px monospace';
      ctx.fillText('SYS_LOG: 0x8F9A', width * 0.2, height * 0.15);
      ctx.fillText('NET_TRACE: ACTIVE', width * 0.2, height * 0.15 + 12);
      
      ctx.fillText('AUTH: OK', width * 0.8, height * 0.7);
      ctx.fillText('LATENCY: 12ms', width * 0.8, height * 0.7 + 12);
      
      // Floating data blocks
      for(let i=0; i<5; i++) {
        const bx = (width * 0.4) + Math.sin(tick * 0.01 + i) * 100;
        const by = (height * 0.3) + Math.cos(tick * 0.02 + i) * 50;
        ctx.fillStyle = 'rgba(0, 240, 255, 0.1)';
        ctx.fillRect(bx, by, 20, 15);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
        ctx.strokeRect(bx, by, 20, 15);
      }
    };

    // ── Perspective Diagonal Lines (The "Corridor" effect) ──
    class Beam {
      z = 0; speed = 0; side = 0; active = false;
      constructor(side: number) { this.side = side; this.reset(); }
      reset() {
        this.z = Math.random() * 1000 + 100;
        this.speed = Math.random() * 4 + 2;
        this.active = true;
      }
      update() {
        this.z -= this.speed;
        if (this.z < 1) this.reset();
      }
      draw() {
        const perspective = 300 / this.z;
        const xOffset = this.side === 1 ? -width * 0.8 : width * 0.8;
        const startX = width/2 + xOffset * perspective;
        const startY = height/2 + (height * 0.5) * perspective;
        
        const endPerspective = 300 / (this.z + 100);
        const endX = width/2 + xOffset * endPerspective;
        const endY = height/2 + (height * 0.5) * endPerspective;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
        ctx.strokeStyle = `rgba(0, 240, 255, ${Math.min(1, perspective * 2)})`;
        ctx.lineWidth = 4 * perspective;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    const beams: Beam[] = [];
    for(let i=0; i<6; i++) {
      beams.push(new Beam(1)); // Left side
      beams.push(new Beam(-1)); // Right side
    }

    // ── Floating Data Particles ──
    class Particle {
      x = 0; y = 0; size = 0; speedX = 0; speedY = 0; opacity = 0;
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 80 }, () => new Particle());

    // ═══ MAIN ANIMATION LOOP ═══
    const animate = () => {
      tick++;

      // Deep Dark Teal/Blue Background
      ctx.fillStyle = '#05111b';
      ctx.fillRect(0, 0, width, height);

      // Radial Center Glow (Darker at center, mimicking perspective depth)
      const cx = width / 2;
      const cy = height / 2;
      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.8);
      bgGlow.addColorStop(0, 'rgba(5, 17, 27, 1)');
      bgGlow.addColorStop(0.5, 'rgba(10, 30, 45, 0.4)');
      bgGlow.addColorStop(1, 'rgba(5, 17, 27, 0.9)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      drawBackgroundGrid();
      
      // Render Beams (Perspective Corridor)
      beams.forEach(b => { b.update(); b.draw(); });

      // Render HUD Overlays
      drawHUDElements();

      // Render Particles
      particles.forEach(p => { p.update(); p.draw(); });

      // Scan Line
      const scanY = (tick * 3) % (height + 200) - 100;
      ctx.fillStyle = 'rgba(0, 240, 255, 0.05)';
      ctx.fillRect(0, scanY, width, 5);

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

pattern = re.compile(r'function CyberCanvas\(\) \{.*?(?=\n/\* ═══════════════════════════════════════════════════════════)', re.DOTALL)
content = pattern.sub(new_canvas, content)

with open('C:/Users/DEREBE/itsec-latest-fresh/components/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Hero.tsx successfully updated with the new corridor animation style.")
