import { useEffect, useState } from "react";
import cookie from "../../public/images/cookie.png";
import "./CookieCounter.css";

export default function CookieCounter({
  cookies,
  setCookies,
  cookiesPerSecond,
  myCookieCount,
  setMyCookieCount,
}) {
  function handleClick() {
    setMyCookieCount(myCookieCount + 1);
  }
  useEffect(() => {
    // localStorage.setItem("cookiesPerSecond", JSON.stringify(cookiesPerSecond));
    // localStorage.setItem("cookies", JSON.stringify(cookies));

    // JSON.parse(localStorage.getItem("cookies"));

    const cookiesPerSecondInterval = setInterval(() => {
      setCookies((myCookieCount) => myCookieCount + cookiesPerSecond);
    }, 1000);
    return () => {
      clearInterval(cookiesPerSecondInterval);
    };
  }, [cookiesPerSecond]);

  // const [myCookieCount, setMyCookierCount] = useState(0);

  // function handleClick() {
  //   setMyCookieCount(myCookieCount + 1);
  // }

  return (
    <>
      <img
        className="cookie-image"
        src={cookie}
        alt="cartoon cookie image"
        onClick={handleClick}
      />

      <p>Total cookies: {myCookieCount + cookies}</p>
      <p>Cookies per second: {cookiesPerSecond}</p>
    </>
  );
}
