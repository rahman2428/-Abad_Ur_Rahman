import React from "react";
import {
  blogCategorySlug,
  blogTermSlug,
  publishedBlogPosts,
} from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, BookOpen, Globe, ChevronRight } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/ui/icons";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = publishedBlogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return {};

  const articleUrl = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name, url: `${SITE_URL}/#person` }],
    creator: post.author.name,
    publisher: SITE_NAME,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: articleUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
      locale: "en_IN",
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
  const post = publishedBlogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = publishedBlogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? publishedBlogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < publishedBlogPosts.length - 1
      ? publishedBlogPosts[currentIndex + 1]
      : null;

  const relatedArticles = publishedBlogPosts
    .filter((relatedPost) => post.relatedSlugs.includes(relatedPost.slug))
    .slice(0, 3);
  const articleUrl = absoluteUrl(`/blog/${post.slug}`);
  const categorySlug = blogCategorySlug(post.category);
  const readingMinutes = Number.parseInt(post.readingTime, 10);

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
        inLanguage: "en-IN",
        timeRequired: Number.isFinite(readingMinutes)
          ? `PT${readingMinutes}M`
          : undefined,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#person` },
        isPartOf: {
          "@type": "Blog",
          "@id": `${SITE_URL}/blog#blog`,
          name: `${SITE_NAME} Blog`,
          url: absoluteUrl("/blog"),
        },
        keywords: [...post.keywords, ...post.tags].join(", "),
        articleSection: post.category,
        citation: post.references?.map((reference) => reference.url),
        url: articleUrl,
        hasPart: post.toc.map((heading) => ({
          "@type": "WebPageElement",
          name: heading.text,
          url: `${articleUrl}#${heading.id}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Knowledge Platform",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.category,
            item: absoluteUrl(`/blog/category/${categorySlug}`),
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph).replace(/</g, "\\u003c"),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Visible Breadcrumbs UI */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 font-mono flex-wrap">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href="/blog" className="hover:text-white transition">Knowledge Platform</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href={`/blog/category/${categorySlug}`} className="text-blue-400 hover:underline">
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
            <time dateTime={post.publishedAt} className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5" /> Published {formatDate(post.publishedAt)}
            </time>
            {post.updatedAt && (
              <time dateTime={post.updatedAt} className="text-slate-500">
                (Updated {formatDate(post.updatedAt)})
              </time>
            )}
            <span className="flex items-center gap-1 text-slate-400 ml-auto">
              <Clock className="w-3.5 h-3.5" /> {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">{post.title}</h1>

          <p className="text-lg text-slate-300 font-medium leading-relaxed">{post.subtitle}</p>

          {/* Photo section */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
            <div className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-0 items-center">
              <div className="p-4 md:p-6">
                <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={320}
                    height={380}
                    className="h-52 w-full object-cover md:h-64"
                  />
                </div>
              </div>

              <div className="px-4 pb-6 pt-0 md:px-8 md:pb-8 md:pt-0">
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-blue-400">Author</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  ABADURRAHMAN
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  {post.author.role} • Building AI, Web experiences, and future-facing digital products.
                </p>
                <p className="mt-3 text-xs font-mono text-slate-400">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        <figure className="space-y-3">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            width={1200}
            height={630}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full rounded-3xl border border-slate-800 object-cover"
          />
        </figure>

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

            {post.references && post.references.length > 0 && (
              <section aria-labelledby="article-references" className="pt-6 border-t border-slate-800">
                <h2 id="article-references" className="text-lg font-bold text-white">
                  Sources &amp; further reading
                </h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                  {post.references.map((reference) => (
                    <li key={reference.url}>
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 underline decoration-slate-600 underline-offset-4 hover:text-blue-200"
                      >
                        {reference.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Article Tags & Keywords */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-slate-400 font-semibold">TAGS:</span>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${blogTermSlug(tag)}`}
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
