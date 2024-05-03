import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    //@ts-ignore
    Github({
      clientId: process.env.OAUTH_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
  ],

  secret: `${process.env.NEXTAUTH_SECRET}`,

  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },

  session: {
    strategy: 'jwt',
  },
});
