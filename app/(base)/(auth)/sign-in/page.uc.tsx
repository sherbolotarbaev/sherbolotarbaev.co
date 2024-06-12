'use client';

import { siteConfig } from '@/config/site';

import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '../components/login.form';

import logo from '@/public/images/logo.png';
import scss from '@/app/components/scss/auth.module.scss';

export default function LoginClient() {
  return (
    <>
      <section className={scss.wrapper}>
        <div className={scss.right}>
          <Link href="/" className={scss.logo_container}>
            <div className={scss.logo_wrapper}>
              <Image
                className={scss.logo}
                width={45}
                height={45}
                src={logo}
                alt={siteConfig.name}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AAAAAADJyckztra2RgAAAAIAxMTEP+Li4vb9/f3/xsbGgwDDw8OK6+vr/83Nze2YmJiDAFxcXBtqampdQEBAGwAAAACyHSHCm4RaSAAAAABJRU5ErkJggg=="
              />
            </div>

            <span className={scss.name}>{siteConfig.name}</span>
          </Link>

          <LoginForm />
        </div>

        <div className={scss.left}></div>
      </section>
    </>
  );
}
