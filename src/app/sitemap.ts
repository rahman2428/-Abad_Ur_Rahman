import { MetadataRoute } from "next";
import {
  blogCategories,
  blogCategorySlug,
  publishedBlogPosts,
} from "@/data/blog";
import { projectsData } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestBlogUpdate = publishedBlogPosts.reduce(
    (latest, post) => {
      const postDate = new Date(post.updatedAt || post.publishedAt);
      return postDate > latest ? postDate : latest;
    },
    new Date(0)
  );

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
    lastModified: route === "/blog" ? latestBlogUpdate : new Date(),
    changeFrequency: route === "/blog" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/blog" || route === "/techviman" ? 0.95 : 0.8,
  }));

  const blogRoutes = publishedBlogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: post.featured ? 0.9 : 0.8,
  }));

  const categoryRoutes = blogCategories
    .map((category) => {
      const categoryPosts = publishedBlogPosts.filter(
        (post) => blogCategorySlug(post.category) === category.slug
      );
      if (categoryPosts.length === 0) return null;

      const lastModified = categoryPosts.reduce((latest, post) => {
        const postDate = new Date(post.updatedAt || post.publishedAt);
        return postDate > latest ? postDate : latest;
      }, new Date(0));

      return {
        url: `${SITE_URL}/blog/category/${category.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    })
    .filter(
      (route): route is NonNullable<typeof route> => route !== null
    );

  const projectRoutes = projectsData.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes, ...projectRoutes];
}
