"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  FiPhone,
  FiMessageCircle,
  FiMail,
  FiFileText,
  FiX,
} from "react-icons/fi";
import {
  BsEmojiSmile,
  BsRocketTakeoff,
  BsStars,
  BsHandThumbsUp,
  BsLightning,
  BsGraphUpArrow,
  BsShieldCheck,
  BsQuestionCircle,
  BsChatDots,
  BsTools,
  BsPalette,
  BsGlobe,
  BsPeople,
  BsEnvelope,
  BsFileText,
  BsArrowDown,
  BsHandIndex,
  BsTelephoneOutbound,
} from "react-icons/bs";

// ── Types ──
type Mood = "default" | "happy" | "sleepy" | "excited" | "curious" | "petting" | "waving";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
  type: "trail" | "confetti" | "heart" | "sparkle" | "zzz";
}

// ── Per-page messages with react-icons ──
const PAGE_MESSAGES: Record<string, { threshold: number; message: string; icon: React.ReactNode }[]> = {
  "/": [
    { threshold: 0, message: "Welcome to Synapse Digital!", icon: <BsEmojiSmile className="inline text-yellow-400" /> },
    { threshold: 300, message: "See what we build", icon: <BsArrowDown className="inline text-synapse-blue" /> },
    { threshold: 800, message: "Technologies we master", icon: <BsTools className="inline text-cyan-400" /> },
    { threshold: 1500, message: "Real client results", icon: <BsGraphUpArrow className="inline text-green-400" /> },
    { threshold: 2200, message: "Drag the slider to compare!", icon: <BsHandIndex className="inline text-purple-400" /> },
    { threshold: 3000, message: "Ready to grow?", icon: <BsRocketTakeoff className="inline text-orange-400" /> },
  ],
  "/services": [
    { threshold: 0, message: "Browse our services!", icon: <BsTools className="inline text-synapse-blue" /> },
    { threshold: 300, message: "Customized to your goals", icon: <BsStars className="inline text-yellow-400" /> },
    { threshold: 700, message: "Design to launch", icon: <BsRocketTakeoff className="inline text-purple-400" /> },
    { threshold: 1200, message: "Need a custom plan?", icon: <BsTelephoneOutbound className="inline text-green-400" /> },
  ],
  "/social-media-management": [
    { threshold: 0, message: "Social media that converts!", icon: <BsGraphUpArrow className="inline text-green-400" /> },
    { threshold: 300, message: "All platforms covered", icon: <BsGlobe className="inline text-synapse-blue" /> },
    { threshold: 700, message: "Real campaign results", icon: <BsStars className="inline text-yellow-400" /> },
    { threshold: 1200, message: "Let's manage your socials", icon: <BsChatDots className="inline text-purple-400" /> },
  ],
  "/social": [
    { threshold: 0, message: "Packages for any budget", icon: <BsHandThumbsUp className="inline text-green-400" /> },
    { threshold: 300, message: "Pick what works for you", icon: <BsTools className="inline text-synapse-blue" /> },
    { threshold: 700, message: "Real engagement growth", icon: <BsGraphUpArrow className="inline text-emerald-400" /> },
    { threshold: 1200, message: "Boost your presence!", icon: <BsRocketTakeoff className="inline text-purple-400" /> },
  ],
  "/projects": [
    { threshold: 0, message: "Check out our portfolio!", icon: <BsPalette className="inline text-pink-400" /> },
    { threshold: 300, message: "Crafted with care", icon: <BsStars className="inline text-yellow-400" /> },
    { threshold: 800, message: "We can build that for you!", icon: <BsTools className="inline text-synapse-blue" /> },
    { threshold: 1200, message: "Let's create together", icon: <BsRocketTakeoff className="inline text-orange-400" /> },
  ],
  "/about": [
    { threshold: 0, message: "Meet the Synapse team!", icon: <BsPeople className="inline text-synapse-blue" /> },
    { threshold: 300, message: "Based in Colombo", icon: <BsGlobe className="inline text-green-400" /> },
    { threshold: 600, message: "Passionate about tech", icon: <BsLightning className="inline text-yellow-400" /> },
    { threshold: 1000, message: "Want to work with us?", icon: <BsTelephoneOutbound className="inline text-purple-400" /> },
  ],
  "/contact": [
    { threshold: 0, message: "Let's talk!", icon: <BsChatDots className="inline text-green-400" /> },
    { threshold: 300, message: "We reply in 2 hours", icon: <BsLightning className="inline text-yellow-400" /> },
    { threshold: 700, message: "See our process below", icon: <BsArrowDown className="inline text-synapse-blue" /> },
    { threshold: 1200, message: "Check the FAQ!", icon: <BsQuestionCircle className="inline text-purple-400" /> },
  ],
  "/privacy": [
    { threshold: 0, message: "Your privacy matters", icon: <BsShieldCheck className="inline text-green-400" /> },
    { threshold: 500, message: "Questions? Reach out!", icon: <BsEnvelope className="inline text-synapse-blue" /> },
  ],
  "/terms": [
    { threshold: 0, message: "Terms of service", icon: <BsFileText className="inline text-synapse-blue" /> },
    { threshold: 500, message: "Need clarification?", icon: <BsChatDots className="inline text-purple-400" /> },
  ],
  "/refund-policy": [
    { threshold: 0, message: "Full transparency", icon: <BsHandThumbsUp className="inline text-green-400" /> },
    { threshold: 500, message: "Have concerns? Let's discuss", icon: <BsTelephoneOutbound className="inline text-purple-400" /> },
  ],
};

