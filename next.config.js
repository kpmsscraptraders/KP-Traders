/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isStaticExport = true;

const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  ...(isStaticExport
    ? {
        output: "export",
        // GitHub Pages serves the site from a subpath (repo name).
        basePath,
        assetPrefix: basePath ? `${basePath}/` : undefined,
        images: { unoptimized: true }
      }
    : {})
};

module.exports = nextConfig;


