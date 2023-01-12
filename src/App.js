import React from "react";
import "./App.css";
import BtnAddCard from "./BtnAddCard";
import AddNum from "./AddNum";
// import CounterDisplay from "./CounterDisplay";


const App = () => {
  const getData =(counter)=>{

    console.log(counter)

  }

//   counter.forEach(myFunction);

// function myFunction(item) {
//   var sum=0
//   sum += item;

// }
  return (
    <div>
      <BtnAddCard  getData={getData}/>
      <div className="add-num">
      <AddNum />

     

      </div>
      {/* <CounterDisplay/> */}
   
    </div>
  );
};

export default App;
