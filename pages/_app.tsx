import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { SEO_DESCRIPTION, SEO_OG_TYPE, SEO_TITLE, SEO_URL } from '@/constant/strings';

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
      <DefaultSeo
        title={SEO_TITLE}
        openGraph={{
          url: SEO_URL,
          type: SEO_OG_TYPE,
          title: SEO_TITLE,
          description: SEO_DESCRIPTION,
        }}
        description={SEO_DESCRIPTION}
      />
      <Component />
    </>
  );
};

export default MyApp;
