import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import "./HeaderPlus.css";

const HeadrePlus = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="header-div">
        {/* <button className='add-counter'>Add Counter</button> */}
        <button onClick={() => setCount(count + 1)}>Add Component</button>
        {[...Array(count)].map((_, i) => (
          <CounterDisplay key={i} />
        ))}
        <button className="show-add">0</button>
      </div>
    </div>
  );
};

export default HeadrePlus;

// import React, { useState } from 'react';

// function MyComponent() {
//   const [isShown, setIsShown] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsShown(!isShown)}>
//         Toggle Message
//       </button>
//       {isShown && <p>Hello World</p>}
//     </div>
//   );
// }

// export default MyComponent;

// import React, { useState } from 'react';

// function MyComponent({ count }) {
//   const [numClicks, setNumClicks] = useState(count);

//   function handleClick() {
//     setNumClicks(numClicks + 1);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//       {
//         Array.from({ length: numClicks }, (_, i) => (
//           <MyChildComponent key={i} />
//         ))
//       }
//     </div>
//   );
// }
