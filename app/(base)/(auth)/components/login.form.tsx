'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useLogInOtpMutation, useSendOtpMutation } from '@/app/redux/api/auth';

import { toast } from 'sonner';

import Input from '@/app/components/input';
import OuathButtons from '@/app/components/oauth-buttons';
import Button from '@/app/components/button';
import Link from 'next/link';

import scss from '@/app/components/scss/form.module.scss';

type FormData = {
  email: string;
  otp: string;
};

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [logIn, { isLoading }] = useLogInOtpMutation();
  const [sendOtp, { isLoading: isOtpSending }] = useSendOtpMutation();

  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleClearInput = (name: keyof FormData) => {
    if (name === 'email') {
      setIsOtpSent(false);
      setValue('otp', '');
    }

    setValue(name, '');
  };

  const handleSubmitForm: SubmitHandler<FormData> = async ({ email, otp }) => {
    const promise = isOtpSent ? logIn({ email, otp }) : sendOtp({ email });

    toast.promise(promise.unwrap(), {
      position: 'top-right',
      loading: 'Loading...',
      success: (data) => {
        if (!isOtpSent) {
          setIsOtpSent(true);
        } else {
          setSuccess(true);
          router.push('/redirect?to=guestbook');
        }
        return isOtpSent
          ? `Successful sign in as ${data.email}`
          : `Verification code sent successfully`;
      },
      error: (error) => {
        return error.data?.message || 'Try again. Something happened on our end';
      },
    });
  };

  return (
    <>
      <form
        className={scss.form}
        onSubmit={handleSubmit(handleSubmitForm)}
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
          <h2 className={scss.title}>Welcome back 😎</h2>

          <p className={scss.desc}>Please sign in to your account to continue.</p>
        </div>

        <div className={scss.container}>
          <Input
            label="Email"
            placeholder="Enter your email..."
            error={errors.email && errors.email.message}
            load={isLoading}
            disabled={success}
            register={register('email', {
              required: 'Please enter your email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email',
              },
              onChange: () => {
                setIsOtpSent(false);
                handleClearInput('otp');
              },
            })}
          />

          {isOtpSent && (
            <>
              <Input
                label="Verification code"
                placeholder="Paste verification code..."
                error={errors.email && errors.email.message}
                load={isLoading}
                disabled={success}
                register={register('otp', {
                  required: 'Please enter verification code',
                })}
              />

              <div className={scss.text}>
                <p className={scss.desc}>We sent a code to your inbox.</p>
              </div>
            </>
          )}

          <Button theme="blue" load={isLoading || isOtpSending} disabled={success}>
            {!isOtpSent ? 'Continue' : 'Sign in'}
          </Button>

          <div className={scss.devider}>
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <OuathButtons />

          <Link className={scss.link} href="/sign-up">
            {"Don't have an account? Sign Up"}
          </Link>
        </div>
      </form>
    </>
  );
}
