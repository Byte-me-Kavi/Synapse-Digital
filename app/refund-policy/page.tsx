"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
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
                <span className="text-signal-white">Refund </span>
                <span className="text-synapse-blue">Policy</span>
              </h1>
              <p className="text-lg sm:text-xl text-circuit-silver max-w-3xl mx-auto">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Alert Section */}
        <section className="relative w-full py-8 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard 
                variant="dark" 
                className="p-8 border-2 border-synapse-blue/50 bg-synapse-blue/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-synapse-blue/20 shrink-0">
                    <AlertTriangle className="h-8 w-8 text-synapse-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-synapse-blue mb-3">
                      Important: No Refunds After Quote Acceptance
                    </h2>
                    <p className="text-signal-white text-lg leading-relaxed">
                      Once you acknowledge and accept a custom quote from Synapse Digital, refunds are <strong>not available</strong>. Please read this policy carefully before accepting any quote.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative w-full py-12 px-6 sm:px-8 lg:px-12 pb-20">
          <div className="w-full max-w-[900px] mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard variant="dark" className="p-8">
                <h2 className="text-2xl font-bold text-signal-white mb-4">1. No Refund Policy</h2>
                <p className="text-circuit-silver leading-relaxed mb-4">
                  Synapse Digital operates on a <strong className="text-signal-white">strict no-refund policy</strong> for all accepted custom quotes. This policy takes effect immediately upon your acknowledgment and acceptance of a quote.
                </p>
                <p className="text-circuit-silver leading-relaxed">
                  <strong className="text-synapse-blue">By acknowledging a quote, you confirm that:</strong>
                </p>
                <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4 mt-3">
                  <li>You have reviewed all project details, deliverables, and pricing</li>
                  <li>You understand the project scope and timeline</li>
                  <li>You accept this no-refund policy</li>
                  <li>You are committed to proceeding with the project</li>
                  <li>You agree to the payment terms outlined in the quote</li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard variant="dark" className="p-8">
                <h2 className="text-2xl font-bold text-signal-white mb-4">2. Why We Have This Policy</h2>
                <p className="text-circuit-silver leading-relaxed mb-4">
                  Our no-refund policy exists for the following reasons:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-synapse-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-signal-white font-semibold mb-1">Immediate Resource Allocation</p>
                      <p className="text-circuit-silver text-sm">
                        Once you accept a quote, we immediately assign team members and allocate dedicated resources to your project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-synapse-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-signal-white font-semibold mb-1">Work Begins Immediately</p>
                      <p className="text-circuit-silver text-sm">
                        We start research, planning, and development work right away to ensure timely delivery.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-synapse-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-signal-white font-semibold mb-1">Custom Solutions</p>
                      <p className="text-circuit-silver text-sm">
                        Every project is customized to your specific requirements and cannot be reused for other clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-synapse-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-signal-white font-semibold mb-1">Schedule Commitment</p>
                      <p className="text-circuit-silver text-sm">
                        We reserve specific time slots in our schedule exclusively for your project, potentially turning down other opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GlassCard variant="dark" className="p-8">
                <h2 className="text-2xl font-bold text-signal-white mb-4">3. Payment Terms</h2>
                <p className="text-circuit-silver leading-relaxed mb-4">
                  Our standard payment structure is:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-synapse-blue font-bold">20%</span>
                    <span className="text-circuit-silver">Deposit required before work begins (non-refundable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-synapse-blue font-bold">80%</span>
                    <span className="text-circuit-silver">Due upon project completion and delivery</span>
                  </li>
                </ul>
                <p className="text-circuit-silver leading-relaxed mt-4">
                  The initial 20% deposit is <strong className="text-signal-white">non-refundable</strong> as it covers our immediate allocation of resources and commencement of work.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <GlassCard variant="dark" className="p-8">
                <h2 className="text-2xl font-bold text-signal-white mb-4">4. Project Cancellation</h2>
                <p className="text-circuit-silver leading-relaxed mb-4">
                  If you decide to cancel the project after accepting the quote:
                </p>
                <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                  <li>The 20% deposit is non-refundable</li>
                  <li>You are responsible for payment of any additional work completed beyond the deposit amount</li>
                  <li>We will provide you with all work completed up to the cancellation date</li>
                  <li>No refunds will be issued for any portion of the project</li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <GlassCard variant="dark" className="p-8">
                <h2 className="text-2xl font-bold text-signal-white mb-4">5. Our Commitment to You</h2>
                <p className="text-circuit-silver leading-relaxed mb-4">
                  While we maintain a strict no-refund policy, we are committed to:
                </p>
                <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4">
                  <li>Providing detailed, transparent quotes with clear deliverables</li>
                  <li>Maintaining open communication throughout the project</li>
                  <li>Delivering high-quality work that meets the agreed specifications</li>
                  <li>Offering revision rounds as outlined in your quote</li>
                  <li>Working with you to resolve any concerns during the project</li>
                  <li>Completing projects within the agreed timeline</li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <GlassCard variant="dark" className="p-8">
                <h2 className="text-2xl font-bold text-signal-white mb-4">6. Before Accepting a Quote</h2>
                <p className="text-circuit-silver leading-relaxed mb-4">
                  We encourage you to:
                </p>
                <ul className="list-disc list-inside text-circuit-silver space-y-2 ml-4 mb-4">
                  <li>Carefully review all aspects of the quote</li>
                  <li>Ask questions about anything that&apos;s unclear</li>
                  <li>Ensure you understand the project scope and deliverables</li>
                  <li>Verify the timeline works for your needs</li>
                  <li>Confirm the pricing fits your budget</li>
                  <li>Read and understand this refund policy</li>
                </ul>
                <p className="text-synapse-blue font-semibold">
                  Only accept the quote when you are 100% ready to proceed with the project.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <GlassCard variant="dark" className="p-8">
                <h2 className="text-2xl font-bold text-signal-white mb-4">7. Questions or Concerns</h2>
                <p className="text-circuit-silver leading-relaxed mb-4">
                  If you have any questions about this Refund Policy or need clarification on any aspect of your quote, please contact us before accepting:
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-synapse-blue">
                    <a href="mailto:synapsedigitalofficial@gmail.com" className="hover:underline">
                      synapsedigitalofficial@gmail.com
                    </a>
                  </p>
                  <p className="text-circuit-silver">
                    Phone: <a href="tel:+94774671009" className="text-synapse-blue hover:underline">+94 77 467 1009</a> | <a href="tel:+94789910287" className="text-synapse-blue hover:underline">+94 78 991 0287</a>
                  </p>
                  <p className="text-circuit-silver">Kirulapone, Colombo 5, Sri Lanka</p>
                  <p className="text-circuit-silver text-sm mt-2">Available 24/7 - All Days</p>
                </div>
                <a href="/contact">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Contact Us for Clarification
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
