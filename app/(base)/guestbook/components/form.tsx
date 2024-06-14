'use client';

import { toast } from 'sonner';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useNewGuestbookMessageMutation } from '@/app/redux/api/guestbook';

import Input from '@/app/components/input';

import scss from '@/app/components/scss/form.module.scss';

type FormData = {
  message: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [newGuestbookMessage, { isLoading }] = useNewGuestbookMessageMutation();

  const handleErrorAlert = (message?: string) => {
    toast.error(message || 'Try again. Something happened on our end', {
      position: 'top-right',
      duration: 5000,
    });
  };

  const handleSubmitForm: SubmitHandler<FormData> = async ({ message }) => {
    try {
      await newGuestbookMessage({
        message,
      }).unwrap();
    } catch (error: any) {
      handleErrorAlert(error.response.message);
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
          </div>
        </form>
      </div>
    </>
  );
}
