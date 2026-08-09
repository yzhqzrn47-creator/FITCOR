import Script from "next/script";
import { Assistant } from "next/font/google";

const assistant = Assistant({
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-assistant",
});

export const metadata = {
  title: "FITCOR | יצחק עזרן — אימון אישי וליווי תזונתי",
  description: "ליווי אישי צמוד, תוכנית אימונים ותזונה מותאמת אישית. תפסיק לחכות לזמן הנכון — תתחיל לבנות תוצאות.",
  verification: {
    google: "bgdMGnxyCrCiO9tDuIflkzXgTUcNvFWfOnZL-hu_wv4",
  },
  openGraph: {
    title: "FITCOR | יצחק עזרן — אימון אישי",
    description: "תוכניות אימון וליווי תזונתי אישי ברמה הגבוהה ביותר. BUILT BY DISCIPLINE.",
    url: "https://fitcor.online",
    siteName: "FITCOR",
    images: [
      {
        url: "https://fitcor.online/yitzhak-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FITCOR — יצחק עזרן",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable}>
      <head>
        {/* Google Consent Mode */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>

        {/* Google Analytics Setup */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PM1YCECG87"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-PM1YCECG87');
          `}
        </Script>
      </head>
      <body style={{ fontFamily: "var(--font-assistant), sans-serif", display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0, position: "relative" }}>
        <main style={{ flex: 1 }}>
          {children}
        </main>

        {/* פוטר משפטי וקישורי נגישות */}
        <footer style={{
          backgroundColor: "#000000",
          color: "#A1A1AA",
          padding: "24px 16px",
          textAlign: "center",
          fontSize: "14px",
          borderTop: "1px solid #27272A",
          width: "100%"
        }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
            <a 
              href="https://shop.fitcor.online/pages/contact" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#A1A1AA", textDecoration: "none" }}
            >
              תקנון ותנאי שימוש
            </a>
            <span>|</span>
            <a 
              href="https://shop.fitcor.online/pages/מדיניות-הפרטיות" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#A1A1AA", textDecoration: "none" }}
            >
              מדיניות פרטיות
            </a>
            <span>|</span>
            <a 
              href={encodeURI("https://shop.fitcor.online/pages/הצהרת-נגישות")} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#A1A1AA", textDecoration: "none" }}
            >
              הצהרת נגישות
            </a>
          </div>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} FITCOR. כל הזכויות שמורות.</p>
        </footer>

        {/* תוסף נגישות - UserWay */}
        <Script 
          src="https://cdn.userway.org/widget.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
