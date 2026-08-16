"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Code,
  Rocket,
  Globe,
  Cpu,
  Layers,
  Box,
  Terminal,
  Send,
  Mail,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Filter,
  Zap,
} from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitter, IconInstagram } from "@/components/ui/icons";
import { personalProfile } from "@/data/profile";
import { techvimanData } from "@/data/techviman";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { labExperiments } from "@/data/lab";
import { blogPosts } from "@/data/blog";
import { socialLinks } from "@/data/social";
import { HeroVisual } from "@/components/hero/hero-visual";
import confetti from "canvas-confetti";

export default function HomePage() {
  const [activeProjectCategory, setActiveProjectCategory] = useState<string>("All");
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["All", "Web", "AI", "SaaS", "AR / 3D", "Startup", "Experiments"];

  const filteredProjects =
    activeProjectCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeProjectCategory);

  const [formError, setFormError] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setIsSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cb019df1-9b5c-4089-b680-f4d73c9629c0",
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject || `Homepage Inquiry from ${contactForm.name}`,
          message: contactForm.message,
          from_name: "Abadurrahman Portfolio Homepage",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
        setContactForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormError(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setFormError("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative space-y-28 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              COMPUTER SCIENCE ENGINEER • DEVELOPER • ENTREPRENEUR
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              BUILDING <span className="glow-gradient-text">DIGITAL PRODUCTS</span>, EXPERIENCES & BUSINESSES.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I'm Abadurrahman — a developer and entrepreneur focused on building web applications, AI-powered products, immersive WebAR experiences, and technology-driven businesses.
            </p>

            {/* 4 Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition flex items-center gap-2 group"
              >
                Explore My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/techviman"
                className="px-6 py-3 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 text-sm font-semibold transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" /> Discover TECHVIMAN
              </Link>

              <Link
                href="/blog"
                className="px-5 py-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-sm font-medium transition"
              >
                Read My Blog
              </Link>

              <Link
                href="/resume"
                className="px-5 py-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-sm font-medium transition"
              >
                Download Resume
              </Link>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              <div className="flex items-center gap-3 text-slate-400">
                <a href="https://github.com/rahman2428" target="_blank" rel="noopener noreferrer" className="hover:text-white transition p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <IconGithub className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/abadur-rahman-056582312/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <IconLinkedin className="w-4 h-4" />
                </a>
                <a href="https://techviman.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="mailto:contact@techviman.com" className="hover:text-white transition p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Component */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PERSONAL BRAND STATEMENT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800/80 relative overflow-hidden bg-slate-950/70">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              PERSONAL BRAND STATEMENT
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">MORE THAN A DEVELOPER.</h2>
            <blockquote className="text-xl sm:text-2xl font-bold text-slate-200 border-l-4 border-blue-500 pl-4 py-1 italic">
              "I don't just write code. I turn ideas into products."
            </blockquote>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Combining Computer Science engineering fundamentals with product design, artificial intelligence, and business strategy to engineer high-value digital solutions.
            </p>

            {/* Animated Idea to Business Flow */}
            <div className="pt-6">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Idea to Business Flow</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center">
                {["IDEA", "RESEARCH", "DESIGN", "CODE", "PRODUCT", "USERS", "BUSINESS"].map((step) => (
                  <React.Fragment key={step}>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-200 hover:border-blue-500/50 hover:text-blue-400 transition">
                      {step}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TECHVIMAN — MAJOR STARTUP SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold rounded-bl-2xl border-l border-b border-cyan-500/40">
            STARTUP INITIATIVE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-cyan-400" /> STARTUP IDENTITY
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                <span className="techviman-gradient-text">{techvimanData.brandName}</span>
              </h2>
              <p className="text-lg font-medium text-slate-300">Building Technology. Creating Possibilities.</p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {techvimanData.about}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <p className="text-xs font-mono font-bold text-cyan-400 uppercase mb-1">MISSION</p>
                  <p className="text-xs text-slate-300">{techvimanData.mission}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <p className="text-xs font-mono font-bold text-violet-400 uppercase mb-1">VISION</p>
                  <p className="text-xs text-slate-300">{techvimanData.vision}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/techviman"
                  className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  Explore TECHVIMAN →
                </Link>
                <a
                  href={techvimanData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-white text-sm font-medium transition flex items-center gap-2"
                >
                  Visit techviman.com <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Relationship Diagram Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 font-mono space-y-4">
              <p className="text-xs text-slate-400 uppercase tracking-widest text-center border-b border-slate-800 pb-2">
                FOUNDER & STARTUP ARCHITECTURE
              </p>

              <div className="text-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold">
                {techvimanData.relationshipDiagram.founder}
                <div className="text-[10px] text-slate-400 font-normal">{techvimanData.relationshipDiagram.role}</div>
              </div>

              <div className="text-center text-slate-500 text-sm">│<br />▼</div>

              <div className="text-center p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold text-base">
                {techvimanData.relationshipDiagram.startup}
                <div className="text-[10px] text-slate-400 font-normal">Technology Products & SaaS Ecosystem</div>
              </div>

              <div className="text-center text-slate-500 text-sm">┌───────┼───────┐</div>

              <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center">
                {techvimanData.relationshipDiagram.branches.map((b) => (
                  <div key={b} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED PRODUCTS PORTFOLIO */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">PRODUCT SHOWCASE</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">FEATURED PRODUCTS</h2>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
            View All Projects & Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techvimanData.products.map((product) => (
            <div
              key={product.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    {product.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-slate-300 font-mono">{product.tagline}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{product.description}</p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono text-slate-400 font-semibold uppercase">Highlights:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {product.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {product.github && (
                    <a
                      href={product.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white transition flex items-center gap-1"
                    >
                      <IconGithub className="w-3.5 h-3.5" /> Code
                    </a>
                  )}
                  {product.link && (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition flex items-center gap-1"
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ENGINEERING SKILLS MATRIX */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">TECHNICAL CAPABILITIES</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">ENGINEERING & SKILLS</h2>
          </div>
          <Link href="/skills" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            Explore Full Skills Matrix <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.slice(0, 4).map((category) => (
            <div key={category.id} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-2">{category.categoryName}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/30 transition">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-100">
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FILTERABLE PROJECTS SHOWCASE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">PORTFOLIO INDEX</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">ALL PROJECTS & EXPERIMENTS</h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveProjectCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                activeProjectCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{project.status}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{project.shortDescription}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ENTREPRENEURIAL JOURNEY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 bg-slate-950/80">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">FOUNDER METHODOLOGY</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">FROM CODE TO BUSINESS</h2>
            <p className="text-sm text-slate-300 max-w-2xl">
              Distinguishing software engineering as a student from founding digital products and executing business validation strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {techvimanData.journey.map((j) => (
              <div key={j.step} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                  {j.step}
                </span>
                <h4 className="text-xs font-bold text-white mt-1">{j.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{j.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TECHNOLOGY LAB & CURRENTLY BUILDING */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">EXPERIMENTAL LAB</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">TECHNOLOGY LAB & NOW</h2>
          </div>
          <Link href="/lab" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            View All Lab Experiments <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labExperiments.slice(0, 3).map((exp) => (
            <div key={exp.id} className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-blue-400 px-2.5 py-0.5 rounded bg-blue-500/10">
                    {exp.category}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    {exp.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{exp.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Progress</span>
                  <span>{exp.progressPercentage}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full" style={{ width: `${exp.progressPercentage}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. BLOG & KNOWLEDGE PLATFORM HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">KNOWLEDGE PLATFORM</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">BUILD • CODE • BUSINESS BLOG</h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
            Read Knowledge Base <BookOpen className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{post.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>By {post.author.name}</span>
                <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition flex items-center gap-1">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SERVICES ("WHAT I CAN BUILD") */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">PROFESSIONAL CAPABILITIES</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">WHAT I CAN BUILD</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProfile.services.map((service) => (
            <div key={service.id} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{service.description}</p>

              <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                {service.features.map((f, i) => (
                  <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CONTACT SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-950/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">GET IN TOUCH</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">HAVE AN IDEA?</h2>
              <p className="text-lg text-slate-300 font-medium">Let's build something meaningful together.</p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you have a web application project, a WebAR product concept, an AI tool requirement, or want to collaborate with TECHVIMAN, feel free to reach out directly.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" /> contact@techviman.com
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-cyan-400" /> https://techviman.com/
                </div>
              </div>
            </div>

            {/* Contact Form Component */}
            <div className="lg:col-span-6">
              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, Abadurrahman will respond to your message promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder="Project Inquiry / Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell me about your project idea or request..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
