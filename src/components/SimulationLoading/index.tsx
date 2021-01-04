import React from "react";
import { RingLoader } from "react-spinners/index";
import { MAIN } from "src/theme";
import { Heading, Paragraph } from "grommet/index";

export function SimulationLoading() {
  return (
    <>
      <RingLoader size={120} color={MAIN} />
      <Heading level={2}>your simulation is running</Heading>
    </>
  );
}
