import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${pathPrefix}/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
