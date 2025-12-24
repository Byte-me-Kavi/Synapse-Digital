"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code,
  Share2,
  TrendingUp,
  BarChart3,
  Palette,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  const serviceCategories = [
    {
      name: "Web Solutions",
      icon: Code,
      services: [
        "Landing Pages",
        "E-Commerce Websites",
        "Business Websites",
        "Portfolio Sites",
        "Custom Web Applications",
        "Website Redesigns",
        "Website Updates",
      ],
      color: "#00C2FF",
    },
    {
      name: "Social Media Management",
      icon: Share2,
      services: [
        "Social Media Posts",
        "Reels & Short Videos",
        "AI-Generated Videos",
        "Presentation Videos",
        "Cover & Banner Design",
        "Profile Picture Design",
        "Content Graphics",
      ],
      color: "#FF0080",
    },
    {
      name: "Marketing & SEO",
      icon: TrendingUp,
      services: [
        "SEO Optimization",
        "Advertisement Campaigns",
        "Paid Ads Management",
        "Social Media SEO",
        "Google Ads",
        "Meta Ads (Facebook/Instagram)",
        "TikTok Ads",
      ],
      color: "#00FF88",
    },
    {
      name: "Analytics & Reporting",
      icon: BarChart3,
      services: [
        "Navlens Analytics Integration",
        "Website Analytics Reports",
        "Social Media Reports",
        "Performance Monitoring",
        "Conversion Tracking",
        "User Behavior Analysis",
      ],
      color: "#FFD700",
    },
    {
      name: "Design Services",
      icon: Palette,
      services: [
        "Logo Design",
        "Brand Identity",
        "Social Media Graphics",
        "Marketing Materials",
        "Infographics",
        "UI/UX Design",
      ],
      color: "#00C2FF",
    },
  ];

  const pricingFactors = [
    {
      icon: CheckCircle2,
      title: "Project Scope",
      description: "Number of pages, features, and complexity of your requirements",
      color: "#00C2FF",
    },
    {
      icon: CheckCircle2,
      title: "Timeline",
      description: "How quickly you need the project completed",
      color: "#00FF88",
    },
    {
      icon: CheckCircle2,
      title: "Customization",
      description: "Level of custom features and integrations needed",
      color: "#FF0080",
    },
    {
      icon: CheckCircle2,
      title: "Ongoing Support",
      description: "Maintenance, updates, and support requirements",
      color: "#FFD700",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen flex flex-col items-center">
        <ParticleBackground className="fixed inset-0 -z-10" />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center w-full px-6 sm:px-8 lg:px-12 pt-32 pb-16">
          <div className="w-full max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-signal-white">Fair & Transparent </span>
                <span className="text-synapse-blue">Pricing</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto mb-10">
                Every project is unique. We provide the best and fairest price based on your specific requirements.
              </p>

              {/* Key Message Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <GlassCard 
                  variant="dark" 
                  className="p-8 md:p-12 border-synapse-blue/30"
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="p-4 rounded-2xl bg-synapse-blue/20 backdrop-blur-sm">
                      <MessageCircle className="h-12 w-12 text-synapse-blue" />
                    </div>
                    <div className="text-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-signal-white mb-4">
                        No One-Size-Fits-All Packages
                      </h2>
                      <p className="text-base md:text-lg text-circuit-silver leading-relaxed max-w-2xl mx-auto mb-6">
                        Whether it&apos;s web development, social media management, SEO, or any service we offer - we believe in understanding your unique needs first. Then, we provide a custom quote that&apos;s fair, transparent, and tailored to deliver maximum value for your investment.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact">
                          <Button size="lg" variant="primary" className="px-8 py-4">
                            Get Custom Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                        <a href="/services">
                          <Button size="lg" variant="ghost" className="px-8 py-4">
                            View All Services
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services We Offer Section */}
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
                Services <span className="text-synapse-blue">We Offer</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Comprehensive digital solutions customized to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.name}
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
                          backgroundColor: `${category.color}20`,
                          boxShadow: `0 0 30px ${category.color}30`,
                        }}
                      >
                        <Icon
                          className="h-7 w-7"
                          style={{ color: category.color }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-signal-white mb-4">
                        {category.name}
                      </h3>
                      <ul className="space-y-2">
                        {category.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2 text-circuit-silver text-sm"
                          >
                            <Check
                              className="h-4 w-4 shrink-0 mt-0.5"
                              style={{ color: category.color }}
                            />
                            <span>{service}</span>
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

        {/* Pricing Factors Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                How We <span className="text-synapse-blue">Determine Pricing</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Your quote is based on these key factors to ensure you get the best value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <motion.div
                    key={factor.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard
                      variant="dark"
                      className="p-6 hover:border-synapse-blue/50 transition-all h-full"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="p-3 rounded-lg shrink-0"
                          style={{
                            backgroundColor: `${factor.color}20`,
                          }}
                        >
                          <Icon
                            className="h-6 w-6"
                            style={{ color: factor.color }}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-signal-white mb-2">
                            {factor.title}
                          </h3>
                          <p className="text-circuit-silver text-sm">
                            {factor.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12 bg-synapse-blue/5">
          <div className="w-full max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Our <span className="text-synapse-blue">Commitment</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard variant="dark" className="p-6 text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-signal-white mb-2">
                    Fair Pricing
                  </h3>
                  <p className="text-circuit-silver text-sm">
                    Competitive rates based on market standards and the value we deliver
                  </p>
                </GlassCard>

                <GlassCard variant="dark" className="p-6 text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-signal-white mb-2">
                    Transparent Process
                  </h3>
                  <p className="text-circuit-silver text-sm">
                    Clear breakdown of costs and deliverables before you commit
                  </p>
                </GlassCard>

                <GlassCard variant="dark" className="p-6 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-signal-white mb-2">
                    Value-Focused
                  </h3>
                  <p className="text-circuit-silver text-sm">
                    Every dollar you invest is optimized for maximum ROI and results
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
                  Ready to Get Your
                  <span className="text-synapse-blue"> Custom Quote</span>?
                </h2>
                <p className="text-lg text-circuit-silver mb-8 max-w-2xl mx-auto">
                  Share your project details and requirements. We&apos;ll provide a detailed, customized quote within 24-48 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <Button size="lg" variant="primary" className="px-8 py-4">
                      Request Custom Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="/projects">
                    <Button size="lg" variant="ghost" className="px-8 py-4">
                      View Our Work
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
