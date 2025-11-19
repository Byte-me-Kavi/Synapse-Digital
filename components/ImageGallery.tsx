"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: number;
  className?: string;
}

export default function ImageGallery({
  images,
  columns = 3,
  className = "",
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedIndex(null);
  };

  return (
    <>
      <div
        className={`grid gap-4 ${className}`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setSelectedIndex(null)}
            onKeyDown={handleKeyDown}
          >
            {/* Close button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-void-black/50 hover:bg-void-black/70 text-signal-white flex items-center justify-center z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous button */}
            {images.length > 1 && (
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ delay: 0.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-6 w-12 h-12 rounded-full bg-void-black/50 hover:bg-void-black/70 text-signal-white flex items-center justify-center z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}

            {/* Next button */}
            {images.length > 1 && (
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-6 w-12 h-12 rounded-full bg-void-black/50 hover:bg-void-black/70 text-signal-white flex items-center justify-center z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[80vh] aspect-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto h-auto rounded-xl"
              />
              {images[selectedIndex].caption && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-circuit-silver mt-4"
                >
                  {images[selectedIndex].caption}
                </motion.p>
              )}
            </motion.div>

            {/* Image counter */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-void-black/50 backdrop-blur-sm text-signal-white text-sm"
            >
              {selectedIndex + 1} / {images.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
