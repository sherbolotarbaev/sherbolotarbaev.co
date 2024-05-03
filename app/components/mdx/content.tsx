import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';

import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import '../scss/atom-one-dark-reasonable.scss';

import { components } from './components';

type MDXContentProps = Omit<MDXRemoteProps, 'components'>;

export default function MDXContent(props: MDXContentProps) {
  return (
    // @ts-expect-error
    <MDXRemote
      {...props}
      components={components}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          // @ts-expect-error
          rehypePlugins: [rehypeHighlight, rehypeSlug],
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
