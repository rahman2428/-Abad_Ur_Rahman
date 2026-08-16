export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  subheadline: string;
  bio: string;
  aboutSection: {
    whoIAm: string;
    whatIDo: string;
    whatIBelieve: string[];
    education: {
      degree: string;
      field: string;
      institution: string;
      status: string;
      coursework: string[];
    };
    careerDirection: string;
    interests: string[];
  };
  exploring: string[];
  philosophy: {
    quote: string;
    principles: Array<{
      title: string;
      description: string;
    }>;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
  }>;
}

export const personalProfile: PersonalProfile = {
  name: "ABADURRAHMAN",
  title: "Computer Science Engineering Student • Developer • Startup Founder • Tech Creator",
  tagline: "BUILDING DIGITAL PRODUCTS, EXPERIENCES & BUSINESSES.",
  subheadline:
    "I'm Abadurrahman — a developer and entrepreneur focused on building web applications, AI-powered products, immersive WebAR experiences, and technology-driven businesses.",
  bio: "Computer Science Engineering student passionate about software development, artificial intelligence, entrepreneurship, product development, and emerging technology. I turn ideas into working, scalable digital products.",
  aboutSection: {
    whoIAm:
      "Abadurrahman is a Computer Science Engineering student passionate about software development, artificial intelligence, entrepreneurship, product development, and emerging technology.",
    whatIDo:
      "Build practical digital products, experiment with modern web and AI technologies, and explore how software engineering combined with business thinking can solve real-world problems.",
    whatIBelieve: [
      "Technology should solve meaningful problems and create practical value.",
      "Software engineering should be coupled with product and business vision.",
      "Building and shipping working products teaches more than raw theory alone.",
      "Clean UI, high performance, and SEO optimization are foundational, not optional.",
    ],
    education: {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Engineering University",
      status: "Currently Pursuing",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Web Application Development",
        "Artificial Intelligence & ML Fundamentals",
        "Software Engineering Principles",
      ],
    },
    careerDirection:
      "Building innovative digital products and scaling TECHVIMAN into an impactful technology startup while mastering advanced software engineering and AI systems.",
    interests: [
      "AI Agents & Automation",
      "Full-Stack Web Development",
      "WebXR & 3D Web",
      "SaaS Architecture & Growth",
      "Product Design & UX",
      "Technical Writing & SEO",
    ],
  },
  exploring: [
    "AI Agents",
    "Generative AI",
    "Machine Learning",
    "WebXR & AR",
    "3D Web Technologies",
    "Computer Vision",
    "SaaS Architecture",
    "Cloud Native Computing",
    "Workflow Automation",
    "Developer Tooling",
    "Startup Validation",
    "SEO Systems",
  ],
  philosophy: {
    quote: "Technology gives me the tools. Entrepreneurship gives those tools a purpose.",
    principles: [
      {
        title: "BUILD",
        description: "Create real working products rather than relying only on learning theory.",
      },
      {
        title: "EXPERIMENT",
        description: "Constantly test emerging frameworks, AI models, and 3D technologies.",
      },
      {
        title: "SOLVE",
        description: "Focus effort on genuine user needs and meaningful problem domains.",
      },
      {
        title: "LEARN",
        description: "Continuously upgrade technical stack, architectural knowledge, and business acumen.",
      },
      {
        title: "SHIP",
        description: "Iterate rapidly and move concepts from prototype stage to live production deployment.",
      },
    ],
  },
  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Modern, high-speed, SEO-first responsive web applications built with Next.js, React, and TypeScript.",
      icon: "Code",
      features: ["Next.js App Router & SSG/SSR", "Tailwind CSS Design Systems", "API Integration & DB Architecture"],
    },
    {
      id: "ai-integration",
      title: "AI Integration",
      description: "Integrating LLMs, computer vision, automated workflow pipelines, and intelligent AI features into apps.",
      icon: "Cpu",
      features: ["FastAPI & Python AI Backends", "Background Removal & Image AI", "AI Agent & Prompt Pipelines"],
    },
    {
      id: "saas-dev",
      title: "SaaS Product Building",
      description: "End-to-end MVP architecture for software products, combining authentication, databases, and clean UI.",
      icon: "Layers",
      features: ["Full-Stack CRUD Architecture", "User Authentication & Database", "Scalable Modular Codebases"],
    },
    {
      id: "ar-3d",
      title: "AR & 3D Web Experiences",
      description: "Interactive WebAR and 3D web applications enabling immersive product visualization on mobile and desktop.",
      icon: "Box",
      features: ["WebXR & AR Visualization", "3D Model Rendering (GLB/USDZ)", "Responsive Touch & Camera UI"],
    },
    {
      id: "product-dev",
      title: "Product Development",
      description: "Transforming early-stage concepts into validated working digital products with clear user workflows.",
      icon: "Rocket",
      features: ["Product Scoping & Architecture", "Rapid Prototyping & MVPs", "Clean User Experience"],
    },
    {
      id: "automation",
      title: "Workflow Automation",
      description: "Automating repetitive digital workflows, data scraping, API integrations, and developer tooling.",
      icon: "Zap",
      features: ["Custom Scripting & Automation", "REST API Connectivity", "Task & Data Pipelines"],
    },
  ],
};
