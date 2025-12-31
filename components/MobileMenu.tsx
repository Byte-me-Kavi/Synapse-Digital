"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Home,
  Briefcase,
  Package,
  Share2,
  Mail,
  DollarSign,
  Users,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/projects", label: "Projects", icon: Package },
    {
      href: "/social-media-management",
      label: "Social Media Management",
      icon: Share2,
    },

    { href: "/about", label: "About", icon: Users },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="md:hidden fixed inset-0 bg-void-black/90 backdrop-blur-sm z-100"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="md:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-void-black/98 backdrop-blur-xl border-l border-synapse-blue/30 z-101 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-synapse-blue/20">
              <h2 className="text-2xl font-bold">
                <span className="text-signal-white">Synapse</span>
                <span className="text-synapse-blue">Digital</span>
              </h2>
              <motion.button
                whileTap={{ scale: 0.9, rotate: 90 }}
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-synapse-blue/10"
              >
                <X className="w-6 h-6 text-synapse-blue" />
              </motion.button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-colors group ${
                        isActive
                          ? "bg-synapse-blue/20 border border-synapse-blue/50"
                          : "hover:bg-synapse-blue/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-transform ${
                          isActive
                            ? "text-synapse-blue scale-110"
                            : "text-synapse-blue group-hover:scale-110"
                        }`}
                      />
                      <span
                        className={`text-lg font-medium transition-colors ${
                          isActive
                            ? "text-synapse-blue"
                            : "text-signal-white group-hover:text-synapse-blue"
                        }`}
                      >
                        {item.label}
                      </span>
                      <motion.div
                        className={`ml-auto ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <span className="text-synapse-blue">→</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA Section */}
            <div className="p-6 mt-auto border-t border-synapse-blue/20">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 px-6 rounded-xl bg-synapse-blue text-void-black font-bold text-lg shadow-lg shadow-synapse-blue/20"
              >
                Get Started
              </motion.button>

              <p className="text-center text-circuit-silver text-sm mt-4">
                Transform your digital presence
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
