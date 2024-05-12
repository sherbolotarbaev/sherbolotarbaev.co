import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';

import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import '../scss/atom-one-dark-reasonable.scss';

import { components } from './components';

import { visit } from 'unist-util-visit';

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
          rehypePlugins: [
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.type === 'element' && node?.tagName === 'pre') {
                  const [codeEl] = node.children;

                  if (codeEl.tagName !== 'code') return;

                  node.raw = codeEl.children?.[0].value;
                }
              });
            },
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.tagName === 'pre') {
                  for (const child of node.children) {
                    if (child.tagName === 'code') {
                      child.properties['raw'] = node.raw;
                    }
                  }
                }
              });
            },
            // @ts-expect-error
            [rehypeHighlight, rehypeSlug],
          ],
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
