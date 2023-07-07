
import './globals.scss';
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Fast Forward Trucking Systems",
  description: "Fast Forward Trucking Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
