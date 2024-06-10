'use client';

import { siteConfig } from '@/config/site';

import Link from 'next/link';
import Image from 'next/image';
import RegisterForm from '../components/register.form';

import logo from '@/public/images/logo.png';
import scss from '@/app/components/scss/page.module.scss';

export default function RegisterClient() {
  return (
    <>
      <section
        className={scss.wrapper}
        style={{
          minWidth: '350px',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.85rem',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
          background: 'var(--bg-main)',
        }}
      >
        <Link href="/" className={scss.logo_wrapper}>
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
        </Link>

        <div className={scss.container}>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
