import React from "react";
import { labExperiments } from "@/data/lab";
import { Terminal, ExternalLink, Sparkles, Activity } from "lucide-react";
import { IconGithub } from "@/components/ui/icons";

export const metadata = {
  title: "Technology Lab & Experiments — Abadurrahman",
  description:
    "Experimental technology lab of Abadurrahman: Autonomous AI agents, WebXR spatial viewers, WebAssembly image segmentation, developer tooling, and research prototypes.",
};

export default function LabPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          EXPERIMENTAL SANDBOX
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">TECHNOLOGY LAB</h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          An interactive laboratory showing AI agent experiments, WebXR prototypes, WebAssembly browser tools, research concepts, and developer utilities keeping the platform alive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {labExperiments.map((exp) => (
          <div key={exp.id} className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  {exp.category}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                    exp.status === "LIVE"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : exp.status === "TESTING"
                      ? "bg-cyan-500/20 text-cyan-400"
                      : exp.status === "BUILDING"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-amber-500/20 text-amber-400"
                  }`}
                >
                  {exp.status}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">{exp.title}</h2>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">{exp.tagline}</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{exp.description}</p>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
                <strong className="text-slate-300">Lab Notes:</strong> {exp.notes}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Build Progress</span>
                  <span>{exp.progressPercentage}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${exp.progressPercentage}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white transition flex items-center gap-1"
                    >
                      <IconGithub className="w-3.5 h-3.5" /> Code
                    </a>
                  )}
                  {exp.demoUrl && (
                    <a
                      href={exp.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
                    >
                      Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
