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
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LfyuAkrAAAAAJv0CFrish2CcOe4C-OKKpetKqW8"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
