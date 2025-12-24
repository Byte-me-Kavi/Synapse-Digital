"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  User,
  Building,
} from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSchema from "@/components/FAQSchema";
import MagneticButton from "@/components/MagneticButton";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@synapsedigital.dev",
      link: "mailto:info@synapsedigital.dev",
      color: "#00C2FF",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+94 77 467 1009",
      link: "tel:+94774671009",
      color: "#00FF88",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Kirulapone, Colombo 5, Sri Lanka",
      link: "https://maps.google.com/?q=Kirulapone+Colombo+5+Sri+Lanka",
      color: "#FF0080",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 - All Days",
      color: "#FFB224",
    },
  ];

  const services = [
    "Web Development",
    "Social Media Marketing",
    "SEO & Growth",
    "NavLens Analytics",
    "E-commerce Solutions",
    "Custom Software",
    "Other",
  ];

  return (
    <>
      <Navbar />
      <FAQSchema />
      <main className="relative w-full min-h-screen flex flex-col items-center">
        <ParticleBackground className="fixed inset-0 -z-10" />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center w-full px-6 sm:px-8 lg:px-12 pt-32 pb-16">
          <div className="w-full max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-signal-white">Let&apos;s Talk </span>
                <span className="text-synapse-blue">Business</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto mb-6">
                Free consultation - we&apos;ll show you exactly how we can help
                grow your business.
              </p>
              <div className="text-base text-synapse-blue font-semibold">
                We reply within 2 business hours | Best fair custom pricing based on your needs
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="relative w-full py-12 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1400px] mx-auto">
            <h2 className="sr-only">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard
                      variant="dark"
                      className="p-6 text-center hover:border-synapse-blue/50 transition-all h-full"
                    >
                      <div
                        className="p-3 rounded-xl w-fit mx-auto mb-4"
                        style={{
                          backgroundColor: `${info.color}20`,
                          boxShadow: `0 0 20px ${info.color}30`,
                        }}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: info.color }}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-signal-white mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-circuit-silver hover:text-synapse-blue transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-circuit-silver text-sm">
                          {info.content}
                        </p>
                      )}
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  What You Get:
                  <span className="text-synapse-blue">
                    {" "}
                    Free Strategy Call ($500 Value)
                  </span>
                </h2>
                <p className="text-lg text-circuit-silver leading-relaxed">
                  Fill out the form and we&apos;ll show you exactly what we can
                  do for your business. Get a custom plan + pricing quote in 24
                  hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-synapse-blue/10">
                      <MessageSquare className="h-5 w-5 text-synapse-blue" />
                    </div>
                    <div>
                      <h3 className="text-signal-white font-semibold mb-1">
                        2 Hour Response Time
                      </h3>
                      <p className="text-circuit-silver text-sm">
                        We reply to every inquiry within 2 business hours,
                        guaranteed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-synapse-blue/10">
                      <User className="h-5 w-5 text-synapse-blue" />
                    </div>
                    <div>
                      <h3 className="text-signal-white font-semibold mb-1">
                        Free 30-Minute Strategy Call
                      </h3>
                      <p className="text-circuit-silver text-sm">
                        We&apos;ll analyze your business and show you how to get
                        more customers online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-synapse-blue/10">
                      <Building className="h-5 w-5 text-synapse-blue" />
                    </div>
                    <div>
                      <h3 className="text-signal-white font-semibold mb-1">
                        Payment Plans Available
                      </h3>
                      <p className="text-circuit-silver text-sm">
                        20% deposit to start, 80% on completion. Monthly payment
                        plans for larger projects
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard variant="dark" className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-signal-white mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-void-black/50 border border-synapse-blue/30 text-signal-white placeholder-circuit-silver focus:border-synapse-blue focus:outline-none focus:ring-2 focus:ring-synapse-blue/20 transition-all"
                          placeholder="Sarah Johnson"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-signal-white mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-void-black/50 border border-synapse-blue/30 text-signal-white placeholder-circuit-silver focus:border-synapse-blue focus:outline-none focus:ring-2 focus:ring-synapse-blue/20 transition-all"
                          placeholder="sarah@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-signal-white mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-void-black/50 border border-synapse-blue/30 text-signal-white placeholder-circuit-silver focus:border-synapse-blue focus:outline-none focus:ring-2 focus:ring-synapse-blue/20 transition-all"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-signal-white mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-void-black/50 border border-synapse-blue/30 text-signal-white placeholder-circuit-silver focus:border-synapse-blue focus:outline-none focus:ring-2 focus:ring-synapse-blue/20 transition-all"
                          placeholder="+94 77 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-signal-white mb-2"
                      >
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-void-black/50 border border-synapse-blue/30 text-signal-white focus:border-synapse-blue focus:outline-none focus:ring-2 focus:ring-synapse-blue/20 transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-signal-white mb-2"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-void-black/50 border border-synapse-blue/30 text-signal-white placeholder-circuit-silver focus:border-synapse-blue focus:outline-none focus:ring-2 focus:ring-synapse-blue/20 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                      >
                        ✓ Message sent successfully! We&apos;ll get back to you
                        soon.
                      </motion.div>
                    )}

                    <MagneticButton strength={0.3}>
                      <Button
                        type="submit"
                        size="lg"
                        variant="primary"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </MagneticButton>
                  </form>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative w-full py-20 px-6 sm:px-8 lg:px-12 bg-synapse-blue/5">
          <div className="w-full max-w-[1000px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                Common <span className="text-synapse-blue">Questions</span>
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "How much do your services cost?",
                    a: "Every project is unique, so we provide custom quotes based on your specific requirements. Share your project details with us, and we'll provide a detailed, transparent quote within 24-48 hours. This ensures you pay a fair price for exactly what you need.",
                  },
                  {
                    q: "How long does it take to build a website?",
                    a: "Timeline depends on your project scope and complexity. Simple business websites: 2-4 weeks. E-commerce stores: 4-6 weeks. Custom applications: 6-12 weeks. We'll provide an exact timeline in your custom quote.",
                  },
                  {
                    q: "Do you work with startups and small businesses?",
                    a: "Absolutely! We customize our services to fit businesses of all sizes. Whether you're a startup, small business, or enterprise, we'll create a solution and pricing structure that works for your budget and goals.",
                  },
                  {
                    q: "What if I need changes after the project is complete?",
                    a: "All projects include a support period (duration specified in your quote). After that, we offer flexible maintenance options - either monthly retainer packages or hourly rates for one-off changes. We'll discuss this in your custom quote.",
                  },
                  {
                    q: "What happens after I receive my quote?",
                    a: "Once you receive and acknowledge our quote, you're agreeing to our terms of service. We'll then proceed with a 20% deposit to begin work. The remaining 80% is due upon project completion. By acknowledging the quote, you also agree to our refund policy.",
                  },
                  {
                    q: "What is your refund policy?",
                    a: "Once you acknowledge and accept our custom quote, refunds are not available as we allocate resources and begin work on your project. All terms are clearly outlined in the quote you receive. We ensure complete transparency before you commit.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard variant="dark" className="p-6">
                      <h3 className="text-lg font-bold text-signal-white mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-circuit-silver text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
