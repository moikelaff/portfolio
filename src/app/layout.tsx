import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Cinzel } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const cinzel = Cinzel({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dylan Adiptawijaya | Portfolio',
  description: 'Personal portfolio of Dylan Adiptawijaya, software and cloud engineer',
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
        <style jsx global>{`
          :root {
            --font-sans: ${inter.style.fontFamily};
            --font-serif: ${cinzel.style.fontFamily};
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}