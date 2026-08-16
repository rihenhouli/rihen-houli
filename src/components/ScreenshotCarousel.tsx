"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ScreenshotCarouselProps = {
  title: string;
  description: string;
  images: string[];
  alt: string;

  role?: string;
  tech?: string;
  challenge?: string;
  result?: string;

  liveDemo?: string;
  github?: string;
};

export function ScreenshotCarousel({
  title,
  description,
  images,
  alt,
  role,
  tech,
  challenge,
  result,
  liveDemo,
  github,
}: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Auto-rotate screenshots
  useEffect(() => {
    if (
      images.length < 2 ||
      paused ||
      fullscreen ||
      reduceMotion.current
    ) {
      return;
    }

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);

    return () => clearInterval(id);
  }, [images.length, paused, fullscreen]);

  // Keyboard controls for fullscreen gallery
  useEffect(() => {
    if (!fullscreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreen(false);
      }

      if (event.key === "ArrowRight") {
        setIndex((i) => (i + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [fullscreen, images.length]);

  if (images.length === 0) return null;

  const previous = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <>
      <article className="w-full">
        {/* Project title + description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {title}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            {description}
          </p>
        </div>

        {/* Large featured image */}
        <div
          className="group relative aspect-video w-full overflow-hidden rounded-xl bg-paper"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-500 ease-out"
              style={{ opacity: i === index ? 1 : 0 }}
              aria-hidden={i !== index}
            >
              <button
                type="button"
                className="absolute inset-0 z-10 h-full w-full cursor-zoom-in"
                onClick={() => setFullscreen(true)}
                aria-label={`Open ${alt} screenshot ${
                  i + 1
                } in fullscreen`}
              >
                <Image
                  src={src}
                  alt={`${alt} — screenshot ${i + 1} of ${images.length}`}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  priority={i === 0}
                />

                {/* Subtle fullscreen hint */}
                <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  Click to expand
                </span>
              </button>
            </div>
          ))}

          {/* Previous */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                aria-label="Previous screenshot"
                className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
              >
                ←
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
              >
                →
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                {index + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Project information */}
        {(role || tech || challenge || result) && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {role && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Role
                </p>
                <p className="mt-1 text-sm leading-6 text-ink">{role}</p>
              </div>
            )}

            {tech && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Tech
                </p>
                <p className="mt-1 text-sm leading-6 text-ink">{tech}</p>
              </div>
            )}

            {challenge && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Challenge
                </p>
                <p className="mt-1 text-sm leading-6 text-ink">
                  {challenge}
                </p>
              </div>
            )}

            {result && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Result
                </p>
                <p className="mt-1 text-sm leading-6 text-ink">{result}</p>
              </div>
            )}
          </div>
        )}

        {/* Links */}
        {(liveDemo || github) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85"
              >
                Live demo ↗
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink/40 hover:bg-ink/5"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </article>

      {/* Fullscreen gallery */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image gallery`}
          onClick={() => setFullscreen(false)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            aria-label="Close fullscreen gallery"
            className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            ×
          </button>

          {/* Image */}
          <div
            className="relative h-[85vh] w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${alt} — screenshot ${index + 1} of ${images.length}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {/* Previous */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={previous}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:left-4"
              >
                ←
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:right-4"
              >
                →
              </button>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                {index + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}