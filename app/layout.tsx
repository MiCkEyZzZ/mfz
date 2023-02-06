import clsx from 'clsx'
import localFont from '@next/font/local'

import './globals.css'
import globalMetadata from './metadata'

import { Header, Footer, Subscribe, Breadcrumbs } from 'components'

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
      <body className='flex flex-col items-center w-full h-auto font-gteestipro border'>
        <Header />
        <Breadcrumbs />
        <main className='w-full max-w-6xl h-auto px-2 md:px-0'>{children}</main>
        <Subscribe />
        <Footer />
      </body>
    </html>
  )
}
