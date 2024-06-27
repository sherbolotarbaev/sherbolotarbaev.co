'use client';

import { useSearchParams } from 'next/navigation';

import OuathButtons from '@/app/components/oauth-buttons';
import Link from 'next/link';

import scss from '@/app/components/scss/form.module.scss';

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get('next');

  return (
    <>
      <form
        className={scss.form}
        style={{
          maxWidth: '35rem',
          marginInline: 'auto',
        }}
      >
        <div
          className={scss.container}
          style={{
            width: '100%',
            maxWidth: '26rem',
            padding: '1.5rem 1.25rem',
            marginInline: 'auto',
          }}
        >
          <div className={scss.text} style={{ textAlign: 'center' }}>
            <h2 className={scss.title}>Create an account</h2>

            <p className={scss.desc}>
              You can create an account using a Google or GitHub.
            </p>
          </div>

          <OuathButtons />

          <Link className={scss.link} href={next ? `/sign-in?next=${next}` : '/sign-in'}>
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </>
  );
}
