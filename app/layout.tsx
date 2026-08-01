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
      <body style={{ fontFamily: "var(--font-assistant), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
