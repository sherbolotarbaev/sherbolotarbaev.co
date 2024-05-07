/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'sherbolotarbaev.pro',
    ],
  },
  experimental: {
    mdxRs: true,
  },
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

export default nextConfig;
