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
    url: "https://www.linkedin.com/in/abadurrahman/",
    handle: "Abadurrahman",
    iconName: "Linkedin",
  },
  {
    id: "x",
    name: "X (Twitter)",
    url: "https://x.com/AbadUrRahman24",
    handle: "@AbadUrRahman24",
    iconName: "Twitter",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/abadurrahman_24/",
    handle: "@abadurrahman_24",
    iconName: "Instagram",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:contact@techviman.com",
    handle: "abadurrahman2428@gmail.com",
    iconName: "Mail",
  },
];
