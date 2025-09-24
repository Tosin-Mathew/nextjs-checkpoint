/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'], // Add domains for external images
  },
  // Enable styled-components
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
