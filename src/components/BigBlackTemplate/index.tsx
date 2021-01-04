import Head from 'next/head';
import { Anchor, Box, Button, Footer, Header, Heading, Markdown } from 'grommet/index';
import Link from 'next/link';
import React, { ReactChild } from 'react';
import { Github } from 'grommet-icons/index';

interface BigBlackModel {
  children: ReactChild;
}

export function BigBlackTemplate(props: BigBlackModel): JSX.Element {
  const { children } = props;

  return (
    <>
      <Head>
        <title>PID Rocket</title>
      </Head>
      <Box fill>
        <Header background={'black'} pad={'medium'}>
          <Heading margin={'none'}>PID Rocket</Heading>
          <Box direction={'row'} align={'center'} justify={'center'} gap={'medium'}>
            <Link href="hello">
              <Button secondary label={'Hello'} />
            </Link>
            <Button
              primary
              icon={<Github />}
              href={'https://github.com/srflp/pid-rocket'}
              label={'GitHub'}
            />
          </Box>
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
