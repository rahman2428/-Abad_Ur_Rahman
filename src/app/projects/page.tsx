import { ProjectsIndexClient } from "@/components/projects/projects-index-client";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/projects",
  "Projects & Case Studies — Abadurrahman",
  "Explore Abadurrahman's portfolio of WebAR products, AI tools, SaaS applications, and full-stack experiments built through TECHVIMAN."
);

export default function ProjectsPage() {
  return <ProjectsIndexClient />;
}
