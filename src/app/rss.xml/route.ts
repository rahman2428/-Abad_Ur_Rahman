import { publishedBlogPosts } from "@/data/blog";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function asCdata(value: string): string {
  return `<![CDATA[${value.replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`;
}

export async function GET() {
  const rssItems = publishedBlogPosts.map((post) => {
    const articleUrl = absoluteUrl(`/blog/${post.slug}`);
    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(post.author.name)}</dc:creator>
      <description>${asCdata(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
      <content:encoded>${asCdata(post.contentHtml)}</content:encoded>
    </item>`;
  }).join("\n");
  const lastUpdated = publishedBlogPosts.reduce(
    (latest, post) => {
      const postDate = new Date(post.updatedAt || post.publishedAt);
      return postDate > latest ? postDate : latest;
    },
    new Date(0)
  );

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`${SITE_NAME} Blog`)}</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>Articles on technology, WebAR, AI, software engineering, and startups by Abadurrahman.</description>
    <language>en-IN</language>
    <lastBuildDate>${lastUpdated.toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
