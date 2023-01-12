import React, { useEffect, useState } from "react";
import "./CounterDisplay.css";

const CounterDisplay = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let id;
    if (isRunning) {
      id = setInterval(() => setCounter((oldCount) => oldCount + 1), 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <div className="card-parent">
        <p className="start-stop" onClick={handleStartStop}>Click to Start/Stop</p>
        <p className="sec">{counter}</p>
      </div>
    </div>
  );
};


export default CounterDisplay;
