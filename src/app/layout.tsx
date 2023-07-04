import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Francesco Iacono',
  description: 'My personal portfolio website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/icons/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
