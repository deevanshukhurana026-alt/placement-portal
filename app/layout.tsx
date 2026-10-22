import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Placement Drive Portal',
  description: 'Campus placement drive management portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}