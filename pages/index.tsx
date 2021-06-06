import Head from 'next/head';
import React, { useState } from 'react';
import Result from 'src/components/Result';
import { styled } from 'stitches.config';
import ParametersForm from '../src/components/ParametersForm';
import {
  defaultOptions,
  SimulationOptions,
  SimulationOutput,
} from '../src/computations/pid/typesAndDefaults';

const MainWrapper = styled('main', {
  display: 'grid',
  boxSizing: 'border-box',

  width: 'auto',
  height: 'auto',
  gridTemplateColumns: 'auto',
  gridTemplateAreas: `
      'header'
      'boxBlack'
      'boxWhite'`,

  '@md': {
    width: '100%',
    height: '100%',
    gridTemplateColumns: '400px auto',
    gridTemplateRows: '60px',
    gridTemplateAreas: `
      'header header'
      'boxBlack boxWhite'`,
  },
});

const Header = styled('header', {
  gridArea: 'header',
  display: 'flex',
  color: 'white',
  backgroundColor: '#111',
  padding: '5px',
});

const HeaderTitle = styled('h1', {
  ml: '16px',
  fontSize: '16pt',
});

const BoxBlack = styled('section', {
  gridArea: 'boxBlack',
  backgroundColor: '#111',
  color: '#eaeaea',
  boxSizing: 'border-box',
  padding: '20px 35px',
  overflow: 'auto',
});

const BoxWhite = styled('section', {
  gridArea: 'boxWhite',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  background: '#fff',
  overflow: 'auto',
  minWidth: 0,
});

const Copyright = styled('div', {
  right: 0,
  bottom: 0,
  backgroundColor: '#ffffff',
  padding: '5px',
  borderRadius: '5px 0 0 0',

  position: 'relative',
  '@md': {
    position: 'fixed',
  },
});

export default function Index(): JSX.Element {
  const [result, setResult] = useState<SimulationOutput>();
  const [options, setOptions] = useState<SimulationOptions>(defaultOptions);

  return (
    <>
      <Head>
        <title>PID Rocket</title>
      </Head>
      <MainWrapper>
        <Header>
          <HeaderTitle>PID Rocket</HeaderTitle>
        </Header>
        <BoxBlack>
          <h2>Simulation parameters</h2>
          <ParametersForm setResult={setResult} setOptions={setOptions} />
        </BoxBlack>
        <BoxWhite>
          <Result result={result} options={options}></Result>
        </BoxWhite>
        <Copyright>
          &copy; {new Date().getFullYear()} Filip Sauer, Karina Szubert, Konrad Szychowiak, Monika
          Zielińska
        </Copyright>
      </MainWrapper>
    </>
  );
}
