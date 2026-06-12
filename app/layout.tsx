import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Apolito Power | Palestra & Centro Wellness ad Agropoli — Aperta 24/7',
  description:
    'Apolito Power è molto più di una palestra: sala pesi, corsi di spinning e yoga, sauna a infrarossi, doccia emozionale, massaggi, personal trainer e consulenze mediche. Aperta 24 ore su 24, 7 giorni su 7 ad Agropoli.',
  generator: 'v0.app',
  keywords: [
    'palestra Agropoli',
    'fitness Agropoli',
    'wellness',
    'sauna a infrarossi',
    'personal trainer',
    'spinning',
    'yoga',
    'palestra 24 ore',
  ],
  openGraph: {
    title: 'Apolito Power — Fitness, Performance e Benessere ad Agropoli',
    description:
      'Una palestra aperta 24 ore su 24, servizi wellness e professionisti dedicati ai tuoi obiettivi.',
    type: 'website',
    locale: 'it_IT',
  },
}

export const viewport: Viewport = {
  themeColor: '#080A09',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`${oswald.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
