import Head from 'next/head';
import React from 'react';

interface PresentationModel {
  data: undefined | {};
}

export function Presentation(props: PresentationModel) {
  const { data } = props;

  return data ? (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  ) : (
    <h1>Nothing</h1>
  );
}
