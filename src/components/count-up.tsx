"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

function parseTarget(value: string) {
  const trimmed = value.trim();
  const plus = trimmed.endsWith("+");
  const numeric = trimmed.replace(/[^\d]/g, "");
  const n = Number(numeric || "0");
  return { n, plus };
}

export function CountUp({
  value,
  className
}: {
  value: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const target = useMemo(() => parseTarget(value), [value]);
  // Render the final value by default so static exports (and no-JS scenarios) look correct.
  // We'll animate client-side once the value is in view.
  const [display, setDisplay] = useState(value);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (reduce) return;
    if (!ref.current) return;

    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        if (started.current) return;
        started.current = true;

        const from = 0;
        const to = target.n;
        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(from + (to - from) * eased);
          setDisplay(`${current}${target.plus ? "+" : ""}`);
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduce, target.n, target.plus]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}


