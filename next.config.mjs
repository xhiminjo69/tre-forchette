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
  assetPrefix: '', // Don't use asset prefix for static export
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
