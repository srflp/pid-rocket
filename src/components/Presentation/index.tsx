import Head from 'next/head';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { round } from 'lodash';
import { MAIN } from '../../theme';
import { Accordion, AccordionPanel, Box, Button, FormField, TextInput } from 'grommet';
import { SimulationOptions, SimulationOutput } from '../../computations/pid/typesAndDefaults';

interface PresentationModel {
  data: SimulationOutput | undefined;
  onTweak: Function;
  options: SimulationOptions | undefined;
}

export function Presentation(props: PresentationModel) {
  const { data, onTweak, options } = props;

  if (!data) return <h1>Nothing</h1>;

  const { poses, times } = data;

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
    labels: times.map((el) => round(el, 2)),
    datasets: [
      {
        label: 'Height',
        data: poses.map((el) => Math.max(el, 0)).map((el) => round(el, 2)),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132, 0)',
        borderColor: MAIN,
      },
    ],
  };

  // const [options, setOptions] = useState(config + '');

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <Box fill>
        <Box background={'black'} justify={'center'} align={'center'}>
          <Box direction={'row'} gap={'medium'} pad={'medium'}>
            <FormField label={'simulation time'}>
              <TextInput
                placeholder="simulation time"
                // value={time}
                // onChange={(event) => {
                //   setTime(event.target.value);
                // }}
              />
            </FormField>
          </Box>
          <Button
            primary
            label={'restart'}
            onClick={() => {
              // onTweak(Number(time));
            }}
          />
        </Box>
        <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align="center" justify="center">
            <Line data={conf} options={chartOptions} height={100} />
            <Accordion fill={'horizontal'}>
              <AccordionPanel label="Raw solution">
                <Box pad="medium" fill={'horizontal'}>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
}
