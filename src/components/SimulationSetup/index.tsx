import React from 'react';
import { Box, Button } from 'grommet/index';
import { SimulationControl } from '../SimulationControl';

interface SetupModel {
  onBegin: Function | (() => void);
}

export function SimulationSetup(props: SetupModel): JSX.Element {
  const { onBegin } = props;
  return (
    <>
      <Box direction={'row'} gap={'medium'}>
        <SimulationControl label={'speed'} defaultValue={0} />
        <SimulationControl label={'speed'} defaultValue={0} />
        <SimulationControl label={'speed'} defaultValue={0} />
        <SimulationControl label={'speed'} defaultValue={0} />
      </Box>
      <Button
        primary
        label={'start the simulation'}
        size={'large'}
        onClick={onBegin as () => void}
      />
    </>
  );
}
