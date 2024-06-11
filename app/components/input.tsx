'use client';

import { UseFormRegisterReturn } from 'react-hook-form';
import scss from './scss/input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  load?: boolean;
  error?: string;
  register?: UseFormRegisterReturn<any>;
}

export default function Input({
  label,
  name,
  load,
  error,
  register,
  ...props
}: Readonly<InputProps>) {
  const className = [
    scss.input,
    props.disabled && scss.disabled,
    props.type === 'password' && `${scss.input} ${scss.password}`,
    error && !load && scss.error,
    load && scss.load,
  ]
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

      <input
        className={className}
        disabled={load}
        {...(register ? register : { name })}
        {...props}
      />
    </div>
  );
}
