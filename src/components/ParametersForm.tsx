import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'stitches.config';
import * as yup from 'yup';
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
  const { register, setValue, handleSubmit } = useForm<SimulationOptions>({
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Flex css={{ gap: '10px' }}>
        <FormControl id="kP" isRequired>
          <FormLabel>kP</FormLabel>
          <Input type="text" placeholder="kP" {...register('kP', { required: true })} />
        </FormControl>
        <FormControl id="kI" isRequired>
          <FormLabel>kI</FormLabel>
          <Input type="text" placeholder="kI" {...register('kI', { required: true })} />
        </FormControl>
        <FormControl id="kD" isRequired>
          <FormLabel>kP</FormLabel>
          <Input type="text" placeholder="kD" {...register('kD', { required: true })} />
        </FormControl>
      </Flex>
      <Flex css={{ gap: '10px' }}>
        <FormControl id="timeStep" isRequired>
          <FormLabel>time step</FormLabel>
          <Input type="text" placeholder="[s]" {...register('timeStep', { required: true })} />
        </FormControl>
        <FormControl id="simTime" isRequired>
          <FormLabel>simulation time</FormLabel>
          <Input type="text" placeholder="[s]" {...register('simTime', { required: true })} />
        </FormControl>
      </Flex>
      <FormControl id="maxThrust" isRequired>
        <FormLabel>max thrust</FormLabel>
        <Input type="text" placeholder="[N]" {...register('maxThrust', { required: true })} />
      </FormControl>
      <FormControl id="destination" isRequired>
        <FormLabel>destination height</FormLabel>
        <Input type="text" placeholder="[m]" {...register('destination', { required: true })} />
      </FormControl>

      <Flex css={{ gap: '10px', marginTop: '8px' }}>
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
