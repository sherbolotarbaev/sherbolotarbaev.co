'use client';

import { useEffect } from 'react';

import scss from '@/app/components/scss/page.module.scss';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Readonly<Props>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <section className={scss.wrapper}>
        <div className={scss.container}>
          <div className={scss.text}>
            <p className={scss.desc}>Oh no 🥲, something went wrong... maybe refresh?</p>
          </div>
        </div>
      </section>
    </>
  );
}
