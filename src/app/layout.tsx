import React from 'react';
import type { Metadata } from 'next';

import { Raleway } from 'next/font/google';
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
    <html lang='en'>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
