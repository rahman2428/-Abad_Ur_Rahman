import React from "react";
import { techvimanData } from "@/data/techviman";
import { Sparkles, Globe, ExternalLink, CheckCircle2, ArrowRight, Layers, Cpu, Box, Rocket } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "TECHVIMAN — Building Technology Products & Digital Solutions",
  description:
    "Official startup profile of TECHVIMAN: Founded by Abadurrahman. Building WebAR products, AI tools, SaaS applications, and modern digital software.",
};

export default function TechvimanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* TECHVIMAN Hero Section */}
      <div className="glass-card p-8 sm:p-14 rounded-3xl border border-cyan-500/40 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" /> STARTUP PROFILE & ECOSYSTEM
          </div>

          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight">
            <span className="techviman-gradient-text">{techvimanData.brandName}</span>
          </h1>

          <p className="text-xl font-bold text-slate-200 font-mono">{techvimanData.tagline}</p>

          <p className="text-base text-slate-300 leading-relaxed">{techvimanData.subheadline}</p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href={techvimanData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition flex items-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              Visit Official Website (techviman.com) <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-white text-sm font-semibold transition"
            >
              Partner / Collaborate
            </Link>
          </div>
        </div>
      </div>

      {/* Founder Relationship Architecture */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 bg-slate-950/80">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <p className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">FOUNDER & STARTUP MATRIX</p>
          <h2 className="text-3xl font-extrabold text-white">THE TECHVIMAN ECOSYSTEM</h2>
          <p className="text-xs text-slate-400">
            How Abadurrahman's engineering expertise powers TECHVIMAN's product portfolio.
          </p>
        </div>

        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 font-mono text-center">
          <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-300 font-bold">
            ABADURRAHMAN
            <div className="text-xs text-slate-400 font-normal mt-0.5">Founder • Developer • Technology Creator</div>
          </div>

          <div className="text-slate-500 text-sm">│<br />▼</div>

          <div className="p-4 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-lg">
            TECHVIMAN
            <div className="text-xs text-slate-400 font-normal mt-0.5">Product Building & Innovation Startup</div>
          </div>

          <div className="text-slate-500 text-sm">┌───────────────┼───────────────┐</div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
              <span className="font-bold text-blue-400">AI Products</span>
              <p className="text-[10px] text-slate-400 mt-1">Image BG Removal, ML Microservices</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
              <span className="font-bold text-cyan-400">SaaS Products</span>
              <p className="text-[10px] text-slate-400 mt-1">Full-Stack Educational & Business Systems</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
              <span className="font-bold text-violet-400">AR & 3D Web</span>
              <p className="text-[10px] text-slate-400 mt-1">AR Menu WebXR 3D Food Visualization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">OUR PURPOSE</span>
          <h2 className="text-2xl font-bold text-white">TECHVIMAN MISSION</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{techvimanData.mission}</p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">OUR HORIZON</span>
          <h2 className="text-2xl font-bold text-white">TECHVIMAN VISION</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{techvimanData.vision}</p>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">CORE DOMAINS</p>
          <h2 className="text-3xl font-extrabold text-white">WHAT WE BUILD AT TECHVIMAN</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techvimanData.focusAreas.map((area) => (
            <div key={area.title} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-white">{area.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Portfolio */}
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">VERIFIED PRODUCTS</p>
          <h2 className="text-3xl font-extrabold text-white">TECHVIMAN PRODUCT PORTFOLIO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techvimanData.products.map((product) => (
            <div key={product.id} className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {product.category}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">{product.status}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">{product.tagline}</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{product.description}</p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <p className="text-xs font-mono text-slate-400 font-semibold">Key Capabilities:</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {product.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    View Product <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Startup Roadmap Timeline */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 bg-slate-950/80">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">EXECUTION TIMELINE</p>
          <h2 className="text-3xl font-extrabold text-white">STARTUP JOURNEY & MILESTONES</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {techvimanData.journey.map((item) => (
            <div key={item.step} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                {item.step}
              </span>
              <h4 className="text-xs font-bold text-white mt-1">{item.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Profile */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">LEADERSHIP</h2>
        {techvimanData.team.map((member) => (
          <div key={member.name} className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-xs font-mono text-cyan-400">{member.role}</p>
              <p className="text-xs text-slate-300 mt-2 max-w-xl">{member.bio}</p>
            </div>
            <Link
              href="/about"
              className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition"
            >
              View Founder Bio →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
