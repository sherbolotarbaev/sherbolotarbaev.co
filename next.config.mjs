/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['avatars.githubusercontent.com', 'sherbolotarbaev.pro'],
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
