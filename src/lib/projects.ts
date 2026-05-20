export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  stack: string[];
  highlights: string[];
  category: "Product" | "Internal Tool" | "AI";
  href?: string;
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
  },
  {
    slug: "bitbox",
    name: "BitBox",
    tagline: "Backend, dashboard, and management console for a digital-asset workflow.",
    role: "Full Stack Engineer",
    year: "2023",
    stack: ["Node.js", "Angular", "REST"],
    highlights: [
      "Three-tier split: API backend, operator dashboard, internal management.",
      "Role-aware UI with shared design tokens across surfaces.",
    ],
    category: "Product",
  },
  {
    slug: "ants",
    name: "ANTS — Education Management",
    tagline:
      "Multi-platform education system built to serve 10k+ students across web and mobile.",
    role: "Full Stack Web Developer",
    year: "2022 — 2023",
    stack: ["Spring Boot", "NestJS", "React", "React Native", "MySQL"],
    highlights: [
      "500+ reusable components with consistent cross-platform state.",
      "Scalable REST APIs and MySQL schemas for a 10k-student footprint.",
      "Mentored 3 interns and led API testing in Postman.",
    ],
    category: "Product",
  },
  {
    slug: "inventory",
    name: "Inventory Management System",
    tagline:
      "Full-stack internal tool for tracking products and stock levels — replaced a manual spreadsheet process entirely.",
    role: "Solo build",
    year: "2021",
    stack: ["Angular", "Express.js", "MongoDB"],
    highlights: [
      "Built from scratch for 20+ users, 99% uptime on Windows Server.",
      "Replaced a fragile spreadsheet workflow with structured CRUD + reporting.",
    ],
    category: "Internal Tool",
  },
];
