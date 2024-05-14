'use client';

import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useSendMessageMutation } from '@/app/redux/api/contact';

import Button from '@/app/components/button';

import { BiCheckCircle, BiEnvelope, BiErrorCircle, BiLogoTelegram } from 'react-icons/bi';
import { geistSans } from '@/app/lib/fonts';
import scss from '@/app/components/scss/form.module.scss';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const handleError = (error: any, msg: string) => {
    setError(msg);
    console.error(error);
  };

  const handleClearValues = () => {
    setValue('name', '');
    setValue('email', '');
    setValue('message', '');
  };

  const handleSubmitForm: SubmitHandler<FormData> = async (formData) => {
    try {
      const data = await sendMessage(formData).unwrap();
      if (data.success) {
        setSuccess(true);
        handleClearValues();
        setError(null);
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
        {!success ? (
          <form className={scss.form}>
            <Button open="https://t.me/sherbolotarbaev">
              <BiLogoTelegram size={20} /> Connect via Telegram
            </Button>

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
              <div className={scss.couple}>
                <div className={scss.input_container}>
                  {errors.name ? (
                    <span className={scss.error}>
                      <BiErrorCircle className={scss.icon} />
                      {errors.name.message}
                    </span>
                  ) : (
                    <span className={scss.label}>Name</span>
                  )}

                  <div
                    className={
                      isLoading
                        ? `${scss.input_wrapper} ${scss.load}`
                        : scss.input_wrapper
                    }
                    style={
                      errors.name
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
                      placeholder="Enter your name..."
                      {...register('name', {
                        required: 'Name is required',
                        maxLength: {
                          value: 64,
                          message: 'Maximum 64 characters allowed',
                        },
                        minLength: {
                          value: 2,
                          message: 'Minimum 2 characters allowed',
                        },
                        pattern: {
                          value: /^[a-zA-Zа-яА-Я]+$/,
                          message: 'Invalid name, use letters only',
                        },
                      })}
                    />
                  </div>
                </div>

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
                      isLoading
                        ? `${scss.input_wrapper} ${scss.load}`
                        : scss.input_wrapper
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
              </div>

              <div className={scss.input_container}>
                {errors.message ? (
                  <span className={scss.error}>
                    <BiErrorCircle className={scss.icon} />
                    {errors.message.message}
                  </span>
                ) : (
                  <span className={scss.label}>Message</span>
                )}

                <div
                  className={
                    isLoading ? `${scss.input_wrapper} ${scss.load}` : scss.input_wrapper
                  }
                  style={
                    errors.message
                      ? {
                          borderColor: 'var(--red-badge-color)',
                        }
                      : undefined
                  }
                >
                  <textarea
                    disabled={isLoading}
                    className={scss.textarea}
                    style={geistSans.style}
                    placeholder="Enter your message..."
                    {...register('message', {
                      required: 'Message is required',
                      maxLength: {
                        value: 500,
                        message: 'Maximum 500 characters allowed',
                      },
                    })}
                  />
                </div>
              </div>

              <Button
                width={125}
                theme="blue"
                load={isLoading}
                type="submit"
                disabled={isLoading}
              >
                <BiEnvelope size={15} /> Submit
              </Button>
            </div>
          </form>
        ) : (
          <span className={scss.success_message}>
            <BiCheckCircle size={20} />
            Your form has been successfully submitted
          </span>
        )}
      </div>
    </>
  );
}
