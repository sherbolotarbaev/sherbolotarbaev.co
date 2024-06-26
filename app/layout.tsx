import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/site';

import { Suspense } from 'react';

import RootLayoutClient from './layout.uc';

import { geistSans } from '@/app/lib/fonts';
import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  category: 'development',
  keywords: [
    'software development',
    'Sherbolot',
    'Sherbolot Arbaev',
    'Sherbolot Arbaev portfolio',
    'software developer',
    'portfolio',
    'software engineer',
    'full stack',
    'full stack developer',
    'wedevx',
    'backend developer',
    'backend',
    'frontend developer',
    'frontend',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body style={geistSans.style}>
        <Suspense
          fallback={<span style={{ color: 'var(--color-800)' }}>LOADING...</span>}
        >
          <RootLayoutClient>{children}</RootLayoutClient>
        </Suspense>
      </body>
    </html>
  );
}
