import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
