"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-synapse-blue z-9999 origin-left"
      style={{ scaleX }}
    />
  );
}

export function CircularScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circumference = 2 * Math.PI * 20;

  return isVisible ? (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <svg width="56" height="56" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="28"
          cy="28"
          r="20"
          stroke="rgba(0, 194, 255, 0.2)"
          strokeWidth="4"
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx="28"
          cy="28"
          r="20"
          stroke="#00C2FF"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength: scrollYProgress,
          }}
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />
      </svg>
    </motion.div>
  ) : null;
}
