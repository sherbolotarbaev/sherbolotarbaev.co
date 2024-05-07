declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_API_URL: string;
      OAUTH_GITHUB_CLIENT_ID: string;
      OAUTH_GITHUB_CLIENT_SECRET: string;
      OAUTH_GOOGLE_CLIENT_ID: string;
      OAUTH_GOOGLE_CLIENT_SECRET: string;
    }
  }
}
export {};
