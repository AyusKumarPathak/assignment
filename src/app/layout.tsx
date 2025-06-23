// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';

export const metadata = {
  title: 'Artistly - Book Performing Artists',
  description: 'Platform for booking singers, dancers, speakers, and DJs.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
