import "./App.css";

import { useEffect, useState } from "react";
import CookieCounter from "./components/CookieCounter";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  useEffect(() => {
    const cookiesPerSecondInterval = setInterval(() => {
      setCookies((myCookieCount) => myCookieCount + cookiesPerSecond);
    }, 1000);
    console.log(setCookies);
    return () => {
      clearInterval(cookiesPerSecondInterval);
    };
  }, [cookiesPerSecond]);

  return (
    <>
      <h1>Cookie Clicker</h1>
      <CookieCounter />
      <p>{cookies}</p>
      <div>Cookies Per Second: {cookiesPerSecond}</div>
    </>
  );
}
