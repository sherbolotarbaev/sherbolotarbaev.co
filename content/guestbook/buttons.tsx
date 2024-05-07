import { signIn, signOut } from 'next-auth/react';

import Button from '@/app/components/button';

import { BiLogOut, BiLogoGithub, BiLogoGoogle } from 'react-icons/bi';

const oauthGitHub = async () => {
  try {
    await signIn('github', {
      redirect: false,
    });
  } catch (error: any) {
    console.error('GitHub authentication failed:', error.message);
  }
};

const oauthGoogle = async () => {
  try {
    await signIn('google', {
      redirect: false,
    });
  } catch (error: any) {
    console.error('Google authentication failed:', error.message);
  }
};

const logOut = async () => {
  try {
    await signOut();
  } catch (error: any) {
    console.error('OAUTH logging out failed:', error.message);
  }
};

export function SignInButtons() {
  return (
    <>
      <Button onClick={oauthGitHub}>
        <BiLogoGithub size={20} /> Continue wtih GitHub
      </Button>

      <Button onClick={oauthGoogle}>
        <BiLogoGoogle size={20} /> Continue wtih Google
      </Button>
    </>
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
