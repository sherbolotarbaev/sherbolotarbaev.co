import type { Metadata } from 'next';

import { getBlogPosts } from '@/app/lib/blog';

import BlogClient from './page.uc';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Blog() {
  const posts = getBlogPosts();

  return <BlogClient posts={posts} />;
}
