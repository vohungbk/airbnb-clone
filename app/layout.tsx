import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb | Vacation rentals, cabins, beach houses, & more',
  description:
    'Get an Airbnb for every kind of trip → 7 million vacation rentals → 2 million Guest Favorites → 220+ countries and regions worldwide',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
