import React, { useEffect, useState } from "react";

import ClassComponent from "./ClassComponent";

const App = () => {
  const [number, setNumber] = useState(0);

  // console.log(number);

  useEffect(() => {
    let timerId = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div>
      {/* <ClassComponent /> */}
      <h1>Count value {number}</h1>
      <button type="button">Increase</button>
    </div>
  );
};

export default App;