const DEFAULT_MESSAGES = [
  { threshold: 0, message: "Exploring Synapse Digital?", icon: <BsEmojiSmile className="inline text-yellow-400" /> },
  { threshold: 500, message: "Click me for quick actions!", icon: <BsHandIndex className="inline text-synapse-blue" /> },
];

const IDLE_MESSAGES: Record<string, { message: string; icon: React.ReactNode }[]> = {
  "/": [
    { message: "Need help? Click me!", icon: <BsChatDots className="inline text-synapse-blue" /> },
    { message: "Let's build something great!", icon: <BsStars className="inline text-yellow-400" /> },
    { message: "We reply within 2 hours", icon: <BsLightning className="inline text-orange-400" /> },
    { message: "30+ projects delivered!", icon: <BsHandThumbsUp className="inline text-green-400" /> },
  ],
  "/services": [
    { message: "Free consultations available!", icon: <BsChatDots className="inline text-green-400" /> },
    { message: "All packages include support", icon: <BsShieldCheck className="inline text-synapse-blue" /> },
  ],
  "/contact": [
    { message: "Fill out the form!", icon: <BsEnvelope className="inline text-synapse-blue" /> },
    { message: "Prefer a call? Click me!", icon: <BsTelephoneOutbound className="inline text-green-400" /> },
  ],
  _default: [
    { message: "Need help? Click me!", icon: <BsChatDots className="inline text-synapse-blue" /> },
    { message: "Connect with our team", icon: <BsTelephoneOutbound className="inline text-green-400" /> },
  ],
};

const ACTIONS = [
  { icon: FiPhone, label: "Call Us", href: "tel:+94774671009", color: "#00FF88" },
  { icon: FiMessageCircle, label: "WhatsApp", href: "https://wa.me/94774671009", color: "#25D366" },
  { icon: FiMail, label: "Email", href: "mailto:synapsedigitalofficial@gmail.com", color: "#00C2FF" },
  { icon: FiFileText, label: "Contact Form", href: "/contact", color: "#A855F7" },
];

const CONFETTI_COLORS = ["#00C2FF", "#A855F7", "#00FF88", "#FFB224", "#FF0080", "#61DAFB"];

let particleIdCounter = 0;

// ══════════════════════════════════════
// Particle Layer (desktop only)
// ══════════════════════════════════════
function ParticleLayer({ particles }: { particles: Particle[] }) {
  if (particles.length === 0) return null;
  return (
    <div className="fixed inset-0 z-[9996] pointer-events-none overflow-hidden">
      {particles.map((p) => {
        if (p.type === "heart") {
          return (
            <div key={p.id} className="absolute select-none" style={{ left: p.x, top: p.y, opacity: p.life, fontSize: p.size, transform: `scale(${p.life})` }}>
              ❤️
            </div>
          );
        }
        if (p.type === "zzz") {
          return (
            <div key={p.id} className="absolute text-synapse-blue/60 font-bold select-none" style={{ left: p.x, top: p.y, opacity: p.life, fontSize: p.size }}>
              z
            </div>
          );
        }
        if (p.type === "sparkle") {
          return (
            <div key={p.id} className="absolute select-none text-yellow-300" style={{ left: p.x, top: p.y, opacity: p.life, fontSize: p.size }}>
              ✦
            </div>
          );
        }
        return (
          <div key={p.id} className="absolute rounded-full" style={{ left: p.x, top: p.y, width: p.size, height: p.size, backgroundColor: p.color, opacity: p.life, boxShadow: `0 0 ${p.size * 2}px ${p.color}` }} />
        );
      })}
    </div>
  );
}

