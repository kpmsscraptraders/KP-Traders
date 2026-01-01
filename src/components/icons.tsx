import { cn } from "@/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

export function IconLogo({ className, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={cn("h-9 w-9", className)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <rect x="4" y="4" width="32" height="32" rx="10" fill="#0f172a" />
      <text
        x="20"
        y="20"
        textAnchor="middle"
        dy="0.35em"
        fill="white"
        fontSize="13"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
        letterSpacing="0.5"
      >
        KP
      </text>
    </svg>
  );
}

export function IconMenu({ className, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={cn("h-5 w-5", className)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function IconClose({ className, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={cn("h-5 w-5", className)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}


