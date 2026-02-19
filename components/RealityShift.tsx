"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

export default function RealityShift({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a circular reveal effect
  // We want the clip-path to expand from 0% to 150% as we scroll into view
  // But strictly speaking, a "shift" usually means revealing the next section *through* the current one.
  // Let's try a simpler version: a growing circle mask.
  
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["circle(0% at 50% 50%)", "circle(100% at 50% 50%)", "circle(100% at 50% 50%)"]
  );

  // Alternative: Parallax opacity/scale
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ 
        // clipPath, // Clip path can be performance heavy and tricky with layout
        // Let's stick to a premium scale/fade implementation which is safer for now
        // If we want the "hole" effect, we'd need a fixed background container. 
        // Let's do a sophisticated 3D tilt enter instead.
        // on mobile we disable the scroll-linked animations for performance
        scale: isMobile ? 1 : scale,
        opacity: isMobile ? 1 : opacity
      }}
    >
      {children}
    </motion.div>
  );
}
