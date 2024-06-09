'use client';

import Modal from '@/app/components/modal';
import LoginForm from '../components/login/form';

import scss from '@/app/components/scss/page.module.scss';

interface LoginFormProps {
  photo: string;
}

export default function LoginClient({ photo }: Readonly<LoginFormProps>) {
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
          <Modal
            open={true}
            background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${photo}) center/cover no-repeat`}
          >
            <LoginForm />
          </Modal>
        </div>
      </section>
    </>
  );
}
