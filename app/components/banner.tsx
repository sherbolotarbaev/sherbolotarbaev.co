'use client';

import Link from 'next/link';

import scss from './scss/banner.module.scss';

interface BannerProps {
  children: React.ReactNode;
  href: string;
  width?: number;
}

export default function Banner({ children, href, width }: Readonly<BannerProps>) {
  return (
    <Link href={href} target="_blank" className={scss.banner} style={{ maxWidth: width }}>
      <span className={scss.lines}></span>

      <span className={scss.inner}>{children}</span>
    </Link>
  );
}
