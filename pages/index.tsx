import React, { useEffect, useState } from 'react';
import { SimulationSetup } from '../src/components/Setup';
import { BigBlackTemplate } from '../src/components/BigBlackTemplate';
import { SimulationLoading } from '../src/components/Loading';
import { Box } from 'grommet';
import { useStatus } from '../src/hooks';
import { SimulationOptions, SimulationOutput } from '../src/computations/pid/typesAndDefaults';
import { Presentation } from '../src/components/Presentation';
import Simulation from '../src/computations/pid/Simulation';

export default function App(): JSX.Element {
  const { render, goTo } = useStatus();
  const [options, setOptions] = useState<SimulationOptions>();
  const [result, setResult] = useState<SimulationOutput>();

  useEffect(() => {
    if (options === undefined) return;
    setResult(new Simulation(options).generateData());
    setTimeout(() => {
      goTo.present();
    }, 1000);
  }, [options]);

  const begin = (options: SimulationOptions) => {
    setOptions(options);
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
      {render.present(<Presentation data={result} onTweak={begin} options={options} />)}
    </>
  );
}
