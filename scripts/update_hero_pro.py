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

    // ── Floating Hexagons (Professional Cyber Theme) ──
    class Hexagon {
      x = 0; y = 0; size = 0; speed = 0; opacity = 0; angle = 0;
      constructor() { this.reset(); this.y = Math.random() * height; }
      reset() {
        this.x = Math.random() * width;
        this.y = height + 50;
        this.size = Math.random() * 15 + 5;
        this.speed = Math.random() * 0.8 + 0.2;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.angle = Math.random() * Math.PI * 2;
      }
      update() {
        this.y -= this.speed;
        this.angle += 0.01;
        if (this.y < -50) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i;
          const hx = Math.cos(a) * this.size;
          const hy = Math.sin(a) * this.size;
          if (i === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(37, 99, 235, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
    }

    // ── Threat Nodes (Red nodes attacking the center shield) ──
    class Threat {
      x = 0; y = 0; angle = 0; distance = 0; speed = 0; active = false;
      constructor() { this.reset(); }
      reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.max(width, height) * 0.8;
        this.x = width/2 + Math.cos(this.angle) * this.distance;
        this.y = height/2 + Math.sin(this.angle) * this.distance;
        this.speed = Math.random() * 3 + 2;
        this.active = true;
      }
      update() {
        if (!this.active) return;
        this.distance -= this.speed;
        this.x = width/2 + Math.cos(this.angle) * this.distance;
        this.y = height/2 + Math.sin(this.angle) * this.distance;
        
        // Deflected by shield
        if (this.distance < 200) {
          this.active = false;
          // Spawn deflection sparks here (simplified)
        }
      }
      draw() {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(239, 68, 68, 0.9)'; // Red threat
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(239, 68, 68, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Trail
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + Math.cos(this.angle) * 30, this.y + Math.sin(this.angle) * 30);
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    const hexagons: Hexagon[] = Array.from({ length: 40 }, () => new Hexagon());
    const threats: Threat[] = Array.from({ length: 5 }, () => new Threat());

    let tick = 0;

    // ── Draw Professional Datacenter Racks ──
    const drawDatacenterRacks = () => {
      const rackAlpha = 0.15;
      
      const drawRack = (rx: number, ry: number, rw: number, rh: number, rackIdx: number) => {
        ctx.fillStyle = `rgba(10, 15, 30, 0.8)`;
        ctx.fillRect(rx, ry, rw, rh);
        ctx.strokeStyle = `rgba(37, 99, 235, ${rackAlpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(rx, ry, rw, rh);

        const slotCount = 14;
        for (let s = 0; s < slotCount; s++) {
          const slotH = (rh - 20) / slotCount - 2;
          const sy = ry + 10 + s * (slotH + 2);
          
          ctx.fillStyle = `rgba(15, 23, 42, 0.9)`;
          ctx.fillRect(rx + 4, sy, rw - 8, slotH);
          ctx.strokeStyle = `rgba(37, 99, 235, ${rackAlpha * 0.5})`;
          ctx.strokeRect(rx + 4, sy, rw - 8, slotH);

          // LED blink logic
          const activity = Math.sin(tick * 0.1 + rackIdx * 2 + s) > 0.5;
          const warning = Math.sin(tick * 0.05 + rackIdx + s * 1.5) > 0.9;
          
          ctx.fillStyle = warning ? `rgba(239, 68, 68, ${rackAlpha * 4})` : (activity ? `rgba(56, 189, 248, ${rackAlpha * 4})` : `rgba(37, 99, 235, ${rackAlpha * 0.5})`);
          ctx.fillRect(rx + 8, sy + slotH/2 - 1, 3, 3);
          
          ctx.fillStyle = `rgba(34, 197, 94, ${rackAlpha * 3})`; // Power LED
          ctx.fillRect(rx + rw - 12, sy + slotH/2 - 1, 2, 2);
        }
      };

      // Left racks
      for (let r = 0; r < 4; r++) { drawRack(20 + r * 55, height * 0.2, 45, height * 0.6, r); }
      // Right racks
      for (let r = 0; r < 4; r++) { drawRack(width - 65 - r * 55, height * 0.2, 45, height * 0.6, r + 4); }
    };

    // ── Draw the ITSEC Shield Logo (Elite Professional Version) ──
    const drawShieldLogo = () => {
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) / 600;
      const glowPulse = 0.8 + Math.sin(tick * 0.05) * 0.2;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      // ── Radar Sweep ──
      ctx.save();
      ctx.rotate(tick * 0.02);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 250, 0, Math.PI * 0.25);
      ctx.lineTo(0, 0);
      const radarGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 250);
      radarGrad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
      radarGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = radarGrad;
      ctx.fill();
      ctx.restore();

      // ── Data Rings ──
      ctx.beginPath();
      ctx.arc(0, 0, 220, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(37, 99, 235, ${0.1 * glowPulse})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      for (let i = 0; i < 36; i++) {
        const a = (i / 36) * Math.PI * 2;
        const d = 220;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * (d - 5), Math.sin(a) * (d - 5));
        ctx.lineTo(Math.cos(a) * (d + 5), Math.sin(a) * (d + 5));
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.3 * glowPulse})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // ── Outer shield shape ──
      ctx.beginPath();
      ctx.moveTo(0, -130);
      ctx.bezierCurveTo(80, -125, 120, -80, 120, -30);
      ctx.bezierCurveTo(120, 50, 75, 100, 0, 140);
      ctx.bezierCurveTo(-75, 100, -120, 50, -120, -30);
      ctx.bezierCurveTo(-120, -80, -80, -125, 0, -130);
      ctx.closePath();

      ctx.shadowBlur = 50;
      ctx.shadowColor = `rgba(56, 189, 248, ${0.6 * glowPulse})`;
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.9 * glowPulse})`;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = `rgba(15, 23, 42, 0.85)`;
      ctx.fill();

      // ── Inner shield ──
      ctx.beginPath();
      ctx.moveTo(0, -90);
      ctx.bezierCurveTo(50, -86, 80, -55, 80, -15);
      ctx.bezierCurveTo(80, 35, 50, 70, 0, 100);
      ctx.bezierCurveTo(-50, 70, -80, 35, -80, -15);
      ctx.bezierCurveTo(-80, -55, -50, -86, 0, -90);
      ctx.closePath();
      
      const innerGrad = ctx.createLinearGradient(0, -90, 0, 100);
      innerGrad.addColorStop(0, `rgba(37, 99, 235, ${0.3 * glowPulse})`);
      innerGrad.addColorStop(1, `rgba(15, 23, 42, 0.9)`);
      ctx.fillStyle = innerGrad;
      ctx.fill();
      
      ctx.strokeStyle = `rgba(96, 165, 250, ${0.7 * glowPulse})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // ── Keyhole ──
      ctx.beginPath();
      ctx.arc(0, -20, 22, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(2, 6, 23, 0.95)';
      ctx.fill();
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.8 * glowPulse})`;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-12, -10);
      ctx.lineTo(-8, 40);
      ctx.lineTo(8, 40);
      ctx.lineTo(12, -10);
      ctx.closePath();
      ctx.fillStyle = 'rgba(2, 6, 23, 0.95)';
      ctx.fill();
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.8 * glowPulse})`;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Keyhole pulsing core
      ctx.beginPath();
      ctx.arc(0, -20, 10, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${0.4 * glowPulse})`;
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(56, 189, 248, 1)';
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();
    };

    // ── Global Security Map Overlay ──
    const drawWorldMap = () => {
      // Simplified dots representing a world map background
      ctx.fillStyle = 'rgba(37, 99, 235, 0.08)';
      const dotCount = 150;
      for (let i = 0; i < dotCount; i++) {
        const x = ((Math.sin(i * 123.45) * 0.5 + 0.5) * width * 0.8) + width * 0.1;
        const y = ((Math.cos(i * 321.65) * 0.5 + 0.5) * height * 0.6) + height * 0.2;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ═══ MAIN ANIMATION LOOP ═══
    const animate = () => {
      tick++;

      // Professional Deep Dark Background
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // Radial Center Glow
      const cx = width / 2;
      const cy = height / 2;
      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.6);
      bgGlow.addColorStop(0, 'rgba(30, 58, 138, 0.2)');
      bgGlow.addColorStop(0.5, 'rgba(15, 23, 42, 0.1)');
      bgGlow.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Grid & Map
      ctx.strokeStyle = 'rgba(30, 64, 175, 0.05)';
      ctx.lineWidth = 1;
      for (let y = 0; y < height; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
      for (let x = 0; x < width; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      
      drawWorldMap();

      // Background Hexagons
      hexagons.forEach(h => { h.update(); h.draw(); });

      // Datacenters
      drawDatacenterRacks();

      // Threat nodes moving towards center
      if (Math.random() < 0.02) {
        const inactive = threats.find(t => !t.active);
        if (inactive) inactive.reset();
      }
      threats.forEach(t => { t.update(); t.draw(); });

      // Central Shield
      drawShieldLogo();

      // High-tech Scan Line
      const scanY = (tick * 2) % (height + 200) - 100;
      const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
      scanGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      scanGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.15)');
      scanGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 30, width, 60);

      // Dark Vignettes
      const topV = ctx.createLinearGradient(0, 0, 0, height * 0.25);
      topV.addColorStop(0, 'rgba(2, 6, 23, 0.9)');
      topV.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = topV;
      ctx.fillRect(0, 0, width, height * 0.25);

      const botV = ctx.createLinearGradient(0, height * 0.75, 0, height);
      botV.addColorStop(0, 'rgba(2, 6, 23, 0)');
      botV.addColorStop(1, 'rgba(2, 6, 23, 0.9)');
      ctx.fillStyle = botV;
      ctx.fillRect(0, height * 0.75, width, height * 0.25);

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

print("Hero.tsx successfully updated with the ultra-professional cyber video background.")
