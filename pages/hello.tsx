import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import Simulation from '../src/computations/pid/Simulation';
import { defaultOptions } from 'src/computations/pid/typesAndDefaults';

export default function Hello(): ReactElement {
  const [clicked, setClicked] = useState(0);

  const data = new Simulation(defaultOptions).generateData();

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
