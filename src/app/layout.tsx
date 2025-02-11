import type { Metadata } from 'next'

import {
  Inter,
  Montserrat,
  Rajdhani,
  Inknut_Antiqua,
  Bodoni_Moda,
} from 'next/font/google'
import './globals.css'

import Footer from '@/components/Footer'
import { TabProvider } from '@/context/TabContsxt'
import MyProvider from '@/components/MyProvider'

export const metadata: Metadata = {
  title: 'Design + Build It’s Innate',
  description:
    'We are a collective of architects, engineers and craftsmen collaborating to create beautiful spaces and structures that meet the unique needs of our clients.',
  keywords:
    'construction, architecture, engineering, roofing, construction consulting, landscaping, Innate design',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'google-site-verification': 'iFU_DRxdjRwhVprnLgrHxWOEX0bHCYBQYTnUSaHrr5Y',
  }
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const monts = Montserrat({
  subsets: ['latin'],
  variable: '--font-monts',
})

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
})

const inknut = Inknut_Antiqua({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inknut',
})

const Bodoni = Bodoni_Moda({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-Bodoni',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-innate.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4PP676WHP3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4PP676WHP3');
            `,
          }}
        />
      </head>
      <body
        className={`gradient ${inter.variable}  ${monts.variable} ${rajdhani.variable} ${inknut.variable} ${Bodoni.variable} bg-[#000]`}
      >
        <MyProvider>
          <TabProvider>
            {children}
            <Footer />
          </TabProvider>
        </MyProvider>
      </body>
    </html>
  )
}
