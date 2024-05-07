import { logOut, oauthGitHub, oauthGoogle } from '@/app/lib/auth/actions';

import Button from '@/app/components/button';

import { BiLogOut, BiLogoGithub } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

export function SignInButtons() {
  return (
    <>
      <Button type="button" onClick={oauthGitHub}>
        <BiLogoGithub size={20} /> Continue wtih GitHub
      </Button>

      <Button type="button" onClick={oauthGoogle}>
        <FcGoogle size={18} /> Continue wtih Google
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
