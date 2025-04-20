/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  trailingSlash: true, // GitHub Pages works better with trailing slashes
  basePath: '/Portfolio-Website', // Your repo name
  assetPrefix: '/Portfolio-Website/', // Your repo name with trailing slash
  images: {
    unoptimized: true, // Required for static export
    domains: ['your-image-domain.com'], // Add any image domains you use
  },
  // Enable static exports for all pages
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      // Add other routes here manually
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
      // Add any other routes your site has
    };
  },
  // Disable features that won't work with static export
  experimental: {
    // Disable any experimental features that require a server
    serverActions: false,
    serverComponents: false,
  },
};

export default nextConfig;