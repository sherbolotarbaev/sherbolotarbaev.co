'use client';

import { useRouter } from 'next/navigation';

import { BiLoader } from 'react-icons/bi';
import scss from './scss/button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  load?: boolean;
  redirect?: string;
  open?: string;
  theme?: Theme;
  gradient?: boolean;
}

type Theme = 'red' | 'blue';

export default function Button({
  children,
  width,
  load,
  redirect,
  open,
  theme,
  gradient,
  ...props
}: Readonly<ButtonProps>) {
  const router = useRouter();

  const className = [
    scss.button,
    load && scss.load,
    props.disabled && scss.disabled,
    theme && scss[theme],
    gradient && scss.gradient,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    ...props.style,
  };

  if (width) {
    style.maxWidth = `${width}px`;
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (redirect) {
      router.push(redirect);
    } else if (open) {
      window.open(open, '_blank');
    }
    props.onClick && props.onClick(event);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      style={style}
      className={className}
      disabled={load || props.disabled}
    >
      {load ? <BiLoader size={19} className={scss.loader} /> : children}
    </button>
  );
}
