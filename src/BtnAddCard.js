import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import "./BtnAddCard.css";

const BtnAddCard = ({getData}) => {
  const [count, setCount] = useState(0);
  
  
  return (
    <div>
      <div>
        <button className="header-div" onClick={() => setCount(count + 1)}>
          Add Component
        </button>
        {[...Array(count)].map((_, i) => (
          <CounterDisplay key={i} getData={getData}  />
        ))}
      </div>
    </div>
  );
};

export default BtnAddCard;
