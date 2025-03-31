/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Add this for static site generation
    experimental: {
      turbo: {}, // Enable Turbopack for development
    },
  };
  
  export default nextConfig;