'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import { links } from '@/content/navbar/navlinks';
import scss from './scss/navbar.module.scss';

export default function NavLinks() {
  const pathname = usePathname();

  if (!links.length) return null;

  return (
    <div className={scss.links}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={pathname === link.path ? `${scss.link} ${scss.active}` : scss.link}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
