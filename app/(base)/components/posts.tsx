'use client';

import type { Post } from '@/app/lib/blog';
import { formatDate, getDiffHours } from '@/app/lib/date';

import Link from 'next/link';
import Views from '../blog/components/views';

import { GoArrowUpRight } from 'react-icons/go';
import scss from './scss/posts.module.scss';

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Readonly<Props>) {
  return (
    <>
      <div className={scss.wrapper} id="posts">
        <h2 className={scss.title}>Recent posts</h2>

        {posts.length && (
          <div className={scss.posts}>
            {posts.map((post, index) => (
              <Link className={scss.post} href={`/blog/${post.slug}`} key={index}>
                <div className={scss.content}>
                  <h3 className={scss.title}>
                    {post.metadata.title}
                    {getDiffHours(post.metadata.publishedAt) <= 24 && <span>today</span>}
                  </h3>

                  <div className={scss.info}>
                    <span className={scss.date}>
                      {formatDate(post.metadata.publishedAt)}
                    </span>

                    <Views slug={post.slug} />
                  </div>
                </div>

                <GoArrowUpRight size={25} className={scss.icon} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
