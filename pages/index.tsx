import React, { useState } from 'react';
import { SimulationSetup } from '../src/components/SimulationSetup';
import { BigBlackTemplate } from '../src/components/BigBlackTemplate';
import { SimulationLoading } from '../src/components/Loading';
import { Box } from 'grommet/index';

type AppStatus = 'setup' | 'loading' | 'present';

function useStatusUpdates(set: (status: AppStatus) => void) {
  const toSetup = () => set('setup');
  const toLoading = () => set('loading');
  const toPresent = () => set('loading');
  return [toSetup, toLoading, toPresent];
}

export default function App(): JSX.Element {
  const [status, setStatus] = useState<AppStatus>('setup');
  const [toSetup, toLoading] = useStatusUpdates(setStatus);

  return (
    <>
      {status === 'setup' && (
        <BigBlackTemplate>
          <SimulationSetup onBegin={toLoading} />
        </BigBlackTemplate>
      )}
      {status === 'loading' && (
        <Box background={'black'} fill>
          <SimulationLoading onAbort={toSetup} />
        </Box>
      )}
    </>
  );
}
