/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // For static site generation
    images: {
      unoptimized: true, // This fixes the Image component in export mode
    },
    experimental: {
      turbo: {}, // Enable Turbopack for development
    },
  };
  
  export default nextConfig;