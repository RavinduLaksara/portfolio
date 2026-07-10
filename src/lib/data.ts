// ============================================================================
// Portfolio Data — All content in one place for easy editing
// ============================================================================

export const siteConfig = {
  name: "Ravindu Laksara",
  title: "Product-Minded Software Engineer",
  description:
    "I build scalable, end-to-end software ecosystems. From crafting clean, professional mobile interfaces to architecting robust, secure backends, I focus on delivering seamless digital products that solve real-world problems.",
  email: "laksararavindum@gmail.com",
  linkedin: "https://www.linkedin.com/in/ravindu-laksara-6bb355307",
  github: "https://github.com/RavinduLaksara",
} as const;

// ============================================================================
// About
// ============================================================================

export const aboutData = {
  heading: "Full-Stack Mobile Engineer",
  body: [
    "As a software engineer bridging the gap between frontend execution and backend logic, I specialize in building high-performance mobile applications with Flutter.",
    "My approach goes beyond just drawing UI screens. Having architected complex multi-vendor backends and handled secure data protocols, I understand exactly how a mobile app should communicate with its server. Whether it's establishing a clear visual hierarchy for a flawless user experience, or ensuring data endpoints are deeply secure, I build apps that are not only beautiful on the outside but structurally sound on the inside.",
  ],
} as const;

// ============================================================================
// Experience
// ============================================================================

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
}

export const experienceData: Experience[] = [
  {
    role: "Junior Software Engineer (Intern)",
    company: "FLiAI",
    duration: "January 2026 – July 2026",
    location: "Kadawatha, Sri Lanka",
    achievements: [
      "Engineered the Snap Lk multi-vendor ecosystem, bridging the gap between frontend execution and complex backend logic.",
      "Developed the Flutter-based Seller application from the ground up, ensuring a seamless and secure mobile experience for merchants.",
      "Architected robust backend solutions using Vendure and NestJS, implementing order-splitting logic, automated onboarding, and secure JWT-based authentication.",
    ],
  },
];

// ============================================================================
// Projects
// ============================================================================

export interface Project {
  title: string;
  role: string;
  techStack: string[];
  description: string;
  challenge?: string;
  contribution?: string[];
  highlights?: string[];
  context?: string;
  approach?: string;
  note?: string;
  status?: string;
  link?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    title: "Snap Lk Super App Ecosystem",
    role: "Software Engineering Intern (Full-Stack)",
    techStack: [
      "Flutter",
      "Vendure",
      "NestJS",
      "GraphQL",
      "Firebase",
      "TypeORM",
    ],
    description:
      "The Snap Lk ecosystem required a robust multi-vendor e-commerce platform.",
    challenge:
      "Building a scalable backend capable of handling complex marketplace logic (like order splitting and payouts) while creating a seamless, mobile-first experience for merchants.",
    contribution: [
      "Backend Architecture: Engineered the core multivendor logic using Vendure and NestJS, including intelligent order-splitting and automated merchant onboarding.",
      "Mobile Experience: Developed the comprehensive Flutter mobile application focusing on secure authentication, real-time inventory management, and multi-language support (English, Sinhala, Tamil).",
      "Integrations: Integrated Firebase AI for smart product descriptions and ensured highly secure API communication using GraphQL and strict authorization guards.",
    ],
    note: "As this is a proprietary company project, the source code is confidential. I am happy to discuss the architectural decisions during an interview.",
    featured: true,
  },
  {
    title: "Mitigating the Plausibility Trap in AI Code Generation",
    role: "Core Researcher | 4-Member Focused Research Group",
    techStack: ["Node.js", "Jest", "Gherkin (BDD)", "GPT-4 / Claude 3"],
    description:
      "Investigating the 'Plausibility Trap' in AI code generation by comparing standard prompting against Specification-Driven Development (SDD) using a deterministic testing firewall.",
    status: "Ongoing (Active Academic Research)",
    context:
      "As AI tools become heavily integrated into software engineering, they often fall into the 'Plausibility Trap'—generating code that looks syntactically correct but subtly fails in complex enterprise business logic and implicit constraints.",
    approach:
      "Shifting from traditional natural language prompting to a Specification-Driven Development (SDD) approach using Gherkin. By implementing a strictly isolated testing environment using Node.js and Jest, we execute Boundary Value Analysis (BVA) to mathematically eliminate Circular Evaluation Bias.",
    highlights: [
      "Extracted complex E-commerce business logic (e.g., TOCTOU race conditions, discount stacking) from platforms like Odoo and Magento to establish a rigorous Ground Truth.",
      "Engineered an independent, deterministic evaluation pipeline using Node.js and Jest to validate AI-generated code against strict test cases without relying on LLM-as-a-judge.",
      "Formulated advanced prompt engineering strategies combining Chain-of-Thought (CoT) and Self-Criticism across state-of-the-art models (GPT-4, Claude 3, Gemini 1.5).",
    ],
  },
  {
    title: "TravelMate",
    role: "Sole Developer | Personal Project",
    techStack: ["React Native", "Express.js", "Node.js"],
    description:
      "Built to challenge myself before entering the professional industry, TravelMate is a complete cross-platform mobile ecosystem. I handled the entire product lifecycle, from designing smooth React Native interfaces to architecting the secure Node.js/Express.js REST APIs that power the backend.",
    link: "https://github.com/RavinduLaksara/TravelMate",
  },
  {
    title: "Spirit Store",
    role: "Full-Stack Developer | 5-Member Academic Group Project",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    description:
      "My initial foray into multi-vendor architecture. Developed a comprehensive e-commerce solution connecting liquor suppliers with customers while giving administrators full oversight. Implemented core marketplace features, complex session management for carts, and role-based access controls using native PHP without relying on modern frameworks.",
    link: "https://github.com/RavinduLaksara/SpiritStore",
  },
];

