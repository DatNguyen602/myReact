import React from "react";
import "./styleCB.css";

const Checkbox = () => {
  const onClick = () => {
    document.querySelector(".center").classList.toggle("duck");
  };

  return (
    <div className="center">
      <div className="box" onClick={onClick}>
        <div className="chil"></div>
      </div>
    </div>
  );
};

export default Checkbox;
