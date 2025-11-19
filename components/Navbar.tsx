"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Web Solutions", href: "/services" },
    { name: "Social Media Management", href: "/social-media-management" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-3 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-void-black/30"
            : "backdrop-blur-md bg-void-black/20"
        }`}
        style={{ padding: isScrolled ? "1rem 0" : "1.5rem 0" }}
      >
        <div className="container-centered">
          <div className="flex justify-between items-center gap-8">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center shrink-0"
            >
              <Image
                src="/logo/logo.png"
                alt="Synapse Digital Logo"
                width={140}
                height={140}
                className="w-20 h-28 md:w-32 md:h-20 object-contain"
              />
            </motion.div>{" "}
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 lg:gap-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`transition-colors duration-300 font-medium text-base whitespace-nowrap relative ${
                      isActive
                        ? "text-synapse-blue"
                        : "text-circuit-silver hover:text-synapse-blue"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-synapse-blue"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
            {/* CTA Button */}
            <div className="hidden md:block shrink-0">
              <a href="/contact">
                <Button variant="primary" size="md">
                  Start Project
                </Button>
              </a>
            </div>
            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#ffffff] p-2 hover:text-synapse-blue transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Rendered outside navbar for proper z-index */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
