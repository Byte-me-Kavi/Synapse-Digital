"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseY: number;
  colorPhase: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * (canvasWidth || 1920);
    this.y = Math.random() * (canvasHeight || 1080);
    this.baseY = this.y;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.size = Math.random() * 2 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.colorPhase = Math.random() * Math.PI * 2;
  }

  update(scrollOffset: number, width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    // React to scroll
    const scrollFactor =
      Math.sin(scrollOffset * 0.001 + this.colorPhase) * 2;
    this.vy += scrollFactor * 0.01;

    // Wrap around edges
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    // Damping
    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw(ctx: CanvasRenderingContext2D, scrollOffset: number) {
    if (!ctx) return;

    // Color changes based on scroll
    const scrollColor = Math.sin(scrollOffset * 0.002 + this.colorPhase);
    const r = Math.floor(0 + scrollColor * 50);
    const g = Math.floor(194 + scrollColor * 61);
    const b = 255;

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class GridLine {
  x: number;
  y: number;
  width: number;
  height: number;
  isVertical: boolean;
  opacity: number;
  pulseSpeed: number;
  scrollPhase: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.isVertical = Math.random() > 0.5;
    if (this.isVertical) {
      this.x = Math.random() * (canvasWidth || 1920);
      this.y = 0;
      this.width = 1;
      this.height = canvasHeight || 1080;
    } else {
      this.x = 0;
      this.y = Math.random() * (canvasHeight || 1080);
      this.width = canvasWidth || 1920;
      this.height = 1;
    }
    this.opacity = Math.random() * 0.1 + 0.05;
    this.pulseSpeed = Math.random() * 0.002 + 0.001;
    this.scrollPhase = Math.random() * Math.PI * 2;
  }

  update(time: number, scrollOffset: number) {
    const scrollEffect = Math.sin(scrollOffset * 0.003 + this.scrollPhase);
    this.opacity =
      Math.sin(time * this.pulseSpeed) * 0.05 + 0.08 + scrollEffect * 0.05;
  }

  draw(ctx: CanvasRenderingContext2D, scrollOffset: number) {
    if (!ctx) return;

    // Color shifts based on scroll
    const scrollColor = Math.sin(scrollOffset * 0.001);
    const r = Math.floor(0 + scrollColor * 100);
    const g = Math.floor(194 + scrollColor * 61);
    const b = 255;

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default function AnimatedBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Re-calculate on scroll changes
    const handleResize = () => {
      canvas.height = document.documentElement.scrollHeight;
    };
    window.addEventListener("scroll", handleResize);

    // Create particles and grid lines
    const particles: Particle[] = [];
    const gridLines: GridLine[] = [];

    for (let i = 0; i < 150; i++) {
        // Pass initial dimensions
      particles.push(new Particle(canvas.width, canvas.height));
    }

    for (let i = 0; i < 30; i++) {
      gridLines.push(new GridLine(canvas.width, canvas.height));
    }

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 1;
      const currentScroll = window.scrollY;

      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      gridLines.forEach((line) => {
        line.update(time, currentScroll);
        line.draw(ctx, currentScroll);
      });

      // Draw and update particles
      particles.forEach((particle) => {
        // Pass current canvas dimensions to update for wrapping
        particle.update(currentScroll, canvas.width, canvas.height);
        particle.draw(ctx, currentScroll);
      });

      // Draw connections between nearby particles with scroll-based color
      const scrollColor = Math.sin(currentScroll * 0.001);
      const r = Math.floor(0 + scrollColor * 50);
      const g = Math.floor(194 + scrollColor * 61);
      const b = 255;

      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 left-0 w-full pointer-events-none z-0 ${className || ""}`}
      style={{
        background: "#050505",
        height: "100%",
        minHeight: "100vh",
      }}
    />
  );
}
