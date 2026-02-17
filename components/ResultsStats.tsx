"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

interface StatBarProps {
  icon: React.ElementType;
  label: string;
  before: string;
  after: string;
  percentage: number;
  color: string;
  delay: number;
}

function StatBar({ icon: Icon, label, before, after, percentage, color, delay }: StatBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const end = percentage;
      const duration = 1500;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = end / steps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.round(start));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, percentage, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="h-4 w-4" style={{ color }} />
          </div>
          <span className="text-signal-white font-semibold text-sm md:text-base">
            {label}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs md:text-sm">
          <span className="text-circuit-silver/50 line-through">{before}</span>
          <span className="font-bold" style={{ color }}>
            {after}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: isInView ? `0 0 15px ${color}50` : "none",
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
        {/* Shimmer effect */}
        {isInView && (
          <motion.div
            className="absolute inset-y-0 w-20 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "500%" }}
            transition={{
              duration: 1.5,
              delay: delay + 0.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        )}
      </div>

      {/* Percentage label */}
      <div className="flex justify-end mt-1">
        <motion.span
          className="text-xs font-bold"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5 }}
        >
          ↑ {count}%
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function ResultsStats() {
  return (
    <section className="relative w-full py-20 md:py-24 px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Average Client{" "}
            <span className="text-synapse-blue">Results</span>
          </h2>
          <p className="text-base md:text-lg text-circuit-silver max-w-2xl mx-auto">
            Real metrics from our client projects — what you can expect when you
            work with us
          </p>
        </motion.div>

        {/* Stats */}
        <div className="space-y-8">
          <StatBar
            icon={TrendingUp}
            label="Website Traffic"
            before="500/mo"
            after="2,200/mo"
            percentage={340}
            color="#00C2FF"
            delay={0}
          />
          <StatBar
            icon={Users}
            label="Lead Generation"
            before="5/mo"
            after="28/mo"
            percentage={460}
            color="#00FF88"
            delay={0.15}
          />
          <StatBar
            icon={Zap}
            label="Page Load Speed"
            before="6.2s"
            after="1.1s"
            percentage={82}
            color="#FFB224"
            delay={0.3}
          />
          <StatBar
            icon={Target}
            label="Conversion Rate"
            before="1.2%"
            after="4.8%"
            percentage={300}
            color="#FF0080"
            delay={0.45}
          />
        </div>
      </div>
    </section>
  );
}
