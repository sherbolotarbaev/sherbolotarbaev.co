'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useLogInOtpMutation, useSendOtpMutation } from '@/app/redux/api/auth';

import { toast } from 'sonner';
import { setCookie, getCookie } from 'cookies-next';

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
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/';

  const cookieEmail = getCookie('email');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

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
    if (isOtpSent) {
      toast.promise(logIn({ email, otp, next }).unwrap(), {
        position: 'top-right',
        loading: 'Loading...',
        success: ({ redirectUrl, email }: LogInOtpResponse) => {
          setSuccess(true);
          setCookie('email', email);
          router.push(redirectUrl);
          return `Successful sign in as ${email}`;
        },
        error: (error) => {
          return error.data?.message || 'Try again. Something happened on our end';
        },
      });
    } else {
      toast.promise(sendOtp({ email }).unwrap(), {
        position: 'top-right',
        loading: 'Sending...',
        success: () => {
          setIsOtpSent(true);
          return `Verification code sent successfully`;
        },
        error: (error) => {
          return error.data?.message || 'Try again. Something happened on our end';
        },
      });
    }
  };

  useEffect(() => {
    if (cookieEmail) {
      setValue('email', cookieEmail);
    }
  }, [cookieEmail]);

  return (
    <>
      <form
        className={scss.form}
        onSubmit={handleSubmit(handleSubmitForm)}
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
            <h2 className={scss.title}>Welcome back</h2>

            <p className={scss.desc}>Sign in to continue.</p>
          </div>

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

          <Button
            theme="blue"
            load={isLoading || isOtpSending}
            disabled={success || !isValid}
          >
            {!isOtpSent ? 'Continue' : 'Sign in'}
          </Button>

          <div className={scss.devider}>
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <OuathButtons />

          <Link
            className={scss.link}
            href={next !== '/' ? `/sign-up?next=${next}` : '/sign-up'}
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </div>
      </form>
    </>
  );
}
