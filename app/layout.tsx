import './globals.css'
import globalMetadata from './metadata'

export const metadata = globalMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <head />
      <body className='w-full'>
        <main className='px-2 md:px-0'>{children}</main>
      </body>
    </html>
  )
}
