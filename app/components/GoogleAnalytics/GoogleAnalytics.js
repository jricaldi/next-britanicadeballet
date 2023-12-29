import Script from "next/script"

const NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

const GoogleAnalytics = () => {

  //You can show in the console the NEXT_PUBLIC_GOOGLE_ANALYTICS_ID to confirm
  console.log('NEXT_PUBLIC_GOOGLE_ANALYTICS_ID', NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                  `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics