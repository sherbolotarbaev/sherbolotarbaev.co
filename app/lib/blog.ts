import path from 'node:path';

import type { Metadata } from './mdx/parse-frontmatter';
import { getMDXData, getRecentMDXData } from './mdx/get-mdx-data';

export interface Post {
  metadata: Metadata;
  slug: string;
  content: string;
}

export function getBlogPosts(): Post[] {
  const dir = 'content/blog';
  return getMDXData(path.join(process.cwd(), dir));
}

export function getRecentBlogPosts(): Post[] {
  const dir = 'content/blog';
  return getRecentMDXData(path.join(process.cwd(), dir));
}
