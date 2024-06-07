'use client';

import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useNewGuestbookMessageMutation } from '@/app/redux/api/guestbook';

import { SignOutButton } from '@/content/guestbook/buttons';
import Input from '@/app/components/input';

import scss from '@/app/components/scss/form.module.scss';

interface FormProps {
  user: User;
}

type FormData = {
  message: string;
};

export default function Form({ user }: Readonly<FormProps>) {
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
        name: `${user.name} ${user.surname}`,
        email: user.email,
        image: user.photo || `https://avatar.vercel.sh/${user.email}`,
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
          <div className={scss.container}>
            <Input
              label="Message"
              placeholder="Your message..."
              error={errors.message && errors.message.message}
              load={isLoading}
              register={register('message', {
                required: 'This field is required',
              })}
            />

            <SignOutButton />
          </div>
        </form>
      </div>
    </>
  );
}
