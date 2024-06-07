'use client';

import Link from 'next/link';

import { BiLogOut } from 'react-icons/bi';

export function SignOutButton() {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_API_URL}/logout`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.55rem',
        fontSize: '0.875rem',
        color: 'var(--red-badge-border-color)',
      }}
    >
      <BiLogOut size={19} /> Log out
    </Link>
  );
}
