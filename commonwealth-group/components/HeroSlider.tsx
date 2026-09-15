"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/hero";

const INTERVAL_MS = 5600;

type HeroSliderProps = {
  children: React.ReactNode;
};

export function HeroSlider({ children }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((current) => {
      const total = heroSlides.length;
      return ((next % total) + total) % total;
    });
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || paused) return undefined;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % heroSlides.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    function onVisibility() {
      setPaused(document.hidden);
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const current = heroSlides[index];

  return (
    <section
      className="relative isolate min-h-[78vh] w-full overflow-hidden bg-stone md:min-h-[86vh]"
      aria-roledescription="carousel"
      aria-label="Portfolio photographs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, slideIndex) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={slideIndex !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={slideIndex === 0}
            className={`object-cover ${slide.objectClass ?? "object-center"}`}
            sizes="100vw"
          />
        </div>
      ))}

      {children}

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="site-grid flex items-end justify-start pb-4 md:justify-end md:pb-5">
          <div className="flex items-center gap-3 bg-ivory/92 px-3 py-2">
            <p className="hidden text-[0.68rem] tracking-[0.14em] uppercase text-maroon sm:block">
              {current.label}
            </p>
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={slideIndex === index}
                  aria-label={slide.label}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    slideIndex === index
                      ? "w-6 bg-maroon"
                      : "w-1.5 bg-ink/25 hover:bg-ink/45"
                  }`}
                  onClick={() => go(slideIndex)}
                />
              ))}
            </div>
            <div className="ml-1 flex gap-1">
              <button
                type="button"
                className="grid h-7 w-7 place-items-center text-ink/55 hover:text-maroon"
                aria-label="Previous photograph"
                onClick={() => go(index - 1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="grid h-7 w-7 place-items-center text-ink/55 hover:text-maroon"
                aria-label="Next photograph"
                onClick={() => go(index + 1)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
