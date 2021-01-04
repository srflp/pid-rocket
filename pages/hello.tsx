import Head from "next/head";
import { useState } from "react";

export default function Hello(): JSX.Element {
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
      <div>{opened + ""}</div>
      <button onClick={updateClicked}>zmień: {clicked}</button>
    </>
  );
}
