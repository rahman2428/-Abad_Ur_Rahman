import React from "react";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen, Tag, Share2, Globe, ChevronRight } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/ui/icons";
import { formatDate } from "@/lib/utils";
import Metadata from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return {};

  const articleUrl = `https://techviman.com/blog/${post.slug}`;

  return {
    title: `${post.title} — Abadurrahman Knowledge Platform`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name, url: "https://techviman.com/" }],
    creator: post.author.name,
    publisher: "TECHVIMAN",
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: articleUrl,
      siteName: "Abadurrahman Daily Knowledge Platform",
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
      creator: "@abadurrahman",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedArticles = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const articleUrl = `https://techviman.com/blog/${post.slug}`;

  // Rich Multi-Entity JSON-LD Schema for Google Search
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        headline: post.title,
        description: post.description,
        image: [post.coverImage],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        inLanguage: "en-US",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: "Computer Science Engineer & Startup Founder",
          url: "https://techviman.com/",
          sameAs: [
            "https://github.com/rahman2428",
            "https://www.linkedin.com/in/abadur-rahman-056582312/",
            "https://techviman.com/",
          ],
        },
        publisher: {
          "@type": "Organization",
          name: "TECHVIMAN",
          url: "https://techviman.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://techviman.com/favicon.ico",
          },
        },
        keywords: post.keywords.join(", "),
        articleSection: post.category,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://techviman.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Knowledge Platform",
            item: "https://techviman.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.category,
            item: `https://techviman.com/blog/category/${post.category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: post.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Visible Breadcrumbs UI */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href="/blog" className="hover:text-white transition">Knowledge Platform</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href={`/blog/category/${post.category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`} className="text-blue-400 hover:underline">
            {post.category}
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-300 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5" /> Published {formatDate(post.publishedAt)}
            </span>
            {post.updatedAt && (
              <span className="text-slate-500">(Updated {formatDate(post.updatedAt)})</span>
            )}
            <span className="flex items-center gap-1 text-slate-400 ml-auto">
              <Clock className="w-3.5 h-3.5" /> {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">{post.title}</h1>

          <p className="text-lg text-slate-300 font-medium leading-relaxed">{post.subtitle}</p>

          {/* Author Card Header */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white text-base">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-white">{post.author.name}</p>
              <p className="text-xs text-slate-400 font-mono">{post.author.role}</p>
            </div>
          </div>
        </div>

        {/* Main Content Layout with TOC Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6 border-t border-slate-800">
          {/* Sticky Table of Contents Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-4 glass-card p-6 rounded-2xl border border-slate-800 hidden lg:block">
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" /> TABLE OF CONTENTS
            </p>
            <nav className="space-y-2 text-xs">
              {post.toc.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className="block text-slate-400 hover:text-blue-400 transition py-0.5"
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </div>

          {/* Article HTML Content */}
          <article className="lg:col-span-8 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            <div
              className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3 prose-p:mb-4 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-4 prose-code:text-cyan-300 prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:p-4 prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-800"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Article Tags & Keywords */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-slate-400 font-semibold">TAGS:</span>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </article>
        </div>

        {/* Author Profile Footer Card */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-slate-950/80">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white text-2xl shrink-0">
            A
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="text-lg font-bold text-white">Written by {post.author.name}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{post.author.bio}</p>
            <div className="flex items-center gap-3 pt-1 text-xs">
              <a href="https://github.com/rahman2428" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1">
                <IconGithub className="w-3.5 h-3.5" /> GitHub Profile
              </a>
              <a href="https://techviman.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> TECHVIMAN Ecosystem
              </a>
            </div>
          </div>
        </div>

        {/* Previous / Next Article Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition space-y-1"
            >
              <span className="text-[10px] font-mono text-slate-500">← PREVIOUS ARTICLE</span>
              <p className="text-xs font-bold text-slate-200 line-clamp-1">{prevPost.title}</p>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition space-y-1 text-right"
            >
              <span className="text-[10px] font-mono text-slate-500">NEXT ARTICLE →</span>
              <p className="text-xs font-bold text-slate-200 line-clamp-1">{nextPost.title}</p>
            </Link>
          ) : <div />}
        </div>

        {/* Keep Reading Section */}
        <div className="space-y-6 pt-8 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white">KEEP READING & EXPLORING</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition group"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-blue-400">{rel.category}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{rel.description}</p>
                </div>
                <span className="text-xs font-mono text-blue-400 font-semibold">Read Article →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
