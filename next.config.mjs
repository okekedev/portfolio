/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Keep this for Azure Static Web Apps
  },
  experimental: {
    turbo: {},
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // SEO improvements
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
