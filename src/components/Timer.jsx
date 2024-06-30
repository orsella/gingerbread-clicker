import { useEffect } from "react";

export default function Timer({ incrementGingerbread, gingerbreadPerSecond }) {
  useEffect(() => {
    let myInterval = setInterval(() => {
      //   set up an interval that calls incrementGingerbread every second
      incrementGingerbread();
    }, 1000);
    return () => clearInterval(myInterval);
  }, [incrementGingerbread, gingerbreadPerSecond]);
}
