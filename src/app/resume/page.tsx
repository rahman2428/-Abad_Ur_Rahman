import React from "react";
import { personalProfile } from "@/data/profile";
import { Download, ExternalLink, GraduationCap, Briefcase, Code, Award, Mail } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/ui/icons";

export const metadata = {
  title: "Resume — Abadurrahman",
  description:
    "Interactive resume profile of Abadurrahman: Computer Science Engineering student, web developer, startup founder of TECHVIMAN.",
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Resume Header & Download Bar */}
      <div className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-slate-950/80">
        <div>
          <h1 className="text-3xl font-extrabold text-white">ABADURRAHMAN</h1>
          <p className="text-sm font-mono text-blue-400 mt-1">
            Computer Science Engineer • Developer • Startup Founder
          </p>
          <p className="text-xs text-slate-400 mt-1">India • contact@techviman.com • github.com/rahman2428</p>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-cyan-500 transition flex items-center gap-2 shrink-0"
        >
          <Download className="w-4 h-4" /> Download PDF Resume
        </a>
      </div>

      {/* Summary */}
      <div className="space-y-3">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          {personalProfile.bio} Founder of TECHVIMAN startup, creator of WebAR AR Menu 3D food preview system and AI image background removal tools. Proficient in Next.js, React, TypeScript, Python, FastAPI, and relational database systems.
        </p>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
          EDUCATION
        </h2>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-white">
            <span>{personalProfile.aboutSection.education.degree} in {personalProfile.aboutSection.education.field}</span>
            <span className="text-xs font-mono text-cyan-400 font-normal">Pursuing</span>
          </div>
          <p className="text-xs text-slate-400">Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.</p>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
          EXPERIENCE & STARTUP
        </h2>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-white">
            <span>Founder & Lead Developer — TECHVIMAN</span>
            <span className="text-xs font-mono text-blue-400 font-normal">2024 — Present</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Leading product engineering, WebAR 3D innovations, AI background removal microservices, and startup growth at techviman.com.
          </p>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="font-bold text-white font-mono">Languages & Web:</span>
            <p className="text-slate-400">Python, JavaScript (ES6+), TypeScript, C, C++, HTML5, CSS3, Tailwind CSS.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="font-bold text-white font-mono">Frameworks & APIs:</span>
            <p className="text-slate-400">Next.js 15, React, FastAPI, Flask, REST APIs, WebXR, Three.js.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="font-bold text-white font-mono">Databases & Cloud:</span>
            <p className="text-slate-400">MySQL, PostgreSQL, SQLite, Firebase, Vercel, Render, Git/GitHub.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="font-bold text-white font-mono">Core Competencies:</span>
            <p className="text-slate-400">Full-Stack Development, AI Tools Integration, WebAR 3D, Technical SEO, Product Architecture.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
