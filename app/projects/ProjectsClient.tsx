"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileOptimized";
import { useState } from "react";

export default function ProjectsClient() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Ceylon Air Duct",
      category: "landing",
      description:
        "Professional landing page for air duct cleaning services in Sri Lanka. Clean design with service showcase and contact integration.",
      status: "Delivered",
      tech: ["Next.js", "Responsive Design", "Contact Forms", "SEO"],
      link: "https://ceylonairduct.com",
      color: "#00C2FF",
    },
    {
      title: "Mindspex Academic",
      category: "web",
      description:
        "Complete academic platform for educational services. Modern interface with course listings, student portal, and administrative features.",
      status: "Completed",
      tech: ["Next.js", "Dashboard", "Authentication", "Database"],
      link: "https://mindspex-academic.vercel.app",
      color: "#00FF88",
    },
    {
      title: "Kandy Fire Safety",
      category: "web",
      description:
        "Professional website for fire safety equipment and services. Comprehensive product catalog with inquiry system.",
      status: "Completed",
      tech: ["Next.js", "Product Catalog", "Contact System", "Responsive"],
      link: "https://new-kandy-fire.vercel.app",
      color: "#FF0080",
    },
    {
      title: "Navlens Analytics",
      category: "saas",
      description:
        "Our proprietary user behavior analytics platform. Session recording, heatmaps, user tracking, and comprehensive analytics dashboard.",
      status: "Live Platform",
      tech: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Real-time Analytics",
        "Session Recording",
      ],
      link: "https://navlens-rho.vercel.app",
      color: "#FFD700",
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
                <span className="text-signal-white">Our </span>
                <span className="text-synapse-blue">Projects</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto mb-10">
                Explore our completed projects and live platforms
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { value: "all", label: "All Projects" },
                  { value: "web", label: "Websites" },
                  { value: "landing", label: "Landing Pages" },
                  { value: "saas", label: "SaaS Platforms" },
                ].map((cat) => (
                  <motion.button
                    key={cat.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(cat.value)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      filter === cat.value
                        ? "bg-synapse-blue text-void-black"
                        : "glass-dark text-circuit-silver hover:text-synapse-blue"
                    }`}
                  >
                    {cat.label}
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
                    className="h-full group hover:border-synapse-blue/50 transition-all"
                  >
                    <div className="p-8 space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${project.color}20`,
                            color: project.color,
                          }}
                        >
                          {project.category.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold bg-synapse-blue/20 text-synapse-blue rounded-full border border-synapse-blue/40">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-signal-white group-hover:text-synapse-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-circuit-silver text-base leading-relaxed">
                        {project.description}
                      </p>

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

                      <div className="pt-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button
                            variant="primary"
                            size="lg"
                            className="w-full group/btn"
                            style={{ backgroundColor: project.color }}
                          >
                            <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            Visit Website
                          </Button>
                        </a>
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
