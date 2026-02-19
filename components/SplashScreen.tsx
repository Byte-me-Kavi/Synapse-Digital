"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

const ScanLine = () => (
  <motion.div
    className="absolute left-0 right-0 h-[2px] pointer-events-none z-30"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(0,194,255,0.6), transparent)",
    }}
    initial={{ top: "0%" }}
    animate={{ top: "100%" }}
    transition={{
      duration: 1.5,
      ease: "linear",
      repeat: 1,
    }}
  />
);

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Circuit lines draw in (0-600ms)
    // Phase 1: Text glitch reveals (600-1200ms)
    // Phase 2: Glow pulse + hold (1200-1800ms)
    // Phase 3: Fade out (1800-2200ms)
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setIsLoading(false), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Circuit line paths for the background
  const allCircuitPaths = [
    "M 0 200 H 300 V 100 H 500",
    "M 800 0 V 150 H 600 V 300",
    "M 200 400 V 250 H 400 V 150 H 700",
    "M 0 350 H 150 V 200 H 350",
    "M 650 400 H 800 V 250 H 600",
    "M 100 0 V 100 H 250 V 200",
    "M 500 0 V 80 H 700 V 180",
    "M 350 400 V 320 H 550 V 220",
  ];

  const isMobile = useIsMobile();
  const circuitPaths = isMobile ? allCircuitPaths.slice(0, 5) : allCircuitPaths;

  // Glitch text effect offsets
  const glitchVariants = {
    hidden: { opacity: 0, y: 20 },
    glitching: {
      opacity: [0, 1, 0.7, 1, 0.3, 1],
      y: [20, 0, 2, -1, 1, 0],
      x: [0, -3, 5, -2, 3, 0],
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3 },
    },
  };



  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#050505" }}
            exit={{
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            {/* Scan line effect */}
            <ScanLine />

            {/* Circuit lines SVG background */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
            >
              {circuitPaths.map((path, i) => (
                <g key={i}>
                  {/* Glow layer */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="rgba(0,194,255,0.15)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: phase >= 0 ? 1 : 0 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.06,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Main line */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="rgba(0,194,255,0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: phase >= 0 ? 1 : 0 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.06,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Circuit node dots */}
                  {(() => {
                    // Trace the SVG path to find the endpoint
                    const tokens = path.split(/\s+/);
                    let x = 0, y = 0;
                    let j = 0;
                    while (j < tokens.length) {
                      const cmd = tokens[j];
                      if (cmd === "M" || cmd === "L") {
                        x = parseFloat(tokens[j + 1]) || 0;
                        y = parseFloat(tokens[j + 2]) || 0;
                        j += 3;
                      } else if (cmd === "H") {
                        x = parseFloat(tokens[j + 1]) || 0;
                        j += 2;
                      } else if (cmd === "V") {
                        y = parseFloat(tokens[j + 1]) || 0;
                        j += 2;
                      } else {
                        j++;
                      }
                    }
                    return (
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="3"
                        fill="#00c2ff"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: phase >= 1 ? [0, 1, 0.5, 1] : 0,
                        }}
                        transition={{ duration: 0.4, delay: i * 0.06 + 0.5 }}
                      />
                    );
                  })()}
                </g>
              ))}
            </svg>

            {/* Radial gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 30%, #050505 70%)",
              }}
            />

            {/* Main text container */}
            <div className="relative z-20 text-center">
              {/* SYNAPSE */}
              <motion.div
                className="relative"
                variants={glitchVariants}
                initial="hidden"
                animate={phase >= 1 ? (phase >= 2 ? "visible" : "glitching") : "hidden"}
              >
                {/* Glitch layers */}
                {phase === 1 && (
                  <>
                    <motion.span
                      className="absolute inset-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.2em]"
                      style={{
                        color: "rgba(0,194,255,0.5)",
                        clipPath: "inset(0 0 50% 0)",
                      }}
                      animate={{
                        x: [-5, 3, -2, 4, 0],
                        opacity: [0.5, 0.8, 0.3, 0.7, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      SYNAPSE
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.2em]"
                      style={{
                        color: "rgba(255,0,128,0.3)",
                        clipPath: "inset(50% 0 0 0)",
                      }}
                      animate={{
                        x: [4, -3, 5, -2, 0],
                        opacity: [0.3, 0.6, 0.4, 0.7, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      SYNAPSE
                    </motion.span>
                  </>
                )}
                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.2em] text-signal-white block">
                  SYNAPSE
                </span>
              </motion.div>

              {/* DIGITAL */}
              <motion.div
                className="relative mt-2"
                variants={glitchVariants}
                initial="hidden"
                animate={phase >= 1 ? (phase >= 2 ? "visible" : "glitching") : "hidden"}
                transition={{ delay: 0.1 }}
              >
                {phase === 1 && (
                  <>
                    <motion.span
                      className="absolute inset-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.2em]"
                      style={{
                        color: "rgba(0,255,136,0.3)",
                        clipPath: "inset(0 0 50% 0)",
                      }}
                      animate={{
                        x: [3, -4, 2, -3, 0],
                        opacity: [0.4, 0.7, 0.3, 0.6, 0],
                      }}
                      transition={{ duration: 0.5, delay: 0.05 }}
                    >
                      DIGITAL
                    </motion.span>
                  </>
                )}
                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.2em] text-synapse-blue block">
                  DIGITAL
                </span>
              </motion.div>

              {/* Underline bar */}
              <motion.div
                className="mx-auto mt-6 h-[3px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #00c2ff, transparent)",
                }}
                initial={{ width: 0, opacity: 0 }}
                animate={
                  phase >= 2
                    ? { width: "80%", opacity: 1 }
                    : { width: 0, opacity: 0 }
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Tagline */}
              <motion.p
                className="mt-4 text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase text-circuit-silver/70 font-light"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  phase >= 2
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Digital Excellence
              </motion.p>

              {/* Glow pulse behind text */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-3xl"
                initial={{ opacity: 0 }}
                animate={
                  phase >= 2
                    ? {
                        opacity: [0, 0.4, 0.2, 0.3],
                        scale: [0.9, 1.05, 1],
                      }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.8 }}
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,194,255,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
            </div>

            {/* Corner accents */}
            {[
              "top-6 left-6",
              "top-6 right-6 rotate-90",
              "bottom-6 left-6 -rotate-90",
              "bottom-6 right-6 rotate-180",
            ].map((pos, i) => (
              <motion.div
                key={pos}
                className={`absolute ${pos}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 1 ? 0.5 : 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <path
                    d="M 0 30 L 0 0 L 30 0"
                    fill="none"
                    stroke="#00c2ff"
                    strokeWidth="1.5"
                  />
                </svg>
              </motion.div>
            ))}

            {/* Subtle noise overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03] z-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content - render immediately but hidden behind splash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
