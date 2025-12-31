import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  color: string;
}

const IceCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const mouse = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      isMoving.current = true;
      
      // Create new particles on move (Ice Spray effect)
      // Create more particles for a denser trail
      for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
      }

      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = window.setTimeout(() => {
        isMoving.current = false;
      }, 100);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const createParticle = (x: number, y: number) => {
      // INCREASED SIZE: Random size between 3px and 11px (was 1-4px)
      const size = Math.random() * 8 + 3; 
      const speedX = (Math.random() - 0.5) * 1.5; // Spread horizontally
      const speedY = (Math.random() - 0.5) * 1.5 + 0.5; // Slight gravity
      const life = 0;
      const maxLife = Math.random() * 50 + 30; // Random lifespan
      // Mix of pure white and slight cyan for "Ice" look
      const isCyan = Math.random() > 0.8; 
      const color = isCyan ? '19, 196, 236' : '255, 255, 255'; // RGB values

      particles.current.push({ x, y, size, speedX, speedY, life, maxLife, color });
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        // Draw
        const opacity = 1 - p.life / p.maxLife;
        ctx.beginPath();
        // Create a glow effect
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(${p.color}, 0.5)`;
        ctx.fillStyle = `rgba(${p.color}, ${opacity})`;
        
        // Draw a snowflake shape (simple cross) or circle depending on random
        // INCREASED THRESHOLD: Only draw detail shape for larger particles (> 5px)
        if (p.size > 5) {
            // Draw star/snowflake
            ctx.save();
            ctx.translate(p.x, p.y);
            // Rotate slightly
            ctx.rotate(p.life * 0.1);
            // Adjusted proportions for clearer cross shape at larger sizes
            ctx.fillRect(-p.size/2, -p.size/10, p.size, p.size/5);
            ctx.fillRect(-p.size/10, -p.size/2, p.size/5, p.size);
            ctx.restore();
        } else {
            // Draw dust circle
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        // Remove dead particles
        if (p.life >= p.maxLife) {
          particles.current.splice(i, 1);
          i--;
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default IceCursor;