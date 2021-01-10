import React from 'react';
import { SimulationOutput } from '../computations/pid/typesAndDefaults';
import { round } from 'lodash';
import { MAIN } from '../theme';
import { Line } from 'react-chartjs-2';

const chartOptions = {
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'h [m]',
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 't [s]',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 30,
        },
      },
    ],
  },
  title: {
    display: true,
    text: 'Rocket height in time - h(t)',
    fontSize: 16,
  },
  legend: {
    display: false,
  },
};

interface Props {
  data: SimulationOutput;
}

export default function HeightChart({ data }: Props): JSX.Element {
  const chartData = {
    labels: data.times.map((el) => round(el, 3)),
    datasets: [
      {
        label: 'height',
        data: data.poses.map((el) => round(el, 2)),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132, 0)',
        borderColor: MAIN,
      },
    ],
    responsive: true,
  };

  return (
    <>
      <Line data={chartData} options={chartOptions} />
    </>
  );
}
