"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Code2,
  Briefcase,
  GraduationCap,
  Zap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Rocket,
  Target,
  Globe,
  Plane,
} from "lucide-react";
import { profile, experience, education, skills } from "@/lib/profile";
import { projects } from "@/lib/projects";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { MotionWrapper } from "@/components/MotionWrapper";
import { ProjectCard } from "@/components/ProjectCard";
import { ProfileImage } from "@/components/ProfileImage";

export default function Page() {
  const mainRef = useRef<HTMLMainElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  // Projects pagination state
  const [showAllProjects, setShowAllProjects] = useState(false);
  const INITIAL_PROJECTS = 6;
  const visibleProjects = showAllProjects ? projects : projects.slice(0, INITIAL_PROJECTS);
  const hasMoreProjects = projects.length > INITIAL_PROJECTS;

  // Split summary into paragraphs for better readability
  const summaryParagraphs = profile.summary.split("\n\n");

  return (
    <main ref={mainRef} className="relative min-h-screen">
      <BackgroundOrbs />

      {/* Floating Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 z-50 w-full max-w-2xl -translate-x-1/2 px-4"
      >
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <Link href="#" className="font-mono font-semibold text-sm tracking-tight">
            <span className="text-gradient">RH.</span>
          </Link>
          <div className="flex items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        {/* Hero Section */}
        <motion.header
          style={{ opacity: heroOpacity }}
          className="mb-24 text-center"
        >
          <MotionWrapper>
            <ProfileImage name={profile.name} />

            {/* Open to Relocation Badge */}
            {profile.relocation.openToRelocation && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-xs text-green-500 border border-green-500/20 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Open to relocation
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-sm font-mono text-muted-foreground mb-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>{profile.location}</span>
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              <span className="text-primary">{profile.title}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>

            {/* Tagline - Short, punchy value proposition */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <Rocket className="h-4 w-4" />
              <span>{profile.tagline}</span>
            </div>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              {profile.seo.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                Get in touch
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:bg-secondary hover:scale-[1.02]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:bg-secondary hover:scale-[1.02]"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </MotionWrapper>
        </motion.header>

        {/* Relocation Banner */}
        {profile.relocation.openToRelocation && (
          <MotionWrapper delay={0.1}>
            <div className="mb-16 overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 p-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 animate-pulse" />

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/20 p-2">
                    <Plane className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      🌍 Open to Relocation
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {profile.relocation.preferredLocations.join(" · ")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 rounded-full bg-secondary/50 px-3 py-1">
                    <Globe className="h-3 w-3" />
                    {profile.relocation.visaStatus}
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-secondary/50 px-3 py-1">
                    <MapPin className="h-3 w-3" />
                    Notice: {profile.relocation.noticePeriod}
                  </span>
                </div>
              </div>
            </div>
          </MotionWrapper>
        )}

        {/* About - Using detailed summary (recruiter-focused) */}
        <Section id="about" title="About" icon={<Sparkles className="h-4 w-4" />}>
          <MotionWrapper>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
              {summaryParagraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-lg" : "text-base"}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key stats/achievements for recruiters */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
                <div className="text-2xl font-bold text-gradient">6+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
                <div className="text-2xl font-bold text-gradient">3</div>
                <div className="text-xs text-muted-foreground">Products as Tech Lead</div>
              </div>
              <div className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
                <div className="text-2xl font-bold text-gradient">10K+</div>
                <div className="text-xs text-muted-foreground">Users Served</div>
              </div>
              <div className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
                <div className="text-2xl font-bold text-gradient">13</div>
                <div className="text-xs text-muted-foreground">Projects Shipped</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                {profile.phone}
              </a>
            </div>
          </MotionWrapper>
        </Section>

        {/* Projects - Show 6 initially, with "Show More" button */}
        <Section id="projects" title="Projects" icon={<Code2 className="h-4 w-4" />}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((p, i) => (
              <MotionWrapper key={p.slug} delay={i * 0.05}>
                <ProjectCard project={p} />
              </MotionWrapper>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {hasMoreProjects && (
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-6 py-3 text-sm font-medium transition-all hover:bg-secondary hover:border-primary/40"
              >
                {showAllProjects ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Show less ({projects.length} projects)
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Show all {projects.length} projects
                  </>
                )}
              </motion.button>
            </div>
          )}
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={<Briefcase className="h-4 w-4" />}>
          <ol className="space-y-10">
            {experience.map((e, i) => (
              <MotionWrapper key={e.company} delay={i * 0.05}>
                <li>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {e.role}{" "}
                      <span className="text-muted-foreground">·</span>{" "}
                      <span className="text-primary">{e.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </MotionWrapper>
            ))}
          </ol>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={<Zap className="h-4 w-4" />}>
          <MotionWrapper>
            <dl className="grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div
                  key={group}
                  className="rounded-xl border border-border bg-secondary/30 p-5"
                >
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {group}
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </MotionWrapper>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={<GraduationCap className="h-4 w-4" />}>
          <MotionWrapper>
            <ul className="space-y-6">
              {education.map((ed) => (
                <li
                  key={ed.school}
                  className="rounded-xl border border-border bg-secondary/30 p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{ed.school}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {ed.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{ed.degree}</p>
                </li>
              ))}
            </ul>
          </MotionWrapper>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" icon={<Mail className="h-4 w-4" />}>
          <MotionWrapper>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 p-8 text-center">
              <Target className="h-12 w-12 text-primary/60 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">Let's build something great together</h3>
              <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                I'm currently open to Tech Lead, Senior Full Stack, or freelance opportunities.
                {profile.relocation.openToRelocation && (
                  <span className="block mt-1 text-primary">
                    🌍 Open to relocation to {profile.relocation.preferredLocations.join(", ")}
                  </span>
                )}
              </p>

              {/* Relocation details in contact */}
              {profile.relocation.openToRelocation && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary/50 px-3 py-1">
                    Visa: {profile.relocation.visaStatus}
                  </span>
                  <span className="rounded-full bg-secondary/50 px-3 py-1">
                    Notice: {profile.relocation.noticePeriod}
                  </span>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:bg-secondary hover:scale-[1.02]"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:bg-secondary hover:scale-[1.02]"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </MotionWrapper>
        </Section>

        {/* Footer */}
        <footer className="mt-24 border-t border-border pt-6 text-xs text-muted-foreground text-center space-y-1">
          <p>
            © {new Date().getFullYear()} {profile.name} — built with Next.js, Tailwind & Framer Motion.
          </p>
          <p className="text-muted-foreground/60">
            {profile.relocation.openToRelocation
              ? `🌍 Open to relocation · ${profile.relocation.preferredLocations.join(" · ")}`
              : `${profile.location} · Available for remote work`}
          </p>
        </footer>
      </div>
    </main>
  );
}

// ============ Components ============

function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-20 scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        {icon && <span className="text-primary">{icon}</span>}
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.295-1.23 3.295-1.23.648 1.653.243 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V8.999h3.564v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}