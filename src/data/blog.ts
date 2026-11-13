export interface BlogHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface BlogReference {
  title: string;
  url: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt?: string;
  category:
    | "AI"
    | "Coding"
    | "Web Development"
    | "Entrepreneurship"
    | "Business"
    | "Startups"
    | "SaaS"
    | "Technology"
    | "AR / 3D"
    | "Productivity"
    | "Career"
    | "Tutorials";
  tags: string[];
  keywords: string[];
  coverImage: string;
  coverImageAlt: string;
  readingTime: string;
  featured: boolean;
  pillar: boolean;
  draft: boolean;
  canonicalUrl: string;
  toc: BlogHeading[];
  contentHtml: string;
  relatedSlugs: string[];
  references?: BlogReference[];
}

export const blogCategories = [
  { slug: "ai", name: "AI & Machine Learning", description: "Artificial Intelligence, LLMs, AI Agents, APIs, and Computer Vision." },
  { slug: "coding", name: "Coding & Algorithms", description: "Python, JavaScript, TypeScript, C++, Data Structures, and Software Architecture." },
  { slug: "web-development", name: "Web Development", description: "Next.js, React, Web Vitals, Responsive Design, and APIs." },
  { slug: "entrepreneurship", name: "Entrepreneurship & Startups", description: "Building products, startup lessons, MVPs, validation, and founder insights." },
  { slug: "saas", name: "SaaS & Digital Products", description: "SaaS architecture, user onboarding, business models, and product growth." },
  { slug: "ar-3d", name: "AR & 3D Web", description: "WebXR, Three.js, WebAR, 3D modeling, and spatial computing." },
  { slug: "technology", name: "Emerging Technology", description: "Cloud computing, developer tooling, automation, and tech trends." },
];

