import "./globals.css";
import type { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Puneeth Jain | Portfolio",
  description: "Student Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"><head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NFTK3C42');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-white text-gray-900 antialiased">
{/* Google Tag Manager (noscript) */}
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-NFTK3C42"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    />
  </noscript>
  {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
