import './globals.scss';
import "@/styles/inner-pages.scss";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
export const metadata = {
  title: "Fast Forward Trucking Systems",
  description: "Fast Forward Trucking Systems Pvt Ltd.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
