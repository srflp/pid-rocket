import React from "react";
import { Box, Button } from "grommet/index";
import { SimulationControl } from "../SimulationControl";
import Link from "next/link";

export function SimulationSetup(): JSX.Element {
  return (
    <>
      <Box direction={"row"} gap={"medium"}>
        <SimulationControl label={"speed"} defaultValue={0} />
        <SimulationControl label={"speed"} defaultValue={0} />
        <SimulationControl label={"speed"} defaultValue={0} />
        <SimulationControl label={"speed"} defaultValue={0} />
      </Box>
      <Link href="loading">
        <Button primary label={"start the simulation"} size={"large"} />
      </Link>
    </>
  );
}
