"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: string;
  height?: string;
}

export function Skeleton({
  className = "",
  variant = "rectangular",
  width = "100%",
  height = "20px",
}: SkeletonProps) {
  const variants = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-xl",
  };

  return (
    <div
      className={`relative overflow-hidden bg-circuit-silver/10 ${variants[variant]} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-circuit-silver/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`p-6 space-y-4 ${className}`}>
      <Skeleton variant="circular" width="80px" height="80px" />
      <Skeleton variant="text" width="60%" height="24px" />
      <Skeleton variant="text" width="100%" height="16px" />
      <Skeleton variant="text" width="100%" height="16px" />
      <Skeleton variant="text" width="80%" height="16px" />
      <div className="flex gap-2 pt-4">
        <Skeleton width="100px" height="36px" className="rounded-full" />
        <Skeleton width="100px" height="36px" className="rounded-full" />
      </div>
    </div>
  );
}

export function SkeletonList({
  count = 3,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-4 items-center">
          <Skeleton variant="circular" width="48px" height="48px" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="40%" height="16px" />
            <Skeleton variant="text" width="60%" height="12px" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SkeletonTable({
  rows = 5,
  columns = 4,
  className = "",
}: {
  rows?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} height="20px" className="rounded" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} height="16px" className="rounded" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkeletonGallery({
  items = 6,
  columns = 3,
  className = "",
}: {
  items?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-4 ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {Array.from({ length: items }).map((_, i) => (
        <Skeleton key={i} variant="card" className="aspect-square" />
      ))}
    </div>
  );
}
