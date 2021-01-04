import React from 'react';
import { RingLoader } from 'react-spinners/index';
import { Box, Button, Heading } from 'grommet/index';
import { MAIN } from 'src/theme';
import { LoadingModel } from './model';

export function SimulationLoading(props: LoadingModel) {
  const { onAbort } = props;
  return (
    <>
      <Box flex align="center" justify="center">
        <RingLoader size={120} color={MAIN} />
        <Heading level={2}>your simulation is running</Heading>
      </Box>
      <Box align="center" justify="center" pad={'medium'}>
        <Button secondary label={'ABORT!!!'} onClick={onAbort} size={'large'} />
      </Box>
    </>
  );
}
