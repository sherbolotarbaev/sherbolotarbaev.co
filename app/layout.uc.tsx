'use client';

import { SessionProvider } from 'next-auth/react';

import { Toaster } from 'sonner';

import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

import ReduxProvider from '@/app/lib/providers/redux';
import ThemeContextProvider from '@/app/lib/providers/theme';

interface Props {
  children: React.ReactNode;
}

export default function LangLayoutClient({ children }: Readonly<Props>) {
  return (
    <>
      <Toaster richColors />

      <ReduxProvider>
        <SessionProvider>
          <ThemeContextProvider>
            <NavBar />

            <main>{children}</main>

            <Footer />
          </ThemeContextProvider>
        </SessionProvider>
      </ReduxProvider>
    </>
  );
}
