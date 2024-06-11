'use client';

import { siteConfig } from '@/config/site';
import moment from 'moment';

import { links } from '@/content/footer/links';

import Link from 'next/link';

import { GoArrowUpRight } from 'react-icons/go';
import scss from './scss/footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={scss.footer}>
        {links.length && (
          <div className={scss.links}>
            {links.map((link, index) => (
              <Link key={index} className={scss.link} href={link.url} target="_blank">
                <GoArrowUpRight size={20} /> {link.name}
              </Link>
            ))}
          </div>
        )}

        <div className={scss.text}>
          © {moment().year()} {siteConfig.name}
        </div>
      </div>
    </>
  );
}
