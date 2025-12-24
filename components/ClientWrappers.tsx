"use client";

import dynamic from "next/dynamic";

// Import client-side only components with ssr: false to prevent hydration errors
const LiquidCursor = dynamic(() => import("@/components/LiquidCursor"), {
  ssr: false,
});

const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), {
  ssr: false,
});

const FloatingActionButton = dynamic(() => import("@/components/FloatingActionButton"), {
  ssr: false,
});

export default function ClientWrappers() {
  return (
    <>
      <LiquidCursor />
      <ScrollProgress />
      <FloatingActionButton />
    </>
  );
}
