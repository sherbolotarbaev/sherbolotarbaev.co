import type { Metadata } from 'next';

import { getUser } from '@/app/lib/user';

import GuestbookClient from './page.uc';

export const metadata: Metadata = {
  title: 'Guestbook',
};

export default async function Guestbook() {
  const user = await getUser();

  return <GuestbookClient user={user} />;
}
