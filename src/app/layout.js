import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css' 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next JS - Practice',
  description: 'Learing Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul className="menu">
          <li>
            <Image
              src="/next.svg"
              alt="Vercel Logo"
              width={130}
              height={24}
              priority
            />
          </li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        {children}
      </body>
    </html>
  )
}
