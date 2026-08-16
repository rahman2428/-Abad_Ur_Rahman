"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { IconGithub } from "@/components/ui/icons";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Web", "AI", "SaaS", "AR / 3D", "Startup", "Experiments"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          PORTFOLIO & CASE STUDIES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">PROJECTS & PRODUCTS</h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          A showcase of practical web applications, WebAR products, AI integrations, full-stack CRUD systems, and software engineering case studies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">{project.status}</span>
              </div>

              <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                {project.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">{project.fullDescription}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white transition flex items-center gap-1"
                    >
                      <IconGithub className="w-3.5 h-3.5" /> Repository
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition flex items-center gap-1"
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="px-4 py-2 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 text-xs font-bold transition flex items-center gap-1"
                >
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
