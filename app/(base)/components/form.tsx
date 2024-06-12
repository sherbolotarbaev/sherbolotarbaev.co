'use client';

import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSendMessageMutation } from '@/app/redux/api/contact';

import Button from '@/app/components/button';
import Input from '@/app/components/input';
import Textarea from '@/app/components/textarea';

import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
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
  } = useForm<FormData>({ mode: 'onChange' });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const handleError = (error: any, message?: string) => {
    setError(message || 'Try again. Something happened on our end');
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
      handleError(error, error.data?.message);
    }
  };

  return (
    <>
      {!success ? (
        <form className={scss.form} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={scss.text}>
            <p className={scss.desc}>
              Looking to hire? Email me arbaevsherbolot@gmail.com
            </p>
          </div>

          {error && !isLoading && (
            <span className={scss.error_message}>
              <BiErrorCircle className={scss.icon} size={19} />
              {error}
            </span>
          )}

          <div className={scss.couple}>
            <Input
              label="Name"
              placeholder="Enter your name..."
              error={errors.name?.message}
              load={isLoading}
              register={register('name', {
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

            <Input
              label="Email"
              placeholder="Enter your email..."
              error={errors.email && errors.email.message}
              load={isLoading}
              register={register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email',
                },
              })}
            />
          </div>

          <Textarea
            label="Message"
            placeholder="Enter your message..."
            error={errors.message && errors.message.message}
            load={isLoading}
            register={register('message', {
              required: 'Message is required',
              maxLength: {
                value: 500,
                message: 'Maximum 500 characters allowed',
              },
            })}
          />

          <Button width={125} theme="blue" load={isLoading} type="submit">
            Submit
          </Button>
        </form>
      ) : (
        <form
          className={scss.form}
          style={{
            maxWidth: '100%',
          }}
        >
          <span className={scss.success_message}>
            <BiCheckCircle size={19} />
            Your form has been successfully submitted
          </span>
        </form>
      )}
    </>
  );
}
