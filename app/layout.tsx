import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import Loader from "@/components/loader"
import { CartProvider } from "@/lib/cart-context"
import CartModal from "@/components/cart-modal"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "TierraBlanca",
  description:
    "Découvrez les céramiques exclusives en argile blanche de TierraBlanca du Maroc. Le design moderne rencontre la tradition artisanale.",
  keywords: [
    "Céramiques marocaines",
    "argile blanche",
    "poterie artisanale",
    "décoration maison artisanale",
    "tajine",
    "céramiques minimalistes",
  ],
  openGraph: {
    title: "TierraBlanca",
    description:
      "Découvrez les céramiques exclusives en argile blanche de TierraBlanca du Maroc. Le design moderne rencontre la tradition artisanale.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Céramiques Marocaines TierraBlanca",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TierraBlanca",
    description:
      "Découvrez les céramiques exclusives en argile blanche de TierraBlanca du Maroc. Le design moderne rencontre la tradition artisanale.",
    images: ["https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N2Y1L1GL98"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N2Y1L1GL98');
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.cdnfonts.com/css/optima');`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${workSans.variable} font-sans`}>
        <CartProvider>
          <Loader />
          {children}
          <CartModal />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
