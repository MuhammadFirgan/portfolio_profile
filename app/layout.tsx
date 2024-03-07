import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'



const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: 'Company',
  description: 'Company profile using next js and tailwind css',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative overflow-x-hidden md:px-3 ${poppins.className}`}>{children}</body>
    </html>
  )
}
