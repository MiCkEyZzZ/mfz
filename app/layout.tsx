import clsx from 'clsx'
import localFont from '@next/font/local'

import './globals.css'
import globalMetadata from './metadata'

import { Header, Footer, Subscribe } from 'components'

const gteestipro = localFont({
  src: '../public/fonts/GTEestiProText-Regular.woff2',
  weight: '400',
  variable: '--font-gteestipro',
  display: 'swap',
})

export const metadata = globalMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='ru' className={clsx('text-black', gteestipro.variable)}>
      <head />
      <body className='flex flex-col items-center w-full h-auto font-gteestipro'>
        <Header />
        <main className='flex justify-center w-full h-auto px-5 md:px-5'>
          {children}
        </main>
        <Subscribe />
        <Footer />
      </body>
    </html>
  )
}
