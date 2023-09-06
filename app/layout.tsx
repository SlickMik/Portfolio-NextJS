
import '../styles/globals.css'
import type { Metadata } from 'next'
import Navbar from '@/Components/Navbar'
import Top_Finder from '@/Components/Top_Finder'
import {useRouter} from  'next/router'
import {AnimatePresence,motion} from 'framer-motion'
import Transition from '@/Components/Transition';




export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Ibrahims Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="relative">
        
        <Transition />
        <Navbar />
        <Top_Finder />
        {children}
        </body>
        
      
    </html>
  )
}
