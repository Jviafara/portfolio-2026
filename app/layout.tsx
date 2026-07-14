import type { Metadata } from 'next'
import './globals.css'

import { Sora, Inter, JetBrains_Mono } from 'next/font/google'

export const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})
export const metadata: Metadata = {
  title: 'Jesús Viafara | Portfolio',
  description:
    'Jesús Viafara es un desarrollador web y diseñador de experiencia de usuario con sede en Colombia. Con una pasión por crear experiencias digitales atractivas y funcionales, Jesús combina habilidades técnicas y creatividad para ofrecer soluciones innovadoras a sus clientes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className={`${inter.variable} ${inter.variable} h-full antial iased`}
    >
      <body className='min-h-full flex flex-col bg-background'>{children}</body>
    </html>
  )
}
