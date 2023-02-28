import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from '@next/font/local';

import './globals.css';

import { Header, Footer, Subscribe } from 'components';
import { Providers } from './Providers';

const gteestipro = localFont({
  src: '../public/fonts/GTEestiProText-Regular.woff2',
  weight: '400',
  variable: '--font-gteestipro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Михаил Журавлёв',
    template: '%s | Михаил Журавлёв',
  },
  description: 'Разработчик, философ',
  openGraph: {
    title: 'Михаил Журавлёв',
    description: 'Разработчик, философ',
    url: 'https://mfz.ru',
    siteName: 'Михаил Журавлёв',
    images: [],
    locale: 'ru-RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    yandex: '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ru" className={clsx('text-black', gteestipro.variable)}>
      <head />
      <body className="flex h-auto w-full flex-col items-center bg-white font-gteestipro dark:bg-gr-1">
        <Providers>
          <Header />
          <main className="flex h-auto w-full justify-center px-5 md:px-5">{children}</main>
          <Subscribe />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
