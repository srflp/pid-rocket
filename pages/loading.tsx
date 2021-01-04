import React from "react";
import { BigBlackView } from "../src/components/BigBlackView";
import { SimulationLoading } from "../src/components/SimulationLoading";

export default function App(): JSX.Element {
  return (
    <BigBlackView>
      <SimulationLoading />
    </BigBlackView>
  );
}
