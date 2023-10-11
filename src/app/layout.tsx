import React from 'react';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import Header from './layout/Header';
import { Providers } from './providers';

import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Diego Añazco - Portfolio'
};

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='light' suppressHydrationWarning>
      <body className={raleway.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
