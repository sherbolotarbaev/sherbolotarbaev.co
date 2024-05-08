'use client';

import { links } from '@/content/footer/links';

import Link from 'next/link';

import { GoArrowUpRight } from 'react-icons/go';
import scss from './scss/footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={scss.footer}>
        <div className={scss.text}>
          Built and designed by Sherbolot Arbaev. <br /> All rights reserved. ©
        </div>

        {links.length && (
          <div className={scss.links}>
            {links.map((link, index) => (
              <Link key={index} className={scss.link} href={link.url}>
                <GoArrowUpRight size={20} /> {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
