import { round } from 'lodash';
import React, { useState } from 'react';
import styles from 'styles/Index.module.scss';
import HeightChart from '../src/components/HeightChart';
import ParametersForm from '../src/components/ParametersForm';
import { SimulationOutput } from '../src/computations/pid/typesAndDefaults';
import Head from 'next/head';

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
                <HeightChart data={result} />
                <div>
                  <p>Punktów: {result.count}</p>
                  <table className={styles.resultsTable}>
                    <tr>
                      <th>n</th>
                      <th>time [s]</th>
                      <th>height [m]</th>
                    </tr>
                    {Array.from(Array(result.count).keys()).map((i) => (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{round(result.times[i], 3).toFixed(3)}</td>
                        <td>{round(result.poses[i], 2).toFixed(2)}</td>
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
