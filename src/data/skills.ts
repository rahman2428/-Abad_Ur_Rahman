export interface SkillItem {
  name: string;
  level: "Proficient" | "Advanced" | "Exploring";
  iconName?: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "programming",
    categoryName: "Programming Languages",
    description: "Core languages used for software development, algorithm design, and system architecture.",
    skills: [
      { name: "Python", level: "Advanced", description: "Backend APIs, AI/ML models, scripting, and data pipelines." },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Modern Web Apps, WebXR, DOM manipulation, async logic." },
      { name: "TypeScript", level: "Advanced", description: "Type-safe Next.js & React scalable application engineering." },
      { name: "C", level: "Proficient", description: "Low-level memory management, pointers, and CS fundamentals." },
      { name: "C++", level: "Proficient", description: "Object-oriented programming, data structures, and algorithms." },
      { name: "Java", level: "Proficient", description: "Object-oriented design, enterprise concepts, and DS implementation." },
      { name: "HTML5", level: "Advanced", description: "Semantic markup, web accessibility (a11y), and SEO structure." },
      { name: "CSS3", level: "Advanced", description: "Custom layouts, keyframe animations, flexbox, grid, and design tokens." },
    ],
  },
  {
    id: "frontend",
    categoryName: "Frontend Development",
    description: "Frameworks and styling engines for building fast, responsive, and accessible user interfaces.",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", description: "SSG/SSR, Server Components, dynamic routes, and Web Vitals." },
      { name: "React", level: "Advanced", description: "Component-driven architecture, custom hooks, state management." },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first design systems, responsive layouts, glassmorphism." },
      { name: "Framer Motion / Motion", level: "Advanced", description: "Fluid UI micro-interactions, page transitions, and gestures." },
    ],
  },
  {
    id: "backend",
    categoryName: "Backend & APIs",
    description: "Server frameworks and API architectures for robust, secure backend workflows.",
    skills: [
      { name: "FastAPI", level: "Advanced", description: "Asynchronous Python REST APIs with automatic OpenAPI specs." },
      { name: "Flask", level: "Proficient", description: "Lightweight Python microservices and backend routing." },
      { name: "Django", level: "Exploring", description: "Full-stack Python web framework with built-in ORM." },
      { name: "REST APIs", level: "Advanced", description: "RESTful architecture, endpoint design, JSON handling, and CORS." },
      { name: "Node.js & Express", level: "Proficient", description: "Event-driven JavaScript backend APIs and middleware." },
    ],
  },
  {
    id: "ai-ml",
    categoryName: "AI & Machine Learning",
    description: "Artificial intelligence frameworks, model integration, and automated pipelines.",
    skills: [
      { name: "AI Agents & Pipelines", level: "Advanced", description: "Autonomous workflow agents, tool integration, and prompts." },
      { name: "Generative AI APIs", level: "Advanced", description: "LLM integration, multi-modal inferencing, structured outputs." },
      { name: "PyTorch", level: "Exploring", description: "Deep learning model experimentation and tensor operations." },
      { name: "TensorFlow / Keras", level: "Exploring", description: "Machine learning neural network training and evaluation." },
      { name: "Scikit-Learn", level: "Proficient", description: "Supervised and unsupervised classification, regression, clustering." },
    ],
  },
  {
    id: "databases",
    categoryName: "Databases & Storage",
    description: "Relational and document storage systems for persistent data management.",
    skills: [
      { name: "MySQL", level: "Proficient", description: "Relational tables, schema normalization, index optimization." },
      { name: "PostgreSQL", level: "Proficient", description: "Advanced relational queries, JSON operations, integrity rules." },
      { name: "SQLite", level: "Advanced", description: "Embedded fast database storage for local testing and apps." },
      { name: "Firebase / Firestore", level: "Proficient", description: "Realtime database, authentication, and cloud storage." },
    ],
  },
  {
    id: "tools",
    categoryName: "Developer Tools & DevOps",
    description: "Essential workflow, version control, and development environments.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Version control, branching workflows, PRs, CI actions." },
      { name: "Docker", level: "Exploring", description: "Containerizing web and backend applications for deployment." },
      { name: "VS Code", level: "Advanced", description: "Primary IDE with custom configurations and debugging extensions." },
      { name: "Postman", level: "Advanced", description: "API testing, payload inspection, and endpoint documentation." },
    ],
  },
  {
    id: "cloud",
    categoryName: "Cloud & Deployment",
    description: "Hosting platforms and edge networks for continuous software deployment.",
    skills: [
      { name: "Vercel", level: "Advanced", description: "Global edge deployment for Next.js applications and domains." },
      { name: "Render", level: "Proficient", description: "Containerized Python API and web service hosting." },
      { name: "Railway", level: "Proficient", description: "Backend service deployment and managed cloud database." },
      { name: "AWS (Basics)", level: "Exploring", description: "S3 storage buckets, EC2 instances, and CloudFront." },
    ],
  },
  {
    id: "emerging",
    categoryName: "Emerging Technologies",
    description: "Frontier digital domains shaping the future of web and software experiences.",
    skills: [
      { name: "WebXR & AR", level: "Advanced", description: "Mobile camera WebAR rendering and real-world 3D placement." },
      { name: "3D Web (Three.js)", level: "Advanced", description: "Browser 3D scenes, particle grids, GLB/USDZ models." },
      { name: "Computer Vision", level: "Exploring", description: "Image segmentation, background extraction, object detection." },
      { name: "SEO & Growth Engines", level: "Advanced", description: "Technical SEO, schema JSON-LD, sitemaps, topical authority." },
    ],
  },
];
