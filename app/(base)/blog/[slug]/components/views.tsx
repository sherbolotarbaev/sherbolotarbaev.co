'use client';

import { useAddViewQuery } from '@/app/redux/api/blog';

import scss from '@/app/components/scss/post.module.scss';

interface Props {
  slug: string;
}

export default function Views({ slug }: Readonly<Props>) {
  const { data: viewsForPost } = useAddViewQuery({ slug });
  const views = new Number(viewsForPost?.count || 0);

  return <span className={scss.views}>{views.toLocaleString()} views</span>;
}
