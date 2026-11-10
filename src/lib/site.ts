import type { Metadata } from "next";

export const SITE_URL = "https://abad-ur-rahman.vercel.app";
export const SITE_NAME = "Abadurrahman";
export const SITE_TITLE =
  "Abadurrahman | TECHVIMAN CEO, Developer & Entrepreneur";
export const SITE_DESCRIPTION =
  "Meet Abadurrahman, CEO of TECHVIMAN, computer science engineering student, developer, and entrepreneur building WebAR products, AI tools, and SaaS applications.";
export const SITE_AUTHOR = "ABADURRAHMAN";
export const SITE_OG_DESCRIPTION =
  "Official personal portfolio of Abadurrahman, CEO of TECHVIMAN, developer and entrepreneur building WebAR products, AI tools, and SaaS applications.";

export const SOCIAL_PROFILES = {
  github: "https://github.com/rahman2428",
  linkedin: "https://www.linkedin.com/in/abadur-rahman-056582312/",
  instagram: "https://www.instagram.com/abadurrahman/",
  techviman: "https://techviman.com/",
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${normalized}`;
}

export function pageMetadata(
  path: string,
  title: string,
  description: string
): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@abadurrahman",
    },
  };
}
