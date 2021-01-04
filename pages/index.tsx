import React from 'react';
import { SimulationSetup } from '../src/components/SimulationSetup';
import { BigBlackView } from '../src/components/BigBlackView';

export default function App(): JSX.Element {
  return (
    <BigBlackView>
      <SimulationSetup />
    </BigBlackView>
  );
}
