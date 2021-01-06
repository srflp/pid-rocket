/**
 * @deprecated
 */
import { FormField, TextInput, Tip } from 'grommet/index';
import React, { ChangeEvent } from 'react';

interface SimulationControlModel<T> {
  label: string;
  tip?: string;
  defaultValue?: string | number | readonly string[];
  onChange: (event: ChangeEvent) => void;
  value: number | string;
}

export function SimulationControl<T>(props: SimulationControlModel<T>): JSX.Element {
  const { label, tip, defaultValue, onChange, value } = props;
  const element = (
    <TextInput placeholder={label} defaultValue={defaultValue} onChange={onChange} value={value} />
  );
  return <FormField label={label}>{tip ? <Tip content={tip}>{element}</Tip> : element}</FormField>;
}
