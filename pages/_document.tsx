import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { getCssText } from 'stitches.config';

export const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${pathPrefix}/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${pathPrefix}/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${pathPrefix}/favicon-16x16.png`}
          />
          <link rel="manifest" href={`${pathPrefix}/site.webmanifest`} />
          <link rel="shortcut icon" href={`${pathPrefix}/favicon.ico`} />
          <link
            rel="stylesheet"
            href="https://indestructibletype.com/fonts/Jost.css"
            type="text/css"
            charSet="utf-8"
          />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
