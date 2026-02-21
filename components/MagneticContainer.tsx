"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

export default function MagneticContainer({
  children,
  className,
  range = 200, // Distance to start detecting mouse
  force = 0.5, // How strong the pull is
}: {
  children: React.ReactNode;
  className?: string;
  range?: number;
  force?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rafId = useRef(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return;
    if (rafId.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = 0;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      const distSq = distanceX * distanceX + distanceY * distanceY;
      const rangeSq = range * range;

      if (distSq < rangeSq) {
        const distance = Math.sqrt(distSq);
        const pull = (1 - distance / range) * force * range;
        const dirX = distanceX / distance;
        const dirY = distanceY / distance;
        x.set(dirX * pull);
        y.set(dirY * pull);
      } else {
        x.set(0);
        y.set(0);
      }
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
