'use client';

import type { Post } from '@/app/lib/blog';
import { formatDate } from '@/app/lib/date';

import Link from 'next/link';

import scss from '@/app/components/scss/blog.module.scss';

interface Props {
  posts: Post[];
}

export default function BlogClient({ posts }: Readonly<Props>) {
  return (
    <>
      <section className={scss.wrapper}>
        <div className={scss.container}>
          <div className={scss.text}>
            <h2 className={scss.title}>Personal Blog</h2>
          </div>

          {posts.length && (
            <div className={scss.posts}>
              {posts.map((post, index) => (
                <Link
                  className={scss.post}
                  href={`/blog/${post.slug}`}
                  key={index}
                >
                  <h3 className={scss.title}>{post.metadata.title}</h3>

                  <span className={scss.date}>
                    {formatDate(post.metadata.publishedAt)}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
