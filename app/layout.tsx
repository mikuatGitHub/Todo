'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'ts-todo',
//   description: 'typesctipt-practice',
// }

// export default function App({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="ja">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

// app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