export function blogTermSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function blogCategorySlug(category: string): string {
  if (category === "AR / 3D") return "ar-3d";

  const matchingCategory = blogCategories.find(
    (item) => item.slug === blogTermSlug(category)
  );
  return matchingCategory?.slug ?? blogTermSlug(category);
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-ai-agents-evolution",
    slug: "ai-agents-the-next-evolution-of-artificial-intelligence",
    title: "AI Agents: The Next Evolution of Artificial Intelligence",
    subtitle: "Why intelligent goal-oriented agents that reason, use tools, and execute tasks represent the future of AI.",
    description:
      "An in-depth guide by Abadurrahman exploring AI agents: how they work, chatbots vs agents, multi-agent systems, business applications, and the shift from generating text to executing tasks.",
    author: {
      name: "Abadurrahman",
      role: "Developer & Startup Founder",
      avatar: "/my_photo/abadurrahman.jpg",
      bio: "Computer Science Engineering student, founder of TECHVIMAN, building AI tools, web apps, and WebAR products.",
    },
    publishedAt: "2026-08-17",
    updatedAt: "2026-08-17",
    category: "AI",
    tags: ["AI Agents", "Artificial Intelligence", "Automation", "Multi-Agent", "TECHVIMAN", "SaaS", "Future Tech"],
    keywords: ["AI agents evolution", "what are AI agents", "AI chatbots vs AI agents", "multi agent systems", "Abadurrahman AI agent guide"],
    coverImage: "/blog/ai-agents-cover.png",
    coverImageAlt: "Cover image for the article about AI agents and automation",
    readingTime: "9 min read",
    featured: true,
    pillar: true,
    draft: false,
    canonicalUrl: "https://abad-ur-rahman.vercel.app/blog/ai-agents-the-next-evolution-of-artificial-intelligence",
    toc: [
      { id: "what-are-ai-agents", text: "What Are AI Agents?", level: 2 },
      { id: "how-do-ai-agents-work", text: "How Do AI Agents Work?", level: 2 },
      { id: "ai-chatbots-vs-ai-agents", text: "AI Chatbots vs AI Agents", level: 2 },
      { id: "why-ai-agents-matter-for-businesses", text: "Why AI Agents Matter for Businesses", level: 2 },
      { id: "the-rise-of-multi-agent-systems", text: "The Rise of Multi-Agent Systems", level: 2 },
      { id: "ai-agents-for-entrepreneurs", text: "AI Agents for Entrepreneurs", level: 2 },
      { id: "ai-agents-and-software-development", text: "AI Agents and Software Development", level: 2 },
      { id: "ai-agents-in-education", text: "AI Agents in Education", level: 2 },
      { id: "the-challenges-of-ai-agents", text: "The Challenges of AI Agents", level: 2 },
      { id: "the-future-of-ai-agents", text: "The Future of AI Agents", level: 2 },
      { id: "ai-agents-are-more-than-another-ai-trend", text: "AI Agents Are More Than Another AI Trend", level: 2 },
      { id: "final-thoughts", text: "Final Thoughts", level: 2 },
    ],
    relatedSlugs: ["building-ai-powered-web-apps-with-nextjs-and-fastapi", "how-i-built-an-immersive-webar-restaurant-menu"],
    references: [
      {
        title: "Anthropic: Building effective agents",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
      },
      {
        title: "OpenAI Agents SDK documentation",
        url: "https://openai.github.io/openai-agents-python/",
      },
    ],
    contentHtml: `
      <p class="lead">Artificial Intelligence is moving beyond simple chatbots and question-answering systems. The next major evolution is <strong>AI Agents</strong>—intelligent systems that can understand goals, make decisions, use tools, execute tasks, learn from feedback, and work toward an outcome with limited human intervention.</p>
      
      <p>In the coming years, AI agents could become an important part of how businesses operate, how developers build software, how students learn, and how entrepreneurs create new products.</p>

      <h2 id="what-are-ai-agents">What Are AI Agents?</h2>
      <p>An AI agent is a software system capable of <strong>perceiving information, reasoning about a goal, taking actions, and evaluating the results of those actions</strong>.</p>
      <p>A traditional AI chatbot might respond when a user asks:</p>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-1 italic text-slate-300">“What are the latest trends in digital marketing?”</blockquote>
      <p>An AI agent could go much further. It could:</p>
      <ol class="list-decimal pl-5 space-y-1.5 my-3 text-slate-300">
        <li>Understand the user's objective.</li>
        <li>Research current information.</li>
        <li>Analyze competitors.</li>
        <li>Identify marketing opportunities.</li>
        <li>Create a marketing strategy.</li>
        <li>Generate content.</li>
        <li>Schedule campaigns through connected tools.</li>
        <li>Analyze the results.</li>
        <li>Improve the strategy based on performance.</li>
      </ol>
      <p class="font-bold text-blue-400 my-3">The difference is simple: A chatbot primarily answers. An AI agent can act.</p>

      <h2 id="how-do-ai-agents-work">How Do AI Agents Work?</h2>
      <p>Most AI agents are built around several important components.</p>

      <h3 id="1-goal" class="text-lg font-bold text-white mt-4 mb-2">1. Goal</h3>
      <p>The agent first needs to understand what it is supposed to accomplish. For example: <strong>Goal: Increase website traffic by 30% in three months.</strong></p>

      <h3 id="2-reasoning" class="text-lg font-bold text-white mt-4 mb-2">2. Reasoning</h3>
      <p>The agent breaks the larger objective into smaller tasks. It might determine that it needs to research keywords, analyze competitors, create content, optimize existing pages, monitor search performance, and improve content based on results.</p>

      <h3 id="3-tools" class="text-lg font-bold text-white mt-4 mb-2">3. Tools</h3>
      <p>An agent becomes significantly more useful when it can interact with external tools. Depending on the application, an agent may use web search, databases, APIs, email, cloud services, code execution, CRMs, analytics platforms, spreadsheets, and business applications.</p>

      <h3 id="4-memory" class="text-lg font-bold text-white mt-4 mb-2">4. Memory</h3>
      <p>Memory allows an agent to maintain useful information across interactions. A business agent could remember customer preferences, previous conversations, business goals, past campaigns, product information, and previous decisions.</p>

      <h3 id="5-action" class="text-lg font-bold text-white mt-4 mb-2">5. Action</h3>
      <p>The most important capability is taking action. An agent might send an email, create a report, update a database, write code, create a document, schedule a meeting, analyze data, or submit information through an API.</p>

      <h3 id="6-feedback" class="text-lg font-bold text-white mt-4 mb-2">6. Feedback</h3>
      <p>After performing an action, an intelligent agent can examine the result. If something failed, it can potentially modify its approach and try again. This creates an iterative cycle:</p>

      <pre><code>Goal → Plan → Act → Observe → Evaluate → Improve</code></pre>

      <h2 id="ai-chatbots-vs-ai-agents">AI Chatbots vs AI Agents</h2>
      <p>The distinction between AI assistants and AI agents is becoming increasingly important.</p>

      <div class="overflow-x-auto my-4">
        <table class="w-full text-xs text-left border-collapse">
          <thead>
            <tr class="border-b border-slate-700 bg-slate-900 text-blue-400">
              <th class="p-2.5">Traditional AI Chatbot</th>
              <th class="p-2.5">AI Agent</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800 text-slate-300">
            <tr><td class="p-2.5">Primarily responds to prompts</td><td class="p-2.5">Works toward goals</td></tr>
            <tr><td class="p-2.5">Usually reactive</td><td class="p-2.5">Can be proactive</td></tr>
            <tr><td class="p-2.5">Generates information</td><td class="p-2.5">Can execute actions</td></tr>
            <tr><td class="p-2.5">Limited tool usage</td><td class="p-2.5">Can use multiple tools</td></tr>
            <tr><td class="p-2.5">Short-term interaction</td><td class="p-2.5">Can maintain memory</td></tr>
            <tr><td class="p-2.5">Human performs the final task</td><td class="p-2.5">Agent may complete parts of the task</td></tr>
          </tbody>
        </table>
      </div>

      <p>For example, if you ask a chatbot: <em>“Write an email to a customer,”</em> it generates the email. An agent could potentially: <strong>Identify the customer → understand the issue → write the email → check relevant information → send it → record the interaction.</strong></p>

      <h2 id="why-ai-agents-matter-for-businesses">Why AI Agents Matter for Businesses</h2>
      <p>AI agents could dramatically change business operations. Imagine a small startup with limited employees. Instead of hiring separate people for every repetitive function, the company could deploy specialized AI agents for different workflows:</p>

      <ul class="list-disc pl-5 space-y-1.5 my-3">
        <li><strong>Sales Agent:</strong> Find potential customers, research prospects, qualify leads, prepare personalized messages, update CRM records, and follow up.</li>
        <li><strong>Marketing Agent:</strong> Research trends, generate content ideas, write drafts, analyze competitors, track campaign performance, and suggest improvements.</li>
        <li><strong>Customer Support Agent:</strong> Answer common questions, search documentation, troubleshoot problems, create support tickets, and escalate complex issues.</li>
        <li><strong>Developer Agent:</strong> Analyze a codebase, create features, write tests, find bugs, explain errors, and prepare pull requests.</li>
      </ul>
      <p>The result is not necessarily the replacement of every employee. Instead, the bigger opportunity is <strong>human + AI collaboration</strong>.</p>

      <h2 id="the-rise-of-multi-agent-systems">The Rise of Multi-Agent Systems</h2>
      <p>One of the most exciting developments is the idea of <strong>multi-agent systems</strong>. Instead of relying on one AI agent to perform everything, multiple specialized agents can work together:</p>

      <pre><code>Research Agent → Strategy Agent → Coding Agent → Testing Agent → Deployment Agent</code></pre>

      <p>Each agent has a specific responsibility. Imagine building a website: A research agent analyzes competitors, a product agent defines requirements, a coding agent implements the website, a testing agent finds bugs, a deployment agent prepares production, and a monitoring agent observes performance after launch.</p>

      <h2 id="ai-agents-for-entrepreneurs">AI Agents for Entrepreneurs</h2>
      <p>AI agents could be particularly powerful for entrepreneurs who manage many responsibilities: product development, marketing, sales, customer support, research, finance, operations, and content creation.</p>
      <p>For a startup such as <strong>TECHVIMAN</strong>, AI agents could potentially be used to automate internal research, content workflows, customer communication, lead qualification, development assistance, and business analytics. One entrepreneur with a small human team could operate a much larger digital operation.</p>

      <h2 id="ai-agents-and-software-development">AI Agents and Software Development</h2>
      <p>Software development is already becoming increasingly agentic. Instead of asking AI only: <em>“Write this function,”</em> developers can describe a larger objective: <em>“Build a user authentication system with registration, login, password reset, database integration, validation, and automated tests.”</em></p>
      <p>An AI coding agent can reason about the project, inspect existing files, modify multiple components, run tests, identify errors, and iterate. However, understanding CS fundamentals (architecture, security, databases, performance) remains extremely important.</p>

      <h2 id="ai-agents-in-education">AI Agents in Education</h2>
      <p>Imagine a personal learning agent that understands a student's current knowledge, weak subjects, study schedule, exam dates, learning speed, and previous mistakes. The agent creates personalized lessons, practice questions, and evaluates answers. AI helps create <strong>personalized education at scale</strong>.</p>

      <h2 id="the-challenges-of-ai-agents">The Challenges of AI Agents</h2>
      <p>AI agents are powerful, but they are not perfect:</p>
      <ul class="list-disc pl-5 space-y-1.5 my-3">
        <li><strong>Hallucinations:</strong> Incorrect reasoning can produce real consequences when connected to real-world tools.</li>
        <li><strong>Security:</strong> Permissions must be carefully controlled to prevent unauthorized actions.</li>
        <li><strong>Privacy:</strong> Processing sensitive information requires strong data protection systems.</li>
        <li><strong>Reliability:</strong> Important workflows require validation, monitoring, testing, and human oversight.</li>
        <li><strong>Cost:</strong> Advanced agents require computational resources, API usage, and infrastructure.</li>
      </ul>

      <h2 id="the-future-of-ai-agents">The Future of AI Agents</h2>
      <p>We may see ecosystems of specialized agents working together:</p>

      <pre><code>CEO Agent
   ↓
Strategy Agent
   ↓
Research Agent + Marketing Agent + Sales Agent + Development Agent + Finance Agent
   ↓
Tools, APIs, Databases and Business Systems</code></pre>

      <p>Humans remain responsible for high-level judgment, creativity, ethics, and relationships. Software shifts from something humans operate to something that <strong>operates on our behalf</strong>.</p>

      <h2 id="ai-agents-are-more-than-another-ai-trend">AI Agents Are More Than Another AI Trend</h2>
      <p>They represent a broader shift in human-technology interaction:</p>
      <pre><code>Traditional Model: Human → Software → Result
Emerging Model:    Human → AI Agent → Tools → Actions → Result</code></pre>
      <p>The most valuable AI systems will be those that can <strong>understand a goal, reason about it, use the right tools, execute multiple steps, and continuously improve the outcome.</strong></p>

      <h2 id="final-thoughts">Final Thoughts</h2>
      <p>Artificial Intelligence is moving from <strong>generating answers toward completing tasks</strong>. The real question is no longer: <em>“What can AI tell me?”</em> but rather <em>“What can AI help me accomplish?”</em> And that is where the age of AI agents truly begins.</p>
    `,
  },
  {
    id: "post-1",
    slug: "how-i-built-an-immersive-webar-restaurant-menu",
    title: "How I Built an Immersive WebAR Restaurant Menu in 3D: Architecture & Lessons",
    subtitle: "Bringing spatial 3D visualization to browser dining without app downloads.",
    description:
      "A complete technical breakdown of building AR Menu using WebXR, Three.js model viewers, GLB/USDZ asset optimization, and mobile-first responsive engineering.",
    author: {
      name: "Abadurrahman",
      role: "Developer & Startup Founder",
      avatar: "/my_photo/abadurrahman.jpg",
      bio: "Computer Science Engineering student, founder of TECHVIMAN, building AI tools, web apps, and WebAR products.",
    },
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-16",
    category: "AR / 3D",
    tags: ["WebXR", "JavaScript", "3D", "AR", "GLB", "USDZ", "TECHVIMAN"],
    keywords: ["WebAR restaurant menu", "WebXR 3D food viewer", "Three.js AR menu", "TECHVIMAN AR Menu"],
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Cover image for the WebAR restaurant menu case study",
    readingTime: "6 min read",
    featured: false,
    pillar: true,
    draft: false,
    canonicalUrl: "https://abad-ur-rahman.vercel.app/blog/how-i-built-an-immersive-webar-restaurant-menu",
    toc: [
      { id: "the-friction-in-traditional-dining", text: "The Friction in Traditional Dining", level: 2 },
      { id: "why-zero-install-webar", text: "Why Zero-Install WebAR Matters", level: 2 },
      { id: "system-architecture-glb-vs-usdz", text: "System Architecture: GLB vs USDZ Assets", level: 2 },
      { id: "performance-optimizations-under-3mb", text: "Performance Optimizations: Under 3MB Assets", level: 2 },
      { id: "key-takeaways-for-developers", text: "Key Takeaways for Developers & Founders", level: 2 },
    ],
    relatedSlugs: ["ai-agents-the-next-evolution-of-artificial-intelligence", "building-ai-powered-web-apps-with-nextjs-and-fastapi"],
    references: [
      {
        title: "MDN: WebXR Device API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API",
      },
      {
        title: "Google: model-viewer documentation",
        url: "https://modelviewer.dev/",
      },
    ],
    contentHtml: `
      <p class="lead">In physical restaurants, diners frequently hesitate when ordering unfamiliar dishes. Photographs on paper menus are often static or non-existent, leaving guests guessing about portion sizes, presentation, and ingredients.</p>
      
      <h2 id="the-friction-in-traditional-dining">The Friction in Traditional Dining</h2>
      <p>We started with two product assumptions to validate with restaurant teams and diners:</p>
      <ul>
        <li>Diners benefit from seeing a dish's appearance and portion before ordering.</li>
        <li>A menu that opens from a QR code should not require an app download.</li>
      </ul>
      <p>This led to the creation of <strong>AR Menu</strong> under the TECHVIMAN product banner — a 100% web-native solution that runs directly inside Chrome, Safari, or mobile web browsers.</p>

      <h2 id="why-zero-install-webar">Why Zero-Install WebAR Matters</h2>
      <p>Traditional Augmented Reality required users to download heavy mobile applications from the App Store or Play Store. Native apps introduce extreme onboarding friction in quick-service scenarios like dining.</p>
      <p>By leveraging modern <strong>WebXR standards</strong> and browser fallback frameworks (like Google's ModelViewer and iOS AR QuickLook), a diner simply scans a table QR code and instantly projects 3D food items onto their table.</p>

      <h2 id="system-architecture-glb-vs-usdz">System Architecture: GLB vs USDZ Assets</h2>
      <p>Cross-platform 3D rendering on the web presents a dual-format challenge:</p>
      <pre><code>// Dual asset routing logic snippet
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const modelSrc = isIOS ? '/assets/models/dish.usdz' : '/assets/models/dish.glb';
</code></pre>
      <p>iOS Safari relies on Apple's USDZ format via QuickLook, whereas Android Chrome and desktop browsers parse GLB (Binary glTF) files seamlessly using WebXR.</p>

      <h2 id="performance-optimizations-under-3mb">Performance Optimizations: Under 3MB Assets</h2>
      <p>Mobile 4G connections demand strict asset size budgets. To keep loading times under 1.5 seconds:</p>
      <ul>
        <li>Mesh polygon counts were reduced using Draco compression.</li>
        <li>Texture maps (Albedo, Normal, Roughness) were compressed into WebP 1024x1024 formats.</li>
        <li>Total 3D asset package per dish was kept strictly under 3MB.</li>
      </ul>

      <h2 id="key-takeaways-for-developers">Key Takeaways for Developers & Founders</h2>
      <p>Building WebAR applications is no longer confined to experimental labs. When combined with clean UI design and fast web servers, 3D web technologies unlock practical business solutions for dining, retail, and e-commerce.</p>
    `,
  },
  {
    id: "post-2",
    slug: "building-ai-powered-web-apps-with-nextjs-and-fastapi",
    title: "Building AI-Powered Web Apps with Next.js & FastAPI: Full-Stack Guide",
    subtitle: "Connecting TypeScript frontends with asynchronous Python machine learning microservices.",
    description:
      "Learn how to architect, build, and deploy high-performance web applications that integrate AI background removal, computer vision, and LLM APIs.",
    author: {
      name: "Abadurrahman",
      role: "Developer & Startup Founder",
      avatar: "/my_photo/abadurrahman.jpg",
      bio: "Computer Science Engineering student, founder of TECHVIMAN, building AI tools, web apps, and WebAR products.",
    },
    publishedAt: "2026-08-10",
    updatedAt: "2026-08-14",
    category: "AI",
    tags: ["AI", "Next.js", "FastAPI", "Python", "TypeScript", "REST API", "Machine Learning"],
    keywords: ["Nextjs FastAPI AI app", "Python ML web integration", "Full-stack AI web development", "Abadurrahman AI guide"],
    coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Cover image for the Next.js and FastAPI AI application guide",
    readingTime: "8 min read",
    featured: false,
    pillar: true,
    draft: false,
    canonicalUrl: "https://abad-ur-rahman.vercel.app/blog/building-ai-powered-web-apps-with-nextjs-and-fastapi",
    toc: [
      { id: "the-modern-ai-stack", text: "The Modern AI Stack: Next.js + FastAPI", level: 2 },
      { id: "why-decouple-frontend-and-ml-services", text: "Why Decouple Frontend & ML Microservices", level: 2 },
      { id: "type-safe-http-contracts-with-pydantic", text: "Type-Safe HTTP Contracts with Pydantic", level: 2 },
      { id: "handling-async-inferencing-and-cold-starts", text: "Handling Async Inferencing & Cold Starts", level: 2 },
      { id: "deployment-blueprint", text: "Deployment Blueprint: Vercel + Cloud Container", level: 2 },
    ],
    relatedSlugs: ["ai-agents-the-next-evolution-of-artificial-intelligence", "how-i-built-an-immersive-webar-restaurant-menu"],
    contentHtml: `
      <p class="lead">Artificial Intelligence is rapidly evolving from standalone Jupyter notebooks into interactive user-facing web applications. To build responsive AI tools like background removers or document analyzers, developers need a robust stack.</p>

      <h2 id="the-modern-ai-stack">The Modern AI Stack: Next.js + FastAPI</h2>
      <p>Connecting Python's rich AI ecosystem (PyTorch, OpenCV, Transformers) with modern JavaScript frontends requires clean separation of concerns:</p>
      <ul>
        <li><strong>Frontend:</strong> Next.js App Router, TypeScript, and Tailwind CSS for rendering and SEO.</li>
        <li><strong>Backend:</strong> FastAPI (Python 3.11+) providing async REST endpoints, automatic Swagger docs, and high-speed data processing.</li>
      </ul>

      <h2 id="why-decouple-frontend-and-ml-services">Why Decouple Frontend & ML Microservices</h2>
      <p>Machine learning inference workloads are computationally heavy. Running ML models directly inside Node.js environments can block event loops. By placing ML execution inside a dedicated FastAPI microservice, the Next.js UI remains silky smooth even under high server loads.</p>

      <h2 id="type-safe-http-contracts-with-pydantic">Type-Safe HTTP Contracts with Pydantic</h2>
      <pre><code># FastAPI payload model
from pydantic import BaseModel

class ProcessingRequest(BaseModel):
    image_url: str
    output_format: str = "png"
    threshold: float = 0.5
</code></pre>

      <h2 id="handling-async-inferencing-and-cold-starts">Handling Async Inferencing & Cold Starts</h2>
      <p>When building background removal tools, image payloads can take several seconds to process. Implementing optimistic progress indicators and streaming response states prevents user dropoff during API evaluation.</p>

      <h2 id="deployment-blueprint">Deployment Blueprint: Vercel + Cloud Container</h2>
      <p>Deploy the Next.js frontend to Vercel for zero-config global edge delivery, and containerize the FastAPI Python service with Docker for hosting on Render or AWS ECS.</p>
    `,
  },
  {
    id: "post-3",
    slug: "lessons-from-building-a-tech-startup-as-a-cs-student",
    title: "Lessons from Building a Tech Startup (TECHVIMAN) as a CS Engineering Student",
    subtitle: "Balancing algorithms, product development, validation, and founder responsibilities.",
    description:
      "Personal insights on transitioning from writing code for assignments to building products for real users, founding TECHVIMAN, and shipping working software.",
    author: {
      name: "Abadurrahman",
      role: "Developer & Startup Founder",
      avatar: "/my_photo/abadurrahman.jpg",
      bio: "Computer Science Engineering student, founder of TECHVIMAN, building AI tools, web apps, and WebAR products.",
    },
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-05",
    category: "Entrepreneurship",
    tags: ["Startup", "Entrepreneurship", "TECHVIMAN", "CS Student", "Product Thinking", "Building in Public"],
    keywords: ["CS student startup lessons", "TECHVIMAN founder story", "Abadurrahman startup journey", "Developer to entrepreneur"],
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt: "Cover image for lessons from building a technology startup",
    readingTime: "5 min read",
    featured: false,
    pillar: false,
    draft: false,
    canonicalUrl: "https://abad-ur-rahman.vercel.app/blog/lessons-from-building-a-tech-startup-as-a-cs-student",
    toc: [
      { id: "code-is-a-means-not-the-end", text: "1. Code is a Means, Not the Final Destination", level: 2 },
      { id: "the-power-of-mvps", text: "2. The Power of Shipping MVPs Fast", level: 2 },
      { id: "customer-feedback-over-assumptions", text: "3. Customer Feedback Over Theoretical Assumptions", level: 2 },
      { id: "managing-engineering-rigor-and-time", text: "4. Managing Engineering Rigor & Academic Schedule", level: 2 },
      { id: "the-techviman-roadmap", text: "5. What's Next for TECHVIMAN", level: 2 },
    ],
    relatedSlugs: ["ai-agents-the-next-evolution-of-artificial-intelligence", "how-i-built-an-immersive-webar-restaurant-menu"],
    references: [
      {
        title: "Next.js: Metadata and Open Graph images",
        url: "https://nextjs.org/docs/app/getting-started/metadata-and-og-images",
      },
      {
        title: "FastAPI: Concurrency and async/await",
        url: "https://fastapi.tiangolo.com/async/",
      },
    ],
    contentHtml: `
      <p class="lead">Many Computer Science students spend years mastering syntax and data structures without ever deploying a single software application for actual human users. Here is what I learned founding <strong>TECHVIMAN</strong>.</p>

      <h2 id="code-is-a-means-not-the-end">1. Code is a Means, Not the Final Destination</h2>
      <p>As developers, it is easy to get obsessed with using the newest framework or writing ultra-clever one-liners. But users do not buy code; they buy solutions to their problems. Software engineering gives you the tools, but product thinking and entrepreneurship give those tools purpose.</p>

      <h2 id="the-power-of-mvps">2. The Power of Shipping MVPs Fast</h2>
      <p>When launching AR Menu, we resisted the urge to add 50 complex features. Instead, we focused on doing one thing exceptionally well: loading 3D food items on table surfaces in under 2 seconds with zero app installation. Shipping an MVP allows you to validate real demand before wasting months on unused code.</p>

      <h2 id="customer-feedback-over-assumptions">3. Customer Feedback Over Theoretical Assumptions</h2>
      <p>No business plan survives first contact with real users. Test early, listen to feedback, observe friction, and adapt quickly.</p>

      <h2 id="managing-engineering-rigor-and-time">4. Managing Engineering Rigor & Academic Schedule</h2>
      <p>Balancing Computer Science coursework (Operating Systems, DBMS, Networking) with product launches forces disciplined time management. The fundamental CS concepts learned in class directly inform how I architect databases and APIs for TECHVIMAN.</p>

      <h2 id="the-techviman-roadmap">5. What's Next for TECHVIMAN</h2>
      <p>We are continuously expanding TECHVIMAN's product suite into WebAR, AI image tools, and specialized SaaS applications. Stay tuned as we build in public!</p>
    `,
  },
  {
    id: "post-physical-ai",
    slug: "physical-ai-when-artificial-intelligence-enters-the-real-world",
    title: "Physical AI: When Artificial Intelligence Enters the Real World",
    subtitle: "From digital intelligence to machines that perceive, decide, and act in physical environments.",
    description:
      "An exploration of Physical AI, robotics, computer vision, humanoid machines, and the real-world opportunities emerging at the intersection of AI and hardware.",
    author: {
      name: "Abadurrahman",
      role: "Developer & Startup Founder",
      avatar: "/my_photo/abadurrahman.jpg",
      bio: "Computer Science Engineering student, founder of TECHVIMAN, building AI tools, web apps, and WebAR products.",
    },
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    category: "Technology",
    tags: ["Physical AI", "Robotics", "Artificial Intelligence", "Humanoid Robots", "Computer Vision", "Emerging Tech", "Automation"],
    keywords: ["Physical AI", "what is physical AI", "AI robotics", "humanoid robots 2026", "AI in real world", "robotics and AI"],
    coverImage: "/blog/physical-ai-cover.png",
    coverImageAlt: "Cover image for the article about Physical AI and real-world robotics",
    readingTime: "7 min read",
    featured: false,
    pillar: true,
    draft: false,
    canonicalUrl: "https://abad-ur-rahman.vercel.app/blog/physical-ai-when-artificial-intelligence-enters-the-real-world",
    toc: [
      { id: "what-is-physical-ai", text: "What Is Physical AI?", level: 2 },
      { id: "how-does-physical-ai-work", text: "How Does Physical AI Work?", level: 2 },
      { id: "physical-ai-vs-traditional-ai", text: "Physical AI vs Traditional AI", level: 2 },
      { id: "humanoid-robots-the-next-frontier", text: "Humanoid Robots: The Next Frontier", level: 2 },
      { id: "applications-of-physical-ai", text: "Applications of Physical AI", level: 2 },
      { id: "why-physical-ai-matters-for-entrepreneurs", text: "Why Physical AI Matters for Entrepreneurs", level: 2 },
      { id: "challenges-and-limitations", text: "Challenges and Limitations", level: 2 },
      { id: "the-future-of-physical-ai", text: "The Future of Physical AI", level: 2 },
      { id: "final-thoughts", text: "Final Thoughts", level: 2 },
    ],
    relatedSlugs: ["ai-agents-the-next-evolution-of-artificial-intelligence", "how-i-built-an-immersive-webar-restaurant-menu"],
    references: [
      {
        title: "Deloitte – Technology Trends 2026",
        url: "https://www.deloitte.com/global/en/insights/topics/technology-management/tech-trends/2026.html?utm_source=chatgpt.com",
      },
      {
        title: "Stanford – Emerging Technology Review: Robotics",
        url: "https://setr.stanford.edu/technology/robotics/2026?utm_source=chatgpt.com",
      },
      {
        title: "BCG – How Physical AI Is Reshaping Robotics",
        url: "https://www.bcg.com/publications/2026/how-physical-ai-is-reshaping-robotics-today?utm_source=chatgpt.com",
      },
    ],
    contentHtml: `
      <p class="lead">Artificial Intelligence has already transformed how we search for information, write content, develop software, and communicate with technology. But what happens when AI moves beyond computer screens and starts interacting with the physical world?</p>

      <p>Imagine a robot that can understand your voice, recognize objects, walk around your home, pick up items, prepare food, and perform everyday tasks. Imagine intelligent machines working alongside humans in factories, hospitals, warehouses, and even restaurants. This is no longer just a science-fiction concept. It is the direction in which <strong>Physical AI</strong> is developing.</p>

      <h2 id="what-is-physical-ai">What Is Physical AI?</h2>
      <p>Physical AI refers to artificial intelligence systems integrated with physical machines, such as robots, autonomous vehicles, drones, and industrial equipment.</p>
      <p>Unlike traditional AI applications that operate mainly in digital environments, Physical AI interacts with real-world surroundings through sensors, cameras, motors, and other hardware components.</p>
      <p>For example:</p>
      <ul class="list-disc pl-5 space-y-1.5 my-3">
        <li>A traditional AI system can identify an object in an image.</li>
        <li>A Physical AI system can identify that object, locate it in the real world, move toward it, and pick it up using a robotic arm.</li>
      </ul>
      <p>The fundamental difference is the ability to connect intelligence with physical action.</p>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-1 italic text-slate-300">Digital AI understands information. Physical AI connects intelligence with the physical world.</blockquote>

      <h2 id="how-does-physical-ai-work">How Does Physical AI Work?</h2>
      <p>Physical AI combines several technologies to enable machines to understand and interact with their surroundings.</p>

      <h3 id="artificial-intelligence-models" class="text-lg font-bold text-white mt-4 mb-2">1. Artificial Intelligence Models</h3>
      <p>AI models provide the intelligence required to understand instructions, recognize objects, make decisions, and plan actions. Large language models and vision-language models can help robots understand both visual information and human instructions.</p>

      <h3 id="computer-vision" class="text-lg font-bold text-white mt-4 mb-2">2. Computer Vision</h3>
      <p>Computer vision allows machines to interpret images and videos captured through cameras. It helps robots recognize objects, detect people, understand their surroundings, identify obstacles, estimate object positions, and navigate environments.</p>

      <h3 id="sensors-and-perception" class="text-lg font-bold text-white mt-4 mb-2">3. Sensors and Perception</h3>
      <p>Robots use different sensors to collect information about their environment, including RGB cameras, depth cameras, LiDAR, ultrasonic sensors, infrared sensors, force and touch sensors, and IMUs. These sensors help machines understand distance, movement, orientation, and physical contact.</p>

      <h3 id="robotics-and-motion-control" class="text-lg font-bold text-white mt-4 mb-2">4. Robotics and Motion Control</h3>
      <p>Robotics provides the physical mechanisms that allow AI systems to perform actions. Motors, robotic arms, wheels, actuators, and mechanical components translate digital decisions into physical movements.</p>

      <h3 id="learning-and-feedback" class="text-lg font-bold text-white mt-4 mb-2">5. Learning and Feedback</h3>
      <p>Physical AI systems can improve through simulations, demonstrations, and real-world operational data. A robot can observe an action, attempt to reproduce it, evaluate the outcome, and improve its performance through training.</p>
      <p>The basic process looks like this:</p>
      <pre><code>Perception → Understanding → Planning → Action → Feedback → Learning</code></pre>

      <h2 id="physical-ai-vs-traditional-ai">Physical AI vs Traditional AI</h2>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-xs text-left border-collapse">
          <thead>
            <tr class="border-b border-slate-700 bg-slate-900 text-blue-400">
              <th class="p-2.5">Traditional AI</th>
              <th class="p-2.5">Physical AI</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800 text-slate-300">
            <tr><td class="p-2.5">Works primarily in digital environments</td><td class="p-2.5">Interacts with physical environments</td></tr>
            <tr><td class="p-2.5">Processes text, images, and data</td><td class="p-2.5">Processes real-world sensor information</td></tr>
            <tr><td class="p-2.5">Generates predictions and responses</td><td class="p-2.5">Can perform physical actions</td></tr>
            <tr><td class="p-2.5">Uses software interfaces</td><td class="p-2.5">Integrates software and hardware</td></tr>
            <tr><td class="p-2.5">Example: AI chatbot</td><td class="p-2.5">Example: Autonomous robot</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="humanoid-robots-the-next-frontier">Humanoid Robots: The Next Frontier</h2>
      <p>One of the most exciting applications of Physical AI is humanoid robotics. Humanoid robots are machines designed with a human-like body structure, including a head, arms, hands, and legs. Their design allows them to operate in environments originally created for humans.</p>
      <p>Some important examples include:</p>

      <h3 id="tesla-optimus" class="text-lg font-bold text-white mt-4 mb-2">Tesla Optimus</h3>
      <p>Tesla is developing Optimus as a general-purpose humanoid robot intended for tasks involving manufacturing and other physical work.</p>

      <h3 id="figure-ai" class="text-lg font-bold text-white mt-4 mb-2">Figure AI</h3>
      <p>Figure is developing humanoid robots designed to perform useful tasks in industrial and commercial environments.</p>

      <h3 id="boston-dynamics" class="text-lg font-bold text-white mt-4 mb-2">Boston Dynamics</h3>
      <p>Boston Dynamics is known for advanced robotics, including Atlas, Spot, and Stretch. Its robots demonstrate sophisticated movement, mobility, and manipulation capabilities.</p>
      <p>These companies represent different approaches to the future of robotics. However, impressive demonstrations do not automatically mean that robots are ready to replace human workers. Reliability, safety, affordability, and real-world performance remain major challenges.</p>

      <h2 id="applications-of-physical-ai">Applications of Physical AI</h2>
      <p>Physical AI has the potential to transform several industries.</p>

      <h3 id="manufacturing" class="text-lg font-bold text-white mt-4 mb-2">1. Manufacturing</h3>
      <p>Intelligent robots can assist with product assembly, quality inspection, material handling, packaging, and industrial maintenance.</p>

      <h3 id="healthcare" class="text-lg font-bold text-white mt-4 mb-2">2. Healthcare</h3>
      <p>Robotic systems can support surgical assistance, rehabilitation, patient monitoring, hospital logistics, and assistance for elderly people. Medical applications require particularly high standards of safety and reliability.</p>

      <h3 id="agriculture" class="text-lg font-bold text-white mt-4 mb-2">3. Agriculture</h3>
      <p>AI-powered agricultural robots can help farmers with crop monitoring, weed detection, automated harvesting, soil analysis, and precision spraying.</p>

      <h3 id="logistics-and-warehousing" class="text-lg font-bold text-white mt-4 mb-2">4. Logistics and Warehousing</h3>
      <p>Intelligent robots can transport goods, organize inventory, sort packages, and assist with warehouse operations.</p>

      <h3 id="restaurants-and-hospitality" class="text-lg font-bold text-white mt-4 mb-2">5. Restaurants and Hospitality</h3>
      <p>Physical AI could also transform the restaurant industry. Imagine a restaurant where intelligent robots assist with food delivery, kitchen operations, inventory management, and customer service. Combined with technologies such as Augmented Reality (AR), restaurants could offer customers an entirely different dining experience. For example, customers could explore interactive 3D food models through an AR menu while intelligent systems manage restaurant operations behind the scenes.</p>

      <h2 id="why-physical-ai-matters-for-entrepreneurs">Why Physical AI Matters for Entrepreneurs</h2>
      <p>Physical AI is not only an opportunity for large technology companies. It could also create opportunities for startups and independent developers. Some potential startup opportunities include:</p>
      <ul class="list-disc pl-5 space-y-1.5 my-3">
        <li>AI-powered agricultural monitoring systems.</li>
        <li>Affordable educational robotics kits.</li>
        <li>Autonomous delivery solutions.</li>
        <li>Smart warehouse management.</li>
        <li>Intelligent restaurant automation.</li>
        <li>Computer vision-based quality inspection.</li>
        <li>Robotics-as-a-Service (RaaS).</li>
      </ul>
      <p>For startups, the opportunity may not be to manufacture an entire humanoid robot. Instead, developers can build specialized software, AI models, automation systems, sensors, and industry-specific solutions that make existing robots more useful. For companies such as <strong>TECHVIMAN</strong>, this represents an interesting area for future research and product development.</p>

      <h2 id="challenges-and-limitations">Challenges and Limitations</h2>
      <p>Despite its potential, Physical AI faces several challenges.</p>
      <ul class="list-disc pl-5 space-y-1.5 my-3">
        <li><strong>High Development Costs:</strong> Robotics hardware, sensors, processors, and testing environments can be expensive.</li>
        <li><strong>Safety:</strong> Robots operating around humans must understand their surroundings and avoid dangerous movements.</li>
        <li><strong>Real-World Complexity:</strong> Physical environments are unpredictable. Lighting, obstacles, objects, and human movements can change continuously.</li>
        <li><strong>Computing Requirements:</strong> Advanced robotics can require significant processing power for real-time perception, planning, and control.</li>
        <li><strong>Data and Training:</strong> Robots need large amounts of high-quality data and extensive training to perform tasks reliably.</li>
        <li><strong>Privacy and Security:</strong> Connected robots may collect video, audio, and environmental information. Protecting this data is essential.</li>
      </ul>

      <h2 id="the-future-of-physical-ai">The Future of Physical AI</h2>
      <p>The future of AI may not be limited to computers, smartphones, and cloud applications. We are moving toward a world where intelligence can be integrated into machines that interact with their surroundings. Manufacturing facilities could become more autonomous. Agricultural robots could assist farmers. Intelligent machines could support healthcare professionals. Robots could perform dangerous and repetitive tasks.</p>
      <p>According to Deloitte's 2026 Technology Trends report, the convergence of AI and robotics is an important emerging technology direction, with the humanoid form factor representing a future frontier. However, widespread adoption will depend on practical performance, affordability, and safety rather than demonstrations alone. The most successful systems will likely be those that solve real problems.</p>

      <h2 id="final-thoughts">Final Thoughts</h2>
      <p>Physical AI represents a major step in the evolution of artificial intelligence. We have moved from machines that calculate to systems that understand information. Now, we are developing machines that can connect intelligence with physical action.</p>
      <p>For developers, engineers, entrepreneurs, and researchers, this is an exciting opportunity to explore the intersection of software, hardware, robotics, and artificial intelligence. The future will not be built by software alone. It will be shaped by intelligent systems that can interact with the world around us.</p>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-1 italic text-slate-300">Yesterday, we taught computers to think. Today, we are teaching machines to act. Tomorrow, intelligent machines may become our partners in the physical world.</blockquote>
      <p><em>The future of AI is not just digital. It is physical.</em></p>
    `,
  },
];

export const publishedBlogPosts = blogPosts
  .filter((post) => !post.draft)
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
