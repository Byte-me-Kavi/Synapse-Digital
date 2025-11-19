"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  className = "",
  delay = 0,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  const springValue = useSpring(0, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        springValue.set(end);
      }, delay * 1000);

      const unsubscribe = springValue.on("change", (latest) => {
        setCount(Number(latest.toFixed(decimals)));
      });

      return () => {
        clearTimeout(timeout);
        unsubscribe();
      };
    }
  }, [isInView, end, springValue, delay, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
      {suffix}
    </motion.div>
  );
}

export function CounterSection({
  counters,
  className = "",
}: {
  counters: Array<{
    end: number;
    label: string;
    prefix?: string;
    suffix?: string;
  }>;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {counters.map((counter, index) => (
        <div key={index} className="text-center">
          <AnimatedCounter
            end={counter.end}
            prefix={counter.prefix}
            suffix={counter.suffix}
            delay={index * 0.1}
            className="text-4xl md:text-5xl font-bold text-synapse-blue mb-2"
          />
          <p className="text-circuit-silver text-sm md:text-base">
            {counter.label}
          </p>
        </div>
      ))}
    </div>
  );
}
