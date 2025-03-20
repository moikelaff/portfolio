import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cinzel } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dylan Adiprawira',
  description: 'Personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${cinzel.className}`}>
        {children}
      </body>
    </html>
  );
}
