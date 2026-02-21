"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

export default function DigitalTwin() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visitorId, setVisitorId] = useState<string>("0000");
  const [sessionData, setSessionData] = useState({ scroll: 0, clicks: 0, time: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    // Generate or retrieve ID
    let id = localStorage.getItem("synapse_visitor_id");
    if (!id) {
        id = Math.random().toString(36).substring(2, 8).toUpperCase();
        localStorage.setItem("synapse_visitor_id", id);
    }
    setVisitorId(id);

    // Track session data — slower interval on mobile (5s vs 1s)
    const startTime = Date.now();
    let clicks = 0;
    
    const clickHandler = () => { clicks++; };
    window.addEventListener("click", clickHandler);

    const interval = setInterval(() => {
        setSessionData({
            scroll: window.scrollY,
            clicks: clicks,
            time: Math.floor((Date.now() - startTime) / 1000)
        });
    }, isMobile ? 5000 : 1000);

    return () => {
        window.removeEventListener("click", clickHandler);
        clearInterval(interval);
    };
  }, []);

  // Visualize data
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width;
    const h = canvas.height;
    
    const seed = visitorId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Draw "Digital Twin" Abstract Shape
    ctx.strokeStyle = "#00c2ff";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    
    // Base shape depends on ID
    const timeOffset = Date.now() / 2000;
    
    for (let i = 0; i < Math.PI * 2; i += 0.1) {
        // Radius affected by scroll depth
        const rBase = 30 + (sessionData.scroll / document.body.scrollHeight) * 20;
        
        // Noise affected by clicks
        const noise = Math.sin(i * (seed % 10) + timeOffset) * (5 + sessionData.clicks);
        
        const r = rBase + noise;
        const x = w / 2 + Math.cos(i) * r;
        const y = h / 2 + Math.sin(i) * r;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
    
    // Inner Rings
    ctx.strokeStyle = "rgba(168, 85, 247, 0.5)"; // Purple
    ctx.beginPath();
    ctx.arc(w/2, h/2, 15 + Math.sin(timeOffset * 2) * 5, 0, Math.PI * 2);
    ctx.stroke();

  }, [visitorId, sessionData]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-[300px] mx-auto">
        <div className="relative">
            <canvas ref={canvasRef} width={120} height={120} className="w-[120px] h-[120px]" />
            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-synapse-blue font-mono opacity-60 pointer-events-none">
                SIMULATION
            </div>
        </div>
        
        <div className="text-center font-mono space-y-1">
            <div className="text-xs text-circuit-silver">Visitor Identifier</div>
            <div className="text-xl font-bold text-synapse-blue tracking-widest">
                #{visitorId}
            </div>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full text-[10px] text-circuit-silver border-t border-white/10 pt-3">
            <div className="flex flex-col items-center">
                <span className="text-synapse-blue font-bold">{sessionData.time}s</span>
                <span>TIME</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-purple-400 font-bold">{sessionData.scroll}px</span>
                <span>DEPTH</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-green-400 font-bold">{sessionData.clicks}</span>
                <span>CLICKS</span>
            </div>
        </div>
        
        <div className="text-[9px] text-white/30 text-center uppercase tracking-wider">
            Your Digital Footprint
        </div>
    </div>
  );
}
