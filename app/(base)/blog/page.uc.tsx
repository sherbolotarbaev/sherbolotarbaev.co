'use client';

import type { Post } from '@/app/lib/blog';
import { formatDate, getDiffHours } from '@/app/lib/date';

import Link from 'next/link';
import Views from './components/views';

import { BiLockAlt } from 'react-icons/bi';
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
                <Link className={scss.post} href={`/blog/${post.slug}`} key={index}>
                  <h3 className={scss.title}>
                    {post.metadata.title}
                    {getDiffHours(post.metadata.publishedAt) <= 24 && <span>today</span>}
                    {post.metadata.private === 'true' && <BiLockAlt />}
                  </h3>

                  <div className={scss.info}>
                    <span className={scss.date}>
                      {formatDate(post.metadata.publishedAt)}
                    </span>

                    <Views slug={post.slug} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
