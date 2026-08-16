"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blog";
import { ArrowRight, Calendar, Clock, Rss, BookOpen, Sparkles, LayoutGrid, List, CheckCircle2, Terminal } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function BlogHubClient() {
  const [activeTab, setActiveTab] = useState<"all" | "pillars" | "quick">("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showWorkflowGuide, setShowWorkflowGuide] = useState(false);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  
  const displayedPosts = blogPosts.filter((p) => {
    if (p.draft) return false;
    if (activeTab === "pillars") return p.pillar;
    if (activeTab === "quick") return !p.pillar;
    return true;
  });

  return (
    <div className="space-y-12">
      {/* Daily Publishing Cadence Bar */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <div>
            <p className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
              DAILY PUBLISHING SYSTEM ACTIVE
            </p>
            <p className="text-xs text-slate-300">
              1 New Article Published Every Single Day • Engineering, AI, WebAR & Startup Strategy
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowWorkflowGuide(!showWorkflowGuide)}
            className="px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer border border-slate-700"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            {showWorkflowGuide ? "Hide Writer Guide" : "Daily Writer Guide"}
          </button>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-400 text-xs font-mono font-semibold transition flex items-center gap-1.5"
          >
            <Rss className="w-3.5 h-3.5 text-blue-400" /> RSS Feed
          </a>
        </div>
      </div>

      {/* Expandable Daily Publishing Workflow Guide for Abadurrahman */}
      {showWorkflowGuide && (
        <div className="p-6 rounded-2xl bg-slate-950 border border-blue-500/30 font-mono text-xs space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-blue-400 font-bold border-b border-slate-800 pb-2">
            <span>⚡ ABADURRAHMAN'S DAILY PUBLISHING WORKFLOW (2-MINUTE SETUP)</span>
            <span className="text-[10px] text-slate-500">MDX & TypeScript Ready</span>
          </div>
          <p className="text-slate-300 font-sans">
            To publish a new article every day, simply add an entry to <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">src/data/blog.ts</code>. The platform automatically handles:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-slate-400 font-sans">
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Clean SEO URL generation</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Table of Contents sidebar</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> JSON-LD Schema markup</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Dynamic XML Sitemap & RSS</li>
          </ul>
        </div>
      )}

      {/* Featured Editorial Guide */}
      {featuredPost && (
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-blue-500/40 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 shadow-2xl">
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-blue-500/20 text-blue-300 font-mono text-xs font-bold rounded-bl-2xl border-l border-b border-blue-500/40">
            FEATURED PILLAR GUIDE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="font-bold text-blue-400 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-500" /> {formatDate(featuredPost.publishedAt)}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-500" /> {featuredPost.readingTime}</span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white hover:text-blue-400 transition leading-tight">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{featuredPost.description}</p>

              <div className="pt-2">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition inline-flex items-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Read Pillar Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs & View Mode Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        {/* Tab Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
              activeTab === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            All Publications ({blogPosts.length})
          </button>

          <button
            onClick={() => setActiveTab("pillars")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
              activeTab === "pillars"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            Pillar Guides
          </button>

          <button
            onClick={() => setActiveTab("quick")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
              activeTab === "quick"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            Daily Insights
          </button>
        </div>

        {/* Grid vs List View Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setViewMode("grid")}
            aria-label="Grid View"
            className={`p-1.5 rounded-lg text-xs transition ${
              viewMode === "grid" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            aria-label="List View"
            className={`p-1.5 rounded-lg text-xs transition ${
              viewMode === "list" ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Topic Categories Ribbon */}
      <div className="space-y-3">
        <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
          TOPIC CLUSTERS
        </p>
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500/40 hover:text-blue-400 transition"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Publications Render: Grid vs Editorial List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
            PUBLISHED ARTICLES ({displayedPosts.length})
          </h2>
          <span className="text-xs text-slate-500 font-mono">Sorted by Most Recent</span>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">
                      {post.category}
                    </span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">{post.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-slate-500">{post.readingTime}</span>
                  <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition flex items-center gap-1">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {displayedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="font-semibold text-blue-400">{post.category}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{formatDate(post.publishedAt)}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{post.readingTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
                      {post.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Professional Daily Newsletter Sign-Up */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-950/90 text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white">RECEIVE DAILY ARTICLES IN YOUR INBOX</h2>
        <p className="text-xs text-slate-300 max-w-lg mx-auto">
          Get Abadurrahman's daily tech insights, WebAR code breakdowns, AI agent experiments, and startup founder lessons delivered every morning.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-1 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-blue-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-md shadow-blue-500/20"
          >
            Subscribe Daily
          </button>
        </form>
      </div>
    </div>
  );
}
