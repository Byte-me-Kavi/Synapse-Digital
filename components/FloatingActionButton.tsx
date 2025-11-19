"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface FloatingActionButtonProps {
  showAfter?: number;
  icon?: React.ReactNode;
  onClick?: () => void;
  position?: "bottom-right" | "bottom-left";
}

export default function FloatingActionButton({
  showAfter = 300,
  icon,
  onClick,
  position = "bottom-right",
}: FloatingActionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const positionClasses = {
    "bottom-right": "bottom-8 right-8",
    "bottom-left": "bottom-8 left-8",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className={`fixed ${positionClasses[position]} z-50 w-14 h-14 rounded-full bg-synapse-blue hover:bg-synapse-blue/90 text-void-black shadow-lg hover:shadow-synapse-blue/50 transition-shadow duration-300 flex items-center justify-center group`}
          aria-label="Back to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon || <ArrowUp className="w-6 h-6" />}
          </motion.div>

          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-synapse-blue"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
