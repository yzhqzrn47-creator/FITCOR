import Script from "next/script";

export const metadata = {
  title: "חצי שעה | THE METHOD - יצחק עזרן אימון אישי",
  description: "הצטרפו לאימון 24/6 מותאם אישית שיעניק לכם מוטיבציה, תמיכה ומקצועיות גבוהה, מיועד לכל הרמות בכל שלב בו אתם נמצאים בהם.",
  verification: {
    google: "bgdMGnxyCrCiO9tDuIflkzXgTUcNvFWfOnZL-hu_wv4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google Analytics Setup */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PM1YCECG87"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PM1YCECG87');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
