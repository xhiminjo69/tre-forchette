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
    // Use default image path when using custom domain
    path: '/_next/image',
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes for better compatibility
  // Custom domain doesn't need basePath or assetPrefix
  // Add a public runtime config with empty basePath for custom domain
  publicRuntimeConfig: {
    basePath: '',
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
