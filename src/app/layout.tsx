import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Bg from "../assets/img/bg.png";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'User Metrics',
  description: 'The best detailed dashboard for any community | User Metrics Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex items-center justify-center'>
          <Image className='bg lg:left-[60px] pointer-events-none' src={Bg} alt=''  />
        </div>
        <div className='relative z-10'>
          {children}
        </div>
      </body>
    </html>
  )
}