// ============================================================================
// Skills
// ============================================================================

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    icon: "Smartphone",
    skills: ["Flutter", "React Native", "Next.js", "React", "HTML/CSS"],
  },
  {
    title: "Backend & API",
    icon: "Server",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "GraphQL",
      "REST API",
      "Strapi.js",
    ],
  },
  {
    title: "Database & Cloud",
    icon: "Database",
    skills: ["PostgreSQL (TypeORM)", "MySQL", "Firebase", "GCP (Cloud Run)"],
  },
  {
    title: "Testing & Tools",
    icon: "Wrench",
    skills: ["Git/GitHub", "Figma", "GCP (Cloud Run)", "Postman"],
  },
];

// ============================================================================
// Education
// ============================================================================

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  status?: string;
}

export const educationData: Education[] = [
  {
    degree: "BSc (Hons) in Software Engineering",
    institution: "University of Kelaniya, Sri Lanka",
    duration: "July 2023 – Present (Expected 2027)",
    status: "4th-Year Undergraduate",
  },
  {
    degree: "Primary & Secondary Education",
    institution: "Mahinda Rajapaksha College, Matara, Sri Lanka",
    duration: "February 2013 – January 2022",
  },
];

// ============================================================================
// Community & Leadership
// ============================================================================

export interface Community {
  organization: string;
  role: string;
  duration: string;
  description: string;
}

export const communityData: Community[] = [
  {
    organization: "Zero Plastic Kelaniya",
    role: "Director (IT Unit)",
    duration: "October 2024 – June 2025",
    description:
      "Managed IT operations and led digital initiatives for the community.",
  },
  {
    organization: "Leo Club of University of Kelaniya",
    role: "Web Team Lead & Co-Chair (Project Sanhida)",
    duration: "September 2024 – June 2025",
    description:
      "Led web development teams and co-chaired the Education and Literary Avenue project.",
  },
];

// ============================================================================
// Certifications
// ============================================================================

export interface Certification {
  name: string;
  issuer: string;
}

export const certificationsData: Certification[] = [
  { name: "Java Intermediate", issuer: "Sololearn" },
  { name: "Python", issuer: "Sololearn" },
  { name: "Python for Beginners", issuer: "University of Moratuwa" },
  {
    name: "Web Development: Web Design for Beginners",
    issuer: "University of Moratuwa",
  },
];

// ============================================================================
// Navigation
// ============================================================================

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
