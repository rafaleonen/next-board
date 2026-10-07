import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { ReactQueryProvider } from "@/lib/react-query"

const interFont = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Product Roadmap",
    default: "Board",
  },
  description: "Follow the development progress of our entire platform",
}

export default function RootLayout({ children, drawer }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interFont.className} h-full`}>
      <body className="bg-navy-950 text-navy-50 antialiased">
        <ReactQueryProvider>
          <NuqsAdapter>
            {drawer}
            {children}
          </NuqsAdapter>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
