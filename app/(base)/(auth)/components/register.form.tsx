'use client';

import OuathButtons from '@/app/components/oauth-buttons';
import Link from 'next/link';

import scss from '@/app/components/scss/form.module.scss';

export default function RegisterForm() {
  return (
    <>
      <form
        className={scss.form}
        style={{
          maxWidth: '26rem',
          marginInline: 'auto',
          padding: '1.95rem 2.25rem',
          // background: 'var(--bg-300)',
          // border: '0.8px solid var(--color-300)',
          // borderRadius: 'var(--border-radius-500)',
        }}
      >
        <div className={scss.text} style={{ textAlign: 'center' }}>
          <h2 className={scss.title}>Welcome 👋</h2>

          <p className={scss.desc}>Please create an account to continue.</p>
        </div>

        <div className={scss.container}>
          <OuathButtons />

          <Link className={scss.link} href="/sign-in">
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </>
  );
}
