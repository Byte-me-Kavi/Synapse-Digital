"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
import GlassCard from "@/components/GlassCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 24, 2024";

  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen flex flex-col items-center">
        <ParticleBackground className="fixed inset-0 -z-10" />

        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center w-full px-6 sm:px-8 lg:px-12 pt-32 pb-16">
          <div className="w-full max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-signal-white">Privacy </span>
                <span className="text-synapse-blue">Policy</span>
              </h1>
              <p className="text-lg sm:text-xl text-circuit-silver max-w-3xl mx-auto">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative w-full py-12 px-6 sm:px-8 lg:px-12 pb-20">
          <div className="w-full max-w-[900px] mx-auto">
            <GlassCard variant="dark" className="p-8 md:p-12">
              <div className="prose prose-invert max-w-none space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">1. Information We Collect</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and business details</li>
                    <li>Project requirements and specifications</li>
                    <li>Payment information (processed securely by third-party providers)</li>
                    <li>Communications with our team</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your custom quote requests</li>
                    <li>Communicate with you about projects and services</li>
                    <li>Send you updates, invoices, and project-related information</li>
                    <li>Analyze and improve our website using Navlens Analytics</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">3. Navlens Analytics</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    We use Navlens, our proprietary analytics platform, to understand how visitors interact with our website. Navlens collects:
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                    <li>Session recordings and heatmaps</li>
                    <li>Page views and navigation patterns</li>
                    <li>Device and browser information</li>
                    <li>IP addresses (anonymized)</li>
                  </ul>
                  <p className="text-circuit-silver leading-relaxed mt-4">
                    All data collected is anonymized and used solely to improve user experience. We do not sell or share this data with third parties.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">4. Data Security</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">5. Third-Party Services</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    We may use third-party service providers to process payments, send emails, or provide other services. These providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">6. Your Rights</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">7. Cookies</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">8. Changes to This Policy</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">9. Contact Us</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-synapse-blue">
                      <a href="mailto:synapsedigitalofficial@gmail.com" className="hover:underline">
                        synapsedigitalofficial@gmail.com
                      </a>
                    </p>
                    <p className="text-circuit-silver">
                      Phone: <a href="tel:+94774671009" className="text-synapse-blue hover:underline">+94 77 467 1009</a>
                    </p>
                    <p className="text-circuit-silver">Kirulapone, Colombo 5, Sri Lanka</p>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
