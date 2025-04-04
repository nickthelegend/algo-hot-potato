import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Algo Hot Potato",
  description: "A decentralized game of chance on the Algorand blockchain",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={`${inter.className} bg-black text-white`}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  )
}



import './globals.css'