import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET as string,

  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },

  session: {
    strategy: 'jwt',
  },
});
