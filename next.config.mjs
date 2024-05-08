/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'sherbolotarbaev.pro',
      'avatar.vercel.sh',
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
