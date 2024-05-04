'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import { links } from '@/content/navbar/navlinks';
import scss from './scss/navbar.module.scss';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className={scss.links}>
      {links.length &&
        links.map((link, index) => (
          <Link
            key={index}
            className={pathname === link.path ? `${scss.link} ${scss.active}` : scss.link}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}

      <Link className={scss.link} href="/cv/sherbolot_arbaev.pdf" target="_blank">
        Resume
      </Link>
    </div>
  );
}
