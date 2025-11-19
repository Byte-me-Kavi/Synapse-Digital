"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  TrendingUp,
  Users,
  Heart,
} from "lucide-react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SocialMediaPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Starter Package",
      description:
        "Perfect for small businesses just getting started on social media",
      features: [
        "12 posts per month (3/week)",
        "2 social platforms (Instagram + Facebook)",
        "Content creation & graphics",
        "Hashtag research",
        "Monthly performance report",
      ],
      price: "$999/month",
      color: "#00C2FF",
    },
    {
      icon: Users,
      title: "Growth Package",
      description:
        "For businesses serious about growing their social media presence",
      features: [
        "20 posts per month (5/week)",
        "3 platforms (+ TikTok or YouTube)",
        "Stories & Reels content",
        "Community management (reply to comments)",
        "Bi-weekly strategy calls",
        "Competitor analysis",
      ],
      price: "$1,999/month",
      color: "#00FF88",
    },
    {
      icon: Heart,
      title: "Full Service Package",
      description:
        "Complete social media management - we handle everything for you",
      features: [
        "30 posts per month (daily posting)",
        "All major platforms",
        "Influencer collaboration setup",
        "Paid ad campaign management",
        "24/7 community management",
        "Weekly strategy & reporting",
        "Guaranteed growth: 1000+ followers in 90 days",
      ],
      price: "$3,999/month",
      color: "#FF0080",
    },
  ];

  const platforms = [
    {
      name: "TikTok",
      icon: "🎵",
      statsValue: 1,
      statsSuffix: "B+ users",
      color: "#00f2ea",
    },
    {
      name: "Instagram",
      icon: Instagram,
      statsValue: 2,
      statsSuffix: "B+ users",
      color: "#E4405F",
    },
    {
      name: "Facebook",
      icon: Facebook,
      statsValue: 3,
      statsSuffix: "B+ users",
      color: "#1877F2",
    },
    {
      name: "YouTube",
      icon: Youtube,
      statsValue: 2.5,
      statsSuffix: "B+ users",
      color: "#FF0000",
    },
  ];

  const caseStudies = [
    {
      brand: "Fashion Retailer",
      platform: "Instagram",
      resultValue: 450,
      resultPrefix: "+",
      resultSuffix: "%",
      resultLabel: "Engagement",
      metricValue: 6,
      metricSuffix: "M",
      metricLabel: "impressions in 30 days",
      color: "#E4405F",
    },
    {
      brand: "Tech Startup",
      platform: "TikTok",
      resultValue: 2.3,
      resultPrefix: "+",
      resultSuffix: "M",
      resultLabel: "Views",
      metric: "Viral campaign reach",
      color: "#00f2ea",
    },
    {
      brand: "Food Brand",
      platform: "YouTube",
      resultValue: 180,
      resultPrefix: "+",
      resultSuffix: "K",
      resultLabel: "Subscribers",
      metric: "Content series success",
      color: "#FF0000",
    },
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
                <span className="text-signal-white">Social Media </span>
                <span className="text-synapse-blue">Management</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto mb-10">
                We create content, post daily, and grow your followers. You
                focus on running your business. From $999/month.
              </p>

              {/* Platform Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {platforms.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <GlassCard
                        variant="dark"
                        className="p-4 text-center cursor-pointer"
                      >
                        <div className="flex justify-center mb-2">
                          {typeof Icon === "string" ? (
                            <span className="text-3xl">{Icon}</span>
                          ) : (
                            <Icon
                              className="h-8 w-8"
                              style={{ color: platform.color }}
                            />
                          )}
                        </div>
                        <h3 className="text-sm font-bold text-signal-white mb-1">
                          {platform.name}
                        </h3>
                        <div className="text-xs text-circuit-silver">
                          <AnimatedCounter
                            end={platform.statsValue}
                            suffix={platform.statsSuffix}
                            decimals={platform.statsValue % 1 !== 0 ? 1 : 0}
                          />
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            >
              Pricing <span className="text-synapse-blue">Packages</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <GlassCard variant="dark" className="h-full">
                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div
                            className="p-3 rounded-xl w-fit"
                            style={{
                              backgroundColor: `${service.color}20`,
                              boxShadow: `0 0 30px ${service.color}30`,
                            }}
                          >
                            <Icon
                              className="h-7 w-7"
                              style={{ color: service.color }}
                            />
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-synapse-blue">
                              {service.price}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-signal-white">
                          {service.title}
                        </h3>
                        <p className="text-circuit-silver text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <div className="pt-2 border-t border-synapse-blue/20">
                          <div className="text-xs font-semibold text-synapse-blue mb-2">
                            What&apos;s Included:
                          </div>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li
                                key={feature}
                                className="flex items-start text-circuit-silver text-sm"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 shrink-0"
                                  style={{ backgroundColor: service.color }}
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-void-black via-synapse-blue/5 to-void-black">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            >
              Success <span className="text-synapse-blue">Stories</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.brand}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard
                    variant="dark"
                    className="p-8 text-center hover:border-synapse-blue/50 transition-all"
                  >
                    <div
                      className="text-4xl font-black mb-2"
                      style={{ color: study.color }}
                    >
                      <AnimatedCounter
                        end={study.resultValue}
                        prefix={study.resultPrefix}
                        suffix={study.resultSuffix}
                        decimals={study.resultValue % 1 !== 0 ? 1 : 0}
                      />
                    </div>
                    <div className="text-lg text-circuit-silver mb-4">
                      {study.resultLabel}
                    </div>
                    <h3 className="text-xl font-bold text-signal-white mb-2">
                      {study.brand}
                    </h3>
                    <p className="text-circuit-silver text-sm mb-4">
                      {study.platform}
                    </p>
                    <div className="pt-4 border-t border-synapse-blue/20">
                      <div className="text-xs text-circuit-silver">
                        {study.metricValue !== undefined ? (
                          <>
                            <span className="font-bold">
                              <AnimatedCounter
                                end={study.metricValue}
                                suffix={study.metricSuffix}
                              />
                            </span>{" "}
                            {study.metricLabel}
                          </>
                        ) : (
                          study.metric
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="dark" className="p-10 md:p-14">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Grow Your
                  <span className="text-synapse-blue"> Following</span>?
                </h2>
                <p className="text-lg text-circuit-silver mb-8 max-w-2xl mx-auto">
                  Start with a free social media audit. We&apos;ll show you
                  exactly what content will work for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <Button size="lg" variant="primary" className="px-8 py-4">
                      Get Free Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="/projects">
                    <Button size="lg" variant="ghost" className="px-8 py-4">
                      See Content Examples
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
