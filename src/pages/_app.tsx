import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Inseong_Portofolio</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
