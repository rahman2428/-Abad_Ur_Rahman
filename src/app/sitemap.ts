import { MetadataRoute } from "next";
import { blogPosts, blogCategories } from "@/data/blog";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techviman.com";

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
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/blog" || route === "/techviman" ? 0.95 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "daily" as const,
    priority: post.featured ? 1.0 : 0.9,
  }));

  const categoryRoutes = blogCategories.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes, ...projectRoutes];
}
