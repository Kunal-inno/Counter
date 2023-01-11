import React, { useEffect, useState } from "react";
import "./CounterDisplay.css";

const CounterDisplay = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCounter((oldCount) => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <div className="card-parent">
        <p className="start-stop">Counter</p>

        <p className="sec">{counter}</p>
      </div>
    </div>
  );
};

export default CounterDisplay;
