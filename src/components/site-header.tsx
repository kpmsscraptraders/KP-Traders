"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { IconClose, IconLogo, IconMenu } from "@/components/icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

function useActiveSection(sectionIds: string[], topOffsetPx: number) {
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const initialHash = window.location.hash;
    if (initialHash) setActive(initialHash);

    const onHashChange = () => {
      if (window.location.hash) setActive(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return () => window.removeEventListener("hashchange", onHashChange);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        // account for sticky header height
        rootMargin: `-${topOffsetPx}px 0px -55% 0px`
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, [sectionIds, topOffsetPx]);

  return active;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);
  const reduce = useReducedMotion();

  const navItems = useMemo(() => site.nav, []);
  const sectionIds = useMemo(
    () => navItems.map((n) => n.href.replace(/^#/, "")).filter(Boolean),
    [navItems]
  );
  const activeHref = useActiveSection(sectionIds, 96);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <Container className="py-3">
        {/* Desktop: logo left, nav centered, CTAs right (perfect alignment) */}
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <Link
            href="#home"
            className="group inline-flex min-w-0 items-center gap-3"
            aria-label="Go to home"
            onClick={() => setOpen(false)}
          >
            <IconLogo className="h-9 w-9" title="KP Scrap Traders" />
            <div className="min-w-0 leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-slate-900">
                {site.name}
              </div>
              <div
                className="hidden max-w-[520px] truncate text-xs text-slate-500 sm:block"
                title={site.tagline}
              >
                {site.tagline}
              </div>
            </div>
          </Link>

          {/* Center nav (desktop only) */}
          <nav className="hidden items-center justify-self-center lg:flex">
            <div className="flex items-center justify-center gap-6">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-xl px-3 py-2 text-sm font-semibold transition",
                      isActive
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {!reduce && isActive ? (
                      <motion.span
                        layoutId="kp-nav-selector"
                        className="absolute inset-0 rounded-xl border border-slate-200 bg-slate-900/5"
                        transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                      />
                    ) : null}
                    {reduce && isActive ? (
                      <span className="absolute inset-0 rounded-xl border border-slate-200 bg-slate-900/5" />
                    ) : null}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center justify-self-end gap-3 lg:flex">
            <ButtonLink href="#contact" variant="secondary">
              Get Quote
            </ButtonLink>
            <ButtonLink href={`tel:${site.contact.phone}`} variant="primary">
              Call Now
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm shadow-slate-900/5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose title="Close" /> : <IconMenu title="Menu" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            className="lg:hidden"
            role="dialog"
            aria-modal="true"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="border-t border-slate-200 bg-white">
              <Container className="py-4">
                <motion.div
                  className="flex flex-col gap-1"
                  initial={reduce ? false : { y: -6 }}
                  animate={reduce ? undefined : { y: 0 }}
                  exit={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-3 py-3 text-sm font-semibold transition",
                        activeHref === item.href
                          ? "bg-slate-900/5 text-slate-900"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>

                <div className="mt-4 grid grid-cols-1 gap-2">
                  <ButtonLink
                    href="#contact"
                    variant="secondary"
                    className="w-full"
                  >
                    Get Quote
                  </ButtonLink>
                  <ButtonLink
                    href={`tel:${site.contact.phone}`}
                    variant="primary"
                    className="w-full"
                  >
                    Call Now
                  </ButtonLink>
                </div>
              </Container>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}


