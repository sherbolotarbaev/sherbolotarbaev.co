import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

import { notFound } from 'next/navigation';

import { getMe } from '@/app/redux/api/me/server';
import { getBlogPosts } from '@/app/lib/blog';
import { formatDate, formatDate2 } from '@/app/lib/date';

import Image from 'next/image';
import MDXContent from '@/app/components/mdx/content';
import Views from './components/views';
import { SignOutButton } from '@/content/guestbook/buttons';
import OuathButtons from '@/app/components/oauth-buttons';
import Modal from '@/app/components/modal';

import scss from '@/app/components/scss/post.module.scss';

interface GenerateMetadataProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params: { slug },
}: Readonly<GenerateMetadataProps>): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? `${siteConfig.url}${image}`
    : `${siteConfig.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

interface PostProps {
  params: { slug: string };
}

export default async function Post({ params: { slug } }: Readonly<PostProps>) {
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  if (post.metadata.private === 'true') {
    const user = await getMe();

    if (!user) {
      return (
        <>
          <Modal open={true} title="Private post" desc="sign in to your account">
            <OuathButtons />
          </Modal>
        </>
      );
    }

    if (user.email && !user.email.endsWith('@wedevx.co')) {
      return (
        <>
          <section className={scss.wrapper}>
            <div className={scss.container}>
              <div className={scss.text}>
                <h2 className={scss.title}>Access Denied 🥲</h2>

                <p className={scss.desc}>
                  Oh no! It seems you do not have permission to access this resource.
                </p>
              </div>

              <SignOutButton />
            </div>
          </section>
        </>
      );
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteConfig.url}${post.metadata.image}`
              : `${siteConfig.url}/og?title=${post.metadata.title}`,
            url: `${siteConfig.url}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: post.metadata.author,
            },
          }),
        }}
      />

      <section className={scss.wrapper}>
        <div className={scss.container}>
          <div className={scss.text}>
            <h2 className={scss.title}>{post.metadata.title}</h2>

            <div className={scss.info}>
              <span className={scss.date}>
                {formatDate2(post.metadata.publishedAt)} (
                {formatDate(post.metadata.publishedAt)})
              </span>

              <Views slug={post.slug} />
            </div>
          </div>

          {post.metadata.image && (
            <div className={scss.image_wrapper}>
              <Image
                className={scss.image}
                width={700}
                height={350}
                src={`${siteConfig.url}${post.metadata.image}`}
                alt={post.metadata.title}
                loading="lazy"
              />
            </div>
          )}

          <div className={scss.text}>
            <p className={scss.desc}>{post.metadata.summary}</p>
          </div>

          <MDXContent source={post.content} />
        </div>
      </section>
    </>
  );
}
