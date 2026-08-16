export const profile = {
  name: "Rihen Houli",
  title: "Full Stack Engineer & Tech Lead",
  location: "Tunis, Tunisia",
  email: "rihenhoulii@gmail.com",
  phone: "+216 50 667 525",
  github: "https://github.com/rihenhouli",
  linkedin: "https://linkedin.com/in/rihen-houli",
  
  // 🎯 Relocation preferences (add this)
  relocation: {
    openToRelocation: true, // Set to false if not open
    preferredLocations: ["Remote", "Europe", "UAE", "Canada", "USA", "UK", "Qatar" ],
    visaStatus: "EU/UK visa sponsorship eligible",
    noticePeriod: "1 month",
  },
  
  // ⚡ SEO & Social Sharing
  seo: {
    title: "Rihen Houli — Full Stack Engineer & Tech Lead | 6+ Years Experience | Open to Relocation",
    description:
      "Full Stack Engineer & Tech Lead with 6+ years building scalable platforms. Open to relocation worldwide. Expert in Node.js, React, Vue.js, TypeScript, and cloud architecture.",
    keywords: [
      "Full Stack Engineer",
      "Tech Lead",
      "Node.js Developer", 
      "React Developer",
      "Vue.js Developer",
      "TypeScript",
      "System Architecture",
      "Product Development",
      "Open to Relocation",
      "Tunisia",
      "Remote Work",
    ],
  },

  // 💼 Elevator Pitch
  tagline:
    "I build products from zero to scale. Tech Lead & Full Stack Engineer with 6+ years of experience. Open to relocation worldwide.",

  // 📝 Professional Summary
  summary:
    "I'm a Full Stack Engineer and Tech Lead who owns products end-to-end — from database architecture and system design to deployment and team mentorship. I don't just write code; I build the technical foundation that enables products to scale, teams to move fast, and users to have seamless experiences.\n\n" +
    "Currently serving as Tech Lead on multiple products: BitBoxGames.tn (booking platform, in-room client app, staff admin console), TAWA Digital Factory (3K+ creators, 100+ campaigns), and previously led the database architecture and technical decisions for ANTS (10K+ students).\n\n" +
    "I specialize in taking products from zero to production: designing the data model, choosing the right stack, building internal tooling that keeps teams efficient, and ensuring technical decisions align with business outcomes. My core stack includes Node.js, NestJS, Express.js, Vue.js, React, Angular, TypeScript, PostgreSQL, Supabase, and Docker.\n\n" +
    "🌍 Open to relocation: I'm excited about opportunities in Europe, UAE, Canada, USA, UK, Qatar or remote-first teams. I'm eligible for visa sponsorship and have a 1-month notice period.\n\n" +
    "Beyond code, I'm passionate about mentoring junior engineers, driving technical decisions that actually ship, and building products that solve real problems.",
};

