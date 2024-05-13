import { getRecentBlogPosts } from '../lib/blog';

import HomeClient from './page.uc';

export default async function Home() {
  const posts = getRecentBlogPosts();

  return <HomeClient posts={posts} />;
}
