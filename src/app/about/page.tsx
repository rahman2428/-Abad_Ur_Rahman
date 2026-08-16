import React from "react";
import Metadata from "next";
import { personalProfile } from "@/data/profile";
import { GraduationCap, Code, Rocket, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Abadurrahman — Developer, Entrepreneur & Tech Builder",
  description:
    "Learn about Abadurrahman: Computer Science Engineering student, founder of TECHVIMAN, web developer, AI enthusiast, and software product creator.",
};

export default function AboutPage() {
  const { aboutSection, philosophy, exploring } = personalProfile;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          BIOGRAPHY & PHILOSOPHY
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">ABOUT ABADURRAHMAN</h1>
        <p className="text-lg text-slate-300 leading-relaxed font-medium">
          Computer Science Engineering student, software developer, startup founder, and technology creator based in India.
        </p>
      </div>

      {/* Grid: Who I Am & What I Do */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Code className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-white">Who I Am</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{aboutSection.whoIAm}</p>
          <p className="text-xs text-slate-400 leading-relaxed">{aboutSection.careerDirection}</p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Rocket className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-white">What I Do</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{aboutSection.whatIDo}</p>
          <div className="pt-2">
            <p className="text-xs font-mono text-slate-400 font-semibold mb-2">CORE INTERESTS:</p>
            <div className="flex flex-wrap gap-2">
              {aboutSection.interests.map((interest) => (
                <span key={interest} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Academic Background Section */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-950/80 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Academic Background</h2>
            <p className="text-xs text-emerald-400 font-mono font-semibold">{aboutSection.education.degree} in {aboutSection.education.field}</p>
          </div>
        </div>

        <div className="space-y-4 border-t border-slate-800/80 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-slate-300">
            <span>Status: <strong className="text-white">{aboutSection.education.status}</strong></span>
            <span className="text-xs font-mono text-slate-400">Computer Science Engineering</span>
          </div>

          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Relevant Coursework & Fundamentals:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {aboutSection.education.coursework.map((course) => (
              <div key={course} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> {course}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Philosophy Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">CORE PRINCIPLES</p>
          <h2 className="text-3xl font-extrabold text-white">PERSONAL PHILOSOPHY</h2>
          <blockquote className="text-base text-slate-300 italic border-l-2 border-violet-500 pl-4 py-1">
            "{philosophy.quote}"
          </blockquote>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {philosophy.principles.map((principle) => (
            <div key={principle.title} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-violet-400 font-mono">{principle.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Exploring Tags */}
      <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">CURRENTLY EXPLORING</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {exploring.map((item) => (
            <span
              key={item}
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-800">
        <Link href="/projects" className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
          Explore Projects Portfolio <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/techviman" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
          Discover TECHVIMAN Startup <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
