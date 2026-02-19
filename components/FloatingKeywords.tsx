"use client";

import { motion } from "framer-motion";

const KEYWORD_DATA = [
  { text: "Web Development", x: 6, y: 15, rotation: -8 },
  { text: "Social Media", x: 80, y: 10, rotation: 5 },
  { text: "SEO", x: 90, y: 75, rotation: -3 },
  { text: "Analytics", x: 4, y: 80, rotation: 6 },
  { text: "Content Creation", x: 10, y: 50, rotation: -4 },
  { text: "Digital Marketing", x: 76, y: 52, rotation: 7 },
  { text: "Branding", x: 84, y: 30, rotation: -6 },
  { text: "Web Design", x: 5, y: 35, rotation: 4 },
];

export default function FloatingKeywords() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {KEYWORD_DATA.map((keyword, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${keyword.x}%`,
            top: `${keyword.y}%`,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.9, 0.5, 0.9, 0],
            scale: [0.6, 1, 0.95, 1, 0.6],
            x: [0, 15, -10, 20, 0],
            y: [0, -10, 5, -15, 0],
            rotate: [0, keyword.rotation, 0, -keyword.rotation, 0],
          }}
          transition={{
            duration: 10 + index * 1.5,
            delay: index * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glow layer — uses text-shadow instead of animated filter:blur for GPU perf */}
          <div
            className="absolute inset-0 text-sm md:text-lg font-bold uppercase tracking-[0.2em] whitespace-nowrap"
            style={{
              color: "transparent",
              textShadow: "0 0 20px rgba(0,194,255,0.6), 0 0 40px rgba(0,194,255,0.3)",
            }}
          >
            {keyword.text}
          </div>
          {/* Text layer */}
          <div
            className="relative text-sm md:text-lg font-bold uppercase tracking-[0.2em] whitespace-nowrap bg-gradient-to-r from-synapse-blue via-[#A855F7] to-synapse-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_3s_ease-in-out_infinite]"
          >
            {keyword.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

