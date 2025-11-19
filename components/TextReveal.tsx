"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "words" | "letters";
}

export function TextRevealWords({
  text,
  className = "",
  delay = 0,
}: Omit<TextRevealProps, "type">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function TextRevealLetters({
  text,
  className = "",
  delay = 0,
}: Omit<TextRevealProps, "type">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const letters = text.split("");

  return (
    <div ref={ref} className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.03,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

export function TextRevealSlideUp({
  text,
  className = "",
  delay = 0,
}: Omit<TextRevealProps, "type">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export function TextRevealGradient({
  text,
  className = "",
  delay = 0,
}: Omit<TextRevealProps, "type">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={className}>
      <motion.span
        initial={{ backgroundPosition: "200% center" }}
        animate={
          isInView
            ? { backgroundPosition: "0% center" }
            : { backgroundPosition: "200% center" }
        }
        transition={{
          duration: 1.5,
          delay,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(90deg, #E0E0E0 0%, #00C2FF 50%, #E0E0E0 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}
