import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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

        {/* 🟢 כפתור WhatsApp צף קבוע */}
        <a
          href="https://wa.me/972559939351"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="צרו קשר בוואטסאפ"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            borderRadius: "50px",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            zIndex: 9999,
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          <span style={{ fontSize: "18px" }}>💬</span>
          <span>דבר איתי</span>
        </a>

        {/* 🔻 פוטר בתחתית האתר (תקנון, פרטיות, נגישות) */}
        <footer
          style={{
            backgroundColor: "#0d0d0f",
            borderTop: "1px solid #1f1f24",
            padding: "24px 16px",
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              <Link
                href="/terms"
                style={{ color: "#a1a1aa", textDecoration: "none" }}
              >
                תקנון תנאי שימוש
              </Link>
              <span style={{ color: "#3f3f46" }}>|</span>
              <Link
                href="/privacy"
                style={{ color: "#a1a1aa", textDecoration: "none" }}
              >
                מדיניות פרטיות
              </Link>
              <span style={{ color: "#3f3f46" }}>|</span>
              <Link
                href="/accessibility"
                style={{ color: "#a1a1aa", textDecoration: "none" }}
              >
                הצהרת נגישות
              </Link>
            </div>
            <p style={{ color: "#71717a", fontSize: "12px", margin: 0 }}>
              © {new Date().getFullYear()} FITCOR. כל הזכויות שמורות.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
