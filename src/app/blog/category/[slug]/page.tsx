import React from "react";
import { blogPosts, blogCategories } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogCategories.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryObj = blogCategories.find((c) => c.slug === resolvedParams.slug);

  if (!categoryObj) {
    notFound();
  }

  const posts = blogPosts.filter(
    (p) => p.category.toLowerCase().replace(/[^a-z0-9]/g, "-") === categoryObj.slug ||
      p.category.toLowerCase() === categoryObj.name.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
        </Link>
      </div>

      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          CATEGORY ARCHIVE
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">{categoryObj.name}</h1>
        <p className="text-base text-slate-300 leading-relaxed font-medium">{categoryObj.description}</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
          ARTICLES IN THIS CATEGORY ({posts.length})
        </h2>

        {posts.length === 0 ? (
          <p className="text-sm text-slate-400 py-8">No articles found in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
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
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">{post.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>By {post.author.name}</span>
                  <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition flex items-center gap-1">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
