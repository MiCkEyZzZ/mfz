import './globals.css'
import globalMetadata from './metadata'

import Header from 'components/header'
import Footer from 'components/footer'
import Subscribe from 'components/subscribe'

export const metadata = globalMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <head />
      <body className='flex flex-col items-center w-full h-auto border'>
        <Header />
        <main className='w-full max-w-6xl h-auto px-2 md:px-0'>{children}</main>
        <Subscribe />
        <Footer />
      </body>
    </html>
  )
}