// ══════════════════════════════════════
// Bot Eyes
// ══════════════════════════════════════
function BotEyes({ mood }: { mood: Mood }) {
  if (mood === "happy" || mood === "petting") {
    return (
      <div className="relative flex gap-2">
        <div className="w-2.5 h-1.5 border-t-2 border-synapse-blue rounded-t-full" style={{ boxShadow: "0 -3px 6px rgba(0,194,255,0.5)" }} />
        <div className="w-2.5 h-1.5 border-t-2 border-synapse-blue rounded-t-full" style={{ boxShadow: "0 -3px 6px rgba(0,194,255,0.5)" }} />
      </div>
    );
  }
  if (mood === "sleepy") {
    return (
      <div className="relative flex gap-1.5">
        <div className="w-2 h-1 rounded-full bg-synapse-blue/50" style={{ boxShadow: "0 0 4px rgba(0,194,255,0.4)" }} />
        <div className="w-2 h-1 rounded-full bg-synapse-blue/50" style={{ boxShadow: "0 0 4px rgba(0,194,255,0.4)" }} />
      </div>
    );
  }
  if (mood === "excited") {
    return (
      <div className="relative flex gap-1.5">
        <motion.div className="w-3 h-3 rounded-full bg-synapse-blue" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.4, repeat: Infinity }} style={{ boxShadow: "0 0 10px rgba(0,194,255,1)" }} />
        <motion.div className="w-3 h-3 rounded-full bg-synapse-blue" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }} style={{ boxShadow: "0 0 10px rgba(0,194,255,1)" }} />
      </div>
    );
  }
  if (mood === "curious") {
    return (
      <div className="relative flex gap-1.5 items-center">
        <div className="w-2 h-2.5 rounded-full bg-synapse-blue" style={{ boxShadow: "0 0 6px rgba(0,194,255,0.8)" }} />
        <div className="w-2.5 h-3 rounded-full bg-synapse-blue" style={{ boxShadow: "0 0 8px rgba(0,194,255,0.8)" }} />
      </div>
    );
  }
  if (mood === "waving") {
    return (
      <div className="relative flex gap-1.5">
        <motion.div className="w-2.5 h-2.5 rounded-full bg-synapse-blue" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: 2 }} style={{ boxShadow: "0 0 8px rgba(0,194,255,0.8)" }} />
        <motion.div className="w-2.5 h-2.5 rounded-full bg-synapse-blue" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: 2, delay: 0.15 }} style={{ boxShadow: "0 0 8px rgba(0,194,255,0.8)" }} />
      </div>
    );
  }
  // Default — blinking
  return (
    <div className="relative flex gap-1.5">
      <motion.div className="w-2 h-2.5 rounded-full bg-synapse-blue" animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }} style={{ boxShadow: "0 0 6px rgba(0,194,255,0.8)" }} />
      <motion.div className="w-2 h-2.5 rounded-full bg-synapse-blue" animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4, delay: 0.05 }} style={{ boxShadow: "0 0 6px rgba(0,194,255,0.8)" }} />
    </div>
  );
}

