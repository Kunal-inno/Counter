import React, { useEffect, useState } from "react";
import "./CounterDisplay.css";

const CounterDisplay = ({ getData }) => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // const [counterArray, setCounterArray] = useState([]);

  // getData(counter)

  useEffect(() => {
    let id;
    if (isRunning) {
      id = setInterval(() => setCounter((Counter) => Counter + 1), 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [isRunning, counter, getData]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  useEffect(() => {
    getData(counter);
  }, [counter]);

  return (
    <div>
      <div className="card-parent">
        <p className="start-stop" onClick={handleStartStop}>
          Click to Start/Stop
        </p>
        <p className="sec">{counter}</p>
      </div>
    </div>
  );
};

export default CounterDisplay;



// console.log(counter)

// counter.forEach(myFunction);

// function myFunction(item) {
//   var sum=0
//   sum += item;
// }

//   id = setInterval(() => setCounter((prevCounter) => prevCounter + 1, () => {
//     getData(counter);
// }), 1000);
// }
