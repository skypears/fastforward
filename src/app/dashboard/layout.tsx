
// import '../globals.scss';
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Fast Forward Trucking Systems Pvt Ltd.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
