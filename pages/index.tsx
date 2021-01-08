import React, { useState } from 'react';
import {
  defaultOptions,
  SimulationOptions,
  SimulationOutput,
} from '../src/computations/pid/typesAndDefaults';
import styled from 'styled-components';
import { Button, FormField, TextInput } from 'grommet';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Simulation from '../src/computations/pid/Simulation';
import { Line } from 'react-chartjs-2';
import { round } from 'lodash';
import { MAIN } from '../src/theme';

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(500px, min-content) auto;
  grid-template-rows: 60px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  grid-template-areas:
    'header header'
    'boxBlack boxWhite';
  @media only screen and (max-width: ${breakpoints.lg}) {
    // < 768px
    width: auto;
    height: auto;
    grid-template-columns: auto;
    grid-template-areas:
      'header'
      'boxBlack'
      'boxWhite';
  }
`;

const BoxBlack = styled.section`
  grid-area: boxBlack;
  background-color: #111;
  color: #eaeaea;
  box-sizing: border-box;
  overflow: auto;
  padding: 40px 35px;
`;

const BoxWhite = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-content: center;
  //overflow: hidden;
  background: #fff;
  grid-area: boxWhite;
`;

const Copyright = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 5px 0 0 0;
  @media only screen and (max-width: ${breakpoints.lg}) {
    // < 768px
    position: relative;
  }
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  color: white;
  background-color: #111;
  padding: 5px;
`;

const HeaderTitle = styled.h1`
  margin-left: 16px;
  font-size: 16pt;
`;

const HorizontalFlex = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  gap: 10px;
  & > * {
    width: 100%;
  }
`;

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

export default function Index2(): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SimulationOutput>();
  const [options, setOptions] = useState<SimulationOptions>();
  const { register, setValue, handleSubmit, errors } = useForm<SimulationOptions>({
    defaultValues: defaultOptions,
    resolver: yupResolver(schema),
  });

  const onSubmit = (options: SimulationOptions) => {
    setResult(new Simulation(options).generateData());
  };

  const onReset = () => {
    for (const [key, value] of Object.entries(defaultOptions)) {
      setValue(key as keyof typeof defaultOptions, value);
    }
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const conf = {
    labels: result?.times.map((el) => round(el, 2)),
    datasets: [
      {
        label: 'Height',
        data: result?.poses.map((el) => Math.max(el, 0)).map((el) => round(el, 2)),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132, 0)',
        borderColor: MAIN,
      },
    ],
    responsive: true,
  };

  return (
    <>
      <Wrapper>
        <Header>
          <HeaderTitle>PID Rocket</HeaderTitle>
        </Header>
        <BoxBlack>
          <h2>Simulation parameters</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <HorizontalFlex>
              <FormField label="kP">
                <TextInput name="kP" placeholder="kP" ref={register} />
              </FormField>
              <FormField label="kI">
                <TextInput name="kI" placeholder="kI" ref={register} />
              </FormField>
              <FormField label="kD">
                <TextInput name="kD" placeholder="kD" ref={register} />
              </FormField>
            </HorizontalFlex>
            <HorizontalFlex>
              <FormField label="time step">
                <TextInput name="timeStep" placeholder="[s]" ref={register} />
              </FormField>
              <FormField label="simulation time">
                <TextInput name="simTime" placeholder="[s]" ref={register} />
              </FormField>
            </HorizontalFlex>
            <FormField label="max thrust">
              <TextInput name="maxThrust" placeholder="[N]" ref={register} />
            </FormField>
            <FormField label="destination height">
              <TextInput name="destination" placeholder="[m]" ref={register} />
            </FormField>
            <HorizontalFlex>
              <Button secondary label="przywróć domyślne" onClick={onReset} />
              <Button type="submit" primary label="start" />
            </HorizontalFlex>
          </form>
        </BoxBlack>
        <BoxWhite>
          {!result ? (
            <p>uzupełnij parametry po lewej!</p>
          ) : (
            <>
              <Line data={conf} options={chartOptions} height={100} />
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </>
          )}
          <Copyright>
            Copyright © 2021 Filip Sauer, Karina Szubert, Konrad Szychowiak, Monika Zielińska
          </Copyright>
        </BoxWhite>
      </Wrapper>
    </>
  );
}
