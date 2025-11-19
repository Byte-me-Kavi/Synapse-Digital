"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Clamp cursor position to keep it visible with margin from edges
      const margin = 60;
      const clampedX = Math.max(
        margin,
        Math.min(e.clientX, window.innerWidth - margin)
      );
      const clampedY = Math.max(
        margin,
        Math.min(e.clientY, window.innerHeight - margin)
      );

      setMousePosition({ x: clampedX, y: clampedY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null;
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-9999 mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div
          className="w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(0,194,255,0.8) 0%, rgba(0,194,255,0) 70%)",
            boxShadow: "0 0 20px rgba(0,194,255,0.6)",
          }}
        />
      </motion.div>

      {/* Trail cursor */}
      <motion.div
        className="fixed pointer-events-none z-9998 mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isHovering ? 2 : 1.5,
          opacity: isHovering ? 0.4 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.05,
        }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 border-synapse-blue -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: "0 0 15px rgba(0,194,255,0.4)",
          }}
        />
      </motion.div>

      {/* Grid distortion effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            background:
              "radial-gradient(circle, rgba(0,194,255,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        />
      </div>
    </>
  );
}
