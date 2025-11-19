"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  BarChart3,
  Share2,
  TrendingUp,
  Eye,
} from "lucide-react";
import React, { useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import { AnimatedCircuit } from "@/components/AnimatedSVG";
import MagneticButton from "@/components/MagneticButton";
import { TextRevealWords } from "@/components/TextReveal";
import FloatingKeywords from "@/components/FloatingKeywords";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Fast, mobile-friendly websites that turn visitors into customers. 4-6 week delivery. Starting at $2,999.",
      color: "#00C2FF",
    },
    {
      icon: Eye,
      title: "NavLens Analytics",
      description:
        "See exactly how visitors use your site with heatmaps and recordings. Know what works, fix what doesn't. $99/month.",
      color: "#00C2FF",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "We create and post content that gets engagement. Grow your followers and sell more. From $999/month.",
      color: "#FF0080",
    },
    {
      icon: TrendingUp,
      title: "SEO & Traffic Growth",
      description:
        "Rank #1 on Google for keywords your customers search. More traffic = more sales. From $799/month.",
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
        <section className="relative min-h-screen flex items-center w-full px-6 sm:px-8 lg:px-12 pt-32 pb-24">
          {/* Floating Keywords */}
          <FloatingKeywords />

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
                    <span className="text-signal-white block mb-3">
                      SYNAPSE
                    </span>
                    <span className="text-synapse-blue block">DIGITAL</span>
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
                    "Get More Customers Online - Fast Results in 30-90 Days",
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
                Everything you need to grow your business online - from $2,999
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

        {/* Why Us Section */}
        <section className="relative w-full py-20 md:py-24 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-void-black via-synapse-blue/5 to-void-black">
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
                    className="absolute"
                    style={{
                      top: `${20 + i * 30}%`,
                      right: i % 2 === 0 ? "-5%" : "auto",
                      left: i % 2 !== 0 ? "-5%" : "auto",
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

        {/* Animated Counter Stats Section */}
        <section className="relative w-full py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-synapse-blue/5">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <TextRevealWords
                text="Real Results for Real Businesses"
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
              />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <AnimatedCounter
                  end={500}
                  suffix="+"
                  className="text-4xl md:text-6xl font-bold text-synapse-blue mb-2"
                />
                <p className="text-circuit-silver text-sm md:text-base">
                  Projects Delivered
                </p>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  end={98}
                  suffix="%"
                  delay={0.2}
                  className="text-4xl md:text-6xl font-bold text-synapse-blue mb-2"
                />
                <p className="text-circuit-silver text-sm md:text-base">
                  Client Satisfaction
                </p>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  end={15}
                  suffix="M+"
                  delay={0.4}
                  className="text-4xl md:text-6xl font-bold text-synapse-blue mb-2"
                />
                <p className="text-circuit-silver text-sm md:text-base">
                  Users Reached
                </p>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  end={24}
                  suffix="/7"
                  delay={0.6}
                  className="text-4xl md:text-6xl font-bold text-synapse-blue mb-2"
                />
                <p className="text-circuit-silver text-sm md:text-base">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </section>

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
