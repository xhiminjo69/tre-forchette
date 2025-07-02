/** @type {import('next').NextConfig} */
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
  basePath: '/tre-forchette', // Add base path for GitHub Pages
  assetPrefix: '/tre-forchette', // Set asset prefix for GitHub Pages
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Generate static pages for all language routes
  generateStaticParams: async () => {
    return [
      { lang: 'en' },
      { lang: 'it' },
      { lang: 'al' }
    ]
  },
}

export default nextConfig
