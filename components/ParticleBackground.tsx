"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useIsMobile } from "@/lib/useIsMobile";

export default function ParticleBackground({
  className,
}: {
  className?: string;
}) {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip loading the entire particle engine on mobile
    if (isMobile) return;
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [isMobile]);

  if (!init || isMobile) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className={className}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: isMobile ? 30 : 60,
        particles: {
          color: {
            value: "#00C2FF",
          },
          links: {
            color: "#00C2FF",
            distance: isMobile ? 100 : 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: isMobile ? 0.5 : 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: isMobile ? 12 : 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: !isMobile,
              mode: "grab",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.8,
              },
            },
          },
        },
      }}
    />
  );
}

