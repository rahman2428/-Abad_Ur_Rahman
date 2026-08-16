export interface LabExperiment {
  id: string;
  title: string;
  tagline: string;
  category: "AI Agent" | "AR / 3D" | "UI Innovation" | "Dev Tool" | "Vision AI";
  status: "IDEA" | "RESEARCHING" | "BUILDING" | "TESTING" | "LIVE";
  progressPercentage: number;
  lastUpdated: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  notes: string;
}

export const labExperiments: LabExperiment[] = [
  {
    id: "ai-agent-publishing",
    title: "Autonomous Content & SEO AI Agent",
    tagline: "Self-evaluating markdown publishing agent",
    category: "AI Agent",
    status: "BUILDING",
    progressPercentage: 75,
    lastUpdated: "August 2026",
    description:
      "Experimenting with multi-step AI workflows that perform topic research, draft structured MDX content, insert JSON-LD metadata, and check internal links automatically.",
    technologies: ["Python", "FastAPI", "OpenAI / Gemini API", "MDX", "TypeScript"],
    githubUrl: "https://github.com/rahman2428",
    notes: "Exploring automated schema validation before article generation.",
  },
  {
    id: "webar-furniture-visualizer",
    title: "WebXR Spatial Furniture & Spatial 3D Viewer",
    tagline: "Instant room object placement via mobile WebAR",
    category: "AR / 3D",
    status: "TESTING",
    progressPercentage: 85,
    lastUpdated: "August 2026",
    description:
      "Building lightweight WebAR spatial anchoring algorithms to project realistic 3D interior assets on physical floors with shadow estimation.",
    technologies: ["Three.js", "WebXR", "GLTF", "USDZ", "JavaScript"],
    demoUrl: "https://techviman.com/",
    githubUrl: "https://github.com/rahman2428",
    notes: "Testing shadow map resolution on mid-range Android cameras.",
  },
  {
    id: "browser-image-segmentation",
    title: "Edge-WebAssembly Background Extraction",
    tagline: "Client-side background removal without server calls",
    category: "Vision AI",
    status: "RESEARCHING",
    progressPercentage: 40,
    lastUpdated: "August 2026",
    description:
      "Testing WebAssembly compiled ONNX Runtime inside browser memory to remove image backgrounds with zero API latency and zero cloud costs.",
    technologies: ["WebAssembly", "ONNX Runtime Web", "TypeScript", "Canvas API"],
    githubUrl: "https://github.com/rahman2428",
    notes: "Benchmarking WASM thread pooling performance across desktop Chrome and mobile Safari.",
  },
  {
    id: "cmd-k-search-engine",
    title: "Client-Side In-Memory Fuzzy Search Engine",
    tagline: "Sub-millisecond keyboard navigation & full-text search",
    category: "Dev Tool",
    status: "LIVE",
    progressPercentage: 100,
    lastUpdated: "August 2026",
    description:
      "Engineered an instant Cmd/Ctrl + K search index parser for Next.js blogs that indexes headings, tags, code snippets, and routes client-side.",
    technologies: ["TypeScript", "Next.js 15", "Fuse.js / Custom Index", "Tailwind CSS"],
    demoUrl: "/blog",
    githubUrl: "https://github.com/rahman2428",
    notes: "Shipped live in Abadurrahman's Knowledge Platform.",
  },
  {
    id: "smart-component-preview",
    title: "Interactive Code & Component Live Sandbox",
    tagline: "Live code preview environment with dark glass aesthetics",
    category: "UI Innovation",
    status: "BUILDING",
    progressPercentage: 60,
    lastUpdated: "August 2026",
    description:
      "Creating modular UI component playgrounds where users can tweak props, view generated Tailwind classes, and copy clean JSX snippets.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/rahman2428",
    notes: "Focusing on smooth animation transitions during state toggles.",
  },
];
