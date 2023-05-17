'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import '../i18n';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {}, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
