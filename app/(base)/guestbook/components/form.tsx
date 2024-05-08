'use client';

import { useState } from 'react';

import type { User } from 'next-auth';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useNewGuestbookMessageMutation } from '@/app/redux/api/guestbook';

import Image from 'next/image';
import Button from '@/app/components/button';

import { BiErrorCircle, BiUpArrowAlt } from 'react-icons/bi';
import scss from '@/app/components/scss/form.module.scss';

interface Props {
  user: User;
}

type FormData = {
  message: string;
};

export default function Form({ user }: Readonly<Props>) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [error, setError] = useState<string | null>(null);

  const [newGuestbookMessage, { isLoading }] = useNewGuestbookMessageMutation();

  const handleError = (error: any, msg: string) => {
    setError(msg);
    console.error(error);
  };

  const handleSubmitForm: SubmitHandler<FormData> = async ({ message }) => {
    try {
      await newGuestbookMessage({
        name: user.name as string,
        email: user.email as string,
        image: user.image || `https://avatar.vercel.sh/${user.email}`,
        message,
      }).unwrap();
    } catch (error: any) {
      handleError(error, 'Try again. Something happened on our end');
    } finally {
      setValue('message', '');
    }
  };

  return (
    <>
      <div className={scss.form_wrapper} onSubmit={handleSubmit(handleSubmitForm)}>
        <form className={scss.form}>
          <div className={scss.inputs_container}>
            <div className={scss.input_container}>
              {errors.message || error ? (
                <span className={scss.error}>
                  <BiErrorCircle className={scss.icon} />
                  {errors.message?.message || error}
                </span>
              ) : (
                <span className={scss.label}>Message</span>
              )}

              <div
                className={
                  isLoading ? `${scss.input_wrapper} ${scss.load}` : scss.input_wrapper
                }
              >
                <Image
                  className={scss.logo}
                  width={30}
                  height={30}
                  src={user.image || `https://avatar.vercel.sh/${user.email}`}
                  alt={user.name || 'User'}
                  loading="lazy"
                />

                <input
                  type="text"
                  disabled={isLoading}
                  className={scss.input}
                  placeholder="Your message..."
                  {...register('message', {
                    required: 'This field is required',
                  })}
                />

                <Button width={35} load={isLoading} type="submit" disabled={isLoading}>
                  <BiUpArrowAlt size={15} />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
