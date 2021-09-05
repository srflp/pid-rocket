import { round } from 'lodash';
import React from 'react';
import { SimulationOptions, SimulationOutput } from 'src/computations/pid/typesAndDefaults';
import { styled } from 'stitches.config';
import Chart from './Chart';

function getStabilityTime(result: SimulationOutput, destination: number) {
  let counter = 0;
  for (const [i, height] of result.height.entries()) {
    if (counter === 10) {
      return round(result.time[i - 10], 2).toFixed(2) + ' s';
    }
    if (round(height, 2) === destination) {
      counter += 1;
    } else {
      counter = 0;
    }
  }
  return 'stability not achieved during the simulation time';
}

const Table = styled('table', {
  display: 'block',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  marginTop: '20px',
  '& td, & th': {
    padding: '0 5px',
  },
  '& tr': {
    textAlign: 'right',
  },
  '& thead tr:first-child': {
    textAlign: 'center',
  },
  '@md': {
    marginBottom: '40px',
  },
});

const ChartContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  '& div': {
    width: '100%',
    '@lg': {
      width: '50%',
    },
  },
});

type Props = {
  result: SimulationOutput | undefined;
  options: SimulationOptions;
};

function Result({ result, options }: Props) {
  return result && options ? (
    <>
      <ChartContainer>
        <Chart
          title="Rocket height in time - h(t)"
          labelX="t [s]"
          labelY="h [m]"
          dataX={result.time.map((el) => round(el, 3))}
          dataY={result.height.map((el) => round(el, 2))}
        />
        <Chart
          title="Rocket velocity in time - v(t)"
          labelX="t [s]"
          labelY="v [m/s]"
          dataX={result.time.map((el) => round(el, 3))}
          dataY={result.velocity.map((el) => round(el, 2))}
        />
        <Chart
          title="Rocket acceleration in time - a(t)"
          labelX="t [s]"
          labelY="a [m/s2]"
          dataX={result.time.map((el) => round(el, 3))}
          dataY={result.acceleration.map((el) => round(el, 2))}
        />
        <Chart
          title="Rocket thrust in time - F(t)"
          labelX="t [s]"
          labelY="F [N]"
          dataX={result.time.map((el) => round(el, 3))}
          dataY={result.thrust.map((el) => round(el, 2))}
        />
      </ChartContainer>

      <div>
        <p style={{ marginLeft: '15px' }}>
          Max height achieved: {round(Math.max(...result.height), 2).toFixed(2) + ' m'} (should be:{' '}
          {round(options.destination, 2).toFixed(2) + ' m'})
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
          Time to rocket stability on destination height*:{' '}
          {getStabilityTime(result, options.destination)}
          <span style={{ fontSize: '11px', lineHeight: 'normal' }}>
            *time after which next 10 height measurements are equal to the destination height
          </span>
        </div>

        <Table>
          <thead>
            <tr>
              <th>n</th>
              <th>time [s]</th>
              <th>height [m]</th>
              <th>velocity [m/s]</th>
              <th>acceleration [m/s2]</th>
              <th>thrust [N]</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(result.count).keys()).map((i) => (
              <tr key={result.time[i]}>
                <td>{i}</td>
                <td>{round(result.time[i], 2).toFixed(2)}</td>
                <td>{round(result.height[i], 2).toFixed(2)}</td>
                <td>{round(result.velocity[i], 2).toFixed(2)}</td>
                <td>{round(result.acceleration[i], 2).toFixed(2)}</td>
                <td>{round(result.thrust[i], 2).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  ) : (
    <p style={{ marginLeft: '18px' }}>To start, fill in the parameters and click "run".</p>
  );
}

export default React.memo(Result);
