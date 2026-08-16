import Image from "next/image";
import Link from "next/link";
import { profile, experience, education, skills } from "@/lib/profile";
import { projects } from "@/lib/projects";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Nav />
      <Hero />
      <Section id="about" title="About">
        <p className="text-lg leading-relaxed text-ink/80">{profile.summary}</p>
      </Section>

      <Section id="projects" title="Selected projects">
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="space-y-8">
          {experience.map((e) => (
            <li key={e.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">
                  {e.role} <span className="text-muted">·</span>{" "}
                  <span className="text-accent">{e.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/80">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" title="Tech">
        <dl className="grid gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                {group}
              </dt>
              <dd className="mt-1 text-sm text-ink/85">{items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="education" title="Education">
        <ul className="space-y-4">
          {education.map((ed) => (
            <li key={ed.school}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold">{ed.school}</h3>
                <span className="font-mono text-xs text-muted">{ed.period}</span>
              </div>
              <p className="text-sm text-ink/70">{ed.degree}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <ul className="space-y-1.5 text-sm">
          <li>
            <span className="text-muted">Email · </span>
            <a className="underline decoration-accent/40 underline-offset-4 hover:text-accent" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          <li>
            <span className="text-muted">GitHub · </span>
            <a className="underline decoration-accent/40 underline-offset-4 hover:text-accent" href={profile.github} target="_blank" rel="noreferrer">
              {profile.github.replace("https://", "")}
            </a>
          </li>
          <li>
            <span className="text-muted">LinkedIn · </span>
            <a className="underline decoration-accent/40 underline-offset-4 hover:text-accent" href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin.replace("https://", "")}
            </a>
          </li>
          <li>
            <span className="text-muted">Phone · </span>
            <span>{profile.phone}</span>
          </li>
        </ul>
      </Section>

      <footer className="mt-24 border-t border-ink/10 pt-6 text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} — built with Next.js & Tailwind.
      </footer>
    </main>
  );
}

function Nav() {
  const items = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ] as const;
  return (
    <nav className="mb-16 flex items-center justify-between text-sm">
      <a href="#" className="font-mono font-semibold tracking-tight">
        rihen.houli
      </a>
      <ul className="flex gap-6 text-muted">
        {items.map(([label, href]) => (
          <li key={href}>
            <a className="hover:text-ink" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <header className="mb-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {profile.title} · {profile.location}
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/70">
        I own products end-to-end — architecture, technical decisions, and delivery —
        as tech lead on TAWA Digital Factory, on Aprilium&rsquo;s ANTS platform, and as
        Tech lead and Project Manager of BitBoxGames.tn. Node.js, NestJS, Vue,
        React, Angular, Supabase.
      </p>
    </header>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-20 scroll-mt-16">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectCard({ project: p }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white/40 transition hover:border-accent/40 hover:bg-white/70">
      <ProjectThumb project={p} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight group-hover:text-accent">
            {p.name}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
            {p.category}
          </span>
        </div>
        <p className="mt-2 text-sm text-ink/70">{p.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <li
              key={s}
              className="rounded-sm border border-ink/10 bg-paper px-1.5 py-0.5 font-mono text-[10px] text-ink/70"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4 flex flex-wrap items-baseline justify-between gap-3">
          <span className="font-mono text-[10px] text-muted">
            {p.role} · {p.year}
          </span>
          {(p.links?.length || p.hasDetail) && (
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              {p.hasDetail && (
                <li>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="font-mono text-[11px] text-accent underline-offset-4 hover:underline"
                  >
                    Read more →
                  </Link>
                </li>
              )}
              {p.links?.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`font-mono text-[11px] underline-offset-4 hover:underline ${
                      l.kind === "live" ? "text-accent" : "text-ink/70 hover:text-accent"
                    }`}
                  >
                    {l.kind === "live" ? "↗ " : ""}
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectThumb({ project: p }: { project: (typeof projects)[number] }) {
if (p.images && p.images.length > 0) {
  return (
    <ScreenshotCarousel
      images={p.images}
      alt={p.name}
      title={p.name}
      description={p.tagline}
    />
  );
}

  if (p.image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-paper">
        <Image
          src={p.image}
          alt={`${p.name} screenshot`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  // Deterministic gradient placeholder. Picks one of 6 hues based on the slug.
  const hues = [
    "from-orange-100 to-amber-50",
    "from-sky-100 to-indigo-50",
    "from-emerald-100 to-teal-50",
    "from-rose-100 to-orange-50",
    "from-violet-100 to-fuchsia-50",
    "from-slate-200 to-stone-100",
  ];
  const hue = hues[hash(p.slug) % hues.length];
  return (
    <div
      className={`flex aspect-video w-full items-end justify-start bg-gradient-to-br p-4 ${hue}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
        {p.slug}
      </span>
    </div>
  );
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}