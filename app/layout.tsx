import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sri Ram A - Developer Portfolio",
  description:
    "Interactive developer portfolio with terminal interface. Explore projects, Education, Experience, Certifications and Achievements.",
  keywords: ["portfolio", "developer", "full-stack", "terminal", "interactive"],
  authors: [{ name: "Sri Ram A" }],
  creator: "Sri Ram A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.example.com",
    title: "Sri Ram A - Developer Portfolio",
    description: "Interactive developer portfolio with terminal interface",
    siteName: "Sri Ram A Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Ram A - Developer Portfolio",
    description: "Interactive developer portfolio with terminal interface",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0a0a" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' fontSize='75' fill='%2366cccc'>$</text></svg>"
        />
      </head>
      <body className={`${jetbrainsMono.className} antialiased`}>{children}</body>
    </html>
  )
}
