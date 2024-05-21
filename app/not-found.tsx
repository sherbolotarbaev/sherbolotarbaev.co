import type { Metadata } from 'next';

import scss from '@/app/components/scss/page.module.scss';

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <section
      className={scss.wrapper}
      style={{
        minHeight: '70vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className={scss.container}
        style={{
          alignItems: 'center',
        }}
      >
        <div
          className={scss.text}
          style={{
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h2 className={scss.title}>{"Oh no! This page doesn't exist."}</h2>

          <p className={scss.desc}>
            If you expected to see something here, let me know
            (arbaevsherbolot@gmail.com).
          </p>
        </div>
      </div>
    </section>
  );
}
