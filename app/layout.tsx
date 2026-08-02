import Script from "next/script";
import { Assistant } from "next/font/google";

const assistant = Assistant({
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-assistant",
});

export const metadata = {
  title: "חצי שעה | THE METHOD - יצחק עזרן אימון אישי",
  description: "הצטרפו לאימון 24/6 מותאם אישית שיעניק לכם מוטיבציה, תמיכה ומקצועיות גבוהה, מיועד לכל הרמות בכל שלב בו אתם נמצאים בהם.",
  verification: {
    google: "bgdMGnxyCrCiO9tDuIflkzXgTUcNvFWfOnZL-hu_wv4",
  },
  openGraph: {
    title: "THE METHOD - יצחק עזרן אימון אישי",
    description: "אימון אישי 24/6 - מוטיבציה, תמיכה ומקצועיות לכל רמה.",
    locale: "he_IL",
    type: "website",
    images: ["/og-image.jpg"],
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
        {/* Google Consent Mode - ברירת מחדל: דחיית עוגיות עד הסכמה */}
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
      <body style={{ fontFamily: "var(--font-assistant), sans-serif", display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
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
              href="https://shop.fitcor.online/pages/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%97%D7%95%D7%91%D7%AA-%D7%94%D7%A4%D7%A8%D7%9F%D7%99%D7%95%D7%AA" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#A1A1AA", textDecoration: "none" }}
            >
              מדיניות פרטיות
            </a>
            <span>|</span>
            <a 
              href="https://shop.fitcor.online/pages/%D7%94%D7%A6%D7%97%D7%A8%D7%AA-%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "#A1A1AA", textDecoration: "none" }}
            >
              הצהרת נגישות
            </a>
          </div>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} FITCOR. כל הזכויות שמורות.</p>
        </footer>

        {/* תוסף נגישות חינמי - UserWay */}
        <Script 
          src="https://cdn.userway.org/widget.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
