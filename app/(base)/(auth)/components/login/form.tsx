'use client';

import OuathButtons from '../../../../components/oauth-buttons';

import scss from '../scss/form.module.scss';

export default function LoginForm() {
  return (
    <>
      <form className={scss.form}>
        <div className={scss.text}>
          <h2 className={scss.title}>Sign in</h2>

          <p className={scss.desc}>Please sign in or create an account to continue.</p>
        </div>

        <OuathButtons />
      </form>
    </>
  );
}
