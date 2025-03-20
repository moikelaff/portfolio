import './globals.css';
import type { Metadata } from 'next';
import { Cinzel } from 'next/font/google';
import Navbar from "./components/navbar";


const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-cinzel',
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
    <html lang="en" className={cinzel.className}> 
      <body>
        <Navbar />
        {children}
      </body> 
    </html>
  );
}