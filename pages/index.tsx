import Head from "next/head";
import Link from "next/link";
import styles from "styles/App.module.css";
import React, { useEffect, useRef, useState } from "react";
import Canvas from "src/Canvas";

export default function App(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<Canvas>();
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      setCanvas(new Canvas(canvasRef.current));
    }
  }, []);

  const toggleAnimation = () => {
    if (isRunning) {
      canvas?.stop();
      setRunning(false);
    } else {
      canvas?.drawContinuously();
      setRunning(true);
    }
  };

  const handleSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canvas) {
      canvas.speed = Number(e.target.value);
    }
  };

  return (
    <>
      <Head>
        <title>PID Rocket</title>
      </Head>
      <div className={styles.container}>
        <Link href="hello">
          <a>Hello</a>
        </Link>
        <button type="button" onClick={toggleAnimation}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <input
          type="text"
          placeholder="speed"
          defaultValue="1"
          onChange={handleSpeed}
        />
        <canvas
          ref={canvasRef}
          className={styles.box}
          width="500"
          height="500"
        />
      </div>
    </>
  );
}
