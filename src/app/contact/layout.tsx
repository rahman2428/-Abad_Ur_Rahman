import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/contact",
  "Contact Abadurrahman — TECHVIMAN CEO & Developer",
  "Contact Abadurrahman, CEO of TECHVIMAN, for web development, WebAR, AI tools, SaaS collaboration, and product-building inquiries."
);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
