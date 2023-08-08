import { Manrope } from "next/font/google";
import "@/styles/inner-pages.scss";
import "./globals.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  );
}
