import { useState } from "react";
import cookie from "../../public/images/cookie.png";

export default function CookieCounter() {
  const [myCookieCount, setMyCookierCount] = useState(0);

  function handleClick() {
    setMyCookierCount(myCookieCount + 1);
  }
  return (
    <>
      <img src={cookie} alt="cartoon cookie image" onClick={handleClick} />

      <p>{myCookieCount} cookies - number of times clicked.</p>
    </>
  );
}
