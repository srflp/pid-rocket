import React, { useEffect, useState } from 'react';
import { SimulationSetup } from '../src/components/SimulationSetup';
import { BigBlackTemplate } from '../src/components/BigBlackTemplate';
import { SimulationLoading } from '../src/components/Loading';
import { Box } from 'grommet/index';
import { useStatus } from '../src/hooks';
import Engine, { Solution } from '../src/Engine';
import { Presentation } from '../src/components/Presentation';

export default function App(): JSX.Element {
  const { render, goTo } = useStatus();
  const [config, setConfig] = useState<number>(NaN);
  const [result, setResult] = useState<Solution>();

  useEffect(() => {
    if (isNaN(config)) return;
    setResult(new Engine().generateData());
    setTimeout(() => {
      goTo.present();
    }, 1000);
  }, [config]);

  const begin = () => {
    setConfig(1);
    goTo.loading();
  };

  return (
    <>
      {render.setup(
        <BigBlackTemplate>
          <SimulationSetup onBegin={begin} />
        </BigBlackTemplate>,
      )}
      {render.loading(
        <Box background={'black'} fill>
          <SimulationLoading onAbort={goTo.setup} />
        </Box>,
      )}
      {render.present(<Presentation data={result} />)}
    </>
  );
}
