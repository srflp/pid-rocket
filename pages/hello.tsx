import Head from "next/head";
import React, { ReactElement, useState } from "react";
import { Button } from "grommet/es6";

export default function Hello(): ReactElement {
  const [opened, setOpened] = useState(false);
  const [clicked, setClicked] = useState(0);

  const updateClicked = () => {
    setClicked(clicked + 1);
  };

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <div>{`${opened}`}</div>
      <Button onClick={updateClicked} label={`zmień: ${clicked}`} />
    </>
  );
}
