import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
} from "@/lib/site";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

export const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: "Abadurrahman",
  // alternateName: ["ABADURRAHMAN", "Abad Ur Rahman", SITE_AUTHOR],


  alternateName: [
  "ABADURRAHMAN",
  "Abad Ur Rahman",
  "abad-ur-rahman.vercel.app"
],


  jobTitle: "CEO of TECHVIMAN, Developer & Entrepreneur",
  description: SITE_DESCRIPTION,
  url: `${SITE_URL}/`,
  image: absoluteUrl("/apple-touch-icon.png"),
  sameAs: [
    SOCIAL_PROFILES.github,
    SOCIAL_PROFILES.linkedin,
    SOCIAL_PROFILES.instagram,
  ],
  worksFor: {
    "@type": "Organization",
    name: "TECHVIMAN",
    url: SOCIAL_PROFILES.techviman,
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  name: SITE_NAME,
  alternateName: ["ABADURRAHMAN", "Abad Ur Rahman"],
  url: `${SITE_URL}/`,
  description: SITE_DESCRIPTION,
  inLanguage: "en-IN",
  publisher: { "@id": personId },
  author: { "@id": personId },
};

export function SiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [websiteSchema, personSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
