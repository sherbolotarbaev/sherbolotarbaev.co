'use client';

import Modal from '@/app/components/modal';
import LoginForm from '../components/login/form';

import scss from '@/app/components/scss/page.module.scss';

export default function LoginClient() {
  return (
    <>
      <section
        className={scss.wrapper}
        style={{
          minHeight: '75vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={scss.container}>
          <Modal open={true}>
            <LoginForm />
          </Modal>
        </div>
      </section>
    </>
  );
}
