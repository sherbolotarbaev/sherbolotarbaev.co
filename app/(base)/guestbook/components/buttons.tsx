import { signIn, signOut } from 'next-auth/react';

import Button from '@/app/components/button';

import { BiLogOut, BiLogoGithub } from 'react-icons/bi';

const oauth = async () => {
  try {
    await signIn('github', {
      redirect: false,
    });
  } catch (error: any) {
    console.error('GitHub authentication failed:', error.message);
  }
};

const logOut = async () => {
  try {
    await signOut();
  } catch (error: any) {
    console.error('GitHub logging out failed:', error.message);
  }
};

export function SignInButton() {
  return (
    <Button width={190} onClick={oauth}>
      <BiLogoGithub size={20} /> Sign in wtih GitHub
    </Button>
  );
}

export function SignOutButton() {
  return (
    <span
      onClick={logOut}
      style={{
        width: '100%',
        maxWidth: '75px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        cursor: 'pointer',
        fontSize: '0.875rem',
        color: '#f571659a',
      }}
    >
      <BiLogOut size={18} /> Log out
    </span>
  );
}
