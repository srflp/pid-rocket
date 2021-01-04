import { FormField, TextInput, Tip } from "grommet/index";
import React from "react";

interface SimulationControlModel {
  label: string;
  tip?: string;
  defaultValue?: string | number | readonly string[];
}

export function SimulationControl(props: SimulationControlModel): JSX.Element {
  const { label, tip, defaultValue } = props;
  const element = <TextInput placeholder={label} defaultValue={defaultValue} />;
  return (
    <FormField label={label}>
      {tip ? <Tip content={tip}>{element}</Tip> : element}
    </FormField>
  );
}
