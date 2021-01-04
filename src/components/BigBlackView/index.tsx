import Head from 'next/head';
import { Box, Button, Footer, Header, Heading, Markdown } from 'grommet/index';
import Link from 'next/link';
import React, { ReactChild } from 'react';

interface BigBlackViewModel {
  children: ReactChild;
}

export function BigBlackView(props: BigBlackViewModel): JSX.Element {
  const { children } = props;

  return (
    <>
      <Head>
        <title>PID Rocket</title>
      </Head>
      <Box fill>
        <Header background={'black'} pad={'medium'}>
          <Heading>PID Rocket</Heading>
          <Link href="hello">
            <Button primary label={'Hello'} />
          </Link>
        </Header>
        <Box background={'black'} flex align="center" justify="center">
          {children}
        </Box>
        <Footer background={'black'} pad={'medium'}>
          <Markdown>
            Copyright © 2021 Filip **Sauer**, Karina **Szubert**, Konrad **Szychowiak**, Monika
            **Zielińska**
          </Markdown>
        </Footer>
      </Box>
    </>
  );
}
