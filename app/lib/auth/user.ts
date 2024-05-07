import 'server-only';

import { type User } from 'next-auth';
import { auth } from '.';

export const getUser = async (): Promise<User | undefined> => {
  const session = await auth();
  return session && session.user ? (session.user as User) : undefined;
};
