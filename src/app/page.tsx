import { profile, experience, education, skills } from "@/lib/profile";
import { projects } from "@/lib/projects";

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
        I build web platforms and REST APIs end-to-end — Node.js, NestJS, Vue, React,
        Angular, Spring Boot. Currently shipping a 3K-creator UGC platform at TAWA.
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
    <article className="group rounded-lg border border-ink/10 bg-white/40 p-5 transition hover:border-accent/40 hover:bg-white/70">
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
      <div className="mt-3 font-mono text-[10px] text-muted">
        {p.role} · {p.year}
      </div>
    </article>
  );
}
