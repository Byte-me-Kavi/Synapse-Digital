"use client";

import { motion } from "framer-motion";
import { ExternalLink} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {MobileStickyCTA} from "@/components/MobileOptimized";
import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Local Plumbing Company",
      category: "web",
      description:
        "Website + Local SEO - Now ranks #1 for 'plumber [city]' and gets 120+ calls per month",
      results: "450+ calls in 3 months | $78K in new revenue",
      tech: ["Next.js", "Google Maps API", "Contact Forms", "Local SEO"],
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
      color: "#00C2FF",
    },
    {
      title: "Fashion E-Commerce Store",
      category: "web",
      description:
        "Shopify store with custom design - Fast loading, mobile-optimized, 3.2% conversion rate",
      results: "$45K in first month | 280% traffic increase",
      tech: ["Shopify", "Custom Theme", "Stripe", "Email Marketing"],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      color: "#00FF88",
    },
    {
      title: "Dental Practice",
      category: "web",
      description:
        "Website + Social Media Management - 35 new patient bookings per month from social",
      results: "1,200+ Instagram followers | 35 bookings/month",
      tech: [
        "WordPress",
        "Booking System",
        "Instagram Content",
        "Facebook Ads",
      ],
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      color: "#FF0080",
    },
    {
      title: "SaaS Startup Dashboard",
      category: "saas",
      description:
        "Custom analytics platform for inventory management - 500+ active users",
      results: "500 paid users | $25K MRR",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe Subscriptions"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "#FFD700",
    },
    {
      title: "Restaurant Chain",
      category: "web",
      description:
        "Website with online ordering - Processing 200+ orders per week, integrated with POS",
      results: "$12K weekly online orders | 40% increase",
      tech: [
        "Next.js",
        "Online Ordering",
        "Payment Gateway",
        "SMS Notifications",
      ],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      color: "#00C2FF",
    },
    {
      title: "Real Estate Agency",
      category: "web",
      description:
        "Property listing website with search + SEO - 50+ qualified leads per month",
      results: "50+ leads monthly | 12 properties sold",
      tech: ["Next.js", "Property Search", "CRM Integration", "SEO"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      color: "#00FF88",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

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
                <span className="text-signal-white">Real </span>
                <span className="text-synapse-blue">Results</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto mb-10">
                See what we&apos;ve built for businesses like yours - with real
                results and metrics
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                {["all", "web", "saas"].map((cat) => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      filter === cat
                        ? "bg-synapse-blue text-void-black"
                        : "glass-dark text-circuit-silver hover:text-synapse-blue"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <GlassCard
                    variant="dark"
                    className="h-full group cursor-pointer overflow-hidden"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-void-black via-void-black/50 to-transparent opacity-60" />
                    </div>

                    <div className="p-8 space-y-4">
                      <div className="mb-2">
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${project.color}20`,
                            color: project.color,
                          }}
                        >
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-signal-white group-hover:text-synapse-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-circuit-silver text-base leading-relaxed">
                        {project.description}
                      </p>

                      <div
                        className="p-4 rounded-lg mt-4"
                        style={{
                          backgroundColor: `${project.color}10`,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        <div className="text-xs font-semibold text-synapse-blue mb-1">
                          RESULTS:
                        </div>
                        <div
                          className="text-lg font-bold"
                          style={{ color: project.color }}
                        >
                          {project.results}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium glass-dark text-circuit-silver"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button variant="ghost" size="sm" className="flex-1">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Site
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex-1"
                          style={{ color: project.color }}
                        >
                          Case Study
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA
        primaryText="Start Project"
        secondaryText="View All"
        onPrimaryClick={() => console.log("Start Project")}
        onSecondaryClick={() => console.log("View All")}
        showOnScroll={true}
      />

      <Footer />
    </>
  );
}
