export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) return path;
  if (!path.startsWith("/")) return `${basePath}/${path}`.replace(/\/+/g, "/");
  return `${basePath}${path}`.replace(/\/+/g, "/");
}


