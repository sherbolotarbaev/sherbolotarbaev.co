'use client';

import { siteConfig } from '@/config/site';

import { Theme, useThemeContext } from '@/app/lib/providers/theme/context';

import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './navlinks';
import Button from './button';

import logo from '@/public/images/logo.png';
import { BiMoon, BiSun } from 'react-icons/bi';
import scss from './scss/navbar.module.scss';

export default function NavBar() {
  const { toggleTheme, theme } = useThemeContext();

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
                loading={'lazy'}
              />
            </Link>

            <NavLinks />
          </div>

          <div className={scss.right}>
            <Button width={150} onClick={toggleTheme}>
              {theme === Theme.LIGHT ? <BiMoon size={20} /> : <BiSun size={20} />}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
