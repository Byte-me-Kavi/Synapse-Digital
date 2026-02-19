"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  BarChart3,
  Share2,
  TrendingUp,
  Eye,
  Sparkles,
  ExternalLink,
  Activity,
} from "lucide-react";
import React, { useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";

import TiltCard from "@/components/TiltCard";
import { AnimatedCircuit } from "@/components/AnimatedSVG";
import MagneticButton from "@/components/MagneticButton";

import FloatingKeywords from "@/components/FloatingKeywords";
import ClientMarquee from "@/components/ClientMarquee";
import TechStackGrid from "@/components/TechStackGrid";
import ResultsStats from "@/components/ResultsStats";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function HomeClient() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Fast, mobile-friendly websites that turn visitors into customers. 4-6 week delivery.",
      color: "#00C2FF",
    },
    {
      icon: Eye,
      title: "NavLens Analytics",
      description:
        "See exactly how visitors use your site with heatmaps and recordings. Know what works, fix what doesn't.",
      color: "#00C2FF",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "We create and post content that gets engagement. Grow your followers and sell more.",
      color: "#FF0080",
    },
    {
      icon: TrendingUp,
      title: "SEO & Traffic Growth",
      description:
        "Rank #1 on Google for keywords your customers search. More traffic = more sales.",
      color: "#00FF88",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen flex mt-10 flex-col">
        {/* Particle Background */}
        <ParticleBackground className="fixed inset-0 -z-10" />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center w-full px-6 sm:px-8 lg:px-12 pt-32 pb-24 overflow-x-clip">
          {/* Floating Keywords */}
          <FloatingKeywords />

          {/* Navlens Feature Banner - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-25 right-4 md:right-8 lg:right-12 z-30 hidden md:block max-w-xs lg:max-w-sm"
          >
            <GlassCard 
              variant="dark" 
              className="relative overflow-hidden border-synapse-blue/40 hover:border-synapse-blue/70 transition-all duration-300 group cursor-pointer"
            >
              {/* Background glow — CSS animation instead of JS loop */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-synapse-blue/10 to-transparent animate-pulse-slow"
                style={{ opacity: 0.4 }}
              />

              <div className="relative z-10 p-4">
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="p-2 rounded-lg bg-synapse-blue/20 backdrop-blur-sm animate-pulse-glow"
                  >
                    <Sparkles className="h-4 w-4 text-synapse-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-synapse-blue/30 text-synapse-blue rounded border border-synapse-blue/50">
                        NEW
                      </span>
                      <h3 className="text-sm font-bold text-signal-white">
                        Navlens Analytics
                      </h3>
                    </div>
                    <p className="text-xs text-circuit-silver">
                      User behavior analytics for your website
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="text-center p-2 bg-synapse-blue/5 rounded border border-synapse-blue/20">
                    <Activity className="h-3 w-3 text-synapse-blue mx-auto mb-1" />
                    <div className="text-[10px] text-circuit-silver">Session Replay</div>
                  </div>
                  <div className="text-center p-2 bg-synapse-blue/5 rounded border border-synapse-blue/20">
                    <Eye className="h-3 w-3 text-synapse-blue mx-auto mb-1" />
                    <div className="text-[10px] text-circuit-silver">Heatmaps</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <a 
                    href="/services#navlens" 
                    className="flex-1"
                  >
                    <button className="w-full px-3 py-1.5 text-xs font-semibold bg-synapse-blue hover:bg-synapse-blue/90 text-signal-white rounded transition-all flex items-center justify-center gap-1">
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </a>
                  <a 
                    href="https://navlensanalytics.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="px-3 py-1.5 text-xs font-semibold border border-synapse-blue/30 hover:border-synapse-blue text-synapse-blue rounded transition-all flex items-center justify-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="w-full max-w-[1400px] mx-auto relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-10 md:space-y-12"
            >
              {/* Logo/Brand */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <div className="relative px-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight">
                    <span className="block mb-3 bg-gradient-to-r from-signal-white via-circuit-silver to-signal-white bg-[length:200%_auto] animate-[gradient-shift_4s_ease-in-out_infinite] bg-clip-text text-transparent">
                      SYNAPSE
                    </span>
                    <span className="block bg-gradient-to-r from-synapse-blue via-[#A855F7] via-50% to-synapse-blue bg-[length:200%_auto] animate-[gradient-shift_3s_ease-in-out_infinite] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,194,255,0.4)]">
                      DIGITAL
                    </span>
                  </h1>
                  <div className="absolute -bottom-4 left-0 right-0 h-1 bg-linear-to-r from-transparent via-synapse-blue to-transparent"></div>
                </div>
              </motion.div>

              {/* Headline with Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-circuit-silver max-w-3xl mx-auto px-4 leading-relaxed"
              >
                <Typewriter
                  text={[
                    "We Build Websites, Run Your Social Media & Drive Traffic Through SEO",
                    "Get More Customers Online - Fast Results",
                    "Professional Web Design + Marketing That Actually Works",
                  ]}
                  delay={500}
                  speed={80}
                  loop={true}
                  className="text-synapse-blue font-semibold"
                />
              </motion.div>

              {/* CTA Buttons with Magnetic Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8"
              >
                <MagneticButton strength={0.4}>
                  <a href="/contact">
                    <Button size="lg" variant="primary" className="px-8 py-4">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.4}>
                  <a href="/projects">
                    <Button size="lg" variant="secondary" className="px-8 py-4">
                      View Our Work
                    </Button>
                  </a>
                </MagneticButton>
              </motion.div>


            </motion.div>
          </div>
        </section>

        {/* Client Marquee */}
        <ClientMarquee />

        {/* Services Section */}
        <section className="relative w-full px-6 sm:px-8 bg-linear-to-b from-void-black via-data-dark-blue/10 to-void-black">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                What <span className="text-synapse-blue">We Do</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-circuit-silver max-w-3xl mx-auto">
                Everything you need to grow your business online
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <TiltCard
                    key={service.title}
                    tiltAmount={15}
                    glareEnabled={true}
                    className="h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onHoverStart={() => setActiveService(index)}
                      onHoverEnd={() => setActiveService(null)}
                    >
                      <GlassCard
                        variant="dark"
                        glowEffect={true}
                        className={`h-full group cursor-pointer transition-all duration-300 ${
                          activeService === index
                            ? "border-synapse-blue border-2 shadow-[0_0_40px_rgba(0,194,255,0.4)]"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col items-center text-center space-y-4 p-6 md:p-8">
                          <motion.div
                            className="p-3 rounded-xl transition-all duration-300"
                            style={{
                              backgroundColor: `${service.color}20`,
                              boxShadow: `0 0 20px ${service.color}40`,
                            }}
                            animate={{
                              rotate: activeService === index ? 360 : 0,
                              scale: activeService === index ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon
                              className="h-6 w-6 md:h-7 md:w-7 transition-colors duration-300"
                              style={{ color: service.color }}
                            />
                          </motion.div>
                          <h3 className="text-lg md:text-xl font-bold text-signal-white">
                            {service.title}
                          </h3>
                          <motion.p
                            className="text-circuit-silver text-sm md:text-base leading-relaxed"
                            animate={{
                              color:
                                activeService === index ? "#00C2FF" : "#E0E0E0",
                            }}
                          >
                            {service.description}
                          </motion.p>
                          <motion.div
                            className="flex items-center justify-center text-synapse-blue text-sm font-semibold mt-auto pt-4"
                            animate={{
                              x: activeService === index ? 10 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </motion.div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <TechStackGrid />

        {/* Why Us Section */}
        <section className="relative w-full py-20 md:py-24 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-void-black via-synapse-blue/5 to-void-black overflow-x-clip">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  We Track What Works.
                  <br />
                  You Get <span className="text-synapse-blue">More Sales</span>.
                </h2>
                <p className="text-lg md:text-xl text-circuit-silver leading-relaxed">
                  Our analytics tool{" "}
                  <span className="text-synapse-blue font-semibold">
                    NavLens
                  </span>{" "}
                  shows where visitors click, how long they stay, and why they
                  leave. We use this data to increase your conversion rate by
                  30-50%.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "See where visitors click (heatmaps)",
                    "Watch recordings of real user sessions",
                    "Find out why people leave without buying",
                    "100% privacy compliant (GDPR)",
                  ].map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-circuit-silver text-base md:text-lg"
                    >
                      <div className="w-2 h-2 bg-synapse-blue rounded-full mr-3 shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-6">
                  <MagneticButton strength={0.3}>
                    <Button size="lg" variant="primary" className="px-8 py-4">
                      See NavLens in Action
                      <Eye className="ml-2 h-5 w-5" />
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <GlassCard variant="dark" className="p-3 md:p-8">
                  <div className="aspect-video rounded-lg bg-linear-to-br from-synapse-blue/20 to-data-dark-blue/40 flex items-center justify-center relative overflow-hidden">
                    {/* Animated Circuit SVG */}
                    <AnimatedCircuit className="w-full h-full opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="text-center">
                        <BarChart3 className="h-16 w-16 text-synapse-blue mx-auto mb-4" />
                        <p className="text-circuit-silver font-semibold">
                          Live Analytics Dashboard
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Floating Stats */}
                {[
                  { label: "Active Users", value: "12.5K", delay: 0 },
                  { label: "Avg. Session", value: "8:32", delay: 0.2 },
                  { label: "Conversion", value: "+23%", delay: 0.4 },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    viewport={{ once: true }}
                    className={`absolute ${
                      i % 2 === 0 
                        ? "right-0 md:-right-[5%]" 
                        : "left-0 md:-left-[5%]"
                    }`}
                    style={{
                      top: `${20 + i * 30}%`,
                    }}
                  >
                    <GlassCard className="px-4 py-2">
                      <p className="text-xs text-circuit-silver">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-synapse-blue">
                        {stat.value}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Stats - Scroll-Triggered */}
        <ResultsStats />

        {/* Before/After Slider */}
        <BeforeAfterSlider />

        {/* CTA Section */}
        <section className="relative w-full py-20 md:py-24 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="dark" className="p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                  Ready to Get More
                  <span className="text-synapse-blue"> Customers</span>?
                </h2>
                <p className="text-lg md:text-xl text-circuit-silver mb-8 md:mb-10 max-w-2xl mx-auto">
                  Free consultation - we&apos;ll show you exactly how to grow
                  your business online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <MagneticButton strength={0.3}>
                    <a href="/contact">
                      <Button size="lg" variant="primary" className="px-8 py-4">
                        Start Your Project
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </MagneticButton>
                  <MagneticButton strength={0.3}>
                    <a href="/contact">
                      <Button size="lg" variant="ghost" className="px-8 py-4">
                        Schedule a Call
                      </Button>
                    </a>
                  </MagneticButton>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
