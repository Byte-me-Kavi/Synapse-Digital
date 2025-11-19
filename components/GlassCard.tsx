"use client";

import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hover?: boolean;
  glowEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  variant = "light",
  hover = true,
  glowEffect = false,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !glowEffect) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  if (glowEffect) {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={hover ? { scale: 1.02 } : {}}
        className={cn(
          "rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
          variant === "light" ? "glass" : "glass-dark",
          hover && "hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]",
          className
        )}
      >
        {/* Cursor glow effect */}
        {isHovered && (
          <div
            className="absolute pointer-events-none rounded-full transition-opacity duration-300"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              width: "300px",
              height: "300px",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(0,194,255,0.3) 0%, transparent 70%)",
              opacity: 0.6,
            }}
          />
        )}

        {/* Border glow */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,194,255,0.4), transparent 40%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}

        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variant === "light" ? "glass" : "glass-dark",
        hover && "hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
