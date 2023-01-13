import React,{useState} from "react";
import "./App.css";
import BtnAddCard from "./BtnAddCard";
import AddNum from "./AddNum";


const App = () => {
  const [intialValue, setIntitalValue] = useState(0);
  
  const getData =(counter)=>{
    setIntitalValue(prevValue => prevValue +1 );
    // console.log(counter)   
    console.log(intialValue)

  }
  const card =(count)=>{
    console.log(count*2)
    return count
  }

  return (
    <div>
      <BtnAddCard  getData={getData} card={card}/>
      <div className="add-num">
      <AddNum intialValue={intialValue} card={card}/>

      </div>
                                                                                          
    </div>
  );
};

export default App;
  //   const addCounterValues = (counter) => {
//   let sum = 0;
//   counter.forEach(item => sum += item);
//   console.log(sum);
// }


//   counter.forEach(myFunction);

// function myFunction(item) {
//   var sum=0
//   sum += item;

// }

// const getData =(counter)=>{
  //   console.log(counter)
  // }

  // const getData =(counter)=>{
  //   setIntitalValue(intialValue+counter);
  //   console.log(intialValue);
  // }



//   import React,{useState} from "react";
// import "./App.css";
// import BtnAddCard from "./BtnAddCard";
// import AddNum from "./AddNum";
// const App = () => {
//   const [count,setcount]=useState(0)
//   const getData =()=>{
//     setcount(prevValue=>prevValue+1)
//     console.log(count)
//   }
//   return (
//     <div>
//       <BtnAddCard  getData={getData}/>
//       <div className="add-num">
//       <AddNum />
//       </div>
//       <p>Counter: {count}</p>
//     </div>
//   );
// };
// export default App;