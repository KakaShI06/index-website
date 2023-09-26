import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Index | Ujjval',
  description: 'Index Page Site Map',
  icons: '/logo/white.png',
  openGraph: {
    type: 'website',
    siteName: 'Blog',
    title: 'Blog',
    url: 'https://www.snapbit.in',
    description: 'Index Website created by Developer Ujjval Priyadarshi',
    images: [
      {
        url: 'https://res.cloudinary.com/doql129vl/image/upload/v1694429574/kasol_obdhff.jpg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.snapbit.in',
  },
  twitter: {
    creator: '@UjjvalP06',
    images:
      'https://res.cloudinary.com/doql129vl/image/upload/v1695316482/group_hi47ny.png',
    site: '@site',
    title: 'Ujjval | Index',
    description: 'Index Website created by Developer Ujjval Priyadarshi',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
