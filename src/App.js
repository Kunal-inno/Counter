import React from "react";
import "./App.css";
import Timer from "./Timer";
import BtnAddCard from "./BtnAddCard";
// import AddNum from "./AddNum";

const App = () => {
  return (
    <div>
      <div>
        <BtnAddCard />
        {/* <AddNum /> */}
      </div>

      <Timer />
    </div>
  );
};

export default App;
