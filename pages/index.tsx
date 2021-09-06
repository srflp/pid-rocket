import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Result from 'src/components/Result';
import { styled } from 'stitches.config';
import ParametersForm from '../src/components/ParametersForm';
import {
  defaultOptions,
  SimulationOptions,
  SimulationOutput,
} from '../src/computations/pid/typesAndDefaults';

const Header = styled('header', {
  display: 'flex',
  color: '#111',
  backgroundColor: 'white',
  padding: '5px',
  height: '70px',
  background: 'rgba(256,256,256,0.2)',
  backdropFilter: 'blur(8px)',
  borderBottomRightRadius: '15px',

  '@md': {
    position: 'fixed',
    top: 0,
  },
});

const HeaderTitle = styled('h1', {
  ml: '16px',
  mr: '16px',
  fontSize: '16pt',
});

const BoxBlack = styled('section', {
  width: '100%',
  backgroundColor: '#e8e8e8',
  backgroundImage: 'url("bg.jpg")',
  backgroundSize: 'cover',
  color: '#eaeaea',
  boxSizing: 'border-box',
  padding: '40px 35px 40px 35px',
  overflow: 'auto',

  '@md': {
    transform: 'translateX(-360px)',
    transition: '.25s ease-out',
    paddingRight: '50px',
    borderTopRightRadius: '15px',
    width: '400px',
    position: 'fixed',
    top: '70px',
    bottom: 0,
    left: 0,
  },
});

const ToggleMenuButton = styled('button', {
  display: 'none',
  cursor: 'pointer',
  background: 'radial-gradient(farthest-side at right, rgba(255, 255, 255, 0.25), rgba(0,0,0,0) )',
  transition: 'opacity .15s ease-out',
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
  },
  border: 'none',
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: '40px',
  '& img': {
    transform: 'rotate(0deg)',
    transition: '.3s ease-out',
  },

  '@md': {
    display: 'block',
  },
});

const BoxWhite = styled('section', {
  gridArea: 'boxWhite',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  background: '#fff',
  overflow: 'auto',
  transition: 'margin 200ms',
  minWidth: 0,
  margin: '10px 5px 0 5px',
  '@md': {
    margin: '70px 10px 0px 50px',
  },
});

const MainWrapper = styled('main', {
  '@md': {
    [`&[data-menu-opened] ${ToggleMenuButton} img`]: {
      transform: 'rotate(180deg)',
    },
    [`&[data-menu-opened] > ${BoxBlack}`]: {
      transform: 'translateX(0)',
    },
    [`&[data-menu-opened] ${BoxWhite}`]: {
      marginLeft: '405px',
    },
  },
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
  const [menuOpened, setMenuOpened] = useState<true | undefined>(true);
  const toggleMenu = () => setMenuOpened((v) => (v ? undefined : true));

  return (
    <>
      <Head>
        <title>PID Rocket</title>
      </Head>
      <Header>
        <HeaderTitle>PID Rocket</HeaderTitle>
      </Header>
      <MainWrapper data-menu-opened={menuOpened}>
        <BoxBlack>
          <h2 style={{ marginTop: '5px' }}>Simulation parameters</h2>
          <ParametersForm setResult={setResult} setOptions={setOptions} />
          <ToggleMenuButton onClick={toggleMenu}>
            <Image src="/chevron-right.svg" width="15" height="15" draggable={false} alt="" />
          </ToggleMenuButton>
        </BoxBlack>
        <BoxWhite>
          <Result result={result} options={options} />
        </BoxWhite>
        <Copyright>
          &copy; {new Date().getFullYear()} Filip Sauer, Karina Szubert, Konrad Szychowiak, Monika
          Zielińska
        </Copyright>
      </MainWrapper>
    </>
  );
}
