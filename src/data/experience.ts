export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: "Education" | "Startup" | "Product Launch" | "Hackathon" | "Achievement";
  location?: string;
  description: string;
  highlights: string[];
  links?: Array<{
    label: string;
    url: string;
  }>;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "techviman-launch",
    year: "2024 — Present",
    title: "Founder & Lead Developer",
    organization: "TECHVIMAN",
    category: "Startup",
    location: "India",
    description:
      "Founded TECHVIMAN as an innovative technology startup initiative focused on building WebAR products, AI tools, SaaS web applications, and digital solutions.",
    highlights: [
      "Built and deployed AR Menu — a WebAR 3D food visualization product for restaurants.",
      "Architected AI Background Remover app using FastAPI and Next.js.",
      "Established core product strategy, brand identity, and web presence at techviman.com.",
    ],
    links: [
      { label: "Official Website", url: "https://techviman.com/" },
    ],
  },
  {
    id: "btech-cse",
    year: "2023 — Present",
    title: "Bachelor of Technology — Computer Science Engineering",
    organization: "Engineering University",
    category: "Education",
    location: "India",
    description:
      "Pursuing a degree in Computer Science Engineering, building strong foundations in software engineering, algorithms, database systems, AI, and web technology.",
    highlights: [
      "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.",
      "Consistently applying theoretical computer science directly to real-world software product builds.",
      "Participating in technical workshops, peer developer communities, and web engineering events.",
    ],
  },
  {
    id: "ar-menu-launch",
    year: "2024",
    title: "WebAR 3D Restaurant Menu Launch",
    organization: "TECHVIMAN",
    category: "Product Launch",
    description:
      "Designed, developed, and deployed AR Menu, bringing 3D food model visualization to browsers via WebXR and mobile-first QuickLook formats.",
    highlights: [
      "Created sub-3MB optimized 3D GLB/USDZ food assets for instant mobile loading.",
      "Eliminated app-store installation friction by building 100% web-native camera AR.",
      "Published source repository open on GitHub.",
    ],
    links: [
      { label: "GitHub Repo", url: "https://github.com/rahman2428" },
      { label: "Live Demo", url: "https://techviman.com/" },
    ],
  },
  {
    id: "ai-apps-build",
    year: "2024",
    title: "AI Tools & Web Automation Projects",
    organization: "Personal Lab",
    category: "Product Launch",
    description:
      "Engineered multiple practical AI tools including AI Background Remover and FastAPI microservices for machine learning models.",
    highlights: [
      "Built automated image background isolation workflows.",
      "Integrated Python AI microservices with TypeScript Next.js frontends.",
    ],
  },
  {
    id: "crud-system-achievement",
    year: "2023",
    title: "Full-Stack Educational Management Platform",
    organization: "Academic / Personal Project",
    category: "Achievement",
    description:
      "Developed a complete Student Database Management System with SQL relational persistence, JWT authentication, and administrative controls.",
    highlights: [
      "Architected 3NF normalized database tables in MySQL.",
      "Built RESTful Node.js backend endpoints with strict input sanitization.",
    ],
  },
];
