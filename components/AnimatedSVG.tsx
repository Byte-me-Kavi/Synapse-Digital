"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSVGPathProps {
  path: string;
  className?: string;
  strokeWidth?: number;
  strokeColor?: string;
  duration?: number;
  delay?: number;
}

export function AnimatedSVGPath({
  path,
  className = "",
  strokeWidth = 2,
  strokeColor = "#00C2FF",
  duration = 2,
  delay = 0,
}: AnimatedSVGPathProps) {
  const ref = useRef<SVGPathElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.path
      ref={ref}
      d={path}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={
        isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }
      }
      transition={{
        pathLength: { duration, delay, ease: "easeInOut" },
        opacity: { duration: 0.3, delay },
      }}
    />
  );
}

export function AnimatedCircuit({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizontal lines */}
      <AnimatedSVGPath path="M 50 50 L 200 50" delay={0} />
      <AnimatedSVGPath path="M 200 50 L 350 50" delay={0.3} />

      {/* Vertical lines */}
      <AnimatedSVGPath path="M 200 50 L 200 150" delay={0.6} />
      <AnimatedSVGPath path="M 200 150 L 200 250" delay={0.9} />

      {/* Diagonal connections */}
      <AnimatedSVGPath path="M 200 150 L 300 150" delay={1.2} />
      <AnimatedSVGPath path="M 100 150 L 200 150" delay={1.2} />

      {/* Circuit nodes */}
      {[
        { cx: 50, cy: 50, delay: 0 },
        { cx: 200, cy: 50, delay: 0.5 },
        { cx: 350, cy: 50, delay: 0.8 },
        { cx: 200, cy: 150, delay: 1.1 },
        { cx: 200, cy: 250, delay: 1.4 },
        { cx: 100, cy: 150, delay: 1.4 },
        { cx: 300, cy: 150, delay: 1.4 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r="4"
          fill="#00C2FF"
          initial={{ opacity: 0, r: 0 }}
          animate={
            isInView ? { opacity: 1, r: 4 } : { opacity: 0, r: 0 }
          }
          transition={{
            duration: 0.3,
            delay: node.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Pulse animations */}
      {isInView && (
        <>
          <motion.circle
            cx="200"
            cy="150"
            fill="none"
            stroke="#00C2FF"
            strokeWidth="2"
            initial={{ r: 0, opacity: 1 }}
            animate={{ r: 30, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </>
      )}
    </svg>
  );
}

export function AnimatedArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedSVGPath
        path="M 20 50 L 80 50 M 60 30 L 80 50 L 60 70"
        strokeWidth={3}
        duration={1.5}
      />
    </svg>
  );
}

export function AnimatedCheckmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedSVGPath
        path="M 20 50 L 40 70 L 80 30"
        strokeWidth={4}
        duration={0.8}
      />
    </svg>
  );
}
