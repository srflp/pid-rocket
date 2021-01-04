import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Canvas from "src/Canvas";
import {
  Box,
  Button,
  Footer,
  FormField,
  Header,
  Heading,
  Markdown,
  TextInput,
} from "grommet/index";

import styles from "styles/App.module.css";

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
      <Box fill>
        <Header background={"black"} pad={"medium"}>
          <Heading>PID Rocket</Heading>
          <Link href="hello">
            <Button primary label={"Hello"} />
          </Link>
        </Header>
        <Box background={"black"} flex align="center" justify="center">
          <FormField label="Speed">
            <TextInput
              placeholder="speed"
              defaultValue={1}
              onChange={handleSpeed}
            />
          </FormField>
          <Button
            primary
            onClick={toggleAnimation}
            label={isRunning ? "Stop" : "Start"}
          />

          {/*<input*/}
          {/*    type="text"*/}
          {/*    placeholder="speed"*/}
          {/*    defaultValue="1"*/}
          {/*    onChange={handleSpeed}*/}
          {/*/>*/}
          <canvas
            ref={canvasRef}
            className={styles.box}
            width="500"
            height="500"
          />
        </Box>
        <Footer background={"black"} pad={"medium"}>
          <Markdown>
            Copyright © 2021 Filip **Sauer**, Karina **Szubert**, Konrad
            **Szychowiak**, Monika **Zielińska**
          </Markdown>
        </Footer>
      </Box>
    </>
  );
}
