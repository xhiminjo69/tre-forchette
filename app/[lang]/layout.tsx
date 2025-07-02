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
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
