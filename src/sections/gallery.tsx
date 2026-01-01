"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/motion";
import { withBasePath } from "@/lib/utils";

const images = [
  { src: withBasePath("/images/scrap/ms-scrap-1.jpg"), alt: "MS scrap in bulk" },
  { src: withBasePath("/images/scrap/ms-scrap-2.jpg"), alt: "Scrap metal pile" },
  { src: withBasePath("/images/scrap/ms-scrap-3.jpg"), alt: "Processed metal scrap" },
  { src: withBasePath("/images/scrap/ms-scrap-4.jpg"), alt: "MS scrap yard material" },
  { src: withBasePath("/images/scrap/ms-scrap-5.jpg"), alt: "Mixed metal scrap close-up" },
  { src: withBasePath("/images/scrap/ms-scrap-7.jpg"), alt: "Scrap metal sorting" }
] as const;

export function GallerySection() {
  const reduce = useReducedMotion();
  const items = useMemo(() => images, []);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const shouldAnimate = !reduce;

  const slideVariants = useMemo(
    () => ({
      enter: (dir: 1 | -1) => ({ opacity: 0, x: dir * 28 }),
      center: { opacity: 1, x: 0 },
      exit: (dir: 1 | -1) => ({ opacity: 0, x: -dir * 18 })
    }),
    []
  );

  function goTo(next: number) {
    if (next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }

  function next() {
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  }

  function prev() {
    setDirection(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  }

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => next(), 6500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <section id="gallery" aria-label="MS Scrap Photos" className="bg-white">
      <Container className="py-10 sm:py-12">
        <FadeIn>
          <SectionHeading
            eyebrow="Photos"
            title="MS Scrap gallery"
            description="A quick look at typical lots and material conditions (sample images)."
          />
        </FadeIn>

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-surface-2 shadow-card">
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={items[index].src}
                  custom={direction}
                  variants={shouldAnimate ? slideVariants : undefined}
                  initial={shouldAnimate ? "enter" : false}
                  animate={shouldAnimate ? "center" : undefined}
                  exit={shouldAnimate ? "exit" : undefined}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={items[index].src}
                    alt={items[index].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 900px"
                    unoptimized
                    className="object-cover"
                    priority={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-white">MS Scrap</div>
                <div className="mt-0.5 truncate text-xs font-semibold text-slate-100/90">
                  {items[index].alt}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
                  aria-label="Previous photo"
                >
                  <span aria-hidden>‹</span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
                  aria-label="Next photo"
                >
                  <span aria-hidden>›</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {items.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={
                  "h-2.5 w-2.5 rounded-full transition " +
                  (i === index ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400")
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


