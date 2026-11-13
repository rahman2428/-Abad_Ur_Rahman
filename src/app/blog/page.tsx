import React from "react";
import type { Metadata } from "next";
import { BlogHubClient } from "@/components/blog/blog-hub-client";
import { absoluteUrl, pageMetadata } from "@/lib/site";

const blogPageMetadata = pageMetadata(
  "/blog",
  "Articles on AI, Web Development & Product Building",
  "Practical articles by Abadurrahman on artificial intelligence, software engineering, WebAR, product development, and building a technology startup."
);

export const metadata: Metadata = {
  ...blogPageMetadata,
  alternates: {
    canonical: absoluteUrl("/blog"),
    types: {
      "application/rss+xml": absoluteUrl("/rss.xml"),
    },
  },
};

export default function BlogHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Blog Hero Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-400 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          BUILD • CODE • PRODUCT • BUSINESS
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Ideas, engineering & products
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">
          Practical guides and first-hand lessons on software engineering, WebAR, artificial intelligence, product architecture, and building TECHVIMAN.
        </p>
      </div>

      <BlogHubClient />
    </div>
  );
}
