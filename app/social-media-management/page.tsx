"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Video,
  Image as ImageIcon,
  FileText,
  BarChart3,
  Megaphone,
  Palette,
  Search,
  Play,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Newspaper,
  Target,
  Edit3,
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
  const contentServices = [
    {
      icon: Newspaper,
      title: "Social Media Posts",
      description:
        "Engaging posts designed to drive engagement and grow your audience across all platforms.",
      features: [
        "Custom graphics & visuals",
        "Platform-optimized captions",
        "Hashtag research & strategy",
        "Scheduled posting",
        "Multiple formats (carousel, single, etc.)",
      ],
      color: "#00C2FF",
    },
    {
      icon: Play,
      title: "Reels & Short Videos",
      description:
        "Viral-ready short-form video content for Instagram Reels, TikTok, and YouTube Shorts.",
      features: [
        "Trending audio & effects",
        "Professional editing",
        "Hook-driven storytelling",
        "Caption & subtitle creation",
        "Platform-specific optimization",
      ],
      color: "#FF0080",
    },
    {
      icon: Video,
      title: "AI-Generated Videos",
      description:
        "Cutting-edge AI-powered video creation for quick, professional content at scale.",
      features: [
        "AI avatar presenters",
        "Text-to-video generation",
        "Automated B-roll & effects",
        "Multiple styles & templates",
        "Fast turnaround",
      ],
      color: "#00FF88",
    },
    {
      icon: FileText,
      title: "Presentation Videos",
      description:
        "Professional presentation videos for products, services, tutorials, and announcements.",
      features: [
        "Script writing",
        "Professional voiceover",
        "Motion graphics",
        "Product demonstrations",
        "Educational content",
      ],
      color: "#FFD700",
    },
  ];

  const analyticsServices = [
    {
      icon: BarChart3,
      title: "Website Analytics Reports",
      description:
        "Comprehensive reports on website traffic, user behavior, and conversion metrics.",
      features: [
        "Google Analytics deep-dive",
        "Navlens heatmap insights",
        "Conversion funnel analysis",
        "User journey mapping",
        "Actionable recommendations",
      ],
      color: "#00C2FF",
    },
    {
      icon: TrendingUp,
      title: "Social Media Reports",
      description:
        "Detailed performance reports tracking growth, engagement, and ROI across all platforms.",
      features: [
        "Follower growth tracking",
        "Engagement rate analysis",
        "Best performing content",
        "Competitor benchmarking",
        "Monthly strategy recommendations",
      ],
      color: "#00FF88",
    },
  ];

  const marketingServices = [
    {
      icon: Megaphone,
      title: "Advertisement Campaigns",
      description:
        "Full-funnel ad campaigns designed to drive conversions and maximize ROI.",
      features: [
        "Campaign strategy & planning",
        "Ad creative design",
        "Audience targeting",
        "A/B testing",
        "Performance optimization",
        "Budget management",
      ],
      color: "#FF0080",
    },
    {
      icon: Target,
      title: "Paid Ads Management",
      description:
        "Expert management of paid advertising campaigns across Facebook, Instagram, Google, and more.",
      features: [
        "Meta Ads (Facebook/Instagram)",
        "Google Ads",
        "TikTok Ads",
        "YouTube Ads",
        "Retargeting campaigns",
        "Conversion tracking setup",
      ],
      color: "#FFD700",
    },
    {
      icon: Search,
      title: "Social Media SEO",
      description:
        "Optimize your social profiles and content for maximum discoverability and reach.",
      features: [
        "Profile optimization",
        "Keyword research for hashtags",
        "Content SEO strategy",
        "Pinterest SEO",
        "YouTube SEO",
        "Cross-platform visibility",
      ],
      color: "#00C2FF",
    },
  ];

  const designServices = [
    {
      icon: Palette,
      title: "Cover & Banner Design",
      description:
        "Eye-catching cover photos and banners for all your social media profiles.",
      features: [
        "Facebook cover photos",
        "Twitter/X headers",
        "LinkedIn banners",
        "YouTube channel art",
        "Brand-consistent designs",
      ],
      color: "#00FF88",
    },
    {
      icon: ImageIcon,
      title: "Profile Picture Design",
      description:
        "Professional profile pictures that make your brand instantly recognizable.",
      features: [
        "Custom avatar design",
        "Logo adaptation",
        "Multiple size variations",
        "Animated profile pictures",
        "Platform-optimized formats",
      ],
      color: "#FF0080",
    },
    {
      icon: Sparkles,
      title: "Logo Design",
      description:
        "Unique, memorable logo designs that represent your brand identity.",
      features: [
        "Multiple concept variations",
        "Unlimited revisions",
        "Vector files (scalable)",
        "Brand style guide",
        "Social media adaptations",
      ],
      color: "#FFD700",
    },
    {
      icon: Edit3,
      title: "Content Graphics",
      description:
        "Custom graphics for posts, stories, and promotional materials.",
      features: [
        "Story templates",
        "Post graphics",
        "Infographics",
        "Quote cards",
        "Promotional banners",
      ],
      color: "#00C2FF",
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
                Comprehensive social media services customized to your brand. From content creation to paid advertising - we handle it all.
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

        {/* Content Creation Services */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Content <span className="text-synapse-blue">Creation</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Engaging content tailored to your audience and optimized for each platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard
                      variant="dark"
                      className="h-full hover:border-synapse-blue/50 transition-all"
                    >
                      <div className="p-6 space-y-4">
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
                        <h3 className="text-xl font-bold text-signal-white">
                          {service.title}
                        </h3>
                        <p className="text-circuit-silver text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <div className="pt-2 border-t border-synapse-blue/20">
                          <div className="text-xs font-semibold text-synapse-blue mb-2">
                            Features:
                          </div>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
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

        {/* Analytics & Reporting */}
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
                Analytics & <span className="text-synapse-blue">Reporting</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Data-driven insights to track performance and optimize your strategy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard
                      variant="dark"
                      glowEffect={true}
                      className="h-full p-6 md:p-8 hover:border-synapse-blue transition-all"
                    >
                      <div
                        className="p-4 rounded-xl w-fit mb-4"
                        style={{
                          backgroundColor: `${service.color}20`,
                          boxShadow: `0 0 30px ${service.color}30`,
                        }}
                      >
                        <Icon
                          className="h-8 w-8"
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-signal-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-circuit-silver text-sm md:text-base mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start text-circuit-silver text-sm"
                          >
                            <CheckCircle2 className="h-5 w-5 text-synapse-blue mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advertising Services */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Advertising & <span className="text-synapse-blue">Growth</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Paid advertising campaigns that drive conversions and maximize ROI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard
                      variant="dark"
                      className="h-full p-6 hover:border-synapse-blue/50 transition-all"
                    >
                      <div
                        className="p-3 rounded-xl w-fit mb-4"
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
                      <h3 className="text-lg font-bold text-signal-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-circuit-silver text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="pt-2 border-t border-synapse-blue/20">
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
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
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Design Services */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-void-black via-synapse-blue/5 to-void-black">
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Design <span className="text-synapse-blue">Services</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Professional graphics and branding for a cohesive visual identity across all platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard
                      variant="dark"
                      className="h-full p-5 hover:border-synapse-blue/50 transition-all group"
                    >
                      <div
                        className="p-3 rounded-lg w-fit mb-3"
                        style={{
                          backgroundColor: `${service.color}20`,
                          boxShadow: `0 0 20px ${service.color}20`,
                        }}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3 className="text-base font-bold text-signal-white mb-2 group-hover:text-synapse-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-circuit-silver text-xs mb-3 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start text-circuit-silver text-xs"
                          >
                            <div
                              className="w-1 h-1 rounded-full mr-2 mt-1.5 shrink-0"
                              style={{ backgroundColor: service.color }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
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
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-void-black via-data-dark-blue/10 to-void-black">
          <div className="w-full max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="dark" className="p-10 md:p-14">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Build Your
                  <span className="text-synapse-blue"> Custom Package</span>?
                </h2>
                <p className="text-lg text-circuit-silver mb-8 max-w-2xl mx-auto">
                  Every business is unique. Tell us what you need, and we&apos;ll create a customized social media package that fits your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <Button size="lg" variant="primary" className="px-8 py-4">
                      Get Custom Quote
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
