import React from "react";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers } from "lucide-react";
import { IconGithub } from "@/components/ui/icons";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Projects
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6 bg-slate-950/80">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
            {project.category} CASE STUDY
          </span>
          <span className="text-xs font-mono text-emerald-400 font-semibold">{project.status}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">{project.title}</h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">{project.shortDescription}</p>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-1.5"
              >
                <IconGithub className="w-4 h-4" /> Repository
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Sections 01 to 11 */}
      <div className="space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* 01 Overview */}
        <section className="space-y-3 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">01 — OVERVIEW</div>
          <h2 className="text-2xl font-bold text-white">Project Scope & Vision</h2>
          <p>{caseStudy.overview}</p>
        </section>

        {/* 02 Problem */}
        <section className="space-y-3 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">02 — PROBLEM STATEMENT</div>
          <h2 className="text-2xl font-bold text-white">The Friction & Challenge</h2>
          <p>{caseStudy.problem}</p>
        </section>

        {/* 03 Research & 04 Idea */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-3 glass-card p-6 rounded-2xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">03 — RESEARCH</div>
            <h3 className="text-xl font-bold text-white">Technical Analysis</h3>
            <p className="text-xs sm:text-sm">{caseStudy.research}</p>
          </section>

          <section className="space-y-3 glass-card p-6 rounded-2xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">04 — THE IDEA</div>
            <h3 className="text-xl font-bold text-white">Solution Concept</h3>
            <p className="text-xs sm:text-sm">{caseStudy.idea}</p>
          </section>
        </div>

        {/* 05 Architecture */}
        <section className="space-y-4 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">05 — SYSTEM ARCHITECTURE</div>
          <h2 className="text-2xl font-bold text-white">Engineering Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono pt-2">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="font-bold text-blue-400">Frontend Layer</span>
              <p className="text-slate-300 font-sans text-xs">{caseStudy.architecture.frontend}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="font-bold text-cyan-400">Backend API</span>
              <p className="text-slate-300 font-sans text-xs">{caseStudy.architecture.backend}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="font-bold text-violet-400">Deployment Edge</span>
              <p className="text-slate-300 font-sans text-xs">{caseStudy.architecture.deployment}</p>
            </div>
          </div>

          {caseStudy.architecture.flowDiagram && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 pt-4">
              <p className="text-xs font-mono text-slate-400 font-semibold uppercase">Execution Flow Diagram:</p>
              <ol className="space-y-1.5 text-xs font-mono text-slate-300">
                {caseStudy.architecture.flowDiagram.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </section>

        {/* 06 Design & 07 Development */}
        <section className="space-y-4 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">06 — DESIGN & 07 — DEVELOPMENT</div>
          <h2 className="text-2xl font-bold text-white">UX & Implementation Steps</h2>
          <p>{caseStudy.design}</p>

          <div className="space-y-2 pt-2">
            <p className="text-xs font-mono text-slate-400 uppercase font-semibold">Key Implementation Milestones:</p>
            <ul className="space-y-2">
              {caseStudy.development.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 08 Challenges & 09 Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-3 glass-card p-6 rounded-2xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">08 — TECHNICAL CHALLENGES</div>
            <h3 className="text-xl font-bold text-white">Obstacles</h3>
            <ul className="space-y-2">
              {caseStudy.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 glass-card p-6 rounded-2xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">09 — THE SOLUTION</div>
            <h3 className="text-xl font-bold text-white">Resolution</h3>
            <p className="text-xs sm:text-sm">{caseStudy.solution}</p>
          </section>
        </div>

        {/* 10 Lessons Learned & 11 Future Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-3 glass-card p-6 rounded-2xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">10 — LESSONS LEARNED</div>
            <h3 className="text-xl font-bold text-white">Takeaways</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {caseStudy.lessonsLearned.map((l, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {l}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 glass-card p-6 rounded-2xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">11 — FUTURE ROADMAP</div>
            <h3 className="text-xl font-bold text-white">Next Horizons</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {caseStudy.futureRoadmap.map((r, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" /> {r}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
