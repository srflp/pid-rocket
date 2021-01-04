import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Canvas from "src/Canvas";
import { Box, Button, Footer, Header, Heading, Markdown } from "grommet/index";
import { SimulationSetup } from "../src/components/SimulationSetup";

export default function App(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<Canvas>();

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
        <SimulationSetup
          onChange={handleSpeed}
          onClick={toggleAnimation}
          running={isRunning}
          ref={canvasRef}
        />
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
