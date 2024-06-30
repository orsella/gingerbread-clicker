import "./App.css";
import Shop from "./components/Shop";
import Cookie from "./components/Cookie";
import Timer from "./components/Timer";
import { useState } from "react";

export default function App() {
  const [gingerbread, setGingerbread] = useState(0);
  const [gingerbreadPerSecond, setGingerbreadPerSecond] = useState(1);
  const [clicked, setClicked] = useState(false);

  function gingerbreadCounter() {
    setClicked(true);
    setGingerbread(gingerbread + 1);
  }

  // function increments the cookie count
  // passed to the Timer component to be called every second
  // new gingerbread used because of state changes
  function incrementGingerbread() {
    setGingerbread((newGingerbread) => newGingerbread + gingerbreadPerSecond);
  }

  function handlePurchase(cost, increase) {
    if (gingerbread >= cost) {
      setGingerbread((newGingerbread) => newGingerbread - cost);
      setGingerbreadPerSecond((prevPerSecond) => prevPerSecond + increase);
    }
  }

  return (
    <>
      <div className="background-image"></div>
      <div className="main-container">
        {/* function counter being called on click */}
        {/* onClick passed by props on Cookie component */}
        <Cookie click={gingerbreadCounter} />
        <div className="counters">
          <p className="gingerbread-count">Gingerbread: {gingerbread}</p>
          {clicked && <Timer incrementGingerbread={incrementGingerbread} />}
          <p className="gingerbread-per-second">
            Gingerbread Per Second: {gingerbreadPerSecond}
          </p>
        </div>
        <Shop onPurchase={handlePurchase} />
      </div>
    </>
  );
}
