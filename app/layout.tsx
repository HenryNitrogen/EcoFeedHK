import type { Metadata } from 'next'
import { ChatWidget } from "@/components/chat-widget"
import './globals.css'
import Script from "next/script"

export const metadata: Metadata = {
  title: 'EcoFeedHK',
  description: 'Created with Henry',
  icons: {
    icon: '/icon.png',
  },
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
