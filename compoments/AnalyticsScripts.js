import Script from "next/script";

export const AnalyticsScripts = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-B2R6N9SB07"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-B2R6N9SB07');
      `}
    </Script>
  </>
);
