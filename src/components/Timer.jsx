import { useState, useEffect } from "react";

export default function Timer({ incrementGingerbread, gingerbreadPerSecond }) {
  let [gingerbread, setGingerbread] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      setGingerbread(
        (currentGingerbread) => currentGingerbread + gingerbreadPerSecond
      );
      //   set up an interval that calls incrementGingerbread every second
      incrementGingerbread();
    }, 1000);
    return () => clearInterval(myInterval);
  }, [incrementGingerbread, gingerbreadPerSecond]);
}
