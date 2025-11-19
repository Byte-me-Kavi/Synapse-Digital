"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MobileStickyCTA,
} from "@/components/MobileOptimized";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("websites");

  const services = [
    {
      icon: Code,
      title: "Business Website",
      description:
        "Perfect for small to medium businesses. Fast, mobile-friendly, optimized for Google.",
      features: [
        "5-10 pages (Home, About, Services, Contact, etc.)",
        "Mobile responsive design",
        "Contact forms & Google Maps",
        "SEO optimized - rank on Google",
        "4-6 week delivery",
        "3 months free support",
      ],
      price: "$2,999 - $4,999",
      color: "#00C2FF",
    },
    {
      icon: Zap,
      title: "E-Commerce Store",
      description:
        "Sell products online with a professional online store. Accept payments instantly.",
      features: [
        "Up to 100 products",
        "Stripe/PayPal payment integration",
        "Inventory management system",
        "Customer accounts & wishlists",
        "6-8 week delivery",
        "6 months free support",
      ],
      price: "$5,999 - $9,999",
      color: "#00FF88",
    },
    {
      icon: Shield,
      title: "Custom Web Application",
      description:
        "Need something unique? We build custom dashboards, booking systems, and portals.",
      features: [
        "Custom features built for you",
        "User login & authentication",
        "Admin dashboard",
        "API integrations (CRM, payment, etc.)",
        "8-12 week delivery",
        "12 months support included",
      ],
      price: "$10,000+",
      color: "#FF0080",
    },
    {
      icon: Rocket,
      title: "Landing Page",
      description:
        "Single high-converting page for ads, products, or lead generation.",
      features: [
        "1 optimized page",
        "Lead capture form",
        "Fast loading (under 1 second)",
        "A/B testing ready",
        "1-2 week delivery",
        "1 month free support",
      ],
      price: "$999 - $1,999",
      color: "#FFD700",
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
                <span className="text-signal-white">Website </span>
                <span className="text-synapse-blue">Development</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto">
                Professional websites that load fast, look great, and turn
                visitors into customers. Ready in 4-6 weeks. Starting at $2,999.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
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
                      className="h-full group cursor-pointer hover:border-synapse-blue/50"
                    >
                      <div className="p-8 space-y-6">
                        <div className="flex items-start justify-between">
                          <div
                            className="p-4 rounded-xl"
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
                          <div className="text-right">
                            <div className="text-2xl font-bold text-synapse-blue">
                              {service.price}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-signal-white mb-3">
                            {service.title}
                          </h3>
                          <p className="text-circuit-silver text-base leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-synapse-blue mb-3">
                            What&apos;s Included:
                          </div>
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.1 + i * 0.05,
                              }}
                              viewport={{ once: true }}
                              className="flex items-center text-circuit-silver"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mr-3"
                                style={{ backgroundColor: service.color }}
                              />
                              <span className="text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Services Section */}
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
                SEO <span className="text-synapse-blue">Services</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-circuit-silver max-w-3xl mx-auto">
                Rank on page 1 of Google. More traffic = more customers. From
                $799/month.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Local SEO",
                  description:
                    "Perfect for local businesses - rank in your city",
                  features: [
                    "Google Business Profile optimization",
                    "Local keyword targeting",
                    "Get reviews from customers",
                    "Show up on Google Maps",
                    "2 SEO blog posts per month",
                    "Results in 2-4 months",
                  ],
                  price: "$799/month",
                  color: "#00C2FF",
                },
                {
                  title: "National SEO",
                  description:
                    "Rank across the country for competitive keywords",
                  features: [
                    "30+ keyword targets",
                    "Technical website optimization",
                    "4 SEO blog posts per month",
                    "Link building (backlinks)",
                    "Competitor keyword analysis",
                    "Results in 4-6 months",
                  ],
                  price: "$1,999/month",
                  color: "#00FF88",
                },
                {
                  title: "E-Commerce SEO",
                  description: "Get your products ranking on Google",
                  features: [
                    "Product page optimization",
                    "Category page SEO",
                    "Google Shopping feed setup",
                    "Product schema markup",
                    "Content marketing",
                    "Results in 3-5 months",
                  ],
                  price: "$2,499/month",
                  color: "#FF0080",
                },
                {
                  title: "Enterprise SEO",
                  description: "Complete SEO for large websites",
                  features: [
                    "100+ keyword targets",
                    "Custom SEO strategy",
                    "Weekly content publishing",
                    "Advanced link building",
                    "Dedicated SEO manager",
                    "Guaranteed page 1 rankings",
                  ],
                  price: "$4,999/month",
                  color: "#FFD700",
                },
              ].map((service, index) => (
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
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-signal-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-circuit-silver text-sm md:text-base mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-3xl font-black text-synapse-blue">
                        {service.price}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-6">
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

                    <a href="/contact">
                      <Button variant="primary" className="w-full">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </GlassCard>
                </motion.div>
              ))}
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
                  Ready to Get Your
                  <span className="text-synapse-blue"> Website</span>?
                </h2>
                <p className="text-lg text-circuit-silver mb-8 max-w-2xl mx-auto">
                  Free consultation + project quote. 50% deposit to start, 50%
                  on completion. Payment plans available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <Button size="lg" variant="primary" className="px-8 py-4">
                      Get Free Quote
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

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA
        primaryText="Get Started"
        secondaryText="Learn More"
        onPrimaryClick={() => (window.location.href = "/contact")}
        onSecondaryClick={() => (window.location.href = "/projects")}
        showOnScroll={true}
      />

      <Footer />
    </>
  );
}
