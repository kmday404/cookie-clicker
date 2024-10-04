import "./App.css";

// import { useEffect, useState } from "react";
import CookieCounter from "./components/CookieCounter";

export default function App() {
  // useEffect(() => {
  //   const cookiesPerSecondInterval = setInterval(() => {
  //     setCookies((myCookieCount) => myCookieCount + cookiesPerSecond);
  //   }, 1000);
  //   return () => {
  //     clearInterval(cookiesPerSecondInterval);
  //   };
  // }, [cookiesPerSecond]);

  return (
    <>
      <h1>Cookie Clicker</h1>
      <CookieCounter />
      {/* <div>Cookies Per Second: {cookiesPerSecond}</div> */}
    </>
  );
}
