import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yitzhak Azran - Fitness Coach",
  description: "The Method - Build Your Best Version",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" style={{ backgroundColor: "#070708", color: "#ffffff" }}>
      <body style={{ backgroundColor: "#070708", color: "#ffffff", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
