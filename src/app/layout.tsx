import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 

    <html lang="en">
      <body className={inter.className}>
        
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
          <div><Sidebar /></div>
          <div className='flex flex-col'>
            <div><Header /></div>
            {children}
          </div>
        </div>
      </body> 
    </html>

  )
}
