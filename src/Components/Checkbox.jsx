import React from "react";
import "./styleCB.css";

const Checkbox = () => {
  const onClick = () => {
    let e = document.querySelector(".box");
    let chil = document.querySelector(".chil");
    // alert(e.value);
    if (e.value === '1') {
      e.style.backgroundColor = "#000";
      chil.style.transform = 'translate(65px)'
      e.value = '0';
    }
    else {
        e.style.backgroundColor = "#ccc";
        chil.style.transform = 'translate(0px)'
        e.value = '1';
    }
  };

  return (
    <div class='center'>
      <button class="box" value='1' onClick={onClick}>
        <div className="chil"></div>
      </button>
    </div>
  );
};

export default Checkbox;
