"use client";

import React, { useEffect, useRef } from "react";

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const numParticles = Math.min(Math.floor(width / 15), 45);
    const colors = ["#3b82f6", "#06b6d4", "#8b5cf6", "#60a5fa"];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint grid lines
      const gridSize = 40;
      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw mouse light gradient glow
      const radialGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
      radialGlow.addColorStop(0, "rgba(6, 182, 212, 0.15)");
      radialGlow.addColorStop(0.5, "rgba(59, 130, 246, 0.08)");
      radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Connect particle links
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 110})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden glass-card flex items-center justify-center p-4 border border-slate-800/80 bg-slate-950/60 shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating Interactive 3D Card Visual Stack */}
      <div className="relative z-10 w-full max-w-sm space-y-3">
        {/* Floating Card 1: WebAR Food Renderer */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-lg transform hover:-translate-y-1 transition duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">
              WebXR AR Engine
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
          <p className="text-xs font-semibold text-slate-100">AR Menu 3D Spatial Pipeline</p>
          <p className="text-[11px] text-slate-400 font-mono mt-1">Status: WebXR ModelViewer Live (GLB / USDZ)</p>
        </div>

        {/* Floating Card 2: AI Microservice Status */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg transform translate-x-4 hover:translate-x-3 transition duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">
              FastAPI AI Service
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Lat: 18ms</span>
          </div>
          <p className="text-xs font-semibold text-slate-100">AI Background Remover Microservice</p>
          <p className="text-[11px] text-slate-400 font-mono mt-1">Image Isolation & Alpha Matting</p>
        </div>

        {/* Floating Card 3: TECHVIMAN Ecosystem */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-violet-500/30 backdrop-blur-md shadow-lg transform -translate-x-2 hover:-translate-x-1 transition duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-violet-500/20 text-violet-400">
              Startup Identity
            </span>
            <span className="text-[10px] text-violet-300 font-mono">techviman.com</span>
          </div>
          <p className="text-xs font-semibold text-slate-100">TECHVIMAN Digital Products</p>
          <p className="text-[11px] text-slate-400 font-mono mt-1">SaaS • WebAR • AI Solutions</p>
        </div>
      </div>
    </div>
  );
}
