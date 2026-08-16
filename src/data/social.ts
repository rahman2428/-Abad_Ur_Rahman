export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  iconName: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/rahman2428",
    handle: "@rahman2428",
    iconName: "Github",
  },
  {
    id: "techviman",
    name: "TECHVIMAN",
    url: "https://techviman.com/",
    handle: "techviman.com",
    iconName: "Globe",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abadur-rahman-056582312/",
    handle: "Abadurrahman",
    iconName: "Linkedin",
  },
  {
    id: "x",
    name: "X (Twitter)",
    url: "https://x.com/",
    handle: "@abadurrahman",
    iconName: "Twitter",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/",
    handle: "@abadurrahman",
    iconName: "Instagram",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:contact@techviman.com",
    handle: "contact@techviman.com",
    iconName: "Mail",
  },
];
