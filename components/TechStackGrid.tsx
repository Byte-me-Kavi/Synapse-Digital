"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const techStack = [
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: "▲", color: "#ffffff", category: "Framework" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", category: "Language" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4", category: "Styling" },
  { name: "Node.js", icon: "⬢", color: "#339933", category: "Backend" },
  { name: "Supabase", icon: "⚡", color: "#3ECF8E", category: "Database" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28", category: "Backend" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", category: "Database" },
  { name: "Clerk", icon: "🔐", color: "#6C47FF", category: "Auth" },
  { name: "Auth0", icon: "🛡️", color: "#EB5424", category: "Auth" },
  { name: "Stripe", icon: "💳", color: "#635BFF", category: "Payments" },
  { name: "Vercel", icon: "▲", color: "#ffffff", category: "Deploy" },
  { name: "AWS", icon: "☁️", color: "#FF9900", category: "Cloud" },
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "DevOps" },
  { name: "GraphQL", icon: "◆", color: "#E10098", category: "API" },
  { name: "Prisma", icon: "△", color: "#2D3748", category: "ORM" },
  { name: "Redis", icon: "◉", color: "#DC382D", category: "Cache" },
  { name: "Figma", icon: "🎨", color: "#F24E1E", category: "Design" },
  { name: "Framer", icon: "✦", color: "#0055FF", category: "Animation" },
];

// Each icon gets a unique float pattern
function getFloatAnimation(index: number) {
  const patterns = [
    { y: [0, -8, 0, 6, 0], x: [0, 4, 0, -3, 0], rotate: [0, 3, 0, -2, 0] },
    { y: [0, 6, 0, -7, 0], x: [0, -5, 0, 4, 0], rotate: [0, -2, 0, 3, 0] },
    { y: [0, -6, 0, 8, 0], x: [0, 3, 0, -5, 0], rotate: [0, 2, 0, -3, 0] },
    { y: [0, 7, 0, -5, 0], x: [0, -4, 0, 3, 0], rotate: [0, -3, 0, 2, 0] },
    { y: [0, -9, 0, 5, 0], x: [0, 5, 0, -4, 0], rotate: [0, 4, 0, -2, 0] },
  ];
  return patterns[index % patterns.length];
}

export default function TechStackGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 md:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-synapse-blue">Tech Stack</span>
          </h2>
          <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and
            beautiful digital products
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-3 md:gap-4">
          {techStack.map((tech, index) => {
            const floatAnim = getFloatAnimation(index);
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group cursor-pointer"
              >
                {/* Continuous floating animation wrapper */}
                <motion.div
                  animate={{
                    y: floatAnim.y,
                    x: floatAnim.x,
                    rotate: floatAnim.rotate,
                  }}
                  transition={{
                    duration: 4 + (index % 3) * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="relative flex flex-col items-center justify-center aspect-square rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
                    style={{
                      boxShadow:
                        hoveredIndex === index
                          ? `0 0 25px ${tech.color}40, 0 0 50px ${tech.color}20, inset 0 0 20px ${tech.color}10`
                          : "none",
                      borderColor:
                        hoveredIndex === index ? `${tech.color}50` : undefined,
                    }}
                  >
                    {/* Pulse glow background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
                      }}
                    />

                    {/* Ambient idle glow */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at center, ${tech.color}08 0%, transparent 70%)`,
                      }}
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{
                        duration: 3 + (index % 4),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                    />

                    {/* Icon */}
                    <span className="relative text-xl md:text-2xl mb-1 transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </span>

                    {/* Name */}
                    <span className="relative text-[9px] md:text-[10px] font-semibold text-circuit-silver/60 group-hover:text-signal-white transition-colors duration-300 text-center leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap"
                    style={{
                      backgroundColor: tech.color,
                      color: "#000",
                      boxShadow: `0 4px 15px ${tech.color}50`,
                    }}
                  >
                    {tech.category}
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                      style={{ backgroundColor: tech.color }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
