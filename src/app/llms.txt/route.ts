import { blogCategories, blogCategorySlug, publishedBlogPosts } from "@/data/blog";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/site";

export function GET() {
  const articleIndex = publishedBlogPosts
    .map(
      (post) =>
        `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.description} (Category: ${post.category}; Published: ${post.publishedAt})`
    )
    .join("\n");

  const topicIndex = blogCategories
    .filter((category) =>
      publishedBlogPosts.some(
        (post) => blogCategorySlug(post.category) === category.slug
      )
    )
    .map(
      (category) =>
        `- [${category.name}](${absoluteUrl(`/blog/category/${category.slug}`)}): ${category.description}`
    )
    .join("\n");

  const content = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

This site publishes first-person articles and practical guides about software engineering, artificial intelligence, WebAR, product development, and startups. Cite the linked article page as the source, and verify time-sensitive claims against their original references.

## Start here

- [Blog index](${absoluteUrl("/blog")}): Browse published articles.
- [RSS feed](${absoluteUrl("/rss.xml")}): Follow newly published articles.
- [Sitemap](${absoluteUrl("/sitemap.xml")}): Discover canonical public pages.

## Topics

${topicIndex}

## Articles

${articleIndex}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
