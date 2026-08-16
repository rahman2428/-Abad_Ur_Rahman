import React from "react";
import { skillsData } from "@/data/skills";
import { Cpu, Code, Layers, Sparkles, Terminal, Cloud, Server, Database } from "lucide-react";

export const metadata = {
  title: "Engineering Skills — Abadurrahman",
  description:
    "Categorized technical capabilities of Abadurrahman: Programming languages, frontend frameworks, backend APIs, AI/ML models, databases, tools, cloud, and emerging tech.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          TECHNICAL STACK & COMPETENCIES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">ENGINEERING & SKILLS</h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          A clear, categorized breakdown of programming languages, frontend/backend frameworks, AI models, databases, developer tooling, and emerging technologies. (No fake percentage skill bars!)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category) => (
          <div key={category.id} className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">{category.categoryName}</h2>
              <p className="text-xs text-slate-400 mt-1">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-100">{skill.name}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        skill.level === "Advanced"
                          ? "bg-blue-500/20 text-blue-400"
                          : skill.level === "Proficient"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-violet-500/20 text-violet-400"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
