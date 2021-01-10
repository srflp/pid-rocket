import { round } from 'lodash';
import React, { useState } from 'react';
import styles from 'styles/Index.module.scss';
import HeightChart from '../src/components/HeightChart';
import ParametersForm from '../src/components/ParametersForm';
import { SimulationOutput } from '../src/computations/pid/typesAndDefaults';

export default function Index(): JSX.Element {
  const [result, setResult] = useState<SimulationOutput>();

  return (
    <>
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
                  <table>
                    <tr>
                      <th>times</th>
                      <th>poses</th>
                    </tr>
                    {Array.from(Array(result.count).keys()).map((i) => (
                      <tr>
                        <td>{result.times[i]}</td>
                        <td>{round(result.poses[i], 2)}</td>
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
