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

export default function TermsPage() {
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
                <span className="text-signal-white">Terms of </span>
                <span className="text-synapse-blue">Service</span>
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
                  <h2 className="text-2xl font-bold text-signal-white mb-4">1. Agreement to Terms</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    By accessing or using Synapse Digital&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">2. Custom Quotes and Project Acceptance</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    <strong className="text-synapse-blue">IMPORTANT:</strong> By acknowledging and accepting a custom quote provided by Synapse Digital, you are:
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                    <li>Agreeing to all terms and conditions outlined in this Terms of Service</li>
                    <li>Accepting the pricing, scope, and timeline specified in the quote</li>
                    <li>Acknowledging our Refund Policy (see section 6)</li>
                    <li>Committing to the payment terms outlined in the quote</li>
                  </ul>
                  <p className="text-circuit-silver leading-relaxed mt-4">
                    Once a quote is acknowledged, we will allocate resources and begin work on your project.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">3. Services Provided</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    Synapse Digital provides:
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                    <li>Web development and design services</li>
                    <li>Social media management and marketing</li>
                    <li>SEO and digital marketing services</li>
                    <li>Navlens Analytics integration and reporting</li>
                    <li>Custom software development</li>
                    <li>Ongoing maintenance and support (as specified in quotes)</li>
                  </ul>
                  <p className="text-circuit-silver leading-relaxed mt-4">
                    All services are customized based on client requirements and detailed in individual project quotes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">4. Payment Terms</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    Unless otherwise specified in your custom quote:
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                    <li>A 20% deposit is required before work begins</li>
                    <li>The remaining 80% is due upon project completion</li>
                    <li>Payments must be made via methods specified in the quote</li>
                    <li>Late payments may result in project delays or suspension of services</li>
                    <li>All quotes are valid for 30 days from the date of issue</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">5. Project Scope and Revisions</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    <strong>Scope:</strong> The project scope is defined in your custom quote. Any changes to scope may result in additional charges.
                  </p>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    <strong>Revisions:</strong> The number of revision rounds will be specified in your quote. Additional revisions beyond the agreed amount will incur extra charges.
                  </p>
                  <p className="text-circuit-silver leading-relaxed">
                    <strong>Timeline:</strong> Project timelines are estimates and may be affected by client feedback delays, scope changes, or unforeseen circumstances.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-synapse-blue/10 border border-synapse-blue/30 rounded-lg p-6"
                >
                  <h2 className="text-2xl font-bold text-synapse-blue mb-4">6. Refund Policy</h2>
                  <p className="text-signal-white font-semibold mb-4">
                    ⚠️ IMPORTANT: NO REFUNDS AFTER QUOTE ACCEPTANCE
                  </p>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    Once you acknowledge and accept a custom quote from Synapse Digital, <strong className="text-signal-white">refunds are not available</strong>. This policy is in place because:
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                    <li>We immediately allocate team resources to your project</li>
                    <li>We begin research, planning, and initial development work</li>
                    <li>We reserve time in our schedule specifically for your project</li>
                    <li>Projects are customized to your specific requirements</li>
                  </ul>
                  <p className="text-circuit-silver leading-relaxed mt-4">
                    <strong className="text-signal-white">By acknowledging the quote, you confirm that you:</strong>
                  </p>
                  <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4 mt-2">
                    <li>Have reviewed all project details, pricing, and deliverables</li>
                    <li>Understand and accept this no-refund policy</li>
                    <li>Are committed to proceeding with the project</li>
                  </ul>
                  <p className="text-circuit-silver leading-relaxed mt-4">
                    We ensure complete transparency in our quotes. If you have any questions or concerns, please address them before accepting the quote.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">7. Intellectual Property</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    <strong>Client Content:</strong> You retain all rights to content you provide (text, images, etc.).
                  </p>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    <strong>Final Deliverables:</strong> Upon full payment, you own all rights to the final deliverables created specifically for your project.
                  </p>
                  <p className="text-circuit-silver leading-relaxed">
                    <strong>Source Code & Tools:</strong> Any proprietary tools, frameworks, or reusable code components remain the property of Synapse Digital.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">8. Confidentiality</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    We agree to keep all client information confidential and will not disclose any sensitive business information to third parties without your written consent, except as required by law.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">9. Limitation of Liability</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    Synapse Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific project or service.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">10. Termination</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    Either party may terminate a project with written notice. In case of termination, the client is responsible for payment of all work completed up to the termination date. No refunds will be provided for deposits or completed work.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">11. Changes to Terms</h2>
                  <p className="text-circuit-silver leading-relaxed">
                    We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a new &quot;Last Updated&quot; date. Your continued use of our services constitutes acceptance of the modified terms.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <h2 className="text-2xl font-bold text-signal-white mb-4">12. Contact Information</h2>
                  <p className="text-circuit-silver leading-relaxed mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
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
