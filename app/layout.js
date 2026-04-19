import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

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

export const metadata = {
  title: 'My Catchy Interiors — Interiors composed with quiet, confident restraint',
  description: 'A small studio shaping homes, retreats and quiet hospitality around the way you actually want to live — with warmth, proportion, and honest materials.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-[#efeae1] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  )
}
