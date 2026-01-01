"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  speedSeconds?: number;
  fadeFromClassName?: string;
};

export function Marquee({
  items,
  className,
  speedSeconds = 28,
  fadeFromClassName = "from-white"
}: MarqueeProps) {
  // Keep it deterministic for SSR/hydration: only duplicate once mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const loop = useMemo(() => {
    if (!mounted) return items;
    return [...items, ...items];
  }, [items, mounted]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r to-transparent",
          fadeFromClassName
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l to-transparent",
          fadeFromClassName
        )}
      />

      <div
        className="flex w-max gap-3 py-2"
        style={{
          animation: mounted
            ? `kp-marquee ${speedSeconds}s linear infinite`
            : undefined
        }}
      >
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm shadow-slate-900/5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}


