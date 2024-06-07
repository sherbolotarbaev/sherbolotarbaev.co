'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

import { geistSans } from '@/app/lib/fonts';
import scss from './scss/input.module.scss';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  load?: boolean;
  error?: string;
  register?: UseFormRegisterReturn<any>;
}

export default function Textarea({
  label,
  name,
  load,
  error,
  register,
  ...props
}: Readonly<TextareaProps>) {
  const className = [scss.textarea, error && !load && scss.error, load && scss.load]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={scss.wrapper}>
      {!load && error ? (
        <span className={scss.error}>{error}</span>
      ) : (
        label && (
          <label htmlFor={name} className={scss.label}>
            {label}
          </label>
        )
      )}

      <textarea
        className={className}
        disabled={load}
        style={geistSans.style}
        {...(register ? register : { name })}
        {...props}
      />
    </div>
  );
}
