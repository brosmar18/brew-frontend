import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components';
import { Footer } from '@/containers';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="page" id="root">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
