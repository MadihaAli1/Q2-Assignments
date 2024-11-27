import { ReactNode } from 'react';
import '../styles/globals.css';
import Navbar from './components/navbar';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'My Next.js App',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}