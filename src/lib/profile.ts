export const profile = {
  name: "Rihen Houli",

  title:
    "Senior Full Stack Engineer | Node.js · TypeScript · NestJS · Express.js · Vue.js",

  location: "Tunis, Tunisia",

  email: "rihenhoulii@gmail.com",

  phone: "+216 50 667 525",

  github: "https://github.com/rihenhouli",

  linkedin: "https://www.linkedin.com/in/rihen-houli/",

  portfolio: "https://rihen-houli.vercel.app/",

  // ==================== RELOCATION ====================

  relocation: {
    openToRelocation: true,

    preferredLocations: [
      "Remote",
      "Europe",
      "UAE",
      "Canada",
      "USA",
      "UK",
      "Qatar",
    ],

    visaStatus: "Open to visa sponsorship",

    noticePeriod: "1 month",
  },

  // ==================== SEO ====================

  seo: {
    title:
      "Rihen Houli — Senior Full Stack Engineer | Node.js · TypeScript · NestJS · Vue.js",

    description:
      "Senior Full Stack Engineer with nearly 6 years of experience building and scaling production platforms. Specialized in Node.js, TypeScript, NestJS, Express.js, Vue.js, React and PostgreSQL. Open to remote, hybrid and relocation opportunities.",

    keywords: [
      "Senior Full Stack Engineer",
      "Full Stack Engineer",
      "Software Engineer",
      "Product Engineer",
      "Tech Lead",
      "Node.js Developer",
      "NestJS Developer",
      "TypeScript Developer",
      "Vue.js Developer",
      "React Developer",
      "Backend Engineer",
      "Frontend Engineer",
      "PostgreSQL",
      "System Architecture",
      "Product Engineering",
      "Technical Leadership",
      "Open to Relocation",
      "Tunisia",
      "Remote Work",
    ],
  },

  // ==================== TAGLINE ====================

  tagline:
    "I build and scale production products end-to-end — from architecture and data models to APIs, frontend, integrations and production support.",

  // ==================== PROFESSIONAL SUMMARY ====================

  summary:
    "I'm a Senior Full Stack Engineer with nearly 6 years of experience building and scaling production platforms — from 0→1 MVPs to systems serving thousands of active users.\n\n" +

    "I work primarily in the Node.js / TypeScript ecosystem with NestJS and Express.js, alongside Vue.js, React and PostgreSQL. I take ownership of features end-to-end: architecture, data models, APIs, frontend, integrations, testing and production support.\n\n" +

    "At TAWA Digital Talents, I work as a Full Stack Engineer and Product Tech Lead on TAWA Digital Factory, a UGC/influencer-marketing platform grown from MVP to 3,000+ creators, 100+ brand clients and 150+ active campaigns across 7+ user roles. I have led major architectural migrations, including Vue 2 → Vue 3, Socket.IO → Firebase and local media storage → Amazon S3.\n\n" +

    "My work has delivered measurable results, including ~80% reduction in manual creator-search time, ~40% faster dashboard load times, up to 3× faster API responses and ~60% lower thumbnail processing/storage overhead.\n\n" +

    "I'm currently working as Product Tech Lead on BitBoxGames.tn, a real-time karaoke venue platform covering public bookings, an in-room client experience and an internal management console.\n\n" +

    "Beyond implementation, I enjoy making architectural decisions, building internal developer tooling, mentoring junior engineers, reviewing code and turning business requirements into reliable technical solutions.\n\n" +

    "🌍 Open to senior Full Stack, Backend or Frontend Engineering opportunities — remote, hybrid or relocation.",
};


// ============================================================
// EXPERIENCE
// ============================================================

