export const metadata = {
  title: 'Next.js Sanity Studio',
  description: 'Sanity Studio embedded inside Next.js App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
