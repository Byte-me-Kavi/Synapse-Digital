"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const updateSlider = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.min(Math.max((x / rect.width) * 100, 2), 98);
      setSliderPos(percent);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updateSlider(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-24 px-6 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            See The{" "}
            <span className="text-synapse-blue">Difference</span>
          </h2>
          <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
            Drag the slider to compare — this is what a professional redesign
            looks like
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={containerRef}
          className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none border border-white/10"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          style={{ boxShadow: "0 0 60px rgba(0,194,255,0.1)" }}
        >
          {/* AFTER side (full background) */}
          <div className="absolute inset-0 bg-[#0a0a0a]">
            {/* Modern site mockup */}
            <div className="w-full h-full flex flex-col">
              {/* Nav */}
              <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-synapse-blue/20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-synapse-blue to-[#00ff88]" />
                  <span className="text-signal-white font-bold text-sm md:text-base">TechBrand</span>
                </div>
                <div className="hidden sm:flex gap-5 text-xs text-circuit-silver/70">
                  <span>Products</span>
                  <span>Solutions</span>
                  <span>Pricing</span>
                  <span>Company</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-synapse-blue text-black text-xs font-bold">
                  Get Started
                </div>
              </div>
              {/* Hero */}
              <div className="flex-1 flex items-center px-6 md:px-10">
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full border border-synapse-blue/30 bg-synapse-blue/10 text-[10px] text-synapse-blue font-semibold">
                    ✨ Launching 2026
                  </div>
                  <h3 className="text-signal-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                    Build{" "}
                    <span className="text-synapse-blue">Faster.</span>
                    <br />
                    Scale Smarter.
                  </h3>
                  <p className="text-circuit-silver/60 text-xs md:text-sm leading-relaxed max-w-sm">
                    The modern platform for high-performance teams that want real results.
                  </p>
                  <div className="flex gap-3">
                    <div className="px-4 py-2 rounded-lg bg-synapse-blue text-black text-xs font-bold">
                      Start Free Trial →
                    </div>
                    <div className="px-4 py-2 rounded-lg border border-white/20 text-white text-xs">
                      Watch Demo
                    </div>
                  </div>
                </div>
                {/* Dashboard mockup */}
                <div className="hidden md:block w-1/2 pl-6">
                  <div className="rounded-xl border border-synapse-blue/20 bg-white/[0.03] p-4 space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="flex gap-2">
                      {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end h-20">
                          <motion.div
                            className="rounded-sm"
                            style={{
                              background: `linear-gradient(to top, #00C2FF, #00ff88)`,
                              height: `${h}%`,
                            }}
                            initial={{ height: 0 }}
                            animate={isInView ? { height: `${h}%` } : {}}
                            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[8px] text-circuit-silver/40">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* AFTER label */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-synapse-blue/20 border border-synapse-blue/40 text-synapse-blue text-xs font-bold backdrop-blur-sm">
              ✦ AFTER — Synapse Digital
            </div>
          </div>

          {/* BEFORE side (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="w-full h-full bg-[#f5f0e8]">
              {/* Ugly old-school site mockup */}
              <div className="w-full h-full flex flex-col">
                {/* Old nav */}
                <div className="flex items-center justify-between px-6 md:px-10 py-3 bg-[#336699]">
                  <span className="text-white font-bold text-sm" style={{ fontFamily: "Times New Roman, serif" }}>
                    TechBrand Inc.
                  </span>
                  <div className="hidden sm:flex gap-4 text-[10px] text-white/80 underline" style={{ fontFamily: "Times New Roman, serif" }}>
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>
                {/* Old content */}
                <div className="flex-1 px-6 md:px-10 py-6 space-y-4">
                  <div className="bg-yellow-300 text-red-700 text-xs md:text-sm font-bold px-3 py-2 text-center animate-pulse" style={{ fontFamily: "Comic Sans MS, cursive" }}>
                    ⭐ WELCOME TO OUR WEBSITE! ⭐ BEST PRICES GUARANTEED!!!
                  </div>
                  <h3 className="text-[#333] text-lg md:text-2xl font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
                    We Offer Many Services For Your Business Needs
                  </h3>
                  <p className="text-[#666] text-xs md:text-sm leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. We have been in business since 2005 and provide top quality service...
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <div className="px-4 py-2 rounded-none bg-[#336699] text-white text-xs font-bold border-2 border-[#224466]" style={{ fontFamily: "Arial, sans-serif" }}>
                      CLICK HERE
                    </div>
                    <div className="px-4 py-2 rounded-none bg-[#cc3333] text-white text-xs font-bold border-2 border-[#993333]" style={{ fontFamily: "Arial, sans-serif" }}>
                      CALL NOW!!!
                    </div>
                  </div>
                  {/* Hit counter */}
                  <div className="mt-4 text-center">
                    <div className="inline-block bg-black text-green-400 px-3 py-1 text-[10px] font-mono">
                      Visitors: 001,247 | Last Updated: Jan 2019
                    </div>
                  </div>
                </div>
              </div>
              {/* BEFORE label */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold backdrop-blur-sm">
                ✗ BEFORE — Outdated Design
              </div>
            </div>
          </div>

          {/* Drag Handle */}
          <div
            className="absolute top-0 bottom-0 z-20"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-signal-white" 
              style={{ boxShadow: "0 0 10px rgba(255,255,255,0.5)" }}
            />
            {/* Handle circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-signal-white border-2 border-synapse-blue flex items-center justify-center shadow-lg"
              style={{ boxShadow: "0 0 20px rgba(0,194,255,0.5)" }}
            >
              <span className="text-synapse-blue text-sm font-bold tracking-tighter">⟨ ⟩</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
