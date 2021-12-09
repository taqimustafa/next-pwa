export default function SEOComponent({ seo, keywords = "" }) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={seo?.page_meta_description_en} />
      <meta name="keywords" content={keywords} />

      <meta name="og:title" content={seo?.page_title_en} />
      <meta name="og:description" content={seo.page_meta_og_description_en} />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Opensooq" />
      <meta name="og:url" content={seo?.canonical} />
      <meta property="og:image" />

      <link href="/image/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link rel="canonical" content={seo?.canonical} />
      <meta name="theme-color" content="#f2f2f2" />
      <link href="/manifest.json" rel="manifest" />

      <link
        href="android-app://com.opensooq.OpenSooq/os-app/jo/en"
        rel="alternate"
      />
      <meta name="twitter:site" content="@OpenSooqJordan" />
      <meta name="twitter:card" content="app" />
      <meta name="twitter:description" content="twitter.description" />
      <meta name="twitter:app:name:iphone" content="openSooq" />
      <meta name="twitter:app:id:iphone" content="654456967" />
      <meta
        name="twitter:app:url:iphone"
        content="https://itunes.apple.com/en/app/id654456967"
      />
      <meta name="twitter:app:name:ipad" content="openSooq" />
      <meta name="twitter:app:id:ipad" content="654456967" />
      <meta
        name="twitter:app:url:ipad"
        content="https://itunes.apple.com/en/app/id654456967"
      />
      <meta name="twitter:app:name:googleplay" content="openSooq" />
      <meta name="twitter:app:id:googleplay" content="com.opensooq.OpenSooq" />
      <meta
        name="twitter:app:url:googleplay"
        content="https://play.google.com/store/apps/details?id=com.opensooq.OpenSooq"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height ,initial-scale=1.0, shrink-to-fit=no"
      />
      <link rel="apple-touch-icon" href="/image/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/image/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/image/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/image/apple-touch-icon-144x144.png" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="//opensooqui2.os-cdn.com/os_web/pwa/favicon.ico"
      />
      <meta name="apple-mobile-web-app-title" content="OpenSooq" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#f2f2f2" />
      <meta
        name="apple-itunes-app"
        content="app-id=654456967, app-argument=https://opensooq.com"
      />
      <meta name="google" content="notranslate" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="google-site-verification"
        content="DKyUJgvF-vM9nTJU7gK6ITVQ2D-vGhM3MTRul-b4L5o"
      />
    </>
  );
}
