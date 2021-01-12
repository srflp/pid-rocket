import React from 'react';
import {
  defaultOptions,
  SimulationOptions,
  SimulationOutput,
} from '../computations/pid/typesAndDefaults';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Simulation from '../computations/pid/Simulation';
import * as yup from 'yup';
import { Button, FormField, TextInput } from 'grommet';
import styles from './ParametersForm.module.scss';

const schema = yup
  .object()
  .shape({
    kP: yup.number().required(),
    kI: yup.number().required(),
    kD: yup.number().required(),
    timeStep: yup.number().required(),
    simTime: yup.number().required(),
    maxThrust: yup.number().required(),
    destination: yup.number().required(),
  })
  .required();

interface Props {
  setOptions: React.Dispatch<React.SetStateAction<SimulationOptions>>;
  setResult: React.Dispatch<React.SetStateAction<SimulationOutput | undefined>>;
}

export default function ParametersForm({ setOptions, setResult }: Props): JSX.Element {
  const { register, setValue, handleSubmit, errors } = useForm<SimulationOptions>({
    defaultValues: defaultOptions,
    resolver: yupResolver(schema),
  });

  const onSubmit = (options: SimulationOptions) => {
    setOptions(options);
    setResult(new Simulation(options).generateData());
  };

  const onReset = () => {
    for (const [key, value] of Object.entries(defaultOptions)) {
      setValue(key as keyof typeof defaultOptions, value);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.horizontalFlex}>
        <FormField label="kP">
          <TextInput name="kP" placeholder="kP" ref={register} />
        </FormField>
        <FormField label="kI">
          <TextInput name="kI" placeholder="kI" ref={register} />
        </FormField>
        <FormField label="kD">
          <TextInput name="kD" placeholder="kD" ref={register} />
        </FormField>
      </div>
      <div className={styles.horizontalFlex}>
        <FormField label="time step">
          <TextInput name="timeStep" placeholder="[s]" ref={register} />
        </FormField>
        <FormField label="simulation time">
          <TextInput name="simTime" placeholder="[s]" ref={register} />
        </FormField>
      </div>
      <FormField label="max thrust">
        <TextInput name="maxThrust" placeholder="[N]" ref={register} />
      </FormField>
      <FormField label="destination height">
        <TextInput name="destination" placeholder="[m]" ref={register} />
      </FormField>
      <div className={styles.horizontalFlex}>
        <Button secondary label="back to defaults" onClick={onReset} />
        <Button type="submit" primary label="run 🚀" />
      </div>
    </form>
  );
}
