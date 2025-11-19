"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StaggeredGridProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  columns?: number;
}

export default function StaggeredGrid({
  children,
  className = "",
  staggerDelay = 0.1,
  columns = 3,
}: StaggeredGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className={`grid gap-6 ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${100 / columns}%, 1fr))`,
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.9 }
          }
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function StaggeredList({
  children,
  className = "",
  staggerDelay = 0.1,
  direction = "up",
}: {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const directionMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <div ref={ref} className={`space-y-4 ${className}`}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, ...directionMap[direction] }}
          animate={
            isInView
              ? { opacity: 1, y: 0, x: 0 }
              : { opacity: 0, ...directionMap[direction] }
          }
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function StaggeredCards({
  items,
  className = "",
  staggerDelay = 0.15,
  columns = 3,
}: {
  items: Array<{ content: React.ReactNode }>;
  className?: string;
  staggerDelay?: number;
  columns?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      className={`grid gap-6 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60, rotateX: -15 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 60, rotateX: -15 }
          }
          transition={{
            duration: 0.7,
            delay: index * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {item.content}
        </motion.div>
      ))}
    </div>
  );
}
