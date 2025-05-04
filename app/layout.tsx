import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vitae Services Company - Expert en recherche d'emploi",
  description:
    "Services professionnels pour booster votre carrière avec un accompagnement sur mesure. Rédaction de CV, lettres de motivation, préparation aux entretiens et plus.",
  keywords: [
    "recherche d'emploi",
    "CV",
    "lettre de motivation",
    "entretien d'embauche",
    "carrière",
    "Vitae Services",
    "international",
    "recrutement",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
