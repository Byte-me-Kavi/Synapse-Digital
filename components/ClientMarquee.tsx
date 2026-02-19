"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "New Kandy Fire", logo: "/companies/new-kandy-fire.png" },
  { name: "Mindspex Academy", logo: "/companies/mindspex.webp" },
  { name: "Ceylon Air Duct", logo: "/companies/air-duct.png" },
];

// Duplicate for seamless infinite scroll
const marqueeClients = [...clients, ...clients, ...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section className="relative w-full py-10 md:py-14 overflow-hidden">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-circuit-silver/50">
          Trusted By Businesses Across Sri Lanka
        </p>
      </motion.div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-void-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-void-black to-transparent z-10 pointer-events-none" />

      {/* Marquee track — CSS animation instead of framer-motion for GPU compositing */}
      <div className="flex items-center overflow-hidden">
        <div
          className="flex items-center gap-12 md:gap-20 animate-marquee-scroll"
          style={{ willChange: "transform" }}
        >
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="relative w-28 h-14 md:w-36 md:h-16 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="144px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

