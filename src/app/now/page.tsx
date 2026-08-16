import React from "react";
import { labExperiments } from "@/data/lab";
import { Clock, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Now / Currently Building — Abadurrahman",
  description:
    "Real-time building status tracker of Abadurrahman: Current software builds, WebAR updates, AI research, and daily focus area.",
};

export default function NowPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> REAL-TIME STATUS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">CURRENTLY BUILDING</h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          What I am working on right now — product launches, tech lab experiments, research focus, and reading list.
        </p>
      </div>

      {/* Primary Focus Card */}
      <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6 bg-slate-950/80">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <span className="text-xs font-mono text-slate-400">LAST UPDATED: <strong className="text-white">AUGUST 2026</strong></span>
          <span className="text-xs font-mono font-bold text-cyan-400">STATUS: ACTIVE</span>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">Current Priorities</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-xs font-bold shrink-0 mt-0.5">BUILDING</span>
              <div>
                <strong className="text-white">TECHVIMAN Product Scaling:</strong> Expanding WebAR AR Menu 3D rendering pipeline and testing automated background removal microservices.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold shrink-0 mt-0.5">LEARNING</span>
              <div>
                <strong className="text-white">Autonomous AI Agents:</strong> Investigating multi-step AI agents for dynamic MDX content generation and search index updating.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold shrink-0 mt-0.5">WRITING</span>
              <div>
                <strong className="text-white">Daily Knowledge Platform:</strong> Publishing long-form tutorials on Next.js, WebXR, FastAPI, and CS engineering fundamentals.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Live Experiments List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">ACTIVE BUILD LOG</h2>
        <div className="space-y-4">
          {labExperiments.map((exp) => (
            <div key={exp.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    {exp.status}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{exp.lastUpdated}</span>
                </div>
                <h3 className="text-base font-bold text-white">{exp.title}</h3>
                <p className="text-xs text-slate-400">{exp.tagline}</p>
              </div>
              <Link
                href="/lab"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0"
              >
                Lab Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
