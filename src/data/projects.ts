export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  research: string;
  idea: string;
  architecture: {
    frontend: string;
    backend: string;
    database?: string;
    deployment: string;
    flowDiagram?: string[];
  };
  design: string;
  development: string[];
  challenges: string[];
  solution: string;
  lessonsLearned: string[];
  futureRoadmap: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "Web" | "AI" | "SaaS" | "AR / 3D" | "Startup" | "Experiments";
  tags: string[];
  featured: boolean;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  techStack: string[];
  status: "Production" | "Live Demo" | "Active Build" | "Completed";
  caseStudy: ProjectCaseStudy;
}

export const projectsData: ProjectItem[] = [
  {
    id: "ar-menu",
    slug: "ar-menu",
    title: "AR MENU — WebAR Restaurant Menu System",
    shortDescription:
      "An immersive WebAR restaurant menu that enables diners to visualize food dishes in 3D in their real environment before ordering.",
    fullDescription:
      "AR Menu transforms traditional paper or static digital restaurant menus into an interactive WebAR 3D experience. Diners open the menu on any mobile browser, tap a dish, and project realistic 3D food items directly onto their table using WebXR, GLB/USDZ models, and modern Web APIs.",
    category: "AR / 3D",
    tags: ["WebXR", "JavaScript", "3D", "AR", "GLB", "USDZ", "Mobile-First"],
    featured: true,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://techviman.com/",
    githubUrl: "https://github.com/rahman2428",
    techStack: ["JavaScript", "WebXR", "Model-Viewer", "GLB / USDZ", "HTML5", "CSS3 / Tailwind"],
    status: "Production",
    caseStudy: {
      overview:
        "AR Menu was conceived to bridge physical dining with spatial computing. Restaurant customers frequently struggle to visualize menu items, leading to uncertainty. By combining WebAR with lightweight 3D models, customers get an instant preview of dish size, texture, and presentation.",
      problem:
        "Traditional restaurant menus lack visual clarity. Photos on menus are often static or absent. Customers have trouble judging portion sizes and presentation, which decreases order confidence and slows down decision time.",
      research:
        "Studied WebXR standards, iOS QuickLook USDZ integration, and Android ModelViewer GLB fallbacks. Discovered that 80%+ of restaurant visitors decline installing mobile apps just to view a menu, making a zero-install WebAR browser solution mandatory.",
      idea:
        "Create a lightning-fast WebAR web menu where scanning a QR code opens a mobile-optimized web app that displays dishes in 3D with camera-based AR placement.",
      architecture: {
        frontend: "Vanilla JS / Next.js with Google <model-viewer> custom WebXR implementation.",
        backend: "Node.js REST API serving dish metadata and asset links.",
        deployment: "Vercel / Cloudflare Edge CDN for global 3D model delivery.",
        flowDiagram: [
          "Diner scans QR Code on table",
          "Web app loads restaurant menu catalog",
          "Diner selects dish & clicks 'View in 3D AR'",
          "WebXR / AR QuickLook initializes phone camera",
          "3D GLB/USDZ model renders on physical table surface",
        ],
      },
      design:
        "Clean, dark-themed mobile interface prioritizing high-contrast typography, category tabs (Starters, Mains, Desserts, Drinks), and instant visual feedback.",
      development: [
        "Modeled and optimized 3D food GLB and USDZ files under 3MB for sub-second mobile loading.",
        "Implemented fallback mechanisms for older devices without WebXR support.",
        "Built responsive camera controls and touch gesture scale/rotation adjustments.",
      ],
      challenges: [
        "Handling cross-platform AR formats (USDZ for iOS Safari vs GLB for Android Chrome).",
        "Optimizing 3D texture sizes to maintain fast page load on 4G mobile connections.",
      ],
      solution:
        "Implemented dual asset routing that dynamically serves USDZ format to iOS QuickLook and GLB to WebXR ModelViewer engines based on user-agent detection.",
      lessonsLearned: [
        "WebAR accessibility is vastly superior to native app requirements for consumer adoption.",
        "3D model polygon count and texture compression directly dictate bounce rates on web apps.",
      ],
      futureRoadmap: [
        "Integrate live cart and table-side ordering checkout.",
        "Add interactive nutritional information overlays on 3D models.",
      ],
    },
  },
  {
    id: "ai-background-remover",
    slug: "ai-background-remover",
    title: "AI BACKGROUND REMOVER",
    shortDescription:
      "An intelligent AI-powered image background eraser that isolates subjects and supports custom backdrop replacements.",
    fullDescription:
      "AI Background Remover is an automated image editing application. It uses machine learning models to detect object contours, eliminate background noise, and export transparent PNGs or custom colored backgrounds for e-commerce and graphics creation.",
    category: "AI",
    tags: ["AI", "Python", "FastAPI", "Next.js", "TypeScript", "Image Processing"],
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://techviman.com/",
    githubUrl: "https://github.com/rahman2428",
    techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "OpenCV / PIL", "Tailwind CSS"],
    status: "Live Demo",
    caseStudy: {
      overview:
        "Designed to streamline image processing for product listings, marketing banners, and personal profile pictures by automating complex background isolation.",
      problem:
        "Manual background removal in graphic design software is time-consuming and requires specialized skills. Existing free online tools place aggressive watermarks or restrict output resolution.",
      research:
        "Evaluated machine learning image segmentation models, balancing cloud inferencing speed against edge GPU resource constraints.",
      idea:
        "Build a clean web app where users drag and drop images, receive high-precision background removal in seconds, and can customize backdrops instantly.",
      architecture: {
        frontend: "Next.js 15 App Router with drag-and-drop file upload & canvas preview.",
        backend: "Python FastAPI microservice executing ML segmentation models.",
        deployment: "Frontend on Vercel, ML API microservice on Render / Container Cloud.",
        flowDiagram: [
          "User uploads image via dropzone UI",
          "Next.js sends image payload to Python FastAPI service",
          "ML model processes image matrix and generates alpha mask",
          "FastAPI returns processed PNG stream",
          "Canvas UI displays instant side-by-side edit controls",
        ],
      },
      design:
        "Sleek dark interface with dual-pane preview (Original vs Processed), color picker palette, and instant PNG download trigger.",
      development: [
        "Built client-side image compression pre-processor to reduce upload latency.",
        "Created background replacement canvas engine supporting solid colors and custom image backdrops.",
      ],
      challenges: [
        "Handling hair detail and semi-transparent objects during automated cutout.",
        "Managing server memory spikes during concurrent high-res image processing requests.",
      ],
      solution:
        "Implemented alpha matting refinement passes in Python and configured async queue processing for heavy payloads.",
      lessonsLearned: [
        "Decoupling the frontend UI from the ML microservice ensures responsive user interaction regardless of backend model load.",
      ],
      futureRoadmap: [
        "Add batch image removal capabilities.",
        "Implement AI shadow generation for e-commerce product photos.",
      ],
    },
  },
  {
    id: "student-database-system",
    slug: "student-database-system",
    title: "STUDENT DATABASE SYSTEM — Full-Stack CRUD Platform",
    shortDescription:
      "A complete full-stack web application for managing educational records, student enrollment, and administrative workflows.",
    fullDescription:
      "Student Database System provides educational institutions with a secure, centralized web portal for managing student records, course enrollments, grade tracking, and administrative reports with role-based access control.",
    category: "SaaS",
    tags: ["React", "Node.js", "Express", "MySQL", "REST API", "Auth"],
    featured: true,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/rahman2428",
    techStack: ["React", "Node.js", "Express.js", "MySQL / SQLite", "JWT Authentication", "Tailwind CSS"],
    status: "Completed",
    caseStudy: {
      overview:
        "Developed to demonstrate robust full-stack software architecture, relational database normalized schema design, RESTful API design, and client-side state management.",
      problem:
        "Legacy academic management scripts were fragmented, prone to data entry errors, lacked multi-user access controls, and provided poor UI feedback.",
      research:
        "Analyzed database normalization guidelines (3NF) to design efficient schemas for students, courses, enrollments, and grades.",
      idea:
        "Create an intuitive, responsive web portal where administrators can efficiently perform CRUD operations with real-time validation and data filtering.",
      architecture: {
        frontend: "React single page application with custom data tables and modal forms.",
        backend: "Node.js + Express REST API with input validation middleware.",
        database: "Relational SQL database with foreign key constraints and indexed lookup queries.",
        deployment: "Full-stack cloud deployment.",
        flowDiagram: [
          "Admin authenticates via JWT session",
          "React frontend requests student data via REST API",
          "Express API queries normalized SQL database",
          "Data returned with pagination & filter parameters",
          "UI updates with interactive edit/delete controls",
        ],
      },
      design:
        "Professional dashboard layout with sidebar navigation, summary statistics cards, search bar, and clean modal dialogs.",
      development: [
        "Designed normalized database tables for Students, Departments, and Enrolled Courses.",
        "Implemented JWT authentication and bcrypt password hashing.",
        "Built dynamic search, pagination, and multi-column sorting components.",
      ],
      challenges: [
        "Preventing SQL injection and handling concurrent record updates safely.",
      ],
      solution:
        "Used parameterized SQL queries, express-validator sanitization, and structured HTTP error handling.",
      lessonsLearned: [
        "Proper relational schema design upfront saves immense effort when extending feature requirements later.",
      ],
      futureRoadmap: [
        "Add automated PDF report generation for academic transcripts.",
        "Implement student self-service portal dashboard.",
      ],
    },
  },
  {
    id: "ai-powered-web-application",
    slug: "ai-powered-web-application",
    title: "AI-POWERED WEB APPLICATION",
    shortDescription:
      "An intelligent web app combining Next.js frontend engineering with FastAPI machine learning microservices.",
    fullDescription:
      "A modern web application showcasing the integration of predictive machine learning models and generative AI capabilities directly into interactive web interfaces via high-speed API endpoints.",
    category: "AI",
    tags: ["Next.js", "FastAPI", "Python", "TypeScript", "Machine Learning", "REST API"],
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/rahman2428",
    techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "PyTorch / Scikit-learn", "Tailwind CSS"],
    status: "Active Build",
    caseStudy: {
      overview:
        "Building a unified template and proof-of-concept platform for serving custom ML models to web clients with zero latency friction.",
      problem:
        "Connecting Python-based data science workflows with modern JavaScript frontend frameworks often suffers from latency, unhandled API state errors, and complex CORS configurations.",
      research:
        "Benchmarked Flask vs FastAPI vs Next.js API routes for machine learning inference handling. FastAPI selected for native async support and automatic OpenAPI documentation.",
      idea:
        "Develop an enterprise-grade starter architecture linking Next.js App Router frontends to Python FastAPI ML microservices.",
      architecture: {
        frontend: "Next.js 15 App Router with Server Components & Client Hooks.",
        backend: "Python FastAPI server with Pydantic payload validation.",
        deployment: "Vercel frontend + Containerized Python microservice.",
      },
      design:
        "Futuristic dark telemetry panel showing live inference latency, active model status, and structured output formatting.",
      development: [
        "Configured TypeScript types generated directly from OpenAPI schema definitions.",
        "Implemented streaming UI updates for real-time model predictions.",
      ],
      challenges: [
        "Managing cold-start delays on serverless ML API deployments.",
      ],
      solution:
        "Implemented client-side optimistic UI states and endpoint health pinging.",
      lessonsLearned: [
        "Type safety across the HTTP boundary (TypeScript + Pydantic) prevents 95% of integration bugs.",
      ],
      futureRoadmap: [
        "Incorporate streaming WebSockets for continuous AI inferencing feedback.",
      ],
    },
  },
];
