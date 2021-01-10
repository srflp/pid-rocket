import { round } from 'lodash';
import React, { useState } from 'react';
import Head from 'next/head';
import styles from 'styles/Index.module.scss';
import { SimulationOutput } from '../src/computations/pid/typesAndDefaults';
import ParametersForm from '../src/components/ParametersForm';
import Chart from '../src/components/Chart';

export default function Index(): JSX.Element {
  const [result, setResult] = useState<SimulationOutput>();

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
          <ParametersForm setResult={setResult} />
        </section>
        <div className={styles.boxWhite}>
          <section>
            {!result ? (
              <p>uzupełnij parametry po lewej!</p>
            ) : (
              <>
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
                <div>
                  <table className={styles.resultsTable}>
                    <tr>
                      <th>n</th>
                      <th>time [s]</th>
                      <th>height [m]</th>
                      <th>velocity [m/s]</th>
                      <th>acceleration [m/s2]</th>
                      <th>thrust [N]</th>
                    </tr>
                    {Array.from(Array(result.count).keys()).map((i) => (
                      <tr>
                        <td>{i}</td>
                        <td>{round(result.time[i], 3).toFixed(3)}</td>
                        <td>{round(result.height[i], 2).toFixed(2)}</td>
                        <td>{round(result.velocity[i], 2).toFixed(2)}</td>
                        <td>{round(result.acceleration[i], 2).toFixed(2)}</td>
                        <td>{round(result.thrust[i], 2).toFixed(2)}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              </>
            )}
          </section>
          <section className={styles.copyright}>
            Copyright © 2021 Filip Sauer, Karina Szubert, Konrad Szychowiak, Monika Zielińska
          </section>
        </div>
      </main>
    </>
  );
}
