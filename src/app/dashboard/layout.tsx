export const metadata = {
  title: "Dashboard",
  description: "Fast Forward Trucking Systems Pvt Ltd.",
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
