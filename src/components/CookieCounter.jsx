import { useEffect, useState } from "react";
import cookie from "../../public/images/cookie.png";

export default function CookieCounter() {
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

  const [myCookieCount, setMyCookierCount] = useState(0);

  function handleClick() {
    setMyCookierCount(myCookieCount + 1);
  }
  return (
    <>
      <img src={cookie} alt="cartoon cookie image" onClick={handleClick} />

      <p>Total cookies: {myCookieCount + cookies}</p>
      <p>Cookies per second: {cookiesPerSecond}</p>
    </>
  );
}
