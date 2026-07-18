import type { Metadata } from "next";
import "./globals.css"; // טעינת קובץ העיצוב הראשי של Tailwind

export const metadata: Metadata = {
  title: "Yitzhak Azran - Fitness Coach",
  description: "The Method - Build Your Best Version",
  verification: {
    google: "bgdMGnxyCrCio9TDulflkzXgTUcNvfWFonzL-hu_wv4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="bg-[#070708]">
      <body className="bg-[#070708] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
