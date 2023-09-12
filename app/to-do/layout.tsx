import Header from '@/components/header/Header'
import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: "To-Do Login",
//   description: "This is the login page of To-Do",
//   manifest: "/manifest/manifest.json",
//   viewport: "width=device-width, initial-scale=1",
//   icons: ["/favicon.ico"],
//   themeColor: "#ffffff",
// };

export default function ToDoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <Header/>
        {children}
    </section>
  )
}
