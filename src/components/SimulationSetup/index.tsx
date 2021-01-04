import React from "react";
import { Box, Button, FormField, TextInput } from "grommet/index";

interface SimulationSetupParams {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  running: boolean;
}

export function SimulationSetup(props: SimulationSetupParams): JSX.Element {
  return (
    <Box background={"black"} flex align="center" justify="center">
      <FormField label="Speed">
        <TextInput placeholder="speed" defaultValue={1} />
      </FormField>
      <Button primary label={props.running ? "Stop" : "Start"} />
    </Box>
  );
}
