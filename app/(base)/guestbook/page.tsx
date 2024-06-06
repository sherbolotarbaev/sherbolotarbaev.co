import type { Metadata } from 'next';

import { getMe } from '@/app/redux/api/me/server';

import GuestbookClient from './page.uc';

export const metadata: Metadata = {
  title: 'Guestbook',
};

export default async function Guestbook() {
  const user = await getMe();

  return <GuestbookClient user={user} />;
}
