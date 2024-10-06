import "./App.css";

import { useEffect, useState } from "react";
import CookieCounter from "./components/CookieCounter";
import UpgradesContainer from "./components/UpgradesContainer";
import upgradeData from "./lib/upgradeData.json";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  // const [myCookieCount, setMyCookierCount] = useState(0);
  function handlePurchase() {
    completePurchase(cookies >= cost);
  }
  return (
    <>
      <h1>Cookie Clicker</h1>
      <CookieCounter
        cookies={cookies}
        setCookies={setCookies}
        cookiesPerSecond={cookiesPerSecond}
        cost={cost}
      />
      {upgradeData.map((shop) => {
        return (
          <div key={shop.id}>
            <UpgradesContainer
              name={shop.name}
              cost={shop.cost}
              increase={shop.increase}
            />
          </div>
        );
      })}
      <p>{cookies}</p>
    </>
  );
}