export const experience = [
  {
    company: "BitBoxGames.tn",
    role: "Tech Lead & Full Stack Engineer (Freelance)",
    period: "2025 – Present",
    location: "Tunis, Tunisia · Remote",
    bullets: [
      "Led and built BitBoxGames.tn end-to-end as sole engineer and product owner — a karaoke-venue platform covering public booking, in-room client experience, and staff operations.",
      "Shipped a public multi-step booking wizard on Supabase (Auth, Edge Functions, RLS policies) with slot-blocking logic and Resend-powered booking confirmation emails.",
      "Built BitBox Karaoke, a real-time in-room client app on Supabase Realtime: session-end countdowns, instant staff-help requests, and in-session coffee ordering.",
      "Built BitBox Admin, an RBAC-gated internal platform for staff to manage bookings (with filters and confirmations), karaoke rooms, games, and coffee inventory.",
    ],
  },
  {
    company: "TAWA Digital Talents",
    role: "Full Stack Engineer · Product Tech Lead",
    period: "Sept. 2023 – Present",
    location: "Tunis, Tunisia",
    bullets: [
      "Acting product tech lead for TAWA Digital Factory, a UGC platform built from zero to 3K+ creators and 100+ active campaigns across 7+ platform roles, owning architecture and delivery end to end.",
      "Migrated real-time session and campaign notifications from Socket.io to Firebase, simplifying infrastructure and improving reliability under load.",
      "Designed a Redis-backed FFmpeg processing queue: watermarking creator video uploads, storing the processed video in S3, then generating and storing thumbnails in S3.",
      "Integrated third-party Instagram/TikTok data providers to power influencer discovery by performance metrics and category, cutting manual search time by ~80%.",
      "Built analytics dashboards for campaign and creator performance, and led a separate internal management app for supervising campaigns, payments, creator accounts, feedback, ratings, and workspaces.",
      "Optimized SQL queries and aggregation pipelines, cutting dashboard load time by 40% and improving analytics response by 3x.",
    ],
  },
  {
    company: "Aprilium",
    role: "Full Stack Web Developer",
    period: "Sept. 2022 – Sept. 2023",
    location: "Tunis, Tunisia",
    bullets: [
      "Led database architecture, feature scope, and technical decisions for ANTS, a multi-platform education system built to serve 10k+ students (React web + React Native mobile).",
      "Designed scalable REST APIs and MySQL schemas; built 500+ reusable components with consistent cross-platform state.",
      "Built ANTS Console, an internal RBAC-gated tool for the team to manage and audit database records without writing direct SQL.",
      "Built ants-cli, a CLI generator that scaffolds NestJS modules (controller/service/module/DTOs) from a schema definition, cutting new-module setup time for the backend team.",
      "Published @aprilium/antssm_ to npm and adopted it as the shared state-management layer across the ANTS frontend.",
      "Developed C#.NET internal tools cutting manual data handling by 30%; mentored 3 interns and led API testing (Postman).",
    ],
  },
  {
    company: "Graphic Arts",
    role: "IT Manager",
    period: "Feb. 2021 – Apr. 2022",
    location: "Tunis, Tunisia",
    bullets: [
      "Supervised 5 engineering graduation projects (PFE), providing technical guidance on architecture, code quality, and delivery.",
      "Built full-stack inventory management system (Angular, Express, MongoDB) from scratch, replacing a manual spreadsheet process.",
      "Administered Windows Server infrastructure for 20+ users, maintaining 99% uptime.",
    ],
  },
  {
    company: "Tunisie Telecom",
    role: "Web Developer Intern",
    period: "Feb. 2020 – Apr. 2020",
    location: "Tunis, Tunisia",
    bullets: [
      "Built two roaming complaint management apps (web + mobile) using Angular, C#, and Firebase within a 3-month Agile sprint.",
    ],
  },
];

export const education = [
  {
    school: "ESPRIT — École Sup. Privée d'Ingénierie et de Technologies",
    degree: "Engineering Degree, Software Engineering",
    period: "Sept. 2021 – July 2025",
  },
  {
    school: "ESSECT — École Sup. des Sciences Économiques et Commerciales de Tunis",
    degree: "Bachelor's, Business Computing — Management Information Systems",
    period: "Sept. 2016 – July 2020",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Java", "Python", "C#", "SQL", "HTML/CSS"],
  Frameworks: ["Node.js", "NestJS", "Express.js", "Vue.js", "React", "React Native", "Angular", "Spring Boot"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase", "MSSQL"],
  Tools: ["Git", "GitLab", "Docker", "Figma", "Redis", "FFmpeg", "AWS S3", "Resend", "Socket.io", "Jira", "Postman"],
  Practices: [
    "System Architecture & Tech Leadership",
    "RBAC & Access Control Design",
    "REST API Design",
    "Real-time Systems (WebSockets/Firebase)",
    "CI/CD",
    "Database Optimization",
  ],
};