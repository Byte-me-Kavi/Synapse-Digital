"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import useSound from "use-sound";

interface SonicContextType {
  playHover: () => void;
  playClick: () => void;
  playSuccess: () => void;
  isEnabled: boolean;
  toggleSound: () => void;
}

const SonicContext = createContext<SonicContextType | undefined>(undefined);

export function SonicProvider({ children }: { children: React.ReactNode }) {
  const [isEnabled, setIsEnabled] = useState(false); // Default to off until user interaction or preference check
  const [hasInteracted, setHasInteracted] = useState(false);

  // We'll use synthetic sounds via Web Audio API to avoid external assets for now, 
  // or simple placeholders if use-sound requires files. 
  // Actually, let's use a simple oscillator approach for a truly "tech" feel without assets.
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize AudioContext on first user interaction
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        setHasInteracted(true);
        setIsEnabled(true); 
      }
    };

    window.addEventListener("click", initAudio, { once: true });
    return () => window.removeEventListener("click", initAudio);
  }, []);

  const playTone = (freq: number, type: OscillatorType, duration: number, vol = 0.1) => {
    if (!isEnabled || !audioCtxRef.current) return;
    try {
        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {
        console.warn("Audio play failed", e);
    }
  };

  const playHover = () => {
    // Low frequency hum/chirp
    // playTone(200, "sine", 0.1, 0.05);
    // Actually, a very short high pitch blip is better for UI
    playTone(800, "sine", 0.05, 0.02);
  };

  const playClick = () => {
    // Sharp click
    playTone(1200, "square", 0.1, 0.05);
  };

  const playSuccess = () => {
    // Ascending arpeggio
    if (!isEnabled || !audioCtxRef.current) return;
    const now = audioCtxRef.current.currentTime;
    [440, 554, 659].forEach((freq, i) => {
        setTimeout(() => playTone(freq, "sine", 0.2, 0.05), i * 100);
    });
  };
  
  const toggleSound = () => setIsEnabled(!isEnabled);

  return (
    <SonicContext.Provider value={{ playHover, playClick, playSuccess, isEnabled, toggleSound }}>
      {children}
    </SonicContext.Provider>
  );
}

export function useSonic() {
  const context = useContext(SonicContext);
  if (context === undefined) {
    throw new Error("useSonic must be used within a SonicProvider");
  }
  return context;
}
