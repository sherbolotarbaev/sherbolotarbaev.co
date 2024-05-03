import type { MDXComponents } from 'mdx/types';
import type { ImageProps } from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { geistSans, geistMono } from '@/app/lib/fonts';
import scss from '../scss/post.module.scss';

interface DivProps extends ComponentPropsWithoutRef<'div'> {
  'data-language'?: string;
  'data-rehype-pretty-code-fragment'?: string;
  'data-rehype-pretty-code-title'?: string;
  raw?: string;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

export const components: MDXComponents = {
  Image: ({ alt, className, ...props }: ImageProps) => {
    return (
      <div className={scss.image_wrapper}>
        <Image
          className={scss.image}
          width={700}
          height={350}
          alt={alt}
          loading={'lazy'}
          {...props}
        />
      </div>
    );
  },
  a: ({ href, ...props }) =>
    href?.startsWith('#') ? (
      <Link className={`${scss.link} ${scss.h}`} href={href}>
        {props.children}
      </Link>
    ) : href ? (
      <Link className={scss.link} href={href} target="_blank">
        {props.children}
      </Link>
    ) : null,
  code: ({ className, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const languageMatch = className?.match(/language-(\w+)/);
    const language = languageMatch ? languageMatch[1] : undefined;

    return (
      <code
        className={!language ? scss.code : `${scss.code} ${scss.lang}`}
        style={{
          ...geistSans.style,
          ...geistMono.style,
        }}
        {...props}
      />
    );
  },
  div: ({ children, className, raw, ...props }: DivProps) => {
    const language = props['data-language'];

    if (props['data-rehype-pretty-code-title'] !== undefined || language !== undefined) {
      return <div>{children}</div>;
    }

    if (props['data-rehype-pretty-code-fragment'] !== undefined && raw) {
      return <div {...props}>{children}</div>;
    }

    return <div {...props}>{children}</div>;
  },
  h1: ({ children }: ComponentPropsWithoutRef<'h1'>) => {
    const slug = children ? slugify(children.toString()) : '';

    return (
      <a key={`link-${slug}`} href={`#${slug}`}>
        <h1 id={slug}>{children}</h1>
      </a>
    );
  },
  h2: ({ children }: ComponentPropsWithoutRef<'h2'>) => {
    const slug = children ? slugify(children.toString()) : '';

    return (
      <a key={`link-${slug}`} href={`#${slug}`}>
        <h2 id={slug}>{children}</h2>
      </a>
    );
  },
  h3: ({ children }: ComponentPropsWithoutRef<'h3'>) => {
    const slug = children ? slugify(children.toString()) : '';

    return (
      <a key={`link-${slug}`} href={`#${slug}`}>
        <h3 id={slug}>{children}</h3>
      </a>
    );
  },
  h4: ({ children }: ComponentPropsWithoutRef<'h4'>) => {
    const slug = children ? slugify(children.toString()) : '';

    return (
      <a key={`link-${slug}`} href={`#${slug}`}>
        <h4 id={slug}>{children}</h4>
      </a>
    );
  },
  h5: () => null,
  h6: () => null,
  pre: ({ ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre style={geistMono.style} {...props} />
  ),
};
