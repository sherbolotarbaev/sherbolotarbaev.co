'use client';

import Button from '@/app/components/button';

import { BiLogOut } from 'react-icons/bi';

export function SignOutButton() {
  return (
    <Button
      width={100}
      redirect={`${process.env.NEXT_PUBLIC_API_URL}/logout`}
      theme="red"
    >
      <BiLogOut size={19} /> Log out
    </Button>
  );
}
