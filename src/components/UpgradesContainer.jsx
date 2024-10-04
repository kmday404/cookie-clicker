import { useState } from "react";

export default function UpgradesContainer(props) {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.cost}</p>
      <p>{props.increase}</p>
    </>
  );
}
