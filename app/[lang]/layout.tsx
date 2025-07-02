import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Tre Forchette - Authentic Italian Restaurant",
  description:
    "Experience authentic Italian cuisine at Tre Forchette. Traditional recipes, finest ingredients, and warm Italian hospitality.",
}

// Generate static params for all supported languages
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "it" }, { lang: "al" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: "en" | "it" | "al" }>
}) {
  const { lang } = await params

  return (
    <html lang={lang} className="scroll-smooth overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden w-full`}>{children}</body>
    </html>
  )
}
