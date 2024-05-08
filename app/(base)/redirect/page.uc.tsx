'use client';

import { useEffect } from 'react';

import { BiLoader } from 'react-icons/bi';
import scss from '@/app/components/scss/redirect.module.scss';

export default function RedirectClient() {
  useEffect(() => {
    const redirectTo = decodeURIComponent(
      window?.location?.href?.split('to=')?.[1] || '/',
    );

    window?.location?.assign(redirectTo);
  }, []);

  return (
    <>
      <div className={scss.wrapper}>
        <div className={scss.text}>
          <BiLoader size={20} className={scss.loader} />
          Redirection...
        </div>
      </div>
    </>
  );
}
