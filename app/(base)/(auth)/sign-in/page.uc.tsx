'use client';

import LoginForm from '../components/login/form';

import scss from '@/app/components/scss/page.module.scss';

export default function LoginClient() {
  return (
    <>
      <section
        className={scss.wrapper}
        style={{
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
          background: 'var(--bg-main)',
        }}
      >
        <div className={scss.container}>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
