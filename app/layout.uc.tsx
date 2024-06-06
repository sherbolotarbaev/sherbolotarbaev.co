'use client';

import { Toaster } from 'sonner';

import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

import ReduxProvider from '@/app/lib/providers/redux';
import ThemeContextProvider from '@/app/lib/providers/theme';

interface RootLayoutClientProps {
  children: React.ReactNode;
}

export default function RootLayoutClient({ children }: Readonly<RootLayoutClientProps>) {
  return (
    <>
      <Toaster richColors />

      <ReduxProvider>
        <ThemeContextProvider>
          <NavBar />

          <main>{children}</main>

          <Footer />
        </ThemeContextProvider>
      </ReduxProvider>
    </>
  );
}
