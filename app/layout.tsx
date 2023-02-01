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
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
