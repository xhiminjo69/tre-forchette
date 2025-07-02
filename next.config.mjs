/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Ensure images work with GitHub Pages base path
    path: isProd ? 'https://xhlek.github.io/tre-forchette/_next/image' : '/_next/image',
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes for better compatibility
  basePath: isProd ? '/tre-forchette' : '', // Add base path for GitHub Pages
  assetPrefix: isProd ? '/tre-forchette' : '', // Set asset prefix for GitHub Pages
  // Add a public runtime config to make the base path available to client-side code
  publicRuntimeConfig: {
    basePath: isProd ? '/tre-forchette' : '',
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
