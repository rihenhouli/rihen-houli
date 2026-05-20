export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "code";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  stack: string[];
  highlights: string[];
  category: "Product" | "Internal Tool" | "AI";
  links?: ProjectLink[];
  /** Public path to a 16:9 screenshot, e.g. "/projects/tawa.png". When unset, the card shows a gradient placeholder. */
  image?: string;
  /** If true, a "Read more" link points to /projects/[slug]. */
  hasDetail?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tawa-content-factory",
    name: "TAWA Digital Factory",
    tagline:
      "UGC platform managing 3K+ creators and 100+ campaigns with analytics for views, engagement, and performance.",
    role: "Full Stack Engineer",
    year: "2023 — present",
    stack: ["Node.js", "Vue.js", "Sequelize", "PostgreSQL"],
    highlights: [
      "Scaled to 3K+ creators and 100+ active campaigns across 7+ roles with shared core modules.",
      "Optimized SQL aggregations: dashboard load -40%, analytics response 3x faster.",
      "End-to-end creator onboarding and campaign delivery APIs.",
    ],
    category: "Product",
    links: [
      { label: "Live", href: "https://auth-factory.tawa.digital", kind: "live" },
    ],
  },
  {
    slug: "e-contractar",
    name: "E-Contractar",
    tagline:
      "Job-offer & contractor hiring platform with applicant pipelines, PDF contracts, and calendar-based delivery tracking.",
    role: "Full Stack Engineer",
    year: "2024",
    stack: ["Angular 18", "Spring Boot 3", "JPA", "MongoDB", "Material", "ApexCharts"],
    highlights: [
      "Auth with JWT + OAuth2, role-based access for employers/contractors/admins.",
      "Job-offer module with applicant tracking, PDF viewer, calendar scheduling.",
      "Admin dashboard with charts and operational metrics.",
    ],
    category: "Product",
    links: [
      { label: "Backend", href: "https://github.com/rihenhouli/e_contractor_Backend", kind: "code" },
      { label: "Admin", href: "https://github.com/rihenhouli/e_contractor_admin", kind: "code" },
      { label: "Frontend", href: "https://github.com/rihenhouli/e_contractar_frontend", kind: "code" },
    ],
  },
  {
    slug: "e-contractar-ai",
    name: "E-Contractar AI",
    tagline:
      "AI companion to E-Contractar: CV → job matcher and chat-based interview screener powered by Claude.",
    role: "Solo build",
    year: "2026",
    stack: ["Next.js 15", "FastAPI", "Anthropic Claude", "Pydantic", "Tailwind"],
    highlights: [
      "PDF CV parsing + structured skill/experience extraction.",
      "Job match scoring with per-criterion breakdown and explanation.",
      "Adaptive interview screener that generates and grades 5-8 role-specific questions.",
    ],
    category: "AI",
    links: [
      { label: "Code", href: "https://github.com/rihenhouli/e-contractar-ai", kind: "code" },
    ],
    hasDetail: true,
  },
  {
    slug: "bitbox",
    name: "BitBox",
    tagline:
      "Built end-to-end: REST API, customer dashboard, and operator console for a digital-asset workflow.",
    role: "Full Stack Engineer · built from zero",
    year: "2023",
    stack: ["Express.js", "Sequelize", "Socket.io", "Vue 3", "Vite", "PostgreSQL"],
    highlights: [
      "Three-tier split coded from scratch: API backend, customer dashboard, internal management.",
      "Realtime updates over Socket.io between operator and customer surfaces.",
      "Role-aware UI with shared design tokens across both Vue 3 frontends.",
    ],
    category: "Product",
    links: [
      { label: "Backend", href: "https://github.com/rihenhouli/bitbox-backend", kind: "code" },
      { label: "Dashboard", href: "https://github.com/rihenhouli/bitbox-dashboard", kind: "code" },
      { label: "Management", href: "https://github.com/rihenhouli/bitbox-management", kind: "code" },
    ],
  },
  {
    slug: "ants",
    name: "ANTS — Education Management",
    tagline:
      "Multi-platform education system serving 10k+ students. Designed the REST API + MySQL schema and built 500+ reusable cross-platform components.",
    role: "Full Stack Web Developer · core author",
    year: "2022 — 2023",
    stack: ["Spring Boot", "NestJS", "React", "React Native", "MySQL"],
    highlights: [
      "Designed scalable REST APIs and MySQL schemas from scratch for a 10k-student footprint.",
      "Built 500+ reusable components with consistent state shared across web + React Native.",
      "Led API testing in Postman; mentored 3 interns through onboarding.",
    ],
    category: "Product",
  },
  {
    slug: "inventory",
    name: "Inventory Management System",
    tagline:
      "Built from zero: full-stack internal tool for tracking products and stock — replaced a manual spreadsheet process entirely for 20+ users.",
    role: "Solo build · from zero",
    year: "2021",
    stack: ["Angular", "Express.js", "MongoDB"],
    highlights: [
      "Designed schema, REST API, and Angular UI end-to-end — no inherited code.",
      "Replaced a fragile spreadsheet workflow with structured CRUD + reporting.",
      "Deployed on Windows Server, maintained 99% uptime for 20+ users.",
    ],
    category: "Internal Tool",
  },
];
