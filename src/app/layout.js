import './globals.css'
import { Inter } from 'next/font/google'
import {NavBar} from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brewhemia',
  description: 'Brewhemia, coffee shop in Cedar Rapids, Iowa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
