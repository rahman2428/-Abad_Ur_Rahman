import React from "react";
import { BlogHubClient } from "@/components/blog/blog-hub-client";

export const metadata = {
  title: "Daily Knowledge Platform — Abadurrahman • Build, Code & Business",
  description:
    "Daily technology, WebAR, AI tools, programming, and startup lessons published by Abadurrahman. Complete daily SEO knowledge hub for developers and entrepreneurs.",
};

export default function BlogHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Blog Hero Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-400 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          DAILY PUBLISHING PLATFORM • BUILD • CODE • BUSINESS
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          ABADURRAHMAN'S DAILY KNOWLEDGE PLATFORM
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          Writing 1 new article every day covering software engineering, WebAR innovations, artificial intelligence, product architecture, and lessons from building TECHVIMAN.
        </p>
      </div>

      <BlogHubClient />
    </div>
  );
}
