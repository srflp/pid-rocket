import React from 'react';
import { RegisterOptions, useForm } from 'react-hook-form';
import { styled } from 'stitches.config';
import Simulation from '../computations/pid/Simulation';
import {
  defaultOptions,
  SimulationOptions,
  SimulationOutput,
} from '../computations/pid/typesAndDefaults';
import Button from './Button';
import Flex from './Flex';
import { FormControl } from './FormControl';
import { FormLabel } from './FormLabel';
import { Input } from './Input';

const StyledForm = styled('form', {
  display: 'flex',
  gap: '8px',
  'flex-direction': 'column',
});

interface Props {
  setOptions: React.Dispatch<React.SetStateAction<SimulationOptions>>;
  setResult: React.Dispatch<React.SetStateAction<SimulationOutput | undefined>>;
}

const numberFieldOptions: RegisterOptions = {
  required: true,
  pattern: { value: /^(\d*\.\d+|\d+)$/, message: 'Invalid number.' },
};

export default function ParametersForm({ setOptions, setResult }: Props): JSX.Element {
  const { register, setValue, handleSubmit } = useForm<SimulationOptions>({
    defaultValues: defaultOptions,
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Flex css={{ gap: '10px' }}>
        <FormControl id="kP" isRequired>
          <FormLabel>kP</FormLabel>
          <Input type="text" placeholder="kP" {...register('kP', numberFieldOptions)} />
        </FormControl>
        <FormControl id="kI" isRequired>
          <FormLabel>kI</FormLabel>
          <Input type="text" placeholder="kI" {...register('kI', numberFieldOptions)} />
        </FormControl>
        <FormControl id="kD" isRequired>
          <FormLabel>kP</FormLabel>
          <Input type="text" placeholder="kD" {...register('kD', numberFieldOptions)} />
        </FormControl>
      </Flex>
      <Flex css={{ gap: '10px' }}>
        <FormControl id="timeStep" isRequired>
          <FormLabel>time step</FormLabel>
          <Input type="text" placeholder="[s]" {...register('timeStep', numberFieldOptions)} />
        </FormControl>
        <FormControl id="simTime" isRequired>
          <FormLabel>simulation time</FormLabel>
          <Input type="text" placeholder="[s]" {...register('simTime', numberFieldOptions)} />
        </FormControl>
      </Flex>
      <FormControl id="maxThrust" isRequired>
        <FormLabel>max thrust</FormLabel>
        <Input type="text" placeholder="[N]" {...register('maxThrust', numberFieldOptions)} />
      </FormControl>
      <FormControl id="destination" isRequired>
        <FormLabel>destination height</FormLabel>
        <Input type="text" placeholder="[m]" {...register('destination', numberFieldOptions)} />
      </FormControl>

      <Flex css={{ gap: '10px', marginTop: '8px', alignItems: 'center' }}>
        <Button type="button" onClick={onReset}>
          back to defaults
        </Button>
        <Button type="submit" variant="primary">
          run 🚀
        </Button>
      </Flex>
    </StyledForm>
  );
}
