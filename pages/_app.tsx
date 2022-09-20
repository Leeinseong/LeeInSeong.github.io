import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body{
    margin: 0px;
  }
`;

const MyApp = ({ Component }: AppProps) => {
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
};

export default MyApp;
