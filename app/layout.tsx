import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import StickyMobileCta from "./components/StickyMobileCta"; // ודא שהנתיב לתיקיית components תואם לפרויקט שלך

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "FITCOR - התאמת תוכנית אימונים ותזונה",
  description: "השאלון שיבנה לך את התוכנית המדויקת ביותר למטרות שלך",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={assistant.variable}
        style={{
          fontFamily: "var(--font-assistant), sans-serif",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
          position: "relative",
          backgroundColor: "#070708",
          color: "#ffffff",
        }}
      >
        <main style={{ flex: 1 }}>{children}</main>

        {/* 🟢 פס ההנעה לפעולה הנייד (מופיע רק בגלילה במובייל ולא מכסה שום דבר חשוב) */}
        <StickyMobileCta />

        {/* 🟢 כפתור WhatsApp צף קבוע */}
        <a
          href="https://wa.me/972559939351"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="צרו קשר בוואטסאפ"
          style={{
            position: "fixed",
            bottom: "85px", // מורם מעט כדי שלא יתנגש עם ה-Sticky CTA
            left: "20px",
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            borderRadius: "50px",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            zIndex: 40,
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "14px",
            transition: "transform 0.2s ease",
          }}
        >
          <span style={{ fontSize: "18px" }}>💬</span>
          <span>דבר איתי</span>
        </a>
      </body>
    </html>
  );
}
