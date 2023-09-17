import Header from '@/components/header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "To-Do",
  description: "This is the application page of To-Do",
};

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
