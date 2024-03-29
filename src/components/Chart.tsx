import { MAIN } from '../theme';
import { Line } from 'react-chartjs-2';
import React from 'react';

export interface ChartOptions {
  title: string;
  labelX: string;
  labelY: string;
  dataX: number[];
  dataY: number[];
}

export default function Chart(options: ChartOptions) {
  const chartData = {
    labels: options.dataX,
    datasets: [
      {
        // label: 'height',
        data: options.dataY,
        fill: false,
        borderColor: MAIN,
        pointBackgroundColor: MAIN,
      },
    ],
    responsive: true,
  };

  const chartOptions = {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: options.labelX,
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 30,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: options.labelY,
          },
        },
      ],
    },
    title: {
      display: true,
      text: options.title,
      fontSize: 16,
    },
    legend: {
      display: false,
    },
    tooltips: {
      displayColors: false,
      // callbacks: {
      //   label: function (tooltipItem: any, data: any) {
      //     var label = data.datasets[tooltipItem.datasetIndex].label || '';
      //
      //     if (label) {
      //       label += ': ';
      //     }
      //     label += Math.round(tooltipItem.yLabel * 100) / 100;
      //     return label;
      //   },
      // },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
