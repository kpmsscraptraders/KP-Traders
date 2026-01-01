/* A redesigned, premium hero with slider-like messaging (Green Apex vibe, KP Scrap Traders content). */
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { CountUp } from "@/components/count-up";
import { site } from "@/lib/site";
import { withBasePath } from "@/lib/utils";

export function HeroSection() {
  const reduce = useReducedMotion();
  const shouldAnimate = !reduce;

  const slides = useMemo(
    () => [
      {
        eyebrow: "Metal Recycling",
        titleTop: "Trade smarter with",
        titleAccent: "verified scrap",
        desc:
          "Consistent grades, transparent dealing, and dependable dispatch—built for long-term partnerships."
      },
      {
        eyebrow: "Bulk & Container Trading",
        titleTop: "A faster, cleaner",
        titleAccent: "supply chain",
        desc:
          "From sourcing to segregation, we optimize the flow so you get predictable lots and fewer surprises."
      },
      {
        eyebrow: "Quality First",
        titleTop: "Segregation that",
        titleAccent: "actually matters",
        desc:
          "Inspection, sorting, and communication that keeps your procurement and processing smooth."
      }
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [reduce, slides.length]);

  function goTo(next: number) {
    if (next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid opacity-[0.65]" />
      <div className="pointer-events-none absolute -top-40 left-[-120px] h-[520px] w-[520px] rounded-full bg-slate-200/60 blur-3xl floaty" />
      <div className="pointer-events-none absolute -bottom-52 right-[-160px] h-[620px] w-[620px] rounded-full bg-slate-100 blur-3xl" />

      <Container className="py-14 sm:py-18">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={
                    shouldAnimate
                      ? {
                          enter: (dir: 1 | -1) => ({ opacity: 0, x: dir * 24 }),
                          center: { opacity: 1, x: 0 },
                          exit: (dir: 1 | -1) => ({ opacity: 0, x: -dir * 18 })
                        }
                      : undefined
                  }
                  initial={shouldAnimate ? "enter" : false}
                  animate={shouldAnimate ? "center" : undefined}
                  exit={shouldAnimate ? "exit" : undefined}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                    {slides[index].eyebrow}
                  </div>
                  <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                    {slides[index].titleTop}{" "}
                    <span className="text-gradient">{slides[index].titleAccent}</span>
                  </h1>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    {slides[index].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#products" variant="primary" className="justify-center">
                Explore Products
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" className="justify-center">
                Get a Quote
              </ButtonLink>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {site.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-card backdrop-blur transition will-change-transform hover:-translate-y-1"
                >
                  <div className="text-2xl font-black tracking-tight text-slate-900">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  className={
                    "h-2.5 w-2.5 rounded-full transition " +
                    (i === index ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400")
                  }
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-slate-200/70 via-white to-slate-100 blur-xl" />
            <div className="relative rounded-[28px] border border-slate-200 bg-white p-4 shadow-card">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-surface-2 sm:aspect-auto sm:h-full">
                  <Image
                    src={withBasePath("/images/scrap/ms-scrap-3.jpg")}
                    alt="MS scrap"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/45 to-transparent p-4">
                    <div className="text-sm font-extrabold text-white">
                      MS Scrap Lots
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-100/90">
                      Clean sorting • consistent grades
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-surface-2">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={withBasePath("/images/scrap/ms-scrap-2.jpg")}
                        alt="Scrap metal pile"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        unoptimized
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-surface-2">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={withBasePath("/images/scrap/ms-scrap-4.jpg")}
                          alt="MS scrap material"
                          fill
                          sizes="(max-width: 1024px) 50vw, 20vw"
                          unoptimized
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-surface-2">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={withBasePath("/images/scrap/ms-scrap-5.jpg")}
                          alt="Scrap metal close-up"
                          fill
                          sizes="(max-width: 1024px) 50vw, 20vw"
                          unoptimized
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-surface-2">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={withBasePath("/images/scrap/ms-scrap-7.jpg")}
                        alt="Scrap metal heap"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        unoptimized
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


