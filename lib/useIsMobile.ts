"use client";

import { useState, useEffect } from "react";

/**
 * Detects if the current device is mobile via media query + touch detection.
 * Returns `undefined` during SSR/hydration, then resolves to boolean.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isSmallScreen = window.matchMedia(
        `(max-width: ${breakpoint}px)`
      ).matches;
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(isSmallScreen || isTouchDevice);
    };

    checkMobile();

    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    mql.addEventListener("change", checkMobile);
    return () => mql.removeEventListener("change", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
