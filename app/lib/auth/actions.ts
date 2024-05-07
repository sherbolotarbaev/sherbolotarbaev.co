import { signIn, signOut } from 'next-auth/react';

export async function oauthGitHub() {
  try {
    await signIn('github', {
      redirect: false,
    });
  } catch (error: any) {
    console.error('GitHub authentication failed:', error.message);
  }
}

export async function oauthGoogle() {
  try {
    await signIn('google', {
      redirect: false,
    });
  } catch (error: any) {
    console.error('Google authentication failed:', error.message);
  }
}

export async function logOut() {
  try {
    await signOut();
  } catch (error: any) {
    console.error('Failed to log out:', error.message);
  }
}
