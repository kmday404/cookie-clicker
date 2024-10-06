import { useState } from "react";

export default function UpgradesContainer(
  props,
  { cookies, cookiesPerSecond, cost }
) {
  //purchse upgrades - reduces total cookkies, increases CPS
  const [completePurchase, setCompletePurchase] = useState(false);

  function handlePurchase() {
    completePurchase(cookies >= cost);
  }

  return (
    <>
      <p>{props.name}</p>
      <button onClick={handlePurchase}>Cost: {props.cost}</button>
      <p>Increase: {props.increase} cookies per second</p>
      {completePurchase ? (
        <>
          (cookies - {props.cost}) ({cookiesPerSecond} + {props.increase})
        </>
      ) : null}
    </>
  );
}

//if the total cookies (cookies) is higher or equal to the cost, then take the cost away from the cookies AND add the increase amount to the cookies per sec. -- BUT you can't use if.
//const result = condition ? 'True Value' : 'False Value';

// completePurchase ? if true (cookies - cost), (cookiesPerSecond + increase): if false (nothing/null)
// completePurchase store state first
//then add the event
