"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Award,
  Heart,
  TrendingUp,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutClient() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We don't just build - we track what works. Every decision is backed by data to get you more customers.",
      color: "#00C2FF",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Most agencies take months. We deliver in 4-6 weeks. You start seeing results while competitors are still planning.",
      color: "#00FF88",
    },
    {
      icon: Heart,
      title: "Transparent Pricing",
      description:
        "No hidden fees, no surprise costs. You know exactly what you pay before we start. 20% upfront, 80% on delivery.",
      color: "#FF0080",
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 15, suffix: "M+", label: "Users Reached" },
    { value: 7, suffix: "+", label: "Years Experience" },
  ];

  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen flex flex-col items-center">
        <ParticleBackground className="fixed inset-0 -z-10" />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center w-full px-6 sm:px-8 lg:px-12 pt-32 pb-16">
          <div className="w-full max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-signal-white">We Help Businesses </span>
                <span className="text-synapse-blue">Get More Customers</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto">
                No fluff, no jargon. We build websites, run social media, and
                drive traffic through SEO. Simple.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative w-full py-16 px-6 sm:px-8 lg:px-12 bg-synapse-blue/5">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-6xl font-bold text-synapse-blue mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-circuit-silver text-sm md:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Why We <span className="text-synapse-blue">Started This</span>
                </h2>
                <div className="space-y-4 text-circuit-silver text-base md:text-lg leading-relaxed">
                  <p>
                    Most agencies talk about &ldquo;brand storytelling&rdquo;
                    and &ldquo;digital transformation.&rdquo; We talk about what
                    matters: getting you more customers.
                  </p>
                  <p>
                    After working with hundreds of businesses, we noticed a
                    pattern: companies don&apos;t need fancy designs - they need
                    more sales. They don&apos;t need 50-page proposals - they
                    need clear pricing and fast delivery.
                  </p>
                  <p>
                    So we built Synapse Digital differently. Everything we do
                    has one goal: help your business grow. We track every click,
                    every visitor, every sale. If something doesn&apos;t work,
                    we change it.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard variant="dark" className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-synapse-blue/20">
                        <Award className="h-8 w-8 text-synapse-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-signal-white">
                          Our Mission
                        </h3>
                        <p className="text-circuit-silver text-sm">
                          Make professional digital marketing affordable for
                          every business
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-synapse-blue/20">
                        <TrendingUp className="h-8 w-8 text-synapse-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-signal-white">
                          Our Approach
                        </h3>
                        <p className="text-circuit-silver text-sm">
                          Data-driven decisions, transparent pricing, fast
                          delivery
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-synapse-blue/20">
                        <Users className="h-8 w-8 text-synapse-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-signal-white">
                          Who We Serve
                        </h3>
                        <p className="text-circuit-silver text-sm">
                          Small businesses, startups, and companies ready to
                          grow
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-void-black via-data-dark-blue/10 to-void-black">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                What We <span className="text-synapse-blue">Believe In</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard
                      variant="dark"
                      glowEffect={true}
                      className="h-full p-8 text-center hover:border-synapse-blue transition-all"
                    >
                      <div
                        className="p-4 rounded-xl w-fit mx-auto mb-6"
                        style={{
                          backgroundColor: `${value.color}20`,
                          boxShadow: `0 0 30px ${value.color}30`,
                        }}
                      >
                        <Icon
                          className="h-10 w-10"
                          style={{ color: value.color }}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-signal-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-circuit-silver text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="dark" className="p-10 md:p-14">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to{" "}
                  <span className="text-synapse-blue">Work Together</span>?
                </h2>
                <p className="text-lg text-circuit-silver mb-8 max-w-2xl mx-auto">
                  Free consultation - we&apos;ll show you exactly how to get
                  more customers online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <Button size="lg" variant="primary" className="px-8 py-4">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="/projects">
                    <Button size="lg" variant="ghost" className="px-8 py-4">
                      See Our Work
                    </Button>
                  </a>
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
