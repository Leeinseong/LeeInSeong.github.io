import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body{
    margin: 0px;
  }
`;
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Head>
        <meta charSet="utf-8" />
        <title>Inseong_Portofolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
