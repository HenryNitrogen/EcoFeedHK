import type { Metadata } from 'next'
import { ChatWidget } from "@/components/chat-widget"
import './globals.css'
import Script from "next/script"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Other head elements */}
      </head>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
