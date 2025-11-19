"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code,
  Share2,
  TrendingUp,
  Zap,
  Star,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "project">(
    "project"
  );

  const webPackages = [
    {
      name: "Landing Page",
      price: "$999 - $1,999",
      description:
        "Perfect for product launches, lead generation, or ad campaigns",
      features: [
        "1 high-converting page",
        "Mobile responsive design",
        "Contact form integration",
        "Fast loading (under 1 second)",
        "Basic SEO setup",
        "1-2 week delivery",
        "1 month free support",
      ],
      icon: Zap,
      color: "#FFD700",
      popular: false,
    },
    {
      name: "Business Website",
      price: "$2,999 - $4,999",
      description: "Complete website for small to medium businesses",
      features: [
        "5-10 custom pages",
        "Professional design",
        "Contact forms & integrations",
        "Google Maps integration",
        "SEO optimized for Google",
        "Mobile responsive",
        "4-6 week delivery",
        "3 months free support",
        "Free SSL certificate",
      ],
      icon: Code,
      color: "#00C2FF",
      popular: true,
    },
    {
      name: "E-Commerce Store",
      price: "$5,999 - $9,999",
      description: "Full online store with payment processing",
      features: [
        "Up to 100 products",
        "Stripe/PayPal integration",
        "Shopping cart & checkout",
        "Inventory management",
        "Customer accounts",
        "Order tracking system",
        "6-8 week delivery",
        "6 months free support",
        "Email marketing setup",
      ],
      icon: Zap,
      color: "#00FF88",
      popular: false,
    },
    {
      name: "Custom Application",
      price: "$10,000+",
      description: "Complex web apps, portals, booking systems, dashboards",
      features: [
        "100% custom features",
        "User authentication & roles",
        "Admin dashboard",
        "API integrations",
        "Database design",
        "Cloud hosting setup",
        "8-12 week delivery",
        "12 months support included",
        "Unlimited revisions",
        "Dedicated project manager",
      ],
      icon: Code,
      color: "#FF0080",
      popular: false,
    },
  ];

  const monthlyPackages = [
    {
      name: "Social Media - Starter",
      price: "$999/month",
      description: "For businesses just starting with social media",
      features: [
        "12 posts per month (3/week)",
        "2 platforms (Instagram + Facebook)",
        "Content creation & graphics",
        "Hashtag research",
        "Monthly performance report",
        "3-month minimum commitment",
      ],
      icon: Share2,
      color: "#FF0080",
    },
    {
      name: "Social Media - Growth",
      price: "$1,999/month",
      description: "Serious about growing your social presence",
      features: [
        "20 posts per month (5/week)",
        "3 platforms (+ TikTok or YouTube)",
        "Stories & Reels content",
        "Community management",
        "Bi-weekly strategy calls",
        "Competitor analysis",
        "3-month minimum commitment",
      ],
      icon: Share2,
      color: "#00FF88",
    },
    {
      name: "SEO - Local",
      price: "$799/month",
      description: "Rank in your city for local services",
      features: [
        "Google Business optimization",
        "Local keyword targeting",
        "2 SEO blog posts/month",
        "Citation building",
        "Monthly ranking reports",
        "6-month minimum commitment",
      ],
      icon: TrendingUp,
      color: "#00C2FF",
    },
    {
      name: "SEO - National",
      price: "$1,999/month",
      description: "Rank nationally for competitive keywords",
      features: [
        "30+ keyword targets",
        "Technical optimization",
        "4 SEO blog posts/month",
        "Link building campaign",
        "Competitor analysis",
        "Weekly progress reports",
        "6-month minimum commitment",
      ],
      icon: TrendingUp,
      color: "#00FF88",
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
                <span className="text-signal-white">Simple, Honest </span>
                <span className="text-synapse-blue">Pricing</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto mb-10">
                No hidden fees. No surprises. Just clear pricing for quality
                work.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => setBillingPeriod("project")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    billingPeriod === "project"
                      ? "bg-synapse-blue text-void-black"
                      : "glass-dark text-circuit-silver hover:text-synapse-blue"
                  }`}
                >
                  Website Projects
                </button>
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    billingPeriod === "monthly"
                      ? "bg-synapse-blue text-void-black"
                      : "glass-dark text-circuit-silver hover:text-synapse-blue"
                  }`}
                >
                  Monthly Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Website Projects */}
        {billingPeriod === "project" && (
          <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
            <div className="w-full max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {webPackages.map((pkg, index) => {
                  const Icon = pkg.icon;
                  return (
                    <motion.div
                      key={pkg.name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard
                        variant="dark"
                        className={`h-full relative ${
                          pkg.popular ? "border-synapse-blue border-2" : ""
                        }`}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-synapse-blue text-void-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                              <Star className="h-3 w-3" /> MOST POPULAR
                            </div>
                          </div>
                        )}
                        <div className="p-8 space-y-6">
                          <div className="flex items-start justify-between">
                            <div
                              className="p-3 rounded-xl"
                              style={{
                                backgroundColor: `${pkg.color}20`,
                                boxShadow: `0 0 30px ${pkg.color}30`,
                              }}
                            >
                              <Icon
                                className="h-7 w-7"
                                style={{ color: pkg.color }}
                              />
                            </div>
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-signal-white mb-2">
                              {pkg.name}
                            </h3>
                            <div
                              className="text-3xl font-black mb-3"
                              style={{ color: pkg.color }}
                            >
                              {pkg.price}
                            </div>
                            <p className="text-circuit-silver text-sm leading-relaxed">
                              {pkg.description}
                            </p>
                          </div>

                          <div className="space-y-3 pt-4 border-t border-synapse-blue/20">
                            {pkg.features.map((feature, i) => (
                              <div
                                key={feature}
                                className="flex items-start gap-3 text-circuit-silver text-sm"
                              >
                                <Check
                                  className="h-5 w-5 shrink-0 mt-0.5"
                                  style={{ color: pkg.color }}
                                />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          <a href="/contact" className="block">
                            <Button
                              size="lg"
                              variant={pkg.popular ? "primary" : "ghost"}
                              className="w-full"
                            >
                              Get Started
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </a>
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Monthly Services */}
        {billingPeriod === "monthly" && (
          <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
            <div className="w-full max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {monthlyPackages.map((pkg, index) => {
                  const Icon = pkg.icon;
                  return (
                    <motion.div
                      key={pkg.name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard variant="dark" className="h-full">
                        <div className="p-8 space-y-6">
                          <div className="flex items-start justify-between">
                            <div
                              className="p-3 rounded-xl"
                              style={{
                                backgroundColor: `${pkg.color}20`,
                                boxShadow: `0 0 30px ${pkg.color}30`,
                              }}
                            >
                              <Icon
                                className="h-7 w-7"
                                style={{ color: pkg.color }}
                              />
                            </div>
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-signal-white mb-2">
                              {pkg.name}
                            </h3>
                            <div
                              className="text-3xl font-black mb-3"
                              style={{ color: pkg.color }}
                            >
                              {pkg.price}
                            </div>
                            <p className="text-circuit-silver text-sm leading-relaxed">
                              {pkg.description}
                            </p>
                          </div>

                          <div className="space-y-3 pt-4 border-t border-synapse-blue/20">
                            {pkg.features.map((feature, i) => (
                              <div
                                key={feature}
                                className="flex items-start gap-3 text-circuit-silver text-sm"
                              >
                                <Check
                                  className="h-5 w-5 shrink-0 mt-0.5"
                                  style={{ color: pkg.color }}
                                />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          <a href="/contact" className="block">
                            <Button
                              size="lg"
                              variant="ghost"
                              className="w-full"
                            >
                              Get Started
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </a>
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Payment Info Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12 bg-synapse-blue/5">
          <div className="w-full max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Payment <span className="text-synapse-blue">Information</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard variant="dark" className="p-6 text-center">
                  <div className="text-4xl mb-4">💳</div>
                  <h3 className="text-xl font-bold text-signal-white mb-2">
                    Website Projects
                  </h3>
                  <p className="text-circuit-silver text-sm">
                    50% deposit to start, 50% when project is complete and live
                  </p>
                </GlassCard>

                <GlassCard variant="dark" className="p-6 text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-xl font-bold text-signal-white mb-2">
                    Monthly Services
                  </h3>
                  <p className="text-circuit-silver text-sm">
                    Billed monthly. Cancel anytime after minimum commitment
                    period
                  </p>
                </GlassCard>

                <GlassCard variant="dark" className="p-6 text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-signal-white mb-2">
                    Payment Plans
                  </h3>
                  <p className="text-circuit-silver text-sm">
                    For projects $5,000+, we offer 3-6 month payment plans with
                    0% interest
                  </p>
                </GlassCard>
              </div>
            </motion.div>
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
                  Not Sure Which Package?
                  <span className="text-synapse-blue"> Let&apos;s Talk</span>
                </h2>
                <p className="text-lg text-circuit-silver mb-8 max-w-2xl mx-auto">
                  Free 30-minute consultation. We&apos;ll understand your
                  business and recommend the best package for your goals and
                  budget.
                </p>
                <a href="/contact">
                  <Button size="lg" variant="primary" className="px-8 py-4">
                    Schedule Free Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
