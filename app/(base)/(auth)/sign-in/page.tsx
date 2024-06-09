import type { Metadata } from 'next';

import LoginClient from './page.uc';
import { fetchRandomPhoto } from '@/app/lib/photo';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default async function Login() {
  const photo = await fetchRandomPhoto();
  return <LoginClient photo={photo} />;
}
