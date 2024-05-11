import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours or 1 day

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Github({
      clientId: process.env.OAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
    error: '/sign-in',
  },

  session: {
    strategy: 'jwt',
    maxAge: COOKIE_MAX_AGE,
  },

  jwt: {
    maxAge: COOKIE_MAX_AGE,
  },
});
