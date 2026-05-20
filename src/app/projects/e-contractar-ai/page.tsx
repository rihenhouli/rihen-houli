import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const project = projects.find((p) => p.slug === "e-contractar-ai")!;

export const metadata: Metadata = {
  title: `${project.name} — Rihen Houli`,
  description: project.tagline,
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <nav className="mb-10 font-mono text-xs text-muted">
        <Link href="/#projects" className="hover:text-accent">
          ← back to portfolio
        </Link>
      </nav>

      <header>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-ink/70">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`font-mono text-sm underline-offset-4 hover:underline ${
                l.kind === "live" ? "text-accent" : "text-ink/80 hover:text-accent"
              }`}
            >
              {l.kind === "live" ? "↗ " : "→ "}
              {l.label}
            </a>
          ))}
        </div>
      </header>

      <Thumb image={project.image} alt={`${project.name} screenshot`} />

      <Section title="What it does">
        <p>
          E-Contractar AI sits on top of the E-Contractar hiring platform and adds two
          LLM-powered surfaces recruiters can actually use day-to-day.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>CV → Job Matcher.</strong> Upload a PDF. Claude extracts a typed
            candidate profile (skills, years, projects), then scores it against every
            open job offer with a 0–100 rating per criterion and a written rationale.
          </li>
          <li>
            <strong>Interview Screener.</strong> Pick a role, run a 5–7 question
            adaptive chat. Each question builds on the previous answer; the loop ends
            when there&apos;s enough signal, returning a structured assessment
            (verdict, strengths, concerns, score).
          </li>
        </ul>
      </Section>

      <Section title="How it works">
        <p>
          Two-tier split: a Next.js 15 frontend handles uploads and chat UI, a FastAPI
          backend orchestrates the LLM calls. Every Claude response is validated
          against a Pydantic schema before it ever reaches the client.
        </p>
        <pre className="mt-4 overflow-x-auto rounded border border-ink/10 bg-paper p-4 font-mono text-xs text-ink/80">
{`Browser (Next.js)
   │
   │  POST /api/match  (multipart: cv.pdf)
   ▼
FastAPI
   ├─ pypdf  →  extract text
   ├─ Claude   →  parse_cv()      → CandidateProfile  (Pydantic)
   └─ Claude × N  →  match_one()  → JobMatch[]        (Pydantic)
                                                  │
                                                  ▼
                                          JSON  →  Next.js renders cards`}
        </pre>
        <p className="mt-4">
          The interview is stateless on the server: each turn ships the full
          transcript back, so I don&apos;t have to manage session state for a demo.
          The screener tool decides per-turn whether to ask another question or
          conclude with the final assessment, capped at 7 questions defensively.
        </p>
      </Section>

      <Section title="Design choices">
        <Choice
          title="Structured outputs via messages.parse()"
          body={
            <>
              Instead of asking Claude for JSON and parsing it myself, I use{" "}
              <code className="rounded bg-paper px-1 font-mono text-xs">
                client.messages.parse(output_format=MyModel)
              </code>
              . The SDK validates against the Pydantic class before returning,
              so the FastAPI handler never sees malformed shape — no try / except
              around{" "}
              <code className="rounded bg-paper px-1 font-mono text-xs">json.loads</code>
              , no schema drift between client and server.
            </>
          }
        />
        <Choice
          title="Prompt caching on stable system blocks"
          body={
            <>
              The matcher and screener system prompts are frozen across requests, so
              they&apos;re sent with{" "}
              <code className="rounded bg-paper px-1 font-mono text-xs">
                cache_control: ephemeral
              </code>
              . Within a 5-minute window, repeat calls pay roughly 10× less on the
              cached prefix — meaningful when a single CV upload fires ~6 model
              calls.
            </>
          }
        />
        <Choice
          title="Claude Opus 4.7 with adaptive thinking"
          body={
            <>
              Opus 4.7 is the default model. Thinking is configured as{" "}
              <code className="rounded bg-paper px-1 font-mono text-xs">
                {`{type: "adaptive"}`}
              </code>{" "}
              — the model decides per-request whether to reason at length. For
              demos, swap to{" "}
              <code className="rounded bg-paper px-1 font-mono text-xs">
                claude-haiku-4-5
              </code>{" "}
              via{" "}
              <code className="rounded bg-paper px-1 font-mono text-xs">LLM_MODEL</code>{" "}
              env var — same code path, 10× cheaper.
            </>
          }
        />
        <Choice
          title="Monorepo with separate deploy targets"
          body={
            <>
              <code className="rounded bg-paper px-1 font-mono text-xs">frontend/</code>{" "}
              and{" "}
              <code className="rounded bg-paper px-1 font-mono text-xs">backend/</code>{" "}
              live in one repo for clone-and-run simplicity, but deploy independently:
              Next.js on Vercel, FastAPI on Render. CORS is wired via env vars.
              Full walkthrough lives in the repo&apos;s{" "}
              <a
                href="https://github.com/rihenhouli/e-contractar-ai/blob/main/DEPLOY.md"
                className="text-accent underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                DEPLOY.md
              </a>
              .
            </>
          }
        />
      </Section>

      <Section title="Stack">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-sm border border-ink/10 bg-paper px-2 py-1 font-mono text-[11px] text-ink/80"
            >
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What I&rsquo;d add next">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Store interview transcripts so a recruiter can revisit a candidate&apos;s
            screening days later.
          </li>
          <li>
            Stream the interviewer&apos;s questions token-by-token instead of waiting
            for the full message.
          </li>
          <li>
            Wire the matcher into the real e-contractar job database instead of the
            seeded job list.
          </li>
          <li>
            Add an evaluation harness — sample CVs + expected verdicts — to catch
            regressions when iterating on prompts.
          </li>
        </ul>
      </Section>

      <footer className="mt-16 border-t border-ink/10 pt-6">
        <Link href="/#projects" className="font-mono text-xs text-muted hover:text-accent">
          ← back to portfolio
        </Link>
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {title}
      </h2>
      <div className="space-y-3 text-ink/85">{children}</div>
    </section>
  );
}

function Choice({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div className="mt-5 first:mt-0">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-ink/75">{body}</p>
    </div>
  );
}

function Thumb({ image, alt }: { image?: string; alt: string }) {
  if (image) {
    return (
      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg border border-ink/10 bg-paper">
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div className="mt-8 flex aspect-video w-full items-end rounded-lg border border-ink/10 bg-gradient-to-br from-violet-100 to-fuchsia-50 p-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
        e-contractar-ai
      </span>
    </div>
  );
}
