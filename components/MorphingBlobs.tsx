"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

class Blob {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    color: string;
    targetX: number;
    targetY: number;
    morphSpeed: number;

    constructor(width: number, height: number) {
      this.x = Math.random() * (width || 1920);
      this.y = Math.random() * (height || 1080);
      this.radius = Math.random() * 150 + 100;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.color = `rgba(0, 194, 255, ${Math.random() * 0.15 + 0.05})`;
      this.targetX = this.x;
      this.targetY = this.y;
      this.morphSpeed = Math.random() * 0.02 + 0.01;
    }

    update(time: number, width: number, height: number) {
      // Smooth movement towards target
      this.x += (this.targetX - this.x) * 0.05;
      this.y += (this.targetY - this.y) * 0.05;

      // Update target position periodically
      if (Math.random() < 0.01) {
        this.targetX = Math.random() * (width || 1920);
        this.targetY = Math.random() * (height || 1080);
      }

      // Organic morphing using sine waves
      const morphX = Math.sin(time * this.morphSpeed) * 20;
      const morphY = Math.cos(time * this.morphSpeed * 1.3) * 20;

      this.x += morphX * 0.1;
      this.y += morphY * 0.1;

      // Boundary check
      const canvasWidth = width || 1920;
      const canvasHeight = height || 1080;
      if (this.x < -this.radius) this.x = canvasWidth + this.radius;
      if (this.x > canvasWidth + this.radius) this.x = -this.radius;
      if (this.y < -this.radius) this.y = canvasHeight + this.radius;
      if (this.y > canvasHeight + this.radius) this.y = -this.radius;
    }

    draw(ctx: CanvasRenderingContext2D, time: number) {
      if (!ctx) return;

      ctx.save();
      ctx.translate(this.x, this.y);

      // Create organic blob shape
      ctx.beginPath();
      const points = 8;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const radiusVariation =
          Math.sin(time * this.morphSpeed + angle * 3) * 20 +
          Math.cos(time * this.morphSpeed * 0.7 + angle * 2) * 15;
        const r = this.radius + radiusVariation;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();

      // Gradient fill
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(1, "rgba(0, 194, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.restore();
    }
  }

export default function MorphingBlobs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const blobs: Blob[] = [];
    for (let i = 0; i < 5; i++) {
      blobs.push(new Blob(canvas.width, canvas.height));
    }

    let animationId: number;
    let time = 0;
    let lastFrameTime = 0;
    const frameInterval = 1000 / 30; // Target 30fps for performance

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);

      const elapsed = currentTime - lastFrameTime;
      if (elapsed < frameInterval) return;
      lastFrameTime = currentTime - (elapsed % frameInterval);

      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        blob.update(time, canvas.width, canvas.height);
        blob.draw(ctx, time);
      });

      // Draw connections
      ctx.strokeStyle = "rgba(0, 194, 255, 0.05)";
      ctx.lineWidth = 2;
      for (let i = 0; i < blobs.length; i++) {
        for (let j = i + 1; j < blobs.length; j++) {
          const dx = blobs[i].x - blobs[j].x;
          const dy = blobs[i].y - blobs[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 160000) { // 400 * 400
            const distance = Math.sqrt(distSq);
            const opacity = (1 - distance / 400) * 0.1;
            ctx.strokeStyle = `rgba(0, 194, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(blobs[i].x, blobs[i].y);
            ctx.lineTo(blobs[j].x, blobs[j].y);
            ctx.stroke();
          }
        }
      }
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
