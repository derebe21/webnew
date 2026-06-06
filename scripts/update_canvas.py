import re

with open('c:/Users/DEREBE/webnew/components/sections/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

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

    // Particle system for the faint floating dust/grid nodes
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
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
        if (!ctx) return;
        ctx.fillStyle = `rgba(200, 220, 255, ${this.opacity})`;
        ctx.beginPath();
        // Rectangular/square particles for a more HUD/data feel
        ctx.rect(this.x, this.y, this.size * 2, this.size);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(150, Math.floor((width * height) / 8000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let tick = 0;

    const animate = () => {
      tick++;
      
      // Clear with a hazy, low-contrast grayish-blue background
      ctx.fillStyle = '#0f1218'; // very dark slate/gray base
      ctx.fillRect(0, 0, width, height);

      // Create a hazy overlay effect (fog/glare from the center)
      const gradient = ctx.createRadialGradient(width/2, height*0.3, 0, width/2, height*0.3, width);
      gradient.addColorStop(0, 'rgba(100, 130, 150, 0.25)'); // Center bright haze
      gradient.addColorStop(0.5, 'rgba(40, 50, 70, 0.15)'); // Mid haze
      gradient.addColorStop(1, 'rgba(10, 15, 20, 0.8)'); // Outer dark
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // --- Draw HUD Elements ---
      ctx.lineWidth = 1;

      // Glowing accent lines (like the bright diagonal/horizontal streaks in the image)
      const drawStreak = (x1: number, y1: number, x2: number, y2: number, opacity: number, thickness: number) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(200, 230, 255, ${opacity})`;
        ctx.lineWidth = thickness;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(200, 230, 255, 0.5)';
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      };

      // Faint background structural lines
      ctx.strokeStyle = 'rgba(150, 180, 220, 0.08)';
      ctx.beginPath();
      // Horizontal
      ctx.moveTo(0, height * 0.35); ctx.lineTo(width, height * 0.35);
      ctx.moveTo(0, height * 0.8); ctx.lineTo(width, height * 0.8);
      // Vertical
      ctx.moveTo(width * 0.45, height * 0.35); ctx.lineTo(width * 0.45, height * 0.8);
      ctx.stroke();

      // Stronger glowing diagonal frame lines at the bottom corners
      drawStreak(0, height * 0.7, width * 0.2, height, 0.3, 2);
      drawStreak(width * 0.8, height, width, height * 0.7, 0.3, 2);

      // Horizontal central data line with markers
      drawStreak(width * 0.3, height * 0.6, width * 0.7, height * 0.6, 0.2, 1);
      
      // Draw three hollow circles on the right side of the data line
      ctx.strokeStyle = 'rgba(180, 210, 255, 0.5)';
      ctx.lineWidth = 1.5;
      const circleSpacing = 25;
      const circleStartX = width * 0.6;
      for(let i=0; i<3; i++) {
        ctx.beginPath();
        ctx.arc(circleStartX + (i * circleSpacing), height * 0.6, 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw three blinking square blocks on the left side of the data line
      for(let i=0; i<3; i++) {
         // Staggered blinking effect
         const blink = Math.sin(tick * 0.05 + i) > 0 ? 0.6 : 0.1;
         ctx.fillStyle = `rgba(180, 220, 255, ${blink})`;
         ctx.fillRect(width * 0.4 + (i * 25), height * 0.6 - 5, 15, 10);
      }

      // Add some faint tech text
      ctx.fillStyle = 'rgba(150, 180, 220, 0.4)';
      ctx.font = '9px monospace';
      ctx.fillText('LOC.SYS // OVERRIDE', width * 0.4, height * 0.6 + 20);
      ctx.fillText('SECURE STREAM', width * 0.45, height * 0.35 - 5);

      // Draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" style={{ filter: 'contrast(1.2) brightness(1.1)' }} />;
}"""

# Find the old TechCanvasBackground and replace it.
pattern = re.compile(r'function TechCanvasBackground\(\) \{.*?(?=\n/\* ═══════════════════════════════════════════════════════════)', re.DOTALL)
content = pattern.sub(new_canvas, content)

with open('c:/Users/DEREBE/webnew/components/sections/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Canvas replaced successfully.")
