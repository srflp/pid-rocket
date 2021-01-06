import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import Engine from '../src/Engine';

export default function Hello(): ReactElement {
  const [clicked, setClicked] = useState(0);

  const data = new Engine().generateData();

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
