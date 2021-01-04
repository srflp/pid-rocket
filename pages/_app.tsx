import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Grommet } from "grommet/index";
import { theme } from "../src/theme";

export const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${pathPrefix}/favicon.ico`} />
      </Head>
      <Grommet full theme={theme}>
        <Component {...pageProps} />
      </Grommet>
    </>
  );
}

export default MyApp;
