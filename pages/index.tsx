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
                <pre>{JSON.stringify(result, null, 2)}</pre>
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
