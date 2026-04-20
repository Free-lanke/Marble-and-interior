import { Fraunces, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['SOFT', 'WONK', 'opsz'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: 'My Catchy Interiors — Interiors composed with quiet, confident restraint',
  description: 'A small studio shaping homes, retreats and quiet hospitality around the way you actually want to live — with warmth, proportion, and honest materials.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="relative bg-[#efeae1] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  )
}
