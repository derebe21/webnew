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
    const sceneDuration = 500; // ~8.3 seconds per scene at 60fps
    const totalScenes = 4;

    // ── COMMON ELEMENTS ──
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      for (let y = 0; y < height; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
    };

    // ── SCENE 0: CYBERSECURITY (Shield & Padlock) ──
    const drawCybersecurity = (sceneTick: number) => {
      const cx = width / 2;
      const cy = height / 2;
      const pulse = 0.8 + Math.sin(sceneTick * 0.05) * 0.2;

      ctx.save();
      ctx.translate(cx, cy);

      // Rotating radar rings
      ctx.save();
      ctx.rotate(sceneTick * 0.01);
      ctx.beginPath();
      ctx.arc(0, 0, 280, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 240, 255, 0.1)`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      for(let i=0; i<12; i++) {
        const a = (i/12) * Math.PI * 2;
        ctx.beginPath(); ctx.moveTo(Math.cos(a)*275, Math.sin(a)*275); ctx.lineTo(Math.cos(a)*285, Math.sin(a)*285);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)'; ctx.stroke();
      }
      ctx.restore();

      // Shield Path
      ctx.beginPath();
      ctx.moveTo(0, -120);
      ctx.bezierCurveTo(70, -115, 110, -70, 110, -20);
      ctx.bezierCurveTo(110, 60, 60, 110, 0, 150);
      ctx.bezierCurveTo(-60, 110, -110, 60, -110, -20);
      ctx.bezierCurveTo(-110, -70, -70, -115, 0, -120);
      ctx.closePath();
      
      ctx.shadowBlur = 40;
      ctx.shadowColor = `rgba(0, 240, 255, ${0.8 * pulse})`;
      ctx.strokeStyle = `rgba(0, 240, 255, ${1 * pulse})`;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.fillStyle = `rgba(5, 17, 27, 0.8)`;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Inner Padlock
      ctx.beginPath();
      ctx.rect(-30, -10, 60, 50); // Lock body
      ctx.fillStyle = `rgba(0, 240, 255, ${0.9 * pulse})`;
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(0, -10, 20, Math.PI, 0); // Lock shackle
      ctx.strokeStyle = `rgba(0, 240, 255, ${0.9 * pulse})`;
      ctx.lineWidth = 8;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 10, 6, 0, Math.PI*2); // Keyhole
      ctx.lineTo(4, 25); ctx.lineTo(-4, 25);
      ctx.fillStyle = '#05111b';
      ctx.fill();

      ctx.restore();

      // HUD Text
      ctx.fillStyle = 'rgba(255, 50, 50, 0.8)';
      ctx.font = '12px monospace';
      if (sceneTick % 40 < 20) {
        ctx.fillText('⚠ THREAT DETECTED', width * 0.2, height * 0.4);
      }
      ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.fillText('NETWORK MONITORING', width * 0.7, height * 0.6);
      ctx.fillText(`ACTIVE NODES: ${Math.floor(sceneTick*3.14)%1000 + 5000}`, width * 0.7, height * 0.6 + 20);
    };

    // ── SCENE 1: DATACENTER (3D Corridor) ──
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
    for(let i=0; i<6; i++) { beams.push(new Beam(1)); beams.push(new Beam(-1)); }

    const drawDatacenter = () => {
      beams.forEach(b => { b.update(); b.draw(); });
      
      // Draw server rack silhouettes
      const drawRack = (x: number, y: number, w: number, h: number, isLeft: boolean) => {
        ctx.fillStyle = 'rgba(5, 15, 25, 0.9)'; ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)'; ctx.strokeRect(x, y, w, h);
        for(let s=0; s<10; s++) {
          const sy = y + 10 + s * 30;
          const blink = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.8)' : 'rgba(0, 240, 255, 0.1)';
          ctx.fillStyle = blink;
          ctx.fillRect(isLeft ? x+w-10 : x+5, sy, 5, 5);
        }
      };
      
      drawRack(width*0.1, height*0.3, 80, height*0.6, true);
      drawRack(width*0.2, height*0.2, 60, height*0.7, true);
      drawRack(width*0.8, height*0.3, 80, height*0.6, false);
      drawRack(width*0.75, height*0.2, 60, height*0.7, false);
    };

    // ── SCENE 2: SURVEILLANCE (Camera HUD) ──
    const drawSurveillance = (sceneTick: number) => {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.5)';
      ctx.lineWidth = 1;
      
      // Crosshairs
      ctx.beginPath(); ctx.moveTo(width/2, 0); ctx.lineTo(width/2, height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, height/2); ctx.lineTo(width, height/2); ctx.stroke();
      
      // Center target box
      const boxSize = 200 + Math.sin(sceneTick*0.1)*10;
      ctx.strokeRect(width/2 - boxSize/2, height/2 - boxSize/2, boxSize, boxSize);
      
      // Corner brackets
      const drawBracket = (x: number, y: number, mx: number, my: number) => {
        ctx.beginPath(); ctx.moveTo(x+mx*20, y); ctx.lineTo(x, y); ctx.lineTo(x, y+my*20);
        ctx.lineWidth = 3; ctx.stroke();
      };
      drawBracket(width*0.1, height*0.1, 1, 1);
      drawBracket(width*0.9, height*0.1, -1, 1);
      drawBracket(width*0.1, height*0.9, 1, -1);
      drawBracket(width*0.9, height*0.9, -1, -1);
      
      // Camera Text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '14px monospace';
      ctx.fillText('CAM_04 // REC', width*0.1, height*0.08);
      if(sceneTick % 60 < 30) {
        ctx.fillStyle = 'red';
        ctx.beginPath(); ctx.arc(width*0.1 + 120, height*0.075, 5, 0, Math.PI*2); ctx.fill();
      }
      
      // Static noise
      for(let i=0; i<100; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()*0.1})`;
        ctx.fillRect(Math.random()*width, Math.random()*height, Math.random()*50, 1);
      }
    };

    // ── SCENE 3: ACCESS CONTROL (Fingerprint) ──
    const drawAccessControl = (sceneTick: number) => {
      const cx = width / 2;
      const cy = height / 2;
      
      ctx.save();
      ctx.translate(cx, cy);
      
      // Draw fingerprint lines (simplified stylized version)
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      
      for(let i=0; i<8; i++) {
        ctx.beginPath();
        ctx.arc(0, 20, 30 + i*15, Math.PI + 0.2, Math.PI*2 - 0.2);
        ctx.stroke();
      }
      
      // Laser scan line
      const scanY = Math.sin(sceneTick * 0.05) * 100;
      ctx.beginPath();
      ctx.moveTo(-150, scanY);
      ctx.lineTo(150, scanY);
      ctx.shadowBlur = 20; ctx.shadowColor = 'rgba(0, 240, 255, 1)';
      ctx.strokeStyle = 'rgba(0, 240, 255, 1)';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      ctx.restore();
      
      // Text
      ctx.textAlign = 'center';
      ctx.font = 'bold 24px monospace';
      if (sceneTick > sceneDuration * 0.7) {
        ctx.fillStyle = 'rgba(50, 255, 100, 0.9)';
        ctx.fillText('ACCESS GRANTED', cx, cy + 180);
      } else {
        ctx.fillStyle = 'rgba(0, 240, 255, 0.8)';
        ctx.fillText('AUTHENTICATING...', cx, cy + 180);
      }
      ctx.textAlign = 'left';
    };

    // ── GLITCH TRANSITION ──
    const drawGlitch = () => {
      for(let i=0; i<30; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const w = Math.random() * width * 0.5;
        const h = Math.random() * 20;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.8)' : 'rgba(5, 17, 27, 0.9)';
        ctx.fillRect(x, y, w, h);
      }
    };

    // ═══ MAIN ANIMATION LOOP ═══
    const animate = () => {
      tick++;

      // Background
      ctx.fillStyle = '#05111b';
      ctx.fillRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;
      const bgGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.8);
      bgGlow.addColorStop(0, 'rgba(10, 30, 45, 0.6)');
      bgGlow.addColorStop(1, 'rgba(5, 17, 27, 0.9)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      drawGrid();

      const currentScene = Math.floor(tick / sceneDuration) % totalScenes;
      const sceneTick = tick % sceneDuration;
      const sceneProgress = sceneTick / sceneDuration;

      // Render Active Scene
      if (currentScene === 0) drawCybersecurity(sceneTick);
      else if (currentScene === 1) drawDatacenter();
      else if (currentScene === 2) drawSurveillance(sceneTick);
      else if (currentScene === 3) drawAccessControl(sceneTick);

      // Transition Glitch Effect
      if (sceneProgress > 0.95 || sceneProgress < 0.05) {
        drawGlitch();
      }

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

print("Hero.tsx successfully updated with 4-scene state machine animation.")