// ══════════════════════════════════════
// Main SynapseBot
// ══════════════════════════════════════
export default function SynapseBot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<React.ReactNode>("");
  const [showMessage, setShowMessage] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mood, setMood] = useState<Mood>("default");
  const [particles, setParticles] = useState<Particle[]>([]);
  const [visitCount, setVisitCount] = useState(1);
  const [isPetting, setIsPetting] = useState(false);

  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sleepTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const moodTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pettingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSectionRef = useRef(0);
  const botPosRef = useRef({ x: 0, y: 0 });
  const lastTrailRef = useRef(0);

  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth - 80 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.8 });

  // ── Visit counter ──
  useEffect(() => {
    try {
      const key = "synapse_bot_visits";
      const stored = localStorage.getItem(key);
      const count = stored ? parseInt(stored, 10) + 1 : 1;
      localStorage.setItem(key, count.toString());
      setVisitCount(count);
    } catch { /* localStorage unavailable */ }
  }, []);

  // ── Helpers ──
  const showBubble = useCallback((msg: React.ReactNode, duration = 4000) => {
    try {
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
      setMessage(msg);
      setShowMessage(true);
      messageTimeoutRef.current = setTimeout(() => setShowMessage(false), duration);
    } catch { /* */ }
  }, []);

  const setTempMood = useCallback((m: Mood, duration = 3000) => {
    try {
      if (moodTimeoutRef.current) clearTimeout(moodTimeoutRef.current);
      setMood(m);
      moodTimeoutRef.current = setTimeout(() => setMood("default"), duration);
    } catch { /* */ }
  }, []);

  const spawnParticles = useCallback((type: Particle["type"], x: number, y: number, count: number) => {
    try {
      const newP: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const speed = 1 + Math.random() * 3;
        newP.push({
          id: ++particleIdCounter,
          x,
          y,
          vx: Math.cos(angle) * speed * (type === "confetti" ? 3 : 1),
          vy: Math.sin(angle) * speed * (type === "confetti" ? 3 : 1) - (type === "heart" ? 2 : 0),
          life: 1,
          color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
          size: type === "confetti" ? 4 + Math.random() * 4 : type === "heart" ? 12 : type === "sparkle" ? 10 : 3,
          type,
        });
      }
      setParticles((prev) => [...prev, ...newP]);
    } catch { /* */ }
  }, []);

  // ── Particle physics (desktop only) ──
  useEffect(() => {
    if (particles.length === 0 || isMobile) return;
    const frame = requestAnimationFrame(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy + (p.type === "confetti" ? 0.5 : 0),
            vy: p.type === "heart" || p.type === "zzz" ? p.vy - 0.02 : p.vy + (p.type === "confetti" ? 0.15 : 0),
            life: p.life - (p.type === "trail" ? 0.02 : p.type === "confetti" ? 0.015 : 0.02),
          }))
          .filter((p) => p.life > 0)
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [particles, isMobile]);

  // ── Detect mobile ──
  useEffect(() => {
    try {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    } catch { return; }
  }, []);

  // ── Mouse tracking + trail ──
  useEffect(() => {
    if (isMobile) return;
    const handleMouse = (e: MouseEvent) => {
      try {
        const ox = Math.min(e.clientX + 30, window.innerWidth - 70);
        const oy = Math.min(e.clientY + 20, window.innerHeight - 70);
        mouseX.set(ox);
        mouseY.set(oy);
        botPosRef.current = { x: ox, y: oy };

        const now = Date.now();
        if (now - lastTrailRef.current > 50) {
          lastTrailRef.current = now;
          setParticles((prev) => {
            if (prev.length > 120) return prev;
            return [...prev, {
              id: ++particleIdCounter,
              x: ox + Math.random() * 10 - 5,
              y: oy + 20 + Math.random() * 10,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              life: 0.8,
              color: Math.random() > 0.5 ? "#00C2FF" : "#A855F7",
              size: 2 + Math.random() * 2,
              type: "trail",
            }];
          });
        }
      } catch { /* */ }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [isMobile, mouseX, mouseY]);

  // ── Welcome message with visit count ──
  useEffect(() => {
    const msgs = PAGE_MESSAGES[pathname] || DEFAULT_MESSAGES;
    lastSectionRef.current = 0;
    const t = setTimeout(() => {
      if (visitCount > 1 && pathname === "/") {
        if (!isMobile) setTempMood("happy", 4000);
        showBubble(<><BsStars className="inline text-yellow-400" /> Welcome back! Visit #{visitCount}</>, 5000);
      } else {
        if (!isMobile) setTempMood("waving", 3000);
        showBubble(<>{msgs[0].icon} {msgs[0].message}</>, 5000);
      }
    }, 1500);
    return () => clearTimeout(t);
  }, [pathname, visitCount, showBubble, setTempMood, isMobile]);

  // ── Scroll messages + mood (throttled on mobile) ──
  useEffect(() => {
    let scrollTicking = false;
    const handleScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollTicking = false;
        try {
          const scrollY = window.scrollY;
          const msgs = PAGE_MESSAGES[pathname] || DEFAULT_MESSAGES;
          let currentSection = 0;
          for (let i = msgs.length - 1; i >= 0; i--) {
            if (scrollY >= msgs[i].threshold) {
              currentSection = i;
              break;
            }
          }
          if (currentSection !== lastSectionRef.current) {
            lastSectionRef.current = currentSection;
            const m = msgs[currentSection];
            showBubble(<>{m.icon} {m.message}</>);
            if (!isMobile) setTempMood("curious", 2500);
          }
        } catch { /* */ }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, showBubble, setTempMood, isMobile]);

  // ── Idle → sleepy (desktop only — skip on mobile to avoid timers) ──
  useEffect(() => {
    if (isMobile) return;
    const resetSleep = () => {
      try {
        if (sleepTimeoutRef.current) clearTimeout(sleepTimeoutRef.current);
        if (mood === "sleepy") setMood("default");
        sleepTimeoutRef.current = setTimeout(() => {
          setMood("sleepy");
          showBubble(<>😴 Getting sleepy...</>);
          const pos = botPosRef.current;
          spawnParticles("zzz", pos.x - 10, pos.y - 15, 3);
        }, 20000);
      } catch { /* */ }
    };
    resetSleep();
    window.addEventListener("mousemove", resetSleep, { passive: true });
    window.addEventListener("scroll", resetSleep, { passive: true });
    return () => {
      if (sleepTimeoutRef.current) clearTimeout(sleepTimeoutRef.current);
      window.removeEventListener("mousemove", resetSleep);
      window.removeEventListener("scroll", resetSleep);
    };
  }, [mood, showBubble, spawnParticles, isMobile]);

  // ── Idle nudge (longer delay on mobile) ──
  useEffect(() => {
    const pool = IDLE_MESSAGES[pathname] || IDLE_MESSAGES._default;
    const resetIdle = () => {
      try {
        if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
        idleTimeoutRef.current = setTimeout(() => {
          const pick = pool[Math.floor(Math.random() * pool.length)];
          showBubble(<>{pick.icon} {pick.message}</>);
        }, isMobile ? 30000 : 15000);
      } catch { /* */ }
    };
    resetIdle();
    window.addEventListener("mousemove", resetIdle, { passive: true });
    window.addEventListener("scroll", resetIdle, { passive: true });
    return () => {
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("scroll", resetIdle);
    };
  }, [pathname, showBubble, isMobile]);

  // ── CTA hover → excited (desktop only) ──
  useEffect(() => {
    if (isMobile) return;
    const handleMouseOver = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement;
        if (!target) return;
        const el = target.closest("a, button");
        if (!el) return;
        const text = el.textContent?.toLowerCase() || "";
        if (text.includes("start") || text.includes("project") || text.includes("contact") || text.includes("get started")) {
          setTempMood("excited", 2000);
          const pos = botPosRef.current;
          spawnParticles("sparkle", pos.x, pos.y, 4);
        }
      } catch { /* */ }
    };
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, [setTempMood, spawnParticles, isMobile]);

  // ── Petting ──
  const handlePetStart = useCallback(() => {
    try {
      pettingTimerRef.current = setTimeout(() => {
        setIsPetting(true);
        setMood("petting");
        showBubble(<><BsEmojiSmile className="inline text-pink-400" /> That tickles! 💕</>);
      }, 1500);
    } catch { /* */ }
  }, [showBubble]);

  const handlePetEnd = useCallback(() => {
    try {
      if (pettingTimerRef.current) clearTimeout(pettingTimerRef.current);
      if (isPetting) {
        setIsPetting(false);
        setMood("happy");
        setTimeout(() => setMood("default"), 2000);
      }
    } catch { /* */ }
  }, [isPetting]);

  useEffect(() => {
    if (!isPetting) return;
    const interval = setInterval(() => {
      const pos = botPosRef.current;
      spawnParticles("heart", pos.x + Math.random() * 20 - 10, pos.y - 10, 1);
    }, 400);
    return () => clearInterval(interval);
  }, [isPetting, spawnParticles]);

  // ── Click → confetti (desktop only) ──
  const handleBotClick = useCallback(() => {
    try {
      setIsOpen((prev) => !prev);
      setShowMessage(false);
      if (!isMobile) {
        setTempMood("excited", 2000);
        const pos = botPosRef.current;
        spawnParticles("confetti", pos.x + 12, pos.y + 12, 18);
      }
    } catch { /* */ }
  }, [setTempMood, spawnParticles, isMobile]);

  // ── Cleanup ──
  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      if (sleepTimeoutRef.current) clearTimeout(sleepTimeoutRef.current);
      if (moodTimeoutRef.current) clearTimeout(moodTimeoutRef.current);
      if (pettingTimerRef.current) clearTimeout(pettingTimerRef.current);
    };
  }, []);

  if (isDismissed) {
    return (
      <motion.button
        className="fixed bottom-4 right-4 z-[9999] px-3 py-1.5 rounded-full bg-synapse-blue/20 border border-synapse-blue/30 text-synapse-blue text-xs font-semibold backdrop-blur-sm hover:bg-synapse-blue/30 transition-colors"
        onClick={() => setIsDismissed(false)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        🤖 Show Bot
      </motion.button>
    );
  }

  return (
    <>
      <ParticleLayer particles={particles} />

      {/* Bot body */}
      <motion.div
        className="fixed z-[9998] pointer-events-none"
        style={isMobile ? { bottom: 20, right: 20 } : { x: springX, y: springY }}
      >
        {/* Speech bubble */}
        <AnimatePresence>
          {showMessage && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -top-16 right-0 pointer-events-none min-w-[180px] max-w-[230px]"
            >
              <div className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111]/90 backdrop-blur-md border border-synapse-blue/30 text-signal-white text-[11px] leading-snug" style={{ boxShadow: "0 0 20px rgba(0,194,255,0.15)" }}>
                {message}
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 rotate-45 bg-[#111]/90 border-r border-b border-synapse-blue/30" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bot avatar — using div instead of button to avoid nested button issue */}
        <motion.div
          className="pointer-events-auto relative w-14 h-14 rounded-full cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={handleBotClick}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleBotClick(); }}
          onMouseEnter={handlePetStart}
          onMouseLeave={handlePetEnd}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          animate={{
            y: mood === "excited" ? [0, -8, 0, -6, 0] : mood === "sleepy" ? [0, 2, 0] : [0, -4, 0, 3, 0],
            rotate: mood === "waving" ? [0, -10, 10, -5, 0] : mood === "petting" ? [-2, 2, -2, 2, 0] : 0,
          }}
          transition={{
            y: { duration: mood === "excited" ? 0.6 : 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: mood === "petting" ? 0.3 : 1, repeat: mood === "waving" || mood === "petting" ? Infinity : 0 },
          }}
        >
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow:
                mood === "excited"
                  ? ["0 0 15px rgba(0,194,255,0.5)", "0 0 30px rgba(168,85,247,0.6)", "0 0 15px rgba(0,194,255,0.5)"]
                  : mood === "petting"
                  ? ["0 0 15px rgba(255,100,150,0.4)", "0 0 25px rgba(255,100,150,0.6)", "0 0 15px rgba(255,100,150,0.4)"]
                  : ["0 0 10px rgba(0,194,255,0.2)", "0 0 20px rgba(0,194,255,0.5)", "0 0 10px rgba(0,194,255,0.2)"],
            }}
            transition={{ duration: mood === "excited" ? 0.5 : 2, repeat: Infinity }}
          />

          {/* Bot face */}
          <div
            className="relative w-full h-full rounded-full border-2 flex items-center justify-center overflow-hidden"
            style={{
              backgroundColor: "#0a0a0a",
              borderColor: mood === "petting" ? "rgba(255,100,150,0.6)" : mood === "excited" ? "rgba(168,85,247,0.6)" : "rgba(0,194,255,0.6)",
            }}
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 30% 30%, rgba(0,194,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.3) 0%, transparent 50%)` }} />
            <BotEyes mood={mood} />
          </div>

          {/* Curious ? */}
          {mood === "curious" && (
            <motion.div className="absolute -top-2 -right-1 text-synapse-blue text-xs font-bold" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }} transition={{ y: { duration: 1, repeat: Infinity } }}>
              ?
            </motion.div>
          )}

          {/* Dismiss — now a div, not a nested button */}
          <div
            role="button"
            tabIndex={0}
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-void-black border border-circuit-silver/30 flex items-center justify-center hover:border-red-400/50 transition-colors pointer-events-auto cursor-pointer"
            style={{ opacity: 0.5 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
              setIsOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                setIsDismissed(true);
                setIsOpen(false);
              }
            }}
          >
            <FiX className="w-2.5 h-2.5 text-circuit-silver" />
          </div>
        </motion.div>
      </motion.div>

      {/* Action menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed z-[9999] pointer-events-auto bottom-20 right-5"
          >
            <div className="flex flex-col gap-2 p-3 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-synapse-blue/20" style={{ boxShadow: "0 0 30px rgba(0,194,255,0.1)" }}>
              <div className="text-[10px] text-circuit-silver/60 font-semibold uppercase tracking-wider px-1 mb-1">Quick Actions</div>
              {ACTIONS.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.a
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: -3, backgroundColor: `${action.color}15` }}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors group"
                  >
                    <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${action.color}20` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: action.color }} />
                    </div>
                    <span className="text-xs text-circuit-silver group-hover:text-signal-white font-medium transition-colors">
                      {action.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && <div className="fixed inset-0 z-[9997]" onClick={() => setIsOpen(false)} />}
    </>
  );
}
