'use client';

import { siteConfig } from '@/config/site';

import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './navlinks';
import Theme from './theme';

import logo from '@/public/images/logo.png';
import scss from './scss/navbar.module.scss';

export default function NavBar() {
  return (
    <>
      <div className={scss.navbar}>
        <div className={scss.wrapper}>
          <div className={scss.content}>
            <Link href="/" className={scss.logo_wrapper}>
              <Image
                className={scss.logo}
                width={38}
                height={38}
                src={logo}
                alt={siteConfig.name}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AAAAAADJyckztra2RgAAAAIAxMTEP+Li4vb9/f3/xsbGgwDDw8OK6+vr/83Nze2YmJiDAFxcXBtqampdQEBAGwAAAACyHSHCm4RaSAAAAABJRU5ErkJggg=="
              />
            </Link>

            <NavLinks />
          </div>

          <div className={scss.right}>
            <Theme />
          </div>
        </div>
      </div>
    </>
  );
}
