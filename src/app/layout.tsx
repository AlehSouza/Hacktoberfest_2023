

export const metadata = {
  title: 'Hacktoberfest 2023',
  description: 'Hacktoberfest 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{
      margin: '0px',
      padding: '0px',
    }}>
      <body style={{
        margin: '0px',
      }}>
        {children}
      </body>
    </html>
  )
}
