import { useState } from "react";
import "./UpgradesContainer.css";

export default function UpgradesContainer(props) {
  // useEffect(() => {

  //purchse upgrades - reduces total cookkies, increases CPS
  const [completePurchase, setCompletePurchase] = useState(false);

  function handlePurchase() {
    // const completePurchase = props.cookies >= props.cost;
    // setCompletePurchase(completePurchase);
    setCompletePurchase(props.cookies >= props.cost),
      props.cookies >= props.cost &&
        props.onPurchase(props.cost, props.increase);

    // completePurchase ? (
    //   <>
    //     {props.cookies} - {props.cost}
    //     {props.cookiesPerSecond} + {props.increase}
    //   </>
    // ) : null;
  }

  return (
    <div id={props.divid}>
      <p className="upgrade-name">{props.name}</p>
      <button onClick={handlePurchase}>Cost: {props.cost} cookies</button>
      <p>Increase: {props.increase} cookies per second</p>
      <img src={props.image} height={100} width={100} />
      {/* {completePurchase ? (
        <>
          {props.cookies} - {props.cost}
          {props.cookiesPerSecond} + {props.increase}
        </>
      ) : null} */}
    </div>
  );
}

//if the total cookies (cookies) is higher or equal to the cost, then take the cost away from the cookies AND add the increase amount to the cookies per sec. -- BUT you can't use if.
//const result = condition ? 'True Value' : 'False Value';

// completePurchase ? if true (cookies - cost), (cookiesPerSecond + increase): if false (nothing/null)
// completePurchase store state first
//then add the event
