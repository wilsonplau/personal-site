import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/Reset.scss";
import "../styles/App.scss";
import "aos/dist/aos.css";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Wilson Lau</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
