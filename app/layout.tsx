import SessionWrapper from '@/components/auth/SessionWrapper';
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const inter = Roboto({weight:['100','300',"400",'500','700','900'],subsets:['cyrillic','latin']})

export const metadata: Metadata = {
  title: "To-Do Login",
  description: "This is the login page of To-Do",
  manifest: "/manifest/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  icons: ["/favicon.ico"],
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  )
}
