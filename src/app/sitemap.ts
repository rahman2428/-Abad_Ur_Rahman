import { MetadataRoute } from "next";
import { blogPosts, blogCategories } from "@/data/blog";
import { projectsData } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/techviman",
    "/skills",
    "/experience",
    "/lab",
    "/now",
    "/resume",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${SITE_URL}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/blog" || route === "/techviman" ? 0.95 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "daily" as const,
    priority: post.featured ? 1.0 : 0.9,
  }));

  const categoryRoutes = blogCategories.map((cat) => ({
    url: `${SITE_URL}/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const tagSlugs = Array.from(
    new Set(
      blogPosts.flatMap((post) =>
        post.tags.map((tag) => tag.toLowerCase().replace(/[^a-z0-9]/g, "-"))
      )
    )
  );

  const tagRoutes = tagSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/tag/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes, ...tagRoutes, ...projectRoutes];
}
