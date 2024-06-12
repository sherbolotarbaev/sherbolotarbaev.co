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
          padding: '0 1.25rem',
        }}
      >
        <div className={scss.text} style={{ textAlign: 'center' }}>
          <h2 className={scss.title}>Welcome</h2>

          <p className={scss.desc}>Create an account to continue.</p>
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
