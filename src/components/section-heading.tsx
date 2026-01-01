import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "mx-auto text-center" : "", className)}>
      {eyebrow ? (
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-600 shadow-sm shadow-slate-900/5">
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl",
          centered ? "" : ""
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-slate-600",
            centered ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}


