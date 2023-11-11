import Script from "next/script"

const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID

const GoogleAnalytics = () => {

  //You can show in the console the GOOGLE_ANALYTICS_ID to confirm
  console.log('GOOGLE_ANALYTICS_ID', GOOGLE_ANALYTICS_ID);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GOOGLE_ANALYTICS_ID}');
                  `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics