"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

export default function LiquidCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const isTouchDevice = useIsMobile();

  const cursorX = useSpring(0, {
    damping: 25,
    stiffness: 250,
    mass: 0.5,
  });

  const cursorY = useSpring(0, {
    damping: 25,
    stiffness: 250,
    mass: 0.5,
  });

  const blobX = useSpring(0, {
    damping: 15,
    stiffness: 150,
    mass: 0.8,
  });

  const blobY = useSpring(0, {
    damping: 15,
    stiffness: 150,
    mass: 0.8,
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      blobX.set(e.clientX);
      blobY.set(e.clientY);

      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("data-cursor") === "pointer";

      setIsPointer(interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice, cursorX, cursorY, blobX, blobY]);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main liquid blob */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: blobX,
          y: blobY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isPointer ? 60 : 40,
            height: isPointer ? 60 : 40,
            opacity: isPointer ? 0.3 : 0.2,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "radial-gradient(circle, rgba(0,194,255,0.6) 0%, rgba(0,194,255,0.2) 50%, transparent 100%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-synapse-blue"
          animate={{
            width: isPointer ? 8 : 6,
            height: isPointer ? 8 : 6,
          }}
          transition={{ duration: 0.2 }}
          style={{
            boxShadow: "0 0 10px rgba(0,194,255,0.8)",
          }}
        />
      </motion.div>

      {/* Trailing particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9998] rounded-full border border-synapse-blue/30"
          style={{
            x: blobX,
            y: blobY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            width: isPointer ? 50 - i * 10 : 30 - i * 8,
            height: isPointer ? 50 - i * 10 : 30 - i * 8,
            opacity: 0.3 - i * 0.1,
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.05,
          }}
        />
      ))}
    </>
  );
}
