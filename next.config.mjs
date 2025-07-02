/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/tre-forchette' : '';

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
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes for better compatibility
  basePath, // Add base path for GitHub Pages
  assetPrefix: basePath, // Set asset prefix for GitHub Pages
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
