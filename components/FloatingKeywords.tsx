"use client";

import { motion } from "framer-motion";

// Pre-generated random values to avoid Math.random() in render
const KEYWORD_DATA = [
  { text: "Web Development", x: 22.5, y: 44.1, duration: 18.3, delay: 0.8 },
  { text: "Social Media", x: 77.6, y: 15.9, duration: 21.7, delay: 2.1 },
  { text: "SEO", x: 54.5, y: 88.5, duration: 19.5, delay: 1.3 },
  { text: "Analytics", x: 35.8, y: 75.7, duration: 23.2, delay: 0.5 },
  { text: "Content Creation", x: 16.3, y: 41.2, duration: 17.8, delay: 2.7 },
  { text: "Digital Marketing", x: 52.8, y: 37.0, duration: 20.4, delay: 1.6 },
  { text: "Branding", x: 42.0, y: 88.9, duration: 22.1, delay: 0.2 },
  { text: "Web Design", x: 73.2, y: 40.5, duration: 19.9, delay: 2.3 },
];

export default function FloatingKeywords() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 z-50">
      {KEYWORD_DATA.map((keyword, index) => (
        <motion.div
          key={index}
          initial={{
            x: `${keyword.x}vw`,
            y: `${keyword.y}vh`,
            opacity: 0,
          }}
          animate={{
            x: [
              `${keyword.x}vw`,
              `${(keyword.x + 20) % 100}vw`,
              `${keyword.x}vw`,
            ],
            y: [
              `${keyword.y}vh`,
              `${(keyword.y + 15) % 100}vh`,
              `${keyword.y}vh`,
            ],
            opacity: [0, 0.8, 0.6, 0.8, 0],
          }}
          transition={{
            duration: keyword.duration,
            delay: keyword.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-white text-base md:text-lg font-semibold whitespace-nowrap"
        >
          {keyword.text}
        </motion.div>
      ))}
    </div>
  );
}
