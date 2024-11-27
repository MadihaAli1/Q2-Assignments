import { ReactNode } from 'react';
import Navbar from './components/navbar';
import './styles/globals.css';

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
