"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

// Swipeable Card Component
interface SwipeableCardProps {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
}

export function SwipeableCard({
  children,
  onSwipeLeft,
  onSwipeRight,
  className = "",
}: SwipeableCardProps) {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      onSwipeRight?.();
    } else if (info.offset.x < -100) {
      onSwipeLeft?.();
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      style={{ x, opacity, rotate }}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Bottom Sheet Component
interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  snapPoints?: number[];
}

export function BottomSheet({
  isOpen,
  onClose,
  children,
  snapPoints = [0.5, 0.9],
}: BottomSheetProps) {
  const [snapIndex, setSnapIndex] = useState(0);
  const y = useMotionValue(0);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 200) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-void-black/80 backdrop-blur-sm z-9998"
          />

          {/* Sheet */}
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ y }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-9999 bg-void-black/95 backdrop-blur-xl border-t border-synapse-blue/30 rounded-t-3xl shadow-2xl"
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-circuit-silver/30 rounded-full" />
            </div>

            {/* Content */}
            <div className="max-h-[85vh] overflow-y-auto pb-8 px-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}

// Pull to Refresh Component
interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: ReactNode;
}

export function PullToRefresh({ onRefresh, children }: PullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 80], [0, 1]);

  const handleDragEnd = async (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 80) {
      setIsRefreshing(true);
      await onRefresh();
      setIsRefreshing(false);
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
      style={{ y }}
      className="relative"
    >
      {/* Pull Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute -top-16 left-0 right-0 flex justify-center items-center h-16"
      >
        <motion.div
          animate={{ rotate: isRefreshing ? 360 : 0 }}
          transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0 }}
          className="w-8 h-8 border-2 border-synapse-blue border-t-transparent rounded-full"
        />
      </motion.div>

      {children}
    </motion.div>
  );
}

// Touch Ripple Effect
export function TouchRipple({ className = "" }: { className?: string }) {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const addRipple = (event: React.TouchEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.touches[0].clientX - rect.left;
    const y = event.touches[0].clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      onTouchStart={addRipple}
      className={`relative overflow-hidden ${className}`}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "rgba(0, 194, 255, 0.5)",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}

// Collapsible Section
interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  icon?: ReactNode;
}

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
  icon,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-synapse-blue/10">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-4 text-left"
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-synapse-blue">{icon}</span>}
          <span className="font-semibold text-signal-white">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-synapse-blue" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4">{children}</div>
      </motion.div>
    </div>
  );
}

// Mobile Sticky CTA
interface MobileStickyCTAProps {
  primaryText: string;
  secondaryText?: string;
  onPrimaryClick: () => void;
  onSecondaryClick?: () => void;
  showOnScroll?: boolean;
}

export function MobileStickyCTA({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  showOnScroll = true,
}: MobileStickyCTAProps) {
  const [isVisible, setIsVisible] = useState(!showOnScroll);

  useEffect(() => {
    if (!showOnScroll) return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOnScroll]);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-9997 bg-void-black/95 backdrop-blur-xl border-t border-synapse-blue/30 p-4 safe-area-bottom"
    >
      <div className="flex gap-3">
        {secondaryText && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onSecondaryClick}
            className="flex-1 py-3 px-4 rounded-xl border border-synapse-blue/30 text-synapse-blue font-semibold"
          >
            {secondaryText}
          </motion.button>
        )}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onPrimaryClick}
          className="flex-1 py-3 px-4 rounded-xl bg-synapse-blue text-void-black font-semibold"
        >
          {primaryText}
        </motion.button>
      </div>
    </motion.div>
  );
}

// Horizontal Scroll Snap
interface HorizontalScrollProps {
  children: ReactNode[];
  className?: string;
}

export function HorizontalScroll({
  children,
  className = "",
}: HorizontalScrollProps) {
  return (
    <div className={`overflow-x-auto snap-x snap-mandatory ${className}`}>
      <div className="flex gap-4 px-6">
        {children.map((child, index) => (
          <div
            key={index}
            className="snap-center shrink-0 first:pl-0 last:pr-0"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

// Mobile Navigation Dots
interface NavigationDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export function NavigationDots({
  total,
  current,
  onChange,
}: NavigationDotsProps) {
  return (
    <div className="flex gap-2 justify-center py-4">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onChange(index)}
          whileTap={{ scale: 0.8 }}
          className={`h-2 rounded-full transition-all ${
            index === current
              ? "w-8 bg-synapse-blue"
              : "w-2 bg-circuit-silver/30"
          }`}
        />
      ))}
    </div>
  );
}
