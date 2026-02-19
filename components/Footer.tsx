"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "Web Solutions", href: "/services" },
      { name: "NavLens Analytics", href: "/services#navlens" },
      { name: "Social Media", href: "/social-media-management" },

    ],
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Our Work", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  };

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative bg-transparent border-t border-synapse-blue/20 backdrop-blur-sm">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl font-black text-signal-white">
                  SYNAPSE
                </span>
                <span className="text-3xl font-black text-synapse-blue">
                  DIGITAL
                </span>
              </div>
              <p className="text-circuit-silver mb-6 max-w-sm">
                Connecting Vision to Digital Reality. Bold web solutions,
                analytics, and growth strategies for the modern digital age.
              </p>
              <div className="flex space-x-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 glass rounded-lg hover:bg-synapse-blue/20 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-circuit-silver hover:text-synapse-blue transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
              

              

            </motion.div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-signal-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <a
                  href="mailto:synapsedigitalofficial@gmail.com"
                  className="text-circuit-silver hover:text-synapse-blue transition-colors duration-300 text-sm"
                >
                  synapsedigitalofficial@gmail.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                viewport={{ once: true }}
              >
                <a
                  href="tel:+94774671009"
                  className="text-circuit-silver hover:text-synapse-blue transition-colors duration-300 text-sm"
                >
                  +94 77 467 1009
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href="tel:+94789910287"
                  className="text-circuit-silver hover:text-synapse-blue transition-colors duration-300 text-sm"
                >
                  +94 78 991 0287
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
              >
                <span className="text-circuit-silver text-sm">
                  Kirulapone, Colombo 5
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-circuit-silver text-sm">
                  24/7 - All Days
                </span>
              </motion.li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-signal-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-circuit-silver hover:text-synapse-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-signal-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-circuit-silver hover:text-synapse-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-signal-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-circuit-silver hover:text-synapse-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-circuit-silver/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-circuit-silver text-sm">
            © {currentYear} Synapse Digital. All rights reserved.
          </p>
          <p className="text-circuit-silver text-sm">
            Powered by Synapse Digital
          </p>
        </motion.div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-synapse-blue to-transparent opacity-50"></div>
    </footer>
  );
}
