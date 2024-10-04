import { useState } from "react";

export default function UpgradesContainer(props) {
  function handlePurchase() {
    //purchse upgrades - reduces total cookkies, increases CPS
  }
  return (
    <>
      <p>{props.name}</p>
      <button onClick={handlePurchase}>Cost: {props.cost}</button>
      <p>Increase: {props.increase} cookies per second</p>
    </>
  );
}
