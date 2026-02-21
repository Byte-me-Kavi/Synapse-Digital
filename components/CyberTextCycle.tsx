"use client";

import React, { useEffect, useState, useMemo, useRef, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CyberTextCycleProps {
  texts: string[];
  className?: string;
  holdDuration?: number;
}

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export default function CyberTextCycle({
  texts,
  className = "",
  holdDuration = 4000,
}: CyberTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const longestText = useMemo(
    () => texts.reduce((a, b) => (a.length > b.length ? a : b), ""),
    [texts]
  );

  useEffect(() => {
    const cycleTime = holdDuration + 2200;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, cycleTime);
    return () => clearInterval(timer);
  }, [texts.length, holdDuration]);

  return (
    <div className="relative w-full">
      {/* Invisible sizing ghost — prevents layout shift */}
      <span className="invisible block text-center" aria-hidden="true">
        <span className={className}>{longestText}</span>
      </span>

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {mounted ? (
          <AnimatePresence mode="wait">
            <ScatterText
              key={currentIndex}
              text={texts[currentIndex]}
              seed={currentIndex}
              className={className}
            />
          </AnimatePresence>
        ) : (
          <span className={className}>{texts[currentIndex]}</span>
        )}
      </div>
    </div>
  );
}

function ScatterText({
  text,
  seed,
  className,
}: {
  text: string;
  seed: number;
  className: string;
}) {
  const chars = text.split("");
  const total = chars.length;

  return (
    <motion.span
      className={`inline-flex flex-wrap items-center justify-center ${className}`}
      initial="enter"
      animate="idle"
      exit="exit"
    >
      {chars.map((char, i) => (
        <ScrambleChar
          key={i}
          targetChar={char}
          index={i}
          total={total}
          seed={seed * 300 + i}
        />
      ))}
    </motion.span>
  );
}

function ScrambleChar({
  targetChar,
  index,
  total,
  seed,
}: {
  targetChar: string;
  index: number;
  total: number;
  seed: number;
}) {
  const isSpace = targetChar === " ";
  const [displayChar, setDisplayChar] = useState(() =>
    isSpace
      ? " "
      : GLITCH_CHARS[Math.floor(pseudoRandom(seed) * GLITCH_CHARS.length)]
  );
  const [glowing, setGlowing] = useState(false);
  const cleanupRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    if (isSpace) {
      return;
    }

    const staggerDelay = index * 18;
    const scrambleDuration = 380 + pseudoRandom(seed + 10) * 220;

    const delayTimer = setTimeout(() => {
      let elapsed = 0;
      const scrambleInterval = setInterval(() => {
        elapsed += 45;
        if (elapsed >= scrambleDuration) {
          clearInterval(scrambleInterval);
          setDisplayChar(targetChar);
          setGlowing(true);
          const glowOff = setTimeout(() => setGlowing(false), 500);
          cleanupRef.current.push(() => clearTimeout(glowOff));
        } else {
          setDisplayChar(
            GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          );
        }
      }, 45);

      cleanupRef.current.push(() => clearInterval(scrambleInterval));
    }, staggerDelay);

    return () => {
      clearTimeout(delayTimer);
      cleanupRef.current.forEach((fn) => fn());
      cleanupRef.current = [];
    };
  }, [targetChar, index, seed, isSpace]);

  // Scatter values — each char gets unique random offsets
  const enterX = (pseudoRandom(seed) - 0.5) * 100;
  const enterY = (pseudoRandom(seed + 1) - 0.5) * 70;
  const enterRotate = (pseudoRandom(seed + 2) - 0.5) * 50;
  const exitX = (pseudoRandom(seed + 3) - 0.5) * 120;
  const exitY = (pseudoRandom(seed + 4) - 0.5) * 80;
  const exitRotate = (pseudoRandom(seed + 5) - 0.5) * 70;

  const enterDelay = index * 0.014;
  const exitDelay = (total - index) * 0.005;

  return (
    <motion.span
      className="inline-block will-change-transform"
      style={{
        whiteSpace: "pre",
        textShadow: glowing
          ? "0 0 18px rgba(0,194,255,0.9), 0 0 40px rgba(0,194,255,0.4)"
          : "none",
        transition: "text-shadow 0.35s ease-out",
      }}
      variants={{
        enter: {
          x: enterX,
          y: enterY,
          rotate: enterRotate,
          scale: 0,
          opacity: 0,
          filter: "blur(12px)",
          transition: { duration: 0 },
        },
        idle: {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 130,
            damping: 14,
            delay: enterDelay,
            filter: { duration: 0.5, delay: enterDelay },
          },
        },
        exit: {
          x: exitX,
          y: exitY,
          rotate: exitRotate,
          scale: 0.15,
          opacity: 0,
          filter: "blur(10px)",
          transition: {
            duration: 0.45,
            delay: exitDelay,
            ease: "easeIn",
          },
        },
      }}
    >
      {displayChar}
    </motion.span>
  );
}
