import "./App.css";

// import { useEffect, useState } from "react";
import CookieCounter from "./components/CookieCounter";
import UpgradesContainer from "./components/UpgradesContainer";
import upgradeData from "./lib/upgradeData.json";

export default function App() {
  return (
    <>
      <h1>Cookie Clicker</h1>
      <CookieCounter />
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
    </>
  );
}
