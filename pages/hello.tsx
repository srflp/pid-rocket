import Head from "next/head";
import React, { ReactElement, useState } from "react";
import { Button } from "grommet/index";
import Engine from "../src/Engine";

export default function Hello(): ReactElement {
  const [opened, setOpened] = useState(false);
  const [clicked, setClicked] = useState(0);

  const updateClicked = () => {
    setClicked(clicked + 1);
  };

  const data = new Engine().generateData();

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <div>{`${opened}`}</div>
      <Button onClick={updateClicked} label={`zmień: ${clicked}`} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
