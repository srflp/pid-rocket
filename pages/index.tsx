import { round } from 'lodash';
import React, { useState } from 'react';
import Head from 'next/head';
import styles from 'styles/Index.module.scss';
import {
  defaultOptions,
  SimulationOptions,
  SimulationOutput,
} from '../src/computations/pid/typesAndDefaults';
import ParametersForm from '../src/components/ParametersForm';
import Chart from '../src/components/Chart';

function getStabilityTime(result: SimulationOutput, destination: number) {
  let counter = 0;
  for (let [i, height] of result.height.entries()) {
    if (counter === 10) {
      return round(result.time[i - 10], 3).toFixed(3) + ' s';
    }
    if (round(height, 2) === destination) {
      counter += 1;
    } else {
      counter = 0;
    }
  }
  return 'stability not achieved during the simulation time';
}

export default function Index(): JSX.Element {
  const [result, setResult] = useState<SimulationOutput>();
  const [options, setOptions] = useState<SimulationOptions>(defaultOptions);

  return (
    <>
      <Head>
        <title>PID Rocket</title>
      </Head>
      <main className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>PID Rocket</h1>
        </header>
        <section className={styles.boxBlack}>
          <h2>Simulation parameters</h2>
          <ParametersForm setResult={setResult} setOptions={setOptions} />
        </section>
        <section className={styles.boxWhite}>
          {result && options ? (
            <>
              <div className={styles.chartContainer}>
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
              </div>

              <div>
                <p style={{ marginLeft: '15px' }}>
                  Max height achieved: {round(Math.max(...result.height), 2).toFixed(2) + ' m'}{' '}
                  (should be: {round(options.destination, 2).toFixed(2) + ' m'})
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
                  Time to rocket stability on destination height*:{' '}
                  {getStabilityTime(result, options.destination)}
                  <span style={{ fontSize: '11px', lineHeight: 'normal' }}>
                    *time after which next 10 height measurements are equal to the destination
                    height
                  </span>
                </div>

                <table className={styles.resultsTable}>
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
                        <td>{round(result.time[i], 3).toFixed(3)}</td>
                        <td>{round(result.height[i], 2).toFixed(2)}</td>
                        <td>{round(result.velocity[i], 2).toFixed(2)}</td>
                        <td>{round(result.acceleration[i], 2).toFixed(2)}</td>
                        <td>{round(result.thrust[i], 2).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p style={{ marginLeft: '18px' }}>To start, fill in the parameters and click "run".</p>
          )}
        </section>
        <section className={styles.copyright}>
          &copy; {new Date().getFullYear()} Filip Sauer, Karina Szubert, Konrad Szychowiak, Monika
          Zielińska
        </section>
      </main>
    </>
  );
}
