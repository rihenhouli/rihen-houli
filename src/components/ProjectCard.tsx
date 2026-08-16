"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, ChevronRight, Image as ImageIcon } from "lucide-react";
import { Project } from "@/lib/projects";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project: p }: ProjectCardProps) {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-xl border border-border bg-secondary/30 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      {/* Thumbnail */}
      <div 
        className="relative aspect-video w-full overflow-hidden bg-secondary/30 cursor-pointer"
        onClick={() => {
          if (p.images && p.images.length > 0) {
            setShowCarousel(!showCarousel);
          }
        }}
      >
        {p.images && p.images.length > 0 ? (
          <>
            <Image
              src={p.images[0]}
              alt={`${p.name} screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {p.images.length > 1 && (
              <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur-sm">
                {p.images.length} photos
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="rounded-full bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-sm">
                Click to view screenshots
              </span>
            </div>
          </>
        ) : p.image ? (
          <Image
            src={p.image}
            alt={`${p.name} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-purple-500/10">
            <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
          </div>
        )}
      </div>

      {/* Carousel (expanded) */}
      {showCarousel && p.images && p.images.length > 0 && (
        <div className="border-t border-border p-4 bg-background/50">
          <ScreenshotCarousel
            images={p.images}
            alt={p.name}
            title={p.name}
            description={p.tagline}
          />
          <button
            onClick={() => setShowCarousel(false)}
            className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Close screenshots ↑
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors line-clamp-1">
            {p.name}
          </h3>
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground whitespace-nowrap">
            {p.category}
          </span>
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 flex-1">
          {p.tagline}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1">
          {p.stack.slice(0, 3).map((s) => (
            <li
              key={s}
              className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[9px] text-primary"
            >
              {s}
            </li>
          ))}
          {p.stack.length > 3 && (
            <li className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
              +{p.stack.length - 3}
            </li>
          )}
        </ul>
        <div className="mt-3 pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[9px] text-muted-foreground">
            {p.year}
          </span>
          <div className="flex flex-wrap gap-2">
            {p.hasDetail && (
              <Link
                href={`/projects/${p.slug}`}
                className="font-mono text-[10px] text-primary hover:underline inline-flex items-center gap-0.5"
              >
                Details <ChevronRight className="h-3 w-3" />
              </Link>
            )}
            {p.links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`font-mono text-[10px] hover:underline inline-flex items-center gap-0.5 ${
                  l.kind === "live" ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.kind === "live" && <ExternalLink className="h-2.5 w-2.5" />}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}