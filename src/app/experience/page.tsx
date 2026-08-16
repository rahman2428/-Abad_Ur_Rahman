import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, GraduationCap, Award, ExternalLink, CheckCircle2, Rocket } from "lucide-react";

export const metadata = {
  title: "Experience & Timeline — Abadurrahman",
  description:
    "Chronological timeline of Abadurrahman: Education (B.Tech Computer Science Engineering), TECHVIMAN startup founder, product launches, hackathons, and achievements.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
          JOURNEY & MILESTONES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">EXPERIENCE & TIMELINE</h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          A chronological log of academic education, founding TECHVIMAN startup, launching WebAR and AI products, and key technical achievements.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Dot Icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-md shadow-blue-500/20 group-hover:scale-110 transition">
              {exp.category === "Education" ? (
                <GraduationCap className="w-4 h-4 text-emerald-400" />
              ) : exp.category === "Startup" ? (
                <Rocket className="w-4 h-4 text-cyan-400" />
              ) : (
                <Award className="w-4 h-4 text-violet-400" />
              )}
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-blue-400">{exp.year}</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                  {exp.category}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">{exp.title}</h2>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">{exp.organization} {exp.location ? `• ${exp.location}` : ""}</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{exp.description}</p>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <p className="text-xs font-mono text-slate-400 font-semibold">Highlights:</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.links && (
                <div className="pt-3 flex items-center gap-3">
                  {exp.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
                    >
                      {link.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
