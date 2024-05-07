'use client';

import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSendOtpMutation } from '@/app/redux/api/auth';
import { loginOtp } from '@/app/lib/auth/actions';

import { SignInButtons } from '@/content/guestbook/buttons';
import Button from '@/app/components/button';

import { BiErrorCircle } from 'react-icons/bi';
import scss from '@/app/components/scss/form.module.scss';

type FormData = {
  email: string;
  code: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [error, setError] = useState<string | null>(null);

  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [sendOtp, { isLoading }] = useSendOtpMutation();

  const handleError = (error: any, msg: string) => {
    setError(msg);
    console.error(error);
  };

  const handleSubmitForm: SubmitHandler<FormData> = async (formData) => {
    setError(null);

    try {
      if (!isOtpSent) {
        const data = await sendOtp(formData).unwrap();
        if (data.email) {
          setIsOtpSent(true);
        }
      } else {
        const data = await loginOtp(formData);
        console.log(data);
      }
    } catch (error: any) {
      handleError(
        error,
        error.data.message || 'Try again. Something happened on our end',
      );
    }
  };

  return (
    <>
      <div
        className={scss.form_wrapper}
        onSubmit={handleSubmit(handleSubmitForm)}
        style={{
          maxWidth: '100%',
        }}
      >
        <form className={scss.form}>
          <SignInButtons />

          <div className={scss.devider}>
            <hr />
            <span>or</span>
            <hr />
          </div>

          {error && !isLoading && (
            <span className={scss.error_message}>
              <BiErrorCircle className={scss.icon} size={20} />
              {error}
            </span>
          )}

          <div className={scss.inputs_container}>
            <div className={scss.input_container}>
              {errors.email ? (
                <span className={scss.error}>
                  <BiErrorCircle className={scss.icon} />
                  {errors.email.message}
                </span>
              ) : (
                <span className={scss.label}>Email</span>
              )}

              <div
                className={
                  isLoading ? `${scss.input_wrapper} ${scss.load}` : scss.input_wrapper
                }
                style={
                  errors.email
                    ? {
                        borderColor: 'var(--red-badge-color)',
                      }
                    : undefined
                }
              >
                <input
                  type="email"
                  disabled={isLoading}
                  className={scss.input}
                  placeholder="Enter your email..."
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email',
                    },
                  })}
                />
              </div>
            </div>

            {isOtpSent && (
              <>
                <div className={scss.input_container}>
                  {errors.code ? (
                    <span className={scss.error}>
                      <BiErrorCircle className={scss.icon} />
                      {errors.code.message}
                    </span>
                  ) : (
                    <span className={scss.label}>Verification code</span>
                  )}

                  <div
                    className={
                      isLoading
                        ? `${scss.input_wrapper} ${scss.load}`
                        : scss.input_wrapper
                    }
                    style={
                      errors.code
                        ? {
                            borderColor: 'var(--red-badge-color)',
                          }
                        : undefined
                    }
                  >
                    <input
                      type="text"
                      disabled={isLoading}
                      className={scss.input}
                      placeholder="Paste verification code..."
                      {...register('code', {
                        required: 'Code is required',
                      })}
                    />
                  </div>
                </div>

                <span className={scss.info}>We sent a code to your inbox</span>
              </>
            )}

            <Button theme="blue" load={isLoading} type="submit" disabled={isLoading}>
              Continue
            </Button>

            {!isOtpSent && (
              <span className={scss.info}>
                We'll send a verification code to your email.
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
