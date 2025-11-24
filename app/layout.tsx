import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

// Updated metadata for Famous Dev Theme website
export const metadata: Metadata = {
  title: "Famous Dev Theme - Premium VS Code Color Scheme",
  description:
    "A modern, developer-centric VS Code theme with stunning color variants. Built with Framer Motion animations and crafted for developers who love beautiful code.",
  keywords: ["VS Code", "theme", "color scheme", "developer tools", "extension"],
  authors: [{ name: "Famous Dev" }],
  creator: "Famous Dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://famousdev.com",
    siteName: "Famous Dev Theme",
    title: "Famous Dev Theme - Premium VS Code Color Scheme",
    description: "A modern, developer-centric VS Code theme with stunning color variants.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Famous Dev Theme",
    description: "Premium VS Code color scheme for developers",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
