import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import './globals.css';

const figTree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Preview Card',
  description: 'Created by Dada',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={figTree.className}>{children}</body>
    </html>
  );
}
