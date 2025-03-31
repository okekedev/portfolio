/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    experimental: {
      turbo: {},
    },
    eslint: {
      ignoreDuringBuilds: true,  // This will ignore all ESLint errors during build
    },
  };
  
  export default nextConfig;