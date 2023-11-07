import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs"
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Threads",
  description: "A next.js 14 meta threads Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>

        <Topbar/>

        <main className='flex flex-row'>
          <LeftSidebar/>

          <section className='main-container border border-red-500 border-solid'>
           <div className='w-full max-w-4xl border border-lime-500 border-solid'>
           {children}
           </div>
          </section>

          <RightSidebar/>
        </main>
        <Bottombar/>

        </body>
    </html>
    </ClerkProvider>
  )
}
