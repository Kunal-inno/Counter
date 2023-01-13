import React from "react";
import "./AddNum.css"

const AddNum = ({intialValue,card}) => {

  // console.log(card)
  return (
    <div>
      <button className="show-add">{intialValue}-{}</button>
    </div>
  );
};

export default AddNum;
