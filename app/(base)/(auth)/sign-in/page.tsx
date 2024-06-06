import type { Metadata } from 'next';

import LoginClient from './page.uc';

export const metadata: Metadata = {
  title: 'Sign in',
};

export default function Login() {
  return <LoginClient />;
}
