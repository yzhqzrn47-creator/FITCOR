import Script from "next/script";
import { Assistant } from "next/font/google";
import { faqs } from "./lib/content";

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

function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable}>
      <head>
        <FaqJsonLd />
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

        {/* 🟢 כפתור WhatsApp צף */}
        <a
          href="https://wa.me/972559939351"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            borderRadius: "50px",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            zIndex: 9999,
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "15px"
          }}
        >
          <span>דבר איתי ב-WhatsApp</span>
        </a>

        {/* פוטר משפטי וקישורי נגישות מקוריים */}
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
