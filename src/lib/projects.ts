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
  category: "Product" | "Internal Tool" | "AI" | "Library";
  links?: ProjectLink[];
  /** Public path to a single 16:9 screenshot, e.g. "/projects/tawa.png". Used only if `images` is empty. */
  image?: string;
  /**
   * Public paths to multiple 16:9 screenshots, e.g. ["/projects/bitbox-admin-1.png", "/projects/bitbox-admin-2.png"].
   * When 2+ are set, the card renders an auto-rotating carousel. Great for internal / no-public-access projects
   * where a live link isn't possible — this is the visual proof instead.
   */
  images?: string[];
  /** If true, a "Read more" link points to /projects/[slug]. */
  hasDetail?: boolean;
};

export const projects: Project[] = [
  {
    slug: "bitbox-booking",
    name: "BitBoxGames.tn",
    tagline:
      "Public booking site for a karaoke venue, built solo end-to-end: multi-step booking wizard, slot-blocking, and email confirmations on Supabase.",
    role: "Project Manager & Full Stack Engineer · built from zero",
    year: "2025 — present",
    stack: [
      "Supabase (Auth, Edge Functions, RLS)",
      "PostgreSQL",
      "Resend",
      "Tailwind CSS",
      "Figma",
    ],
    highlights: [
      "Multi-step public booking wizard with real-time slot-blocking to prevent double-booking a room.",
      "Supabase Edge Functions + RLS policies enforce booking rules and access control server-side.",
      "Resend-powered confirmation and reminder emails; staff-side bookings view with filters and manual confirmation.",
    ],
    category: "Product",
    links: [{ label: "Live", href: "https://bitboxgames.tn", kind: "live" }],
    images: [
      "/projects/bitbox-booking-1.png",
      "/projects/bitbox-booking-2.png",
      "/projects/bitbox-booking-3.png",
      "/projects/bitbox-booking-4.png",
    ],
  },
  {
    slug: "bitbox-karaoke",
    name: "BitBox Karaoke",
    tagline:
      "In-room client app for active karaoke sessions: live countdown, one-tap staff help, and coffee ordering — no recruiter login, so screenshots below.",
    role: "Project Manager & Full Stack Engineer · built from zero",
    year: "2025 — present",
    stack: ["Supabase Realtime", "PostgreSQL", "Tailwind CSS", "Figma"],
    highlights: [
      "Real-time session countdown that notifies the room when time is nearly up and again when the session ends.",
      "One-tap 'call staff' for instant in-person help, delivered live to BitBox Admin.",
      "In-session coffee ordering that pushes straight to the staff queue — no app switching for the customer.",
    ],
    category: "Product",
    images: [
      "/projects/bitbox-karaoke-1.png",
      "/projects/bitbox-karaoke-2.png",
      "/projects/bitbox-karaoke-3.png",
      "/projects/bitbox-karaoke-4.png",
      "/projects/bitbox-karaoke-5.png",
      "/projects/bitbox-karaoke-6.png",
    ],
  },
  {
    slug: "bitbox-admin",
    name: "BitBox Admin",
    tagline:
      "Internal, RBAC-gated console for staff: bookings with filters and confirmations, karaoke room state, games catalog, and coffee inventory.",
    role: "Project Manager & Full Stack Engineer · built from zero",
    year: "2025 — present",
    stack: ["Supabase (Auth, RLS)", "PostgreSQL", "RBAC", "Tailwind CSS"],
    highlights: [
      "Role-based access control gating what each staff role can see and act on.",
      "Live feed of BitBox Karaoke events — session alerts, help requests, coffee orders — routed to the right staff member.",
      "Bookings management with filters and confirmation workflow, plus games and coffee inventory tracking.",
    ],
    category: "Internal Tool",
    images: [
      "/projects/bitbox-management-1.png",
      "/projects/bitbox-management-2.png",
      "/projects/bitbox-management-3.png",
      "/projects/bitbox-management-4.png",
      "/projects/bitbox-management-5.png",
    ],
  },
  {
    slug: "tawa-content-factory",
    name: "TAWA Digital Factory",
    tagline:
      "UGC platform I act as tech lead on — 3K+ creators, 100+ campaigns, a Redis/FFmpeg video pipeline, and third-party social data integration.",
    role: "Full Stack Engineer · Product Tech Lead",
    year: "2023 — present",
    stack: [
      "Node.js",
      "Vue.js",
      "Sequelize",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "FFmpeg",
      "AWS S3",
    ],
    highlights: [
      "Scaled to 3K+ creators and 100+ active campaigns across 7+ roles with shared core modules.",
      "Redis-backed FFmpeg queue: watermark upload → store video in S3 → generate thumbnail → store in S3.",
      "Migrated real-time notifications from Socket.io to Firebase for better reliability under campaign-launch load.",
      "Third-party Instagram/TikTok data integration for influencer discovery by performance metrics — cut manual search ~80%.",
      "Optimized SQL aggregations: dashboard load -40%, analytics response 3x faster.",
    ],
    category: "Product",
    links: [
      {
        label: "Live",
        href: "https://auth-factory.tawa.digital",
        kind: "live",
      },
    ],
    images: [
      "/projects/tawa-content-factory-1.png",
      "/projects/tawa-content-factory-2.png",
      "/projects/tawa-content-factory-3.png",
      "/projects/tawa-content-factory-4.png",
      "/projects/tawa-content-factory-5.png",
      "/projects/tawa-content-factory-6.png",
      "/projects/tawa-content-factory-7.png",
    ],
  },
  {
    slug: "tawa-ops-console",
    name: "TAWA Ops Console",
    tagline:
      "Internal super-admin backend behind TAWA Digital Factory: manages creators, advertisers, and account managers with role permissions and platform-usage analytics.",
    role: "Full Stack Engineer · Product Tech Lead",
    year: "2024 — present",
    stack: ["Node.js", "Vue.js", "PostgreSQL", "Firebase", "RBAC"],
    highlights: [
      "Central admin for the platform's creators, advertisers, and account managers, with an approve/permission workflow before anyone goes live.",
      "Role-based access so account managers only touch what's assigned to them.",
      "Built-in analytics: usage clicks per module/button, filterable by role and time period, to track adoption across the org.",
    ],
    category: "Internal Tool",
    images: [
      "/projects/tawa-ops-console-1.png",
      "/projects/tawa-ops-console-2.png",
      "/projects/tawa-ops-console-3.png",
      "/projects/tawa-ops-console-4.png",
      "/projects/tawa-ops-console-5.png",
    ],
  },
  {
    slug: "tawa-talent-discovery",
    name: "TAWA Talent Discovery",
    tagline:
      "A separate TAWA Digital Talents product for agencies: search creators by KPIs, calculate engagement rate, and manage brands, quotes, and contracts.",
    role: "Full Stack Engineer",
    year: "2023 — present",
    stack: [
      "Node.js",
      "Vue.js",
      "PostgreSQL",
      "Third-party Instagram/TikTok data APIs",
    ],
    highlights: [
      "Multi-filter creator search (gender, age, location, follower tier) surfacing hundreds of matching creators per query.",
      "Built-in engagement-rate calculator so agencies can qualify a creator before reaching out.",
      "Shortlists, brand/client management, and a quotes-to-contracts flow for turning a shortlist into a signed campaign.",
    ],
    category: "Product",
    images: [
      "/projects/tawa-digital-discovery-1.png",
      "/projects/tawa-digital-discovery-2.png",
      "/projects/tawa-digital-discovery-3.png",
      "/projects/tawa-digital-discovery-4.png",
      "/projects/tawa-digital-discovery-5.png",
    ],
  },
  {
    slug: "e-contractar",
    name: "E-Contractar",
    tagline:
      "Job-offer & contractor hiring platform with applicant pipelines, PDF contracts, and calendar-based delivery tracking.",
    role: "Full Stack Engineer",
    year: "2024",
    stack: [
      "Angular 18",
      "Spring Boot 3",
      "JPA",
      "MongoDB",
      "Material",
      "ApexCharts",
    ],
    highlights: [
      "Auth with JWT + OAuth2, role-based access for employers/contractors/admins.",
      "Job-offer module with applicant tracking, PDF viewer, calendar scheduling.",
      "Admin dashboard with charts and operational metrics.",
    ],
    category: "Product",
    links: [
      {
        label: "Backend",
        href: "https://github.com/rihenhouli/e_contractor_Backend",
        kind: "code",
      },
      {
        label: "Admin",
        href: "https://github.com/rihenhouli/e_contractor_admin",
        kind: "code",
      },
      {
        label: "Frontend",
        href: "https://github.com/rihenhouli/e_contractar_frontend",
        kind: "code",
      },
    ],
  },
  {
    slug: "e-contractar-ai",
    name: "E-Contractar AI",
    tagline:
      "AI companion to E-Contractar: CV → job matcher and chat-based interview screener powered by Claude.",
    role: "Solo build",
    year: "2026",
    stack: [
      "Next.js 15",
      "FastAPI",
      "Anthropic Claude",
      "Pydantic",
      "Tailwind",
    ],
    highlights: [
      "PDF CV parsing + structured skill/experience extraction.",
      "Job match scoring with per-criterion breakdown and explanation.",
      "Adaptive interview screener that generates and grades 5-8 role-specific questions.",
    ],
    category: "AI",
    links: [
      {
        label: "Code",
        href: "https://github.com/rihenhouli/e-contractar-ai",
        kind: "code",
      },
    ],
    hasDetail: true,
  },
  {
    slug: "ants",
    name: "ANTS — Education Management",
    tagline:
      "Multi-platform education system serving 10k+ students. Led the database architecture and feature decisions, designed the REST API + MySQL schema, and built 500+ reusable cross-platform components.",
    role: "Full Stack Web Developer · Database & Feature Lead",
    year: "2022 — 2023",
    stack: ["Spring Boot", "NestJS", "React", "React Native", "MySQL"],
    highlights: [
      "Owned database architecture and feature/technical decisions for a 10k-student, multi-platform system.",
      "Designed scalable REST APIs and MySQL schemas from scratch.",
      "Built 500+ reusable components with consistent state shared across web + React Native.",
      "Led API testing in Postman; mentored 3 interns through onboarding.",
    ],
    category: "Product",
  },
  {
    slug: "ants-console",
    name: "ANTS Console",
    tagline:
      "Internal RBAC-gated tool built alongside ANTS so the team can safely manage and audit database records without writing raw SQL.",
    role: "Solo build · from zero",
    year: "2022 — 2023",
    stack: ["React", "NestJS", "MySQL", "RBAC"],
    highlights: [
      "Role-based record management UI replacing ad-hoc SQL scripts for non-DB-expert team members.",
      "Built-in audit trail for who changed what, reducing risk on a system serving 10k+ students.",
      "Designed to work directly against the ANTS schema, so it stayed in sync as the data model evolved.",
    ],
    category: "Internal Tool",
    images: [],
  },
  {
    slug: "ants-cli",
    name: "ants-cli",
    tagline:
      "CLI generator that scaffolds a full NestJS module — controller, service, module, DTOs — from a schema definition.",
    role: "Solo build · from zero",
    year: "2022 — 2023",
    stack: ["Node.js", "NestJS", "TypeScript", "CLI"],
    highlights: [
      "Turned a repetitive multi-file setup into a single command for the backend team.",
      "Generated code followed the team's existing conventions, so output needed little to no manual cleanup.",
      "Cut new-module setup time significantly on a fast-moving backend with many similar CRUD modules.",
    ],
    category: "Internal Tool",
    images: [],
  },
  {
    slug: "antssm",
    name: "@aprilium/antssm_",
    tagline:
      "Standalone React state-management library published to npm and adopted as the shared state layer across the ANTS frontend.",
    role: "Solo build · published to npm",
    year: "2022 — 2023",
    stack: ["React", "TypeScript", "npm"],
    highlights: [
      "Extracted shared state logic out of the ANTS frontend into its own versioned npm package.",
      "Installed and consumed like any third-party dependency, decoupling state logic from feature code.",
      "Gave the team one consistent state pattern across a large, multi-team React codebase.",
    ],
    category: "Library",
    links: [
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@aprilium/antssm_",
        kind: "code",
      },
    ],
    images: [],
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
