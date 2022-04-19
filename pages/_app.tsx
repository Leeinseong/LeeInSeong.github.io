import React from "react";
import Head from "next/head";

import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body{
    margin: 0px;
  }
`;

interface AppProps {
  Component: any;
  store: any;
}

export default function MyApp({ Component }: AppProps) {
  return (
    <>
      {/* <Global /> */}
      <Head>
        <meta charSet="utf-8" />
        <title>Inseong_Portofolio</title>
      </Head>
      <Component />
    </>
  );
}
