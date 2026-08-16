export interface TechvimanProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "AI" | "AR / 3D" | "SaaS" | "Web App";
  status: "Live" | "Active Development" | "Beta";
  features: string[];
  techStack: string[];
  link?: string;
  github?: string;
  highlight: string;
}

export interface TechvimanData {
  brandName: string;
  tagline: string;
  website: string;
  heroHeadline: string;
  subheadline: string;
  about: string;
  mission: string;
  vision: string;
  relationshipDiagram: {
    founder: string;
    role: string;
    startup: string;
    branches: string[];
  };
  focusAreas: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  journey: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  products: TechvimanProduct[];
  team: Array<{
    name: string;
    role: string;
    bio: string;
  }>;
  futureVision: string[];
}

export const techvimanData: TechvimanData = {
  brandName: "TECHVIMAN",
  tagline: "Building Technology. Creating Possibilities.",
  website: "https://techviman.com/",
  heroHeadline: "INNOVATING DIGITAL PRODUCTS & AI-POWERED SOLUTIONS",
  subheadline:
    "TECHVIMAN is a technology product & digital innovation startup initiative founded by Abadurrahman, dedicated to creating intelligent web applications, WebAR products, SaaS platforms, and digital solutions.",
  about:
    "TECHVIMAN represents the product-building and startup ecosystem of Abadurrahman. It serves as the launchpad for innovative digital software, immersive 3D/WebAR tools, and AI-driven applications designed to enhance business processes and user experiences.",
  mission:
    "Build useful technology products and digital experiences that solve practical real-world problems, enable modern businesses, and create lasting value.",
  vision:
    "Create technology products and digital experiences that make business operations and everyday digital interactions smarter, simpler, highly interactive, and intuitive.",
  relationshipDiagram: {
    founder: "ABADURRAHMAN",
    role: "Founder / Lead Developer / Product Architect",
    startup: "TECHVIMAN",
    branches: ["AI Products & Tools", "SaaS Solutions", "AR & 3D Web Experiences"],
  },
  focusAreas: [
    {
      title: "Digital Products",
      description: "User-centered web applications built with modern engineering standards and responsive design.",
      icon: "Layout",
    },
    {
      title: "AI-Powered Applications",
      description: "Integrating intelligent machine learning workflows, automated processing, and AI APIs into web tools.",
      icon: "Sparkles",
    },
    {
      title: "SaaS Solutions",
      description: "Software-as-a-Service tools designed for scalability, intuitive user interface, and workflow enhancement.",
      icon: "Cloud",
    },
    {
      title: "WebAR & 3D Web",
      description: "Immersive 3D asset visualization and mobile WebAR tools bringing real-world interactivity to browsers.",
      icon: "Maximize",
    },
    {
      title: "Automation Tools",
      description: "Streamlining complex operations through custom API integrations and automated task handlers.",
      icon: "Zap",
    },
    {
      title: "Product Engineering",
      description: "From early validation and architectural design to full-stack implementation and launch deployment.",
      icon: "Code",
    },
  ],
  journey: [
    {
      step: "01",
      title: "IDEA & PROBLEM IDENTIFICATION",
      description: "Recognizing friction in current digital workflows, restaurant menus, image editing, or data management.",
    },
    {
      step: "02",
      title: "EXPERIMENTATION & PROTOTYPING",
      description: "Building technology proof-of-concepts, benchmarking 3D render speed, and testing machine learning APIs.",
    },
    {
      step: "03",
      title: "PRODUCT DEVELOPMENT",
      description: "Architecting modular frontends with Next.js/React and robust backend services using FastAPI and Node.js.",
    },
    {
      step: "04",
      title: "VALIDATION & REFINEMENT",
      description: "Testing prototypes on mobile devices, optimizing Core Web Vitals, and collecting user feedback.",
    },
    {
      step: "05",
      title: "LAUNCH & PRODUCTION DEPLOYMENT",
      description: "Deploying live web applications to global edge infrastructure with continuous updates and monitoring.",
    },
    {
      step: "06",
      title: "EXPANSION & GROWTH",
      description: "Iterating product features, adding SEO knowledge content, and scaling the startup portfolio.",
    },
  ],
  products: [
    {
      id: "ar-menu",
      name: "AR MENU",
      tagline: "WebAR Immersive Restaurant Menu Experience",
      description:
        "An immersive WebAR restaurant menu application allowing diners to preview 3D food items directly in their real environment without requiring mobile app downloads.",
      category: "AR / 3D",
      status: "Live",
      features: [
        "Real-world camera AR visualization",
        "High-definition 3D GLB & USDZ food model preview",
        "Mobile-first responsive ordering interface",
        "Instant browser access via WebXR",
      ],
      techStack: ["JavaScript", "WebXR", "Three.js / ModelViewer", "HTML5", "GLB / USDZ 3D", "Tailwind CSS"],
      link: "https://techviman.com/",
      github: "https://github.com/rahman2428",
      highlight: "WebAR Restaurant Menu with 3D Food Visualization",
    },
    {
      id: "ai-background-remover",
      name: "AI BACKGROUND REMOVER",
      tagline: "Intelligent Image Background Eraser & Editor",
      description:
        "An AI-powered web tool that automatically isolates image foreground objects, removes background artifacts, and allows users to apply custom colors or backgrounds.",
      category: "AI",
      status: "Live",
      features: [
        "Automatic background removal using AI models",
        "High-resolution PNG transparent export",
        "Custom background color and image backdrop picker",
        "Client-side instant preview and batch processing capability",
      ],
      techStack: ["Next.js", "TypeScript", "Python AI Engine", "FastAPI", "Tailwind CSS"],
      link: "https://techviman.com/",
      github: "https://github.com/rahman2428",
      highlight: "AI-Driven Automatic Image Processing & Background Isolation",
    },
    {
      id: "student-db-system",
      name: "STUDENT DATABASE SYSTEM",
      tagline: "Full-Stack Educational Management Platform",
      description:
        "A full-stack CRUD application for managing academic records, student profiles, attendance tracking, and administrative data with secure authentication.",
      category: "SaaS",
      status: "Live",
      features: [
        "Full CRUD (Create, Read, Update, Delete) student records",
        "Role-based authentication & session security",
        "Filterable search index and dynamic data tables",
        "REST API backend with relational database persistence",
      ],
      techStack: ["React", "Node.js", "Express", "MySQL / PostgreSQL", "REST API", "Tailwind CSS"],
      github: "https://github.com/rahman2428",
      highlight: "Full-Stack CRUD Application with Database & API Integration",
    },
    {
      id: "ai-web-app",
      name: "AI-POWERED WEB APPLICATION",
      tagline: "Intelligent Machine Learning Web Interface",
      description:
        "A full-stack web platform combining FastAPI ML API microservices with a modern Next.js user interface for real-time intelligent data analysis.",
      category: "Web App",
      status: "Active Development",
      features: [
        "FastAPI microservice backend for ML inferencing",
        "Next.js frontend with real-time UI states",
        "Structured JSON responses and error boundaries",
        "Scalable modular code architecture",
      ],
      techStack: ["Next.js", "FastAPI", "Python", "TypeScript", "REST APIs", "Tailwind CSS"],
      github: "https://github.com/rahman2428",
      highlight: "Next.js Frontend Integrated with FastAPI AI Backend",
    },
  ],
  team: [
    {
      name: "Abadurrahman",
      role: "Founder & Lead Developer",
      bio: "Computer Science Engineering student leading technology architecture, product engineering, WebAR innovations, and startup strategy at TECHVIMAN.",
    },
  ],
  futureVision: [
    "Expanding WebAR product visualization tools for retail and e-commerce platforms.",
    "Developing AI Agent workflows to automate business operations and content publishing.",
    "Building specialized SaaS tools for small businesses and digital creators.",
    "Growing TECHVIMAN into a recognized innovation studio for practical AI & web products.",
  ],
};
