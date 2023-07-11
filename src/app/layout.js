'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import {NavBar} from '@/components';
import {Footer} from '@/containers';
import { useEffect } from 'react';
import Modal from 'react-modal';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);
  
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
