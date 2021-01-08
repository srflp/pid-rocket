import React from 'react';
import { SimulationOutput } from '../computations/pid/typesAndDefaults';
import { round } from 'lodash';
import { MAIN } from '../theme';
import { Line } from 'react-chartjs-2';

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

interface Props {
  data: SimulationOutput;
}

export default function HeightChart({ data }: Props): JSX.Element {
  const conf = {
    labels: data?.times.map((el) => round(el, 2)),
    datasets: [
      {
        label: 'Height',
        data: data?.poses.map((el) => Math.max(el, 0)).map((el) => round(el, 2)),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132, 0)',
        borderColor: MAIN,
      },
    ],
    responsive: true,
  };

  return (
    <>
      <Line data={conf} options={chartOptions} height={100} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