export const experience = [
  {
    company: "BitBoxGames.tn",

    role: "Product Tech Lead",

    period: "Sept. 2025 – Sept. 2026",

    location: "Tunis, Tunisia · Remote",

    bullets: [
      "Designed and built the technical architecture across three connected products for a karaoke venue platform: a public booking system, a real-time in-room client app, and an internal management console.",

      "Built the public-facing booking platform using Vue.js and Vite, with Supabase Auth and Row Level Security for client/admin access control.",

      "Implemented backend booking workflows with Supabase Edge Functions, including reservation logic and automated email notifications.",

      "Built the in-room client application with real-time staff-assistance requests and live notifications using Socket.IO.",

      "Implemented song and playlist history tracking, including most-listened rankings to surface popular tracks per room.",

      "Developed real-time countdown and session-timing workflows synchronized between client and staff views.",

      "Built the internal management console for managing rooms, singers, songs, playlists and staff-assistance requests.",

      "Designed RBAC for client/admin roles and dashboards covering room activity and top-played content.",
    ],

    technologies: [
      "Vue.js",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Socket.IO",
      "Real-Time Systems",
    ],
  },

  {
    company: "TAWA Digital Talents",

    role: "Full Stack Engineer · Product Tech Lead",

    period: "Sept. 2023 – Present",

    location: "Tunis, Tunisia",

    bullets: [
      "Full Stack Engineer and Product Tech Lead on TAWA Digital Factory, a UGC/influencer-marketing platform built from 0→1 and now supporting 3,000+ creators, 100+ brand clients and 150+ active campaigns across 7+ distinct user roles.",

      "Own features end-to-end — database, API, frontend and production — using Node.js, TypeScript, NestJS, Vue.js and PostgreSQL, working directly with Product Owners to turn business requirements into technical solutions.",

      "Built an influencer/creator discovery system using Instagram and TikTok data integrations, reducing manual creator-search time by approximately 80%.",

      "Optimized SQL queries, aggregation pipelines and analytics dashboards, reducing dashboard load times by approximately 40% and improving selected API responses by up to 3×.",

      "Implemented RBAC, audit logging and integrations with Instagram/TikTok APIs, Mixpanel and Konnect payments.",

      "Led the Vue 2 → Vue 3 migration, covering Vue Router 4, Pinia and Composition API, while mentoring junior developers through the migration.",

      "Led the Socket.IO → Firebase migration for real-time functionality, simplifying the real-time infrastructure and improving reliability.",

      "Migrated media storage from local servers to Amazon S3, reducing thumbnail processing and storage overhead by approximately 60%.",

      "Designed a Redis-backed FFmpeg processing pipeline for video watermarking, S3 storage and thumbnail generation.",

      "Built analytics dashboards and internal management tools for campaigns, payments, creator accounts, feedback, ratings and workspaces.",

      "Act as a technical decision-maker alongside the CTO, contributing to module and priority decisions, hiring interviews, technical tests and supervision of junior engineers.",
    ],

    technologies: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Vue.js",
      "PostgreSQL",
      "Redis",
      "Firebase",
      "Amazon S3",
      "Docker",
      "CI/CD",
    ],
  },

  {
    company: "Aprilium",

    role: "Full Stack Engineer",

    period: "Sept. 2022 – Sept. 2023",

    location: "Tunis, Tunisia",

    bullets: [
      "Contributed to ANTS, an education platform serving 10,000+ students across React web and React Native mobile applications.",

      "Led the Spring Boot → NestJS migration, defining the target architecture, module organization, service boundaries and data-access patterns while preserving existing business behavior.",

      "Designed and built a model-driven NestJS module generator and ants-cli, automating boilerplate module creation and accelerating backend development.",

      "Supported 3 junior developers throughout the backend migration through technical guidance and code reviews.",

      "Built and published the @aprilium/antssm npm package and a reusable React state-management package adopted across the ANTS frontend.",

      "Developed REST APIs and RBAC-driven administration features using NestJS, TypeORM and Microsoft SQL Server.",

      "Built ANTS Console, an internal tool allowing the team to manage and audit database records without writing direct SQL.",

      "Tested APIs with Postman and defined expected behaviors and edge cases before QA handoff.",

      "Developed internal C#.NET tools that reduced manual data handling by approximately 30%.",
    ],

    technologies: [
      "Node.js",
      "NestJS",
      "Spring Boot",
      "React",
      "React Native",
      "TypeScript",
      "TypeORM",
      "Microsoft SQL Server",
      "CLI Development",
    ],
  },

  {
    company: "Graphic Arts",

    role: "IT Manager · Technical Consultant",

    period: "Feb. 2021 – Apr. 2022",

    location: "Tunis, Tunisia",

    bullets: [
      "Designed and built a full-stack inventory management system using Angular, Express.js and MongoDB, achieving approximately 99% availability.",

      "Designed the frontend architecture, developed Angular features, integrated REST APIs and provided production support.",

      "Built an internal C#/MySQL tool for managing clients, suppliers, partners and operational follow-up.",

      "Administered Windows Server infrastructure for 20+ users while maintaining approximately 99% uptime.",

      "Supervised 5 PFE graduation projects, providing technical guidance from architecture and implementation through delivery.",
    ],

    technologies: [
      "Angular",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "C#",
      "MySQL",
      "REST",
      "Git",
    ],
  },

  {
    company: "Tunisie Telecom",

    role: "Web Developer",

    period: "Feb. 2020 – Apr. 2020",

    location: "Tunis, Tunisia",

    bullets: [
      "Designed and developed two roaming complaint management applications covering web and mobile use cases.",

      "Designed and implemented the application database using Firebase.",

      "Developed a mobile application using Angular, HTML and CSS.",

      "Developed a web application using C# and Visual Studio.",

      "Worked within an Agile/Scrum development process.",
    ],

    technologies: [
      "Angular",
      "C#",
      "Firebase",
      "HTML",
      "CSS",
      "Agile",
      "Scrum",
    ],
  },
];


// ============================================================
// EDUCATION
// ============================================================

export const education = [
  {
    school:
      "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies",

    degree: "Engineering Degree, Software Engineering",

    period: "Sept. 2021 – July 2025",
  },

  {
    school:
      "ESSECT — École Supérieure des Sciences Économiques et Commerciales de Tunis",

    degree: "Bachelor's Degree, Business Computing — Management Information Systems",

    period: "Sept. 2016 – July 2020",
  },
];


// ============================================================
// SKILLS
// ============================================================

export const skills = {
  Languages: [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "C#",
    "SQL",
    "HTML/CSS",
  ],

  Frameworks: [
    "Node.js",
    "NestJS",
    "Express.js",
    "Vue.js",
    "React",
    "React Native",
    "Angular",
    "Spring Boot",
  ],

  Databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Microsoft SQL Server",
    "Supabase",
    "Firebase",
  ],

  Tools: [
    "Git",
    "GitLab",
    "Docker",
    "Vite",
    "Figma",
    "Redis",
    "FFmpeg",
    "Amazon S3",
    "Resend",
    "Socket.IO",
    "Jira",
    "Postman",
    "Mixpanel",
    "Konnect",
  ],

  Practices: [
    "System Architecture & Technical Leadership",
    "Product Engineering",
    "0→1 Product Development",
    "RBAC & Access Control Design",
    "REST API Design",
    "Real-Time Systems",
    "Database Architecture & Optimization",
    "CI/CD",
    "Code Review",
    "Technical Mentoring",
  ],
};
