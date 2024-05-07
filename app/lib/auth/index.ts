import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type Credentials = {
  email: string;
  code: string;
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Sign in with Email',
      credentials: {
        email: {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter your email...',
        },
        code: {
          type: 'text',
          label: 'Verification code',
          placeholder: 'Paste verification code...',
        },
      },
      async authorize(credentials, _request) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const body = JSON.stringify(credentials as Credentials);

        const response = await fetch(`${API_URL}/login-otp`, {
          method: 'POST',
          body,
          headers,
        });

        const data = await response.json();

        if (response.status !== 200) return null;

        if (data) return data;

        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },

  session: {
    strategy: 'jwt',
  },
});
