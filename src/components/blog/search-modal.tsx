"use client";

import React, { useState, useEffect } from "react";
import { Search, X, BookOpen, Tag, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { projectsData } from "@/data/projects";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered from parent or global listener
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase()) ||
      post.category.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      project.category.toLowerCase().includes(query.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] text-slate-100 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-blue-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, projects, topics, or tech stack... (e.g. AI, WebAR, Next.js)"
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm md:text-base focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Quick Categories Bar when empty */}
          {query.trim() === "" && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Popular Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => {
                      router.push(`/blog/category/${cat.slug}`);
                      onClose();
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-blue-600/30 hover:border-blue-500/50 border border-slate-700/60 text-slate-300 transition"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blog Articles Results */}
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Articles ({filteredPosts.length})
            </p>
            {filteredPosts.length === 0 ? (
              <p className="text-sm text-slate-500 italic py-2">No matching articles found.</p>
            ) : (
              <div className="space-y-2">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={onClose}
                    className="block p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700/50 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">{post.readingTime}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition mt-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{post.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Projects Results */}
          <div>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> Projects & Case Studies ({filteredProjects.length})
            </p>
            {filteredProjects.length === 0 ? (
              <p className="text-sm text-slate-500 italic py-2">No matching projects found.</p>
            ) : (
              <div className="space-y-2">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    onClick={onClose}
                    className="block p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700/50 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                        {project.category}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-400 transition mt-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{project.shortDescription}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-950/60 text-xs text-slate-500 flex justify-between items-center">
          <span>Press ESC or click outside to close</span>
          <span className="font-mono text-[11px] text-slate-400">Cmd / Ctrl + K</span>
        </div>
      </div>
    </div>
  );
}
