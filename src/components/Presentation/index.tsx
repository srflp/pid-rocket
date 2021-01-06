import Head from 'next/head';
import React, { useState } from 'react';
import { Solution } from 'src/Engine';
import { Line } from 'react-chartjs-2';
import { round } from 'lodash';
import { MAIN } from '../../theme';
import { Box, Button, Collapsible, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';

interface PresentationModel {
  data: Solution | undefined;
}

export function Presentation(props: PresentationModel) {
  const { data } = props;

  if (!data) return <h1>Nothing</h1>;

  const { poses, times } = data;

  const options = {
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
        label: 'Time',
        data: poses.map((el) => Math.max(el, 0)).map((el) => round(el, 2)),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132, 0)',
        borderColor: MAIN,
      },
    ],
  };

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <Box fill>
        <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align="center" justify="center">
            <Line data={conf} options={options} type={'line'} height={100} />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Box>
          {!showSidebar ? (
            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width="medium"
                background="light-2"
                elevation="small"
                align="center"
                justify="center"
              >
                sidebar
              </Box>
            </Collapsible>
          ) : (
            <Layer>
              <Box background={'black'} tag="header" justify="end" align="center" direction="row">
                <Button icon={<FormClose />} onClick={() => setShowSidebar(!showSidebar)} />
              </Box>
              <Box fill background={'black'} align="center" justify="center">
                sidebar
              </Box>
            </Layer>
          )}
        </Box>
      </Box>
    </>
  );
}
