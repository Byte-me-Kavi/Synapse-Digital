"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  ShoppingCart,
  Briefcase,
  ImageIcon,
  Search,
  RefreshCw,
  Palette,
  BarChart3,
  Activity,
  Eye,
  MousePointer,
  Settings,
  Smartphone,
  CreditCard,
  FileText,
  Globe,
  CheckCircle2,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileOptimized";

export default function ServicesClient() {
  const webSolutions = [
    {
      icon: Code,
      title: "Landing Page",
      description:
        "Single high-converting page designed to capture leads and drive conversions for your campaigns.",
      features: [
        "Optimized single-page design",
        "Lead capture forms",
        "Fast loading speed",
        "Conversion-focused layout",
        "A/B testing ready",
        "Mobile responsive",
      ],
      color: "#00C2FF",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Website",
      description:
        "Fully functional online store to sell products with secure payment processing and inventory management.",
      features: [
        "Product catalog management",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Inventory tracking",
        "Customer accounts",
        "Order management system",
      ],
      color: "#00FF88",
    },
    {
      icon: Briefcase,
      title: "Business Website",
      description:
        "Professional corporate website to establish your online presence and showcase your services.",
      features: [
        "Multi-page website structure",
        "Company information pages",
        "Service/product showcase",
        "Contact forms",
        "Google Maps integration",
        "Professional design",
      ],
      color: "#FF0080",
    },
    {
      icon: ImageIcon,
      title: "Portfolio Website",
      description:
        "Stunning portfolio to showcase your work, projects, and creative achievements.",
      features: [
        "Project galleries",
        "Case study pages",
        "About & bio sections",
        "Image optimization",
        "Filterable portfolio grid",
        "Contact integration",
      ],
      color: "#FFD700",
    },
  ];

  const additionalServices = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website.",
      features: [
        "Keyword research & targeting",
        "On-page SEO optimization",
        "Technical SEO audit",
        "Google Analytics setup",
        "Search Console integration",
        "Performance monitoring",
      ],
      color: "#00C2FF",
    },
    {
      icon: RefreshCw,
      title: "Website Updates",
      description:
        "Keep your website fresh with content updates, feature additions, and maintenance.",
      features: [
        "Content updates & changes",
        "New page creation",
        "Feature additions",
        "Bug fixes & maintenance",
        "Security updates",
        "Performance optimization",
      ],
      color: "#00FF88",
    },
    {
      icon: Palette,
      title: "Website Redesign",
      description:
        "Transform your existing website with a modern design and improved user experience.",
      features: [
        "Complete design overhaul",
        "Modern UI/UX improvements",
        "Mobile optimization",
        "Brand alignment",
        "Content migration",
        "SEO preservation",
      ],
      color: "#FF0080",
    },
  ];

  const coreWebServices = [
    {
      icon: Settings,
      title: "Custom Web Development",
      description: "Tailored solutions built to your exact specifications",
      color: "#00C2FF",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect display across all devices and screen sizes",
      color: "#00FF88",
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with trusted providers",
      color: "#FF0080",
    },
    {
      icon: FileText,
      title: "Content Management",
      description: "Easy-to-use CMS for managing your website content",
      color: "#FFD700",
    },
    {
      icon: Globe,
      title: "Domain & Hosting",
      description: "Complete domain registration and reliable hosting services",
      color: "#00C2FF",
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
                <span className="text-signal-white">Web </span>
                <span className="text-synapse-blue">Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto">
                Professional web development services customized to your needs. From landing pages to full e-commerce solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Web Solutions Grid */}
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
                What We <span className="text-synapse-blue">Offer</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Choose from our range of web solutions, fully customizable to match your brand and business goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webSolutions.map((service, index) => {
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
                            Key Features:
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

        {/* Additional Web Services */}
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
                Additional <span className="text-synapse-blue">Services</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Keep your website optimized, updated, and performing at its best.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => {
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

        {/* Navlens Analytics Section */}
        <section
          id="navlens"
          className="relative w-full py-20 px-6 sm:px-8 lg:px-12 scroll-mt-20"
        >
          <div className="w-full max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-synapse-blue">Navlens</span> Analytics
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-circuit-silver max-w-3xl mx-auto">
                Our proprietary user behavior analytics platform - understand how
                visitors interact with your website and optimize for better
                conversions.
              </p>
            </motion.div>

            <GlassCard variant="dark" glowEffect={true} className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        backgroundColor: `#00C2FF20`,
                        boxShadow: `0 0 30px #00C2FF30`,
                      }}
                    >
                      <BarChart3 className="h-10 w-10 text-synapse-blue" />
                    </div>
                    <h3 className="text-3xl font-bold text-signal-white">
                      What is Navlens?
                    </h3>
                  </div>
                  <p className="text-circuit-silver text-lg leading-relaxed mb-6">
                    Navlens is a comprehensive web analytics platform developed
                    by Synapse Digital. It provides deep insights into user
                    behavior, helping you understand exactly how visitors
                    interact with your website.
                  </p>
                  <p className="text-circuit-silver text-lg leading-relaxed mb-8">
                    After launching your website, we provide a detailed Navlens
                    report after 1-4 weeks, giving you actionable insights to
                    improve your website&apos;s performance. Redesign services based
                    on these insights are available as a premium service.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-synapse-blue/10 rounded-lg border border-synapse-blue/30">
                      <Activity className="h-8 w-8 text-synapse-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-signal-white">
                        100%
                      </div>
                      <div className="text-sm text-circuit-silver">
                        Session Recording
                      </div>
                    </div>
                    <div className="text-center p-4 bg-synapse-blue/10 rounded-lg border border-synapse-blue/30">
                      <Eye className="h-8 w-8 text-synapse-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-signal-white">
                        Real-time
                      </div>
                      <div className="text-sm text-circuit-silver">
                        Heatmaps
                      </div>
                    </div>
                    <div className="text-center p-4 bg-synapse-blue/10 rounded-lg border border-synapse-blue/30">
                      <MousePointer className="h-8 w-8 text-synapse-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-signal-white">
                        15+
                      </div>
                      <div className="text-sm text-circuit-silver">
                        Event Types
                      </div>
                    </div>
                    <div className="text-center p-4 bg-synapse-blue/10 rounded-lg border border-synapse-blue/30">
                      <BarChart3 className="h-8 w-8 text-synapse-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-signal-white">
                        A/B
                      </div>
                      <div className="text-sm text-circuit-silver">
                        Testing Built-in
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-synapse-blue mb-6">
                    Core Features
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Activity,
                        title: "Session Recording",
                        description:
                          "Watch pixel-perfect playback of user sessions to see exactly how visitors navigate your site.",
                      },
                      {
                        icon: Eye,
                        title: "Heatmaps",
                        description:
                          "Visualize click patterns, scroll depth, and mouse movement to identify high-engagement areas.",
                      },
                      {
                        icon: BarChart3,
                        title: "Form Analytics",
                        description:
                          "Track form completion rates, drop-off points, and field-level friction to optimize conversions.",
                      },
                      {
                        icon: MousePointer,
                        title: "Frustration Detection",
                        description:
                          "Automatically detect rage clicks, dead clicks, and confusion signals to identify UX issues.",
                      },
                      {
                        icon: Settings,
                        title: "A/B Testing",
                        description:
                          "Run experiments with visual editor - test 18 different modification types without coding.",
                      },
                      {
                        icon: Search,
                        title: "Performance Monitoring",
                        description:
                          "Track Core Web Vitals, loading times, and technical performance metrics.",
                      },
                    ].map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-4 p-4 bg-void-black/50 rounded-lg border border-synapse-blue/10 hover:border-synapse-blue/30 transition-all"
                        >
                          <Icon className="h-6 w-6 text-synapse-blue shrink-0 mt-1" />
                          <div>
                            <h5 className="text-signal-white font-semibold mb-1">
                              {feature.title}
                            </h5>
                            <p className="text-circuit-silver text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Core Web Services */}
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
                Core <span className="text-synapse-blue">Capabilities</span>
              </h2>
              <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
                Every package includes these essential web services for a complete solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreWebServices.map((service, index) => {
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
                      className="p-6 h-full hover:border-synapse-blue/50 transition-all group"
                    >
                      <div
                        className="p-3 rounded-lg w-fit mb-4"
                        style={{
                          backgroundColor: `${service.color}20`,
                          boxShadow: `0 0 20px ${service.color}20`,
                        }}
                      >
                        <Icon
                          className="h-7 w-7"
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-signal-white mb-2 group-hover:text-synapse-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-circuit-silver text-sm">
                        {service.description}
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
                  Ready to Transform Your
                  <span className="text-synapse-blue"> Online Presence</span>?
                </h2>
                <p className="text-lg text-circuit-silver mb-8 max-w-2xl mx-auto">
                  Get a free consultation and custom quote. All packages are fully customizable to fit your unique requirements.
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
                      View Our Work
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
