import "./App.css";

import { useEffect, useState } from "react";
import CookieCounter from "./components/CookieCounter";

export default function App() {
  return (
    <>
      <h1>Cookie Clicker</h1>
      <CookieCounter />
      {/* <p>{cookies}</p>
      <div>Cookies Per Second: {cookiesPerSecond}</div> */}
    </>
  );
}
